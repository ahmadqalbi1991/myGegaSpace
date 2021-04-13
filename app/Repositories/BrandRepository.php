<?php

namespace App\Repositories;

use App\Interfaces\BrandInterface;
use App\Models\Brand;

class BrandRepository implements BrandInterface
{
    public $brand;

    function __construct(Brand $brand) {
        $this->brand = $brand;
    }

    /**
     * @return Brand[]|\Illuminate\Database\Eloquent\Collection
     */

    public function getAll($page = 1, $perPageItem = 10, $q = '')
    {
        return $this->brand->getAll($page, $perPageItem, $q);
    }

    /**
     * @return int
     */

    public function countAll() {
        return count($this->brand->countAll());
    }

    /**
     *
     */
    public function save($data) {
        return $this->brand->firstOrCreate($data);
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getBrand($id) {
        return $this->brand->getBrand($id);
    }

    /**
     * @param $data
     * @return bool
     */

    public function update($data) {
        return $this->brand->updateBrand($data);
    }

    /**
     * @param $id
     * @return bool
     */

    public function deleteBrand($id) {
        return $this->brand->deleteBrand($id);
    }
}
