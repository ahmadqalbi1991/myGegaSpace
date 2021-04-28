<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\General\Log;
use Illuminate\Http\Request;
use App\Models\Category;
use Auth;

class CategoriesController extends Controller
{
    /**
     * CategoriesController constructor.
     */

    public function __construct()
    {
        $this->category = new Category();
    }

    public function saveCategory(Request $request) {
        $input = $request->all();
        $action = $input['action'];
        unset($input['action']);

        if ($action == 'add') {
            unset($input['id']);
            $status = $this->category->firstOrCreate($input);
            if ($status) {
                $status = "success";
                $icon = "checked";
                $message = __("message.add_success", ['key' => __('message.category')]);
                $log_message = __("message.brand_added_log", ['brand' => $input['category_name']]);
                $log = [
                    'user_id' => Auth::user()->id,
                    'log' => $log_message
                ];
                Log::create($log);
            } else {
                $status = "error";
                $icon = 'warning';
                $message = __('message.something_went_wrong');
            }
        }

        return ['status' => $status, 'message' => $message, 'icon' => $icon];
    }

    public function treeView() {
        $categories = $this->category->getParentCategories();
        
        dd($categories);
    }
}
