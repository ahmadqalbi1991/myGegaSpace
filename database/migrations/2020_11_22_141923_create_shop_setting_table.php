<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopSettingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_setting', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('shop_name', '100');
            $table->string('shop_email', '30');
            $table->integer('country');
            $table->integer('state');
            $table->integer('city');
            $table->string('contact_number', '15');
            $table->text('address');
            $table->text('fb_url');
            $table->text('linkedin_url');
            $table->text('twitter_url');
            $table->text('instagram_url');
            $table->text('google_url');
            $table->text('youtube_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shop_setting');
    }
}
