<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeFieldsInShopSetting2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("ALTER TABLE `shop_setting` CHANGE `new_products` `new_products` BOOLEAN NOT NULL, CHANGE `partners` `partners` BOOLEAN NOT NULL, CHANGE `services` `services` BOOLEAN NOT NULL, CHANGE `categories` `categories` BOOLEAN NOT NULL, CHANGE `contact_section` `contact_section` BOOLEAN NOT NULL, CHANGE `featured_products` `featured_products` BOOLEAN NOT NULL, CHANGE `subscribe` `subscribe` BOOLEAN NOT NULL, CHANGE `recent_products` `recent_products` BOOLEAN NOT NULL, CHANGE `customer_section` `customer_section` BOOLEAN NOT NULL");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('shop_setting_2', function (Blueprint $table) {
            //
        });
    }
}
