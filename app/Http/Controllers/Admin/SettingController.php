<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Setting;
use Carbon\Carbon;

class SettingController extends Controller
{
    /**
     *
     * Update Admin Setting
     *
     * @return null
     */
    public function update(Request $request) {
        $input = $request->input();
        $input['updated_at'] = Carbon::now(+5);
        $update = Setting::where('id', $input['id'])->update($input);

        return $update;
    }
}
