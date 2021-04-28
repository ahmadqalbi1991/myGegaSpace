<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\This;
use Auth;
use App\Models\General\Log;
use App\Models\Brand;

class BrandsController extends Controller
{
    public function __construct()
    {
        $this->brand = new Brand();
    }

    /**
     * @return mixed
     */

    public function index(Request $request) {
        $page = 1;
        $perPageItems = 10;
        $search = '';
        $input = $request->all();
        if (isset($input['page']) && $input['page']) {
            $page = $input['page'];
        }

        if (isset($input['perPageItem']) && $input['perPageItem']) {
            $perPageItems = $input['perPageItem'];
        }

        if (isset($input['q']) && $input['q']) {
            $search = $input['q'];
        }

        $brands = $this->brand->getAll($page, $perPageItems, $search);
        $i = ($page -1) * $perPageItems + 1;
        foreach ($brands as $key => $brand) {
            $brands[$key]['sr'] = $i;
            $brands[$key]['total_products'] = 0;
            $image_path = asset('img/placeholder.png');
            if (isset($brand['image']) && $brand['image']) {
                $image_path = asset('storage/brands/' . $brand['image']);
            }
            $brand['image'] = $image_path;
            $i++;
        }

        $data['data'] = $brands;
        if (isset($input['q'])) {
            $data['totalBrands'] = $brands->count();
        } else {
            $data['totalBrands'] = $this->brand->countAll();
        }

        return $data;
    }

    /**
     * @param Request $request
     * @return array
     */

    public function saveBrand(Request $request) {
        $input = $request->all();
        $action = $input['action'];
        unset($input['action']);
        unset($input['image_name']);

        $imageExtensions = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'svg', 'svgz', 'cgm', 'djv', 'djvu', 'ico', 'ief','jpe', 'pbm', 'pgm', 'pnm', 'ppm', 'ras', 'rgb', 'tif', 'tiff', 'wbmp', 'xbm', 'xpm', 'xwd'];

        // upload file
        if ($input['image'] && filter_var($input['image'], FILTER_VALIDATE_URL) === FALSE) {
            $explodeImage = explode('.', $input['image']);
            $extension = end($explodeImage);
            $path = 'public/brands/';
            if (!in_array($extension, $imageExtensions)) {
                $image = makeFile("brand", $input['image'],NULL, $path);
                $input['image'] = $image;
            }
        } else {
            unset($input['image']);
        }

        if ($action == 'add') {
            unset($input['id']);
            $status = $this->brand->firstOrCreate($input);
            if ($status) {
                $status = "success";
                $icon = "checked";
                $message = __("message.add_success", ['key' => __('message.brand')]);
                $log_message = __("message.brand_added_log", ['brand' => $input['brand_name']]);
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
        } else {
            $status = $this->brand->where('id', $input['id'])->update($input);
            if ($status) {
                $status = "success";
                $icon = "checked";
                $message = __("message.update_success", ['key' => __('message.brand')]);
                $log_message = __("message.brand_update_log", ['brand' => $input['brand_name']]);
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

    /**
     *
     */
    public function getBrand(Request $request) {
        $id = $request->get('id');
        $brand = $this->brand->getBrand($id);
        if ($brand && isset($brand['image']) && $brand['image']) {
            $brand['image'] = asset('storage/brands' . '/' . $brand['image']);
        }

        return $brand;
    }

    /**
     *
     */
    public function deleteBrand(Request $request) {
        $id = $request->get('id');
        return $this->brand->deleteBrand($id);
    }


}
