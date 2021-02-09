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
        $country_name = $request->get('name');
        return getStates($country_name);
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
        $state_name = $request->get('name');
        return getCities($state_name);
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
