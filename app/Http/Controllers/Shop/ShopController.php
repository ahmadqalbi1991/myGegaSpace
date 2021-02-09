<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    // Shop home page
    public function index()
    {
        return view("pages.home");
    }

    // Shop authentication page
    public function auth()
    {
        return view("pages.auth");
    }
}
