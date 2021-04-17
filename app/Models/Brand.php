<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Brand extends Model
{
    protected $table = 'brands';
    protected $fillable = ['brand_name', 'image'];
    protected $hidden = ['created_at', 'updated_at'];

    /**
     * @return Brand[]|\Illuminate\Database\Eloquent\Collection
     */

    public function getAll($page, $perPageItem, $q) {
        $offset = ($page - 1) * $perPageItem;
        return static::offset($offset)
            ->limit($perPageItem)
            ->where('brand_name', 'like', '%' . $q . '%')
            ->get();
    }

    public function countAll() {
        return static::all();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getBrand($id) {
        return static::where('id', $id)->first();
    }

    /**
     * @param array $data
     * @return bool
     */

    public function updateBrand($data) {
        return static::where('id', $data['id'])->update($data);
    }

    /**
     * @param $id
     * @return bool|null
     * @throws \Exception
     */

    public function deleteBrand($id) {
        return static::where('id', $id)->delete();
    }
}


