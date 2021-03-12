<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmailTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('email_templates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('subject', 255);
            $table->text('body');
            $table->enum('show_login_btn', ['Yes', 'No'])->default('Yes');
            $table->enum('type', ['admin_welcome', 'customer_welcome', 'customer_orders_list', 'admin_orders_list', 'payment_confirm_customer', 'payment_confirm_admin']);
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
        Schema::dropIfExists('email_templates');
    }
}
