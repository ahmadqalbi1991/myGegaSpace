<?php

    use App\Models\Shop;
    use App\Models\Admin\Setting;
    /**
     * getCountries
     *
     * @return mixed
     *
     */
    function getCountries() {
        $countries = DB::table("countries")
            ->select('name')
            ->get();

        return $countries->pluck('name');
    }

    /**
     * getStates
     * @param $country_name
     *
     * @return mixed
     *
     */
    function getStates($country_name)
    {
        $country_id = DB::table("countries")
            ->where("name", $country_name)
            ->value('id');

        $states = DB::table("states")
            ->select('name')
            ->where("country_id", $country_id)
            ->get();

        return $states->pluck('name');
    }

    /**
     * getCities
     * @param $state_name
     *
     * @return mixed
     *
     */
    function getCities($state_name) {
        $state_id = DB::table("states")
            ->where("name", $state_name)
            ->value('id');

        $cities = DB::table("cities")
            ->where("state_id", $state_id)
            ->get();

        return $cities->pluck('name');
    }

    /**
     * getCountryCode
     * @param $country_id
     *
     * @return mixed
     *
     */
    function getCountryCode($country_id)
    {
        return DB::table("countries")
            ->where('id', $country_id)
            ->get();
    }

    /**
     *
     * get id
     *
     * @param $name
     *
     */
    function getId($country = NULL, $state = NULL, $city = NULL, $table) {
        return DB::table($table)
            ->when($country && !$state && !$city, function ($q) use($country) {
                return $q->where('name', $country);
            })
            ->when($country && $state && !$city, function ($q) use($country, $state) {
                return $q->where(['name' => $state, 'country_id' => $country]);
            })
            ->when($country && $state && $city, function ($q) use($state, $city) {
                return $q->where(['name' => $city, 'state_id' => $state]);
            })
            ->select('id')
            ->first();
    }

    /**
     * make file
     * @param $img_prefix
     * @param $img_name
     * @param null $id
     * @param $path
     * @return string
     */
    function makeFile($img_prefix, $img_name, $id = NULL, $path)
    {
        $image_type = isset(explode('/', explode(';', $img_name)[0])[1]) ? explode('/', explode(';', $img_name)[0])[1] : explode(".", $img_name)[1];
        @list($type, $file_data) = explode(';', $img_name);
        @list(, $file_data) = explode(',', $file_data);
        if (is_base64($file_data)) {
            if ($id) {
                $logo = Shop::getLogo($id);
                if ($logo) {
                    Storage::delete($path . $logo->logo);
                }
            }

            $image = singleImageUploader($img_prefix, $path, $file_data, $image_type);

            return $image;
        }
    }

    /**
     * Single Image Uploader
     * @param $image
     *
     * @return $imageName
     *
     */
    function singleImageUploader($img_prefix, $path, $image, $image_type) {
        $imageName = $img_prefix . '_' . time().'.'.$image_type;
        Storage::disk('local')->put($path.$imageName, base64_decode($image));
        return $imageName;
    }

    /**
     * check string is base64
     *
     * @param $s
     *
     * @return boolean
     */
    function is_base64($s){
        // Check if there are valid base64 characters
        if (!preg_match('/^[a-zA-Z0-9\/\r\n+]*={0,2}$/', $s)) return false;

        // Decode the string in strict mode and check the results
        $decoded = base64_decode($s, true);
        if(false === $decoded) return false;

        // Encode the string again
        if(base64_encode($decoded) != $s) return false;

        return true;
    }

    /**
     * get shop setting
     *
     * @return result
     *
     */
    function shopSetting() {
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
        }
        return $shop;
    }

    /**
     *
     * get Admin Settings
     *
     * @return result
     *
     */
    function adminSetting() {
        return Setting::where(['is_active' => 1, 'is_default' => 1])->first();
    }

    /**
     *
     * delete record
     *
     * @param $type, $id
     *
     */
    function deleteRecord($type, $id) {
        return DB::table($type)->where('id', $id)->delete();
    }

    /**
     *
     * send Mail
     *
     *
     */
    function sendMail($view = 'email_templates.email', $data = [], $subject, $to) {
        Mail::send('email_templates.email', $data, function ($message) use($subject, $to) {
            $message->subject($subject);
            $message->from(Auth::user()->email, Auth::user()->name);
            $message->to($to);
        });
    }

    /**
     * @param $image
     * @param $gender
     * @return string
     */
    function checkUserImage($image, $gender) {
        if ($image) {
            $image_path = '/admin-users/'.$image;
            $image_path = Storage::url($image_path);
            if (File::exists(public_path($image_path))) {
                $image_path = asset('storage/admin-users/'.$image);
            } else {
                if (isset($gender)) {
                    if ($gender == 'male') {
                        $image_path = asset('img/man.png');
                    } else {
                        $image_path = asset('img/woman.png');
                    }
                } else {
                    $image_path = asset('img/placeholder.png');
                }
            }
        } else {
            if (isset($gender)) {
                if ($gender == 'male') {
                    $image_path = asset('img/man.png');
                } else {
                    $image_path = asset('img/woman.png');
                }
            } else {
                $image_path = asset('img/placeholder.png');
            }
        }

        return $image_path;
    }
