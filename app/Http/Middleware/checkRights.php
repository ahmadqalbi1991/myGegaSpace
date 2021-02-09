<?php

namespace App\Http\Middleware;

use Closure;

class checkRights
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        if (haveRight($role)) {
            return $next($request);
       }
       else {
            return redirect('/')->with(["status" => "error", "message" => __("messageright_error")]);
       }
    }
}
