<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Shop;
use Image, Storage, File;

class ShopSetupController extends Controller
{
    /**
     * @param Request $request
     * @return array
     */

    public function savegeneralSetting(Request $request)
    {
        $input = $request->input();
        $action = $input['action'];
        $input['country_id'] = $input['country']['id'];
        $input['state_id'] = $input['state']['id'];
        $input['city_id'] = $input['city']['id'];

        unset($input['country_name']);
        unset($input['state_name']);
        unset($input['city_name']);
        unset($input['city']);
        unset($input['country']);
        unset($input['state']);
        unset($input['logo_path']);
        unset($input['favicon_path']);
        unset($input['action']);

        $imageExtensions = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'svg', 'svgz', 'cgm', 'djv', 'djvu', 'ico', 'ief','jpe', 'pbm', 'pgm', 'pnm', 'ppm', 'ras', 'rgb', 'tif', 'tiff', 'wbmp', 'xbm', 'xpm', 'xwd'];

        // upload Logo
        if ($input['logo'] != "" || $input['logo']) {
            $explodeImage = explode('.', $input['logo']);
            $extension = end($explodeImage);
            $path = 'public/shop/logos/';
            if (!in_array($extension, $imageExtensions)) {
                $image = makeFile("logo", $input['logo'], isset($input['id']) ? $input['id'] : NULL, $path);
                $input['logo'] = $image;
            }
        }

        // upload Favicon
        if ($input['favicon'] != "" || $input['favicon']) {
            $explodeImage = explode('.', $input['favicon']);
            $extension = end($explodeImage);
            $path = 'public/shop/favicons/';
            if (!in_array($extension, $imageExtensions)) {
                $image = makeFile("favicon", $input['favicon'], isset($input['id']) ? $input['id'] : NULL, $path);
                $input['favicon'] = $image;
            }
        }

        $input['is_active'] = 1;
        if ($action == 'add') {
            // add Shop
            $result = Shop::create($input);
            if ($result) {
                $status = "success";
                $icon = "checked";
                $message = __("message.add_success", ['key' => __('message.shop')]);
            } else {
                $status = "error";
                $icon = 'warning';
                $message = __('message.something_went_wrong');
            }
        }
        else {
            // update shop
            $input['updated_at'] = date('Y-m-d');
            $shop = Shop::find($input['id']);
            $result = $shop->fill($input)->save();
            if(!$shop->wasChanged()) {
                $status = "warning";
                $icon = 'warning';
                $message = __("message.no_changes");
            } else {
                if ($result) {
                    $status = "success";
                    $icon = 'check';
                    $message = __("message.update_success", ['key' => __('message.shop')]);
                } else {
                    $status = "error";
                    $icon = 'warning';
                    $message = __('message.something_went_wrong');
                }
            }
        }

        return ['status' => $status, 'message' => $message, 'icon' => $icon];

    }

    /**
     * @return mixed
     */

    public function getShopSetting()
    {
        $shop = Shop::where(['is_active' => 1])->first();

        if ($shop) {
            $logo_path = '/shop/logos/'.$shop->logo;
            $logo_path = Storage::url($logo_path);
            $favicon_path = '/shop/logos/'.$shop->favicon;
            $favicon_path = Storage::url($favicon_path);
            $shop->country_name = isset($shop->country->name) ? $shop->country->name : NULL;
            $shop->state_name = isset($shop->state->name) ? $shop->state->name : NULL;
            $shop->city_name = isset($shop->city->name) ? $shop->city->name : NULL;
            if (File::exists(public_path($logo_path))) {
                $logo_path = asset('storage/shop/logos/'.$shop->logo);
            } else {
                $logo_path = asset('img/placeholder.png');
            }

            if (File::exists(public_path($favicon_path))) {
                $favicon_path = asset('storage/shop/logos/'.$shop->favicon);
            } else {
                $favicon_path = asset('img/placeholder.png');
            }
            $shop->logo_path = $logo_path;
            $shop->favicon_path = $favicon_path;
            return $shop;
        }
    }

    public function enableBrands(Request $request) {
        $status = $request->input('status');
        $shop = Shop::where(['is_active' => 1])->first();
        $result = $shop->fill(['brands_allow' => $status])->save();
        if ($result) {
            return ['status' => 'success'];
        } else {
            $status = "error";
            $icon = 'warning';
            $message = __('message.something_went_wrong');

            return ['status' => $status, 'message' => $message, 'icon' => $icon];
        }
    }
}
