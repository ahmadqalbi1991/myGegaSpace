<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $table = 'shop_setting';
    protected $fillable = [
        'shop_name',
        'shop_email',
        'country',
        'state',
        'city',
        'country_code',
        'contact_number',
        'address',
        'facebook_url',
        'linkedin_url',
        'twitter_url',
        'instagram_url',
        'google_url',
        'youtube_url',
        'logo',
        'favicon',
        'is_active',
        'country_code'
    ];

    /**
     * 
     * Get Logo
     * 
     * @param $id
     * 
     * @return $logo
     * 
     */
    public static function getLogo($id)
    {
        return self::where("id", $id)->select("logo")->first();
    }
}
