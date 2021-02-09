<?php 
use Illuminate\Database\Seeder; 
use App\User; class UsersSeeder extends Seeder { 
    /** 
    * Run the database seeds. 
    * 
    * @return void */

 
   public function run() { 
           User::truncate(); 
           $users = [ 
            [ 
              'name' => 'Admin',
              'email' => 'admin@admin.com',
              'password' => '123456',
              'is_admin' => 1,
              'gender' => 1
            ],
            [
              'name' => 'User',
              'email' => 'user@gmail.com',
              'password' => '13456',
              'is_admin' => null,
              'gender' => 1,
            ],
            [
              'name' => 'Client',
              'email' => 'client@gmail.com',
              'password' => '13456',
              'is_admin' => null,
              'gender' => 2,
            ], 
            [
              'name' => 'Admin',
              'email' => 'subadmin@gmail.com',
              'password' => '13456',
              'is_admin' => 1,
              'gender' => 2,
            ] 
          ];

          foreach($users as $user)
          {
              User::create([
               'name' => $user['name'],
               'email' => $user['email'],
               'password' => Hash::make($user['password']),
               'is_admin' => $user['is_admin'],
               'gender' => $user['gender']
             ]);
           }

    }
}