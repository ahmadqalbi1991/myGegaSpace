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
Route::get("/", [App\Http\Controllers\Shop\ShopController::class, 'index'])->name('home');

// Routes for authentication
Route::get("/login", [App\Http\Controllers\Shop\ShopController::class, 'auth'])->name("login")->middleware('guest');
Route::post("/login", [App\Http\Controllers\Shop\ShopController::class, 'login'])->middleware('guest');

// Protected Routes - allows only logged in admin
Route::group(['middleware' => ['auth', 'admin', 'rights:dashboard']], function () {
//    Dashboard
    Route::get('/dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name("dashboard");

//    Brands
    Route::get('/brands', [App\Http\Controllers\Admin\BrandsController::class, 'index'])->name("brands");
    Route::get('/brands-list', [App\Http\Controllers\Admin\BrandsController::class, 'index']);
    Route::post('/save-brand', [App\Http\Controllers\Admin\BrandsController::class, 'saveBrand']);
    Route::post('/enable-brands', [App\Http\Controllers\Admin\ShopSetupController::class, 'enableBrands']);
    Route::get('/brand-data', [App\Http\Controllers\Admin\BrandsController::class, 'getBrand']);
    Route::get('/delete-brand', [App\Http\Controllers\Admin\BrandsController::class, 'deleteBrand']);

//    Categories
    Route::get('/categories', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name("categories");
    Route::get('/categories-list', [App\Http\Controllers\Admin\CategoriesController::class, 'index']);
    Route::get('/categories-treeview', [App\Http\Controllers\Admin\CategoriesController::class, 'treeView']);
    Route::post('/save-category', [App\Http\Controllers\Admin\CategoriesController::class, 'saveCategory']);
    Route::get('/category-data', [App\Http\Controllers\Admin\CategoriesController::class, 'getCategory']);
    Route::get('/delete-category', [App\Http\Controllers\Admin\CategoriesController::class, 'deleteCategory']);

//    Shop Setting
    Route::post('/save-setting', [App\Http\Controllers\Admin\ShopSetupController::class, 'saveGeneralSetting']);
    Route::get('/shop-setting', [App\Http\Controllers\Admin\ShopSetupController::class, 'getShopSetting']);

//    Users
    Route::get('/users-data', [App\Http\Controllers\Admin\UsersController::class, 'index']);
    Route::get('/user-data', [App\Http\Controllers\Admin\UsersController::class, 'getUser']);
    Route::post('/save-user', [App\Http\Controllers\Admin\UsersController::class, 'saveUser']);
    Route::get('/delete-user', [App\Http\Controllers\Admin\UsersController::class, 'deleteUser']);
    Route::post('/change-user-status', [App\Http\Controllers\Admin\UsersController::class, 'changeStatus']);

//    Setting
    Route::post('/update-setting', [App\Http\Controllers\Admin\SettingController::class,'update']);
    Route::get('/emails-templates-data', [App\Http\Controllers\Admin\EmailTemplatesController::class, 'index']);
    Route::post('/save-email-template', [App\Http\Controllers\Admin\EmailTemplatesController::class, 'saveTemplate']);
    Route::get('/email-template-data', [App\Http\Controllers\Admin\EmailTemplatesController::class, 'getTemplate']);
});

// Protected Routes - allows only logged in customers
Route::middleware('auth')->group(function () {
    Route::get('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout']);
});

// Routes for misc
Route::get('get-countries', [App\Http\Controllers\Misc\MiscController::class, 'getCountries']);
Route::get('get-states', [App\Http\Controllers\Misc\MiscController::class, 'getStates']);
Route::get('get-cities', [App\Http\Controllers\Misc\MiscController::class, 'getCities']);
Route::get('get-country-code', [App\Http\Controllers\Misc\MiscController::class, 'getCountryCode']);
