<?php
namespace App\Interfaces;

interface BrandInterface {

    public function getAll($page = 1, $perPageItem = 10, $q = '');
}
