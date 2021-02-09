<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Routes for shop
Route::get("/", "Shop\ShopController@index")->name('home');

// Routes for authentication
Route::get("/login", "Shop\ShopController@auth")->name("login")->middleware('guest');
Route::post("/login", "Auth\LoginController@login")->middleware('guest');

// Protected Routes - allows only logged in admin
Route::group(['middleware' => ['auth', 'admin', 'rights:dashboard']], function () {
    Route::get('/dashboard', 'Admin\DashboardController@index')->name("dashboard");
    Route::get('/users', 'Admin\DashboardController@index')->name("users");
    Route::post('/save-setting', 'Admin\ShopSetupController@saveGeneralSetting');
    Route::get('/shop-setting', 'Admin\ShopSetupController@getShopSetting');
    Route::get('/users-data', 'Admin\UsersController@index');
    Route::get('/user-data', 'Admin\UsersController@getUser');
    Route::post('/save-user', 'Admin\UsersController@saveUser');
    Route::post('/update-setting', 'Admin\SettingController@update');
});

// Protected Routes - allows only logged in customers
Route::middleware('auth')->group(function () {
    Route::get('/logout', 'Auth\LoginController@logout');
});

// Routes for misc
Route::get('get-countries', 'Misc\MiscController@getCountries');
Route::get('get-states', 'Misc\MiscController@getStates');
Route::get('get-cities', 'Misc\MiscController@getCities');
Route::get('get-country-code', 'Misc\MiscController@getCountryCode');
