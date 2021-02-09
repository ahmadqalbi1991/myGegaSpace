<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'countries';
    protected $fillable = [
        'id', 'name', 'status'
    ];
    public function states()
    {
        return $this->hasMany(State::class);
    }
    public function user() {
        return $this->hasOne(User::class);
    }
}
