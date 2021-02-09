<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToShopSetting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('shop_setting', function (Blueprint $table) {
            $table->boolean("partners")->default(1);
            $table->boolean("services")->default(1);
            $table->boolean("categories")->default(1);
            $table->boolean("contact_section")->default(1);
            $table->boolean("featured_products")->default(1);
            $table->boolean("subscribe")->default(1);
            $table->boolean("recent_products")->default(1);
            $table->boolean("customer_section")->default(1);
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
            $table->dropColumn("partners");
            $table->dropColumn("services");
            $table->dropColumn("categories");
            $table->dropColumn("contact_section ");
            $table->dropColumn("featured_products ");
            $table->dropColumn("subscribe");
            $table->dropColumn("recent_products");
            $table->dropColumn("customer_section");
        });
    }
}
