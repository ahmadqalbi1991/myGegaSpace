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
    public static function getTemplates($offset, $perPageItems = 10, $search)
    {
        return self::when($search, function ($q) use ($search) {
            $search = str_replace(' ', '_', $search);
            return $q->where('type', 'like', '%' . $search . '%');
        })
            ->when($perPageItems != -1, function ($q) use ($perPageItems, $offset) {
                return $q->offset($offset)
                    ->limit($perPageItems);
            })
            ->get();
    }

    /**
     * @param string $search
     * @return mixed
     */
    public static function countTotal($search = '')
    {
        return self::when($search, function ($q) use ($search) {
            $search = str_replace(' ', '_', $search);
            return $q->where('type', 'like', '%' . $search . '%');
        })->count();
    }
}
