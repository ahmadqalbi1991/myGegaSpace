<?php

namespace App\Http\Controllers\Misc;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MiscController extends Controller
{
    /**
     *
     * Countries
     *
     * @return void
     *
     */

    public function getCountries()
    {
        return getCountries();
    }

    /**
     *
     * States
     *
     * @return void
     *
     */

    public function getStates(Request $request)
    {
        $country = $request->get('id');
        if (!is_numeric($country)) {
            $country = json_decode($country);
            $country = $country->id;
        }
        return getStates($country);
    }

    /**
     *
     * Cities
     *
     * @return void
     *
     */

    public function getCities(Request $request)
    {
        $state = $request->get('id');
        if (!is_numeric($state)) {
            $state = json_decode($state);
            $state = $state->id;
        }
        return getCities($state);
    }

    /**
     *
     * Country Code
     *
     * @return void
     *
     */

    public function getCountryCode(Request $request)
    {
        $country_id = $request->get('country_id');
        return getCountryCode($country_id);
    }
}
