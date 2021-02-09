<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Shop;
use Image, Storage, File;

class ShopSetupController extends Controller
{
    /**
     *
     * @param $request
     * save setting
     *
     * @return void;
     *
    */

    public function savegeneralSetting(Request $request)
    {
        $this->validate($request, [
            'shop_name' => 'required',
            'shop_email' => 'required|email',
            'country' => 'required',
            'state' => '',
            'city' => '',
            'contact_number' => 'required|max:15',
            'address' => 'required',
            'facebook_url' => 'url|nullable',
            'linkedin_url' => 'url|nullable',
            'twitter_url' => 'url|nullable',
            'instagram_url' => 'url|nullable',
            'google_url' => 'url|nullable',
            'youtube_url' => 'url|nullable',
            'logo' => '',
            'favicon' => ''
        ]);

        $input = $request->input();

        $action = $input['action'];
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
                $message = __("message.shop_add_success");
            } else {
                $status = "error";
                $message = __('message.something_went_wrong');
            }
        }
        else {
            // update shop
            $result = Shop::where('id', $input['id'])->update($input);
            if ($result) {
                $status = "success";
                $message = __("message.shop_update_success");
            } else {
                $status = "error";
                $message = __('message.something_went_wrong');
            }
        }

        return ['status' => $status, 'message' => $message];

    }

    /**
     *
     * get shop setting
     *
     * @return void
     *
    */

    public function getShopSetting()
    {
        $shop = Shop::where(['is_active' => 1])->first();
        if ($shop) {
            $logo_path = '/shop/logos/'.$shop->logo;
            $logo_path = Storage::url($logo_path);
            $favicon_path = '/shop/logos/'.$shop->favicon;
            $favicon_path = Storage::url($favicon_path);
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
}
