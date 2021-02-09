<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;
use App\User;
use App\Models\General\Log;
use Hashids\Hashids;
use Auth, Image, Storage, File;

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
            $data[$key] = [];
            $data[$key] = $value;
            $data[$key]['sr'] = ++$sr;
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
        $user = User::where('id', $id)->first();
        $user->country_name = $user->country->name;
        $user->state_name = $user->state->name;
        $user->city_name = $user->city->name;
        $user->hash_id = $this->hashids->encode($user->id);

        if ($user->image) {
            $image_path = '/admin-users/'.$user->image;
            $image_path = Storage::url($image_path);
            if (File::exists(public_path($image_path))) {
                $image_path = asset('storage/admin-users/'.$user->image);
            } else {
                if (isset($user->gender)) {
                    if ($user->gender == 'male') {
                        $image_path = asset('img/man.png');
                    } else {
                        $image_path = asset('img/woman.png');
                    }
                } else {
                    $image_path = asset('img/placeholder.png');
                }
            }

            $user->image = $image_path;
        }

        $user->rights = treeView($user->rights, TRUE);
        $logs = Log::where('user_id', $user->id)->get();

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
        $this->validate($request, [
            'first_name' => 'required|max:15',
            'last_name' => 'required|max:15',
            'email' => 'required|email',
            'gender' => 'required',
            'role' => 'required',
        ]);

        $input = $request->input();

        $action = $input['action'];
        unset($input['action']);
        $imageExtensions = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'svg', 'svgz', 'cgm', 'djv', 'djvu', 'ico', 'ief','jpe', 'pbm', 'pgm', 'pnm', 'ppm', 'ras', 'rgb', 'tif', 'tiff', 'wbmp', 'xbm', 'xpm', 'xwd'];

        // upload Logo
        if ($input['image'] != "" || $input['image']) {
            $explodeImage = explode('.', $input['image']);
            $extension = end($explodeImage);
            $path = 'public/admin-users/';
            if (!in_array($extension, $imageExtensions)) {
                $image = makeFile("user", $input['image'], isset($input['id']) ? $input['id'] : NULL, $path);
                $input['image'] = $image;
            }
        }

        if (isset($input['first_name']) && isset($input['last_name'])) {
            $input['name'] = $input['first_name'] . ' ' . $input['last_name'];
        }

        if (isset($input['gender'])) {
            if ($input['gender'] == 1) {
                $gender = 'his';
            } else {
                $gender = 'her';
            }

        }

        if ($action == 'add') {
            $log_message = __("messageuser_added_log");

        } else {
            // update user
            $result = User::where('id', $input['id'])->update($input);
            if ($result) {
                $status = "success";
                $message = __("message.admin_update_success");
                $log_message = __("message.user_update_log", ['user' => ucwords($input['name']), 'gender' => $gender]);
                $log = [
                    'user_id' => Auth::user()->id,
                    'log' => $log_message
                ];
                Log::create($log);
            } else {
                $status = "error";
                $message = __('message.something_went_wrong');
            }
        }

        return ['status' => $status, 'message' => $message];
    }
}
