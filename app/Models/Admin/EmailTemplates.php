<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use mysql_xdevapi\Result;

class EmailTemplates extends Model
{
    protected $table = 'email_templates';
    protected $fillable = [
        'subject',
        'body',
        'type',
        'show_login_btn',
        'status'
    ];
    protected $hidden = ['created_at', 'updated_at'];

    /**
     * Get Templates
     *
     * @return Result
     */
    public static function getTemplates() {
        return self::all();
    }
}
