<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Country;
use App\State;
use App\City;

class Shop extends Model
{
    protected $table = 'shop_setting';
    protected $fillable = [
        'shop_name',
        'shop_email',
        'country_id',
        'state_id',
        'city_id',
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
        'country_code',
        'new_products',
        'partners',
        'services',
        'categories',
        'contact_section',
        'featured_products',
        'subscribe',
        'recent_products',
        'customer_section',
        'about_us'
    ];
    protected $hidden = ['created_at', 'updated_at'];

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

    public function country() {
        return $this->belongsTo(Country::class);
    }
    public function state() {
        return $this->belongsTo(State::class);
    }
    public function city() {
        return $this->belongsTo(City::class);
    }
}
