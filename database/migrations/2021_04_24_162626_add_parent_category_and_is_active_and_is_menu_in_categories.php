<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddParentCategoryAndIsActiveAndIsMenuInCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->bigInteger('parent_category')->default(0);
            $table->bigInteger('is_active')->default(0);
            $table->bigInteger('is_menu')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('parent_category');
            $table->dropColumn('is_active');
            $table->dropColumn('is_menu');
        });
    }
}
