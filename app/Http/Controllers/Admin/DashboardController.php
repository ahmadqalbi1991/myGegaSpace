<?php

namespace App\Http\Controllers\Admin;
// namespace App\Helpers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Models\Shop;
use Session, Auth;

class DashboardController extends Controller
{
    use AuthenticatesUsers;
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     *
     * index
     *
     * @return void
     */
    public function index()
    {
//        dd(treeView(Auth::user()->rights));
        $shop = Shop::where(['is_active' => 1])->first();
        return view("admin.main")->with('shop', $shop);
    }
}
