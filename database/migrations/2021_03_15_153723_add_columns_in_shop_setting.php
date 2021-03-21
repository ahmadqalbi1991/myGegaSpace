<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsInShopSetting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('shop_setting', function (Blueprint $table) {
            $table->integer("country_id")->unsigned()->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->integer("state_id")->unsigned()->nullable();
            $table->foreign('state_id')->references('id')->on('states');
            $table->integer("city_id")->unsigned()->nullable();
            $table->foreign('city_id')->references('id')->on('cities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('shop_setting', function (Blueprint $table) {
            $table->dropColumn("country_id");
            $table->dropColumn("state_id");
            $table->dropColumn("city_id");
        });
    }
}
