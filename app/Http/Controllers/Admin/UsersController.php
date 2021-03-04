<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Models\General\Log;
use Hashids\Hashids;
use Auth, Image, Storage, File, Validator;

class UsersController extends Controller
{
    /**
     *
     * variables
     *
     */
    protected $hashids;
    /**
     *
     * constructor
     *
     *
     */
    public function __construct()
    {
        $this->hashids = new Hashids('User', 10);
    }

    /**
     *
     * index
     *
     * @param
     *
     * @return result
     *
     */
    public function index(Request $request)
    {
        $users = User::where('is_admin', 1)
            ->where('role', '<>', 'Super Admin')
            ->when(Auth::user()->id, function ($q) {
                return $q->where('id', '<>', Auth::user()->id);
            })
            ->get();

        $data = [];
        $sr = 0;

        foreach ($users as $key => $value) {
            $image_path = checkUserImage($value['image'], $value['gender']);
            $data[$key] = [];
            $data[$key] = $value;
            $data[$key]['sr'] = ++$sr;
            $data[$key]['image'] = $image_path;
            $data[$key]['hash_id'] = $this->hashids->encode($value['id']);
        }

        return $data;
    }

    /**
     *
     * get user data
     *
     * @param $id
     *
     * @return result
     *
     */
    public function getUser(Request $request)
    {
        $id = $request->get('id', null);
        $id = $this->hashids->decode($id)[0];
        $locked = $request->get('locked', FALSE);
        $user = User::where('id', $id)->first();
        $user->country_name = isset($user->country->name) ? $user->country->name : NULL;
        $user->state_name = isset($user->state->name) ? $user->state->name : NULL;
        $user->city_name = isset($user->city->name) ? $user->city->name : NULL;
        $user->hash_id = $this->hashids->encode($user->id);
        $image_path = checkUserImage($user->image, $user->gender);
        $user->image = $image_path;
        $user->rights = treeView($user->rights, $locked);
        $logs = Log::where('user_id', $user->id)->get();
        if (!count($logs) > 0) {
            $logs[] = [
                'log' => __('message.no_log')
            ];
        }

        return ['user' => $user, 'log' => $logs];
    }

    /**
     *
     * save and update user
     *
     * @param $request
     *
     * @return array
     *
     */
    public function saveUser(Request $request)
    {
        $input = $request->input();
        $rules = [
            'email' => 'required|unique:users',
            'username' => 'unique:users'
        ];

        $messages = [
            'email.unique' => __('message.has_been_selected', ['key' => __('message.email')]),
            'username.unique' => __('message.has_been_selected', ['key' => __('message.username')])
        ];
        $validator = Validator::make($input, $rules, $messages);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return ['status' => 'error', 'error_type' => 'validation', 'email_error' => isset($errors->get('email')[0]) ? TRUE : NULL, 'username_error' => isset($errors->get('username')[0]) ? TRUE : NULL];
        }

        $get_country_id = getId($input['country_name'], NULL, NULL, 'countries');
        $input['country_id'] = $get_country_id->id;
        $get_state_id = getId($input['country_id'], $input['state_name'], NULL, 'states');
        $input['state_id'] = $get_state_id->id;
        $get_city_id = getId($input['country_id'], $input['state_id'], $input['city_name'], 'cities');
        $input['city_id'] = $get_city_id->id;
        $input['rights'] = isset($input['rights']) && $input['rights'] ? json_encode(makeRightsArray($input['rights'])) : NULL;
        $action = $input['action'];
        unset($input['action']);
        unset($input['country_name']);
        unset($input['country']);
        unset($input['state_name']);
        unset($input['state']);
        unset($input['city_name']);
        unset($input['city']);
        unset($input['hash_id']);
        unset($input['confirm_email']);
        unset($input['image_name']);

        $imageExtensions = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'svg', 'svgz', 'cgm', 'djv', 'djvu', 'ico', 'ief','jpe', 'pbm', 'pgm', 'pnm', 'ppm', 'ras', 'rgb', 'tif', 'tiff', 'wbmp', 'xbm', 'xpm', 'xwd'];

        // upload Logo
        if ($input['image'] && filter_var($input['image'], FILTER_VALIDATE_URL) === FALSE) {
            $explodeImage = explode('.', $input['image']);
            $extension = end($explodeImage);
            $path = 'public/admin-users/';
            if (!in_array($extension, $imageExtensions)) {
                $image = makeFile("user", $input['image'], isset($input['id']) ? $input['id'] : NULL, $path);
                $input['image'] = $image;
            }
        } else {
            unset($input['image']);
        }

        if (isset($input['first_name']) && isset($input['last_name'])) {
            $input['name'] = $input['first_name'] . ' ' . $input['last_name'];
        }

        if (Auth::user()->id == $input['id']) {
            if (isset(Auth::user()->gender)) {
                if (Auth::user()->gender == 'male') {
                    $gender = 'his';
                } else {
                    $gender = 'her';
                }
            }
        } else {
            $gender = $input['name'] . "'s";
        }

        if ($action == 'add') {
            $password = Str::random(10);
            $input['password'] = Hash::make($password);
            $input['original_password'] = $password;
            $output['shop_setting'] = shopSetting();
            $output['user_data'] = $input;
            $status = User::firstOrCreate($input);
            if ($status) {
                sendMail('', $output, "Account Created", $input['email']);
                $status = "success";
                $message = __("message.admin_add_success");
                $log_message = __("message.user_added_log");
                $log = [
                    'user_id' => Auth::user()->id,
                    'log' => $log_message
                ];
                Log::create($log);
            }
        } else {
            // update user
            $user = User::find($input['id']);
            $result = $user->fill($input)->save();
            if(!$user->wasChanged()) {
                $status = "warning";
                $message = __("message.no_changes");
            } else {
                if ($result) {
                    $status = "success";
                    $message = __("message.admin_update_success");
                    $log_message = __("message.user_update_log", ['user' => ucwords(Auth::user()->name), 'gender' => $gender]);
                    $log = [
                        'user_id' => $input['id'],
                        'log' => $log_message
                    ];
                    Log::create($log);
                } else {
                    $status = "error";
                    $message = __('message.something_went_wrong');
                }
            }
        }

        return ['status' => $status, 'message' => $message];
    }
}
