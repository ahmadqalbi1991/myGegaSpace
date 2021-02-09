<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MakeUrlsNullableInShopSetting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('shop_setting', function (Blueprint $table) {
            $table->text('fb_url')->nullable()->change();
            $table->text('linkedin_url')->nullable()->change();
            $table->text('twitter_url')->nullable()->change();
            $table->text('instagram_url')->nullable()->change();
            $table->text('google_url')->nullable()->change();
            $table->text('youtube_url')->nullable()->change();
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
            $table->dropColumn('fb_url');
            $table->dropColumn('linkedin_url');
            $table->dropColumn('twitter_url');
            $table->dropColumn('instagram_url');
            $table->dropColumn('google_url');
            $table->dropColumn('youtube_url');
        });
    }
}
