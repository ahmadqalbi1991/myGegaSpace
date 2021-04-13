<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use mysql_xdevapi\Result;
use App\Models\Admin\EmailTemplates;
use Hashids\Hashids;
use Validator;

class EmailTemplatesController extends Controller
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
        $this->hashids = new Hashids('EmailTemplate', 10);
    }
    /**
     *
     * EmailTemplates Listing
     *
     * @param $request
     *
     * @return Result
     *
     */
    public function index(Request $request) {
        $templates = EmailTemplates::getTemplates();
        $i = 0;
        $data = [];

        foreach ($templates as $key => $template) {
            $data[$key] = [];
            $data[$key]['sr'] = ++$i;
            $data[$key]['subject'] = $template->subject;
            $data[$key]['type'] = ucwords(str_replace('_', ' ', $template->type));
            $data[$key]['status'] = $template->status == 'Active' ? __('message.active') : __('message.disable');
            $data[$key]['color'] = $template->status == 'Active' ? 'success' : 'error';
            $data[$key]['hash_id'] = $this->hashids->encode($template->id);
        }

        return $data;
    }

    /**
     * Save Email Template
     *
     * @param Request $request
     *
     */
    public function saveTemplate(Request $request) {
        $input = $request->input();
        $rules = [
            'type' => 'required|unique:email_templates',
        ];

        $messages = [
            'type.unique' => __('message.template_exists', ['key' => $input['type']]),
        ];
        $validator = Validator::make($input, $rules, $messages);

        if ($validator->fails() && $input['action'] == 'add') {
            $errors = $validator->errors();
            return ['icon' => 'error', 'status' => 'error', 'error_type' => 'validation', 'error_message' => isset($errors->get('type')[0]) ? __('message.template_exists', ['key' => ucwords(str_replace('_', ' ', $input['type']))]): NULL];
        }

        $action = $input['action'];
        unset($input['action']);

        if ($action === 'add') {
            $input['status'] = 'Active';
            $status = EmailTemplates::firstOrCreate($input);
            if ($status) {
                $status = "success";
                $icon = "checked";
                $message = __("message.add_success", ['key' => __('message.email_template')]);
            }
        } else {
            $input['updated_at'] = date('Y-m-d');
            $template = EmailTemplates::find($input['id']);
            $result = $template->fill($input)->save();
            if(!$template->wasChanged()) {
                $status = "warning";
                $icon = 'warning';
                $message = __("message.no_changes");
            } else {
                if ($result) {
                    $status = "success";
                    $icon = 'check';
                    $message = __("message.update_success", ['key' => __('message.email_template')]);
                } else {
                    $status = "error";
                    $message = __('message.something_went_wrong');
                }
            }
        }

        return ['status' => $status, 'message' => $message, 'icon' => $icon];
    }

    public function getTemplate(Request $request) {
        $id = $request->get('id', null);
        $id = $this->hashids->decode($id)[0];
        return EmailTemplates::where('id', $id)->first();
    }
}
