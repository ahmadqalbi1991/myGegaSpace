<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->text("address")->nullable();
            $table->string("contact_number", 15)->nullable();
            $table->string("username", 15)->nullable();
            $table->enum("martial_status", ['married', 'single', 'divorced', 'separated'])->nullable();
            $table->string("identity_card_number", 30)->nullable();
            $table->date("date_of_birth")->nullable();
            $table->enum("blood_group", ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'])->nullable();
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
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn("address");
            $table->dropColumn("contact_number");
            $table->dropColumn("username");
            $table->dropColumn("martial_status");
            $table->dropColumn("identity_card_number");
            $table->dropColumn("date_of_birth");
            $table->dropColumn("blood_group");
            $table->dropColumn("country_id");
            $table->dropColumn("state_id");
            $table->dropColumn("city_id");
        });
    }
}
