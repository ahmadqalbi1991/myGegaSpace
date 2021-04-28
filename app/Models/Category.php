<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = ['category_name', 'parent_id', 'category_description', 'level', 'is_active', 'is_menu'];

    public static function getParentCategories() {
        return self::where('parent_category', 1)
            ->where('parent_id', 0)
            ->get();
    }
}
