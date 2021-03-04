<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     *
     * delete record
     *
     * @param $id, $type
     *
     * @return array
     */
    public function deleteRecord(Request $request) {
        $type = strtolower($request->get('type'));
        $id = $request->get('id');
        $status = deleteRecord($type . 's', $id);
        if ($status) {
            return ['status' => 'success', 'message' => __('message.delete_success', [$type])];
        } else {
            return ['status' => 'error', 'message' => __('message.something_went_wrong')];
        }
    }
}
