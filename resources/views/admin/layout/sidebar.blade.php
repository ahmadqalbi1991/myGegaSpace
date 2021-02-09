<aside class="main-sidebar elevation-2">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img id="logo"
             src="{{ (isset($shop) && $shop->logo != NULL) ? asset('storage/shop/logos/'.$shop->logo) : asset('img/placeholder.png') }}"
             alt="AdminLTE Logo" class="brand-image img-circle elevation-1"
             style="opacity: .8">
        <span class="brand-text font-weight-light">{{ isset($shop) ? $shop->shop_name : "Shop Name" }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        {{-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
              @if (Auth::user()->image != NULL)
                  <img src="asset('')" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              @else
                  <img src="{{ (Auth::user()->gender == 1) ? asset('img/man.png') : asset('img/woman.png')}}" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              @endif
          </div>
          <div class="info">
              <a href="#" class="d-block">{{ Auth::user()->name }}</a>
          </div>
        </div> --}}

        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                @if (haveRight("dashboard"))
                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link">
                            <i class="fas fa-tachometer-alt"></i>
                            <p>{{ __('admin.dashboard') }}</p>
                        </router-link>
                    </li>
                @endif
                @if (haveRight('shop_setting.settings'))
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="fas fa-sliders-h"></i>
                            <p>
                                {{ __('admin.shop-setup') }}
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/shop-setup" class="nav-link">
                                    <i class="fas fa-caret-right"></i>&nbsp;
                                    <p>{{ __('admin.general-setup') }}</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/home-setup" class="nav-link">
                                    <i class="fas fa-caret-right"></i>&nbsp;
                                    <p>{{ __('admin.home-setup') }}</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                @endif
                @if (haveRight('users.list'))
                    <li class="nav-item">
                        <router-link to="/users" class="nav-link">
                            <i class="fas fa-users-cog"></i>
                            <p>{{ __('admin.users') }}</p>
                        </router-link>
                    </li>
                @endif
{{--                    <li class="nav-item">--}}
{{--                        <router-link to="/test" class="nav-link">--}}
{{--                            Test--}}
{{--                        </router-link>--}}
{{--                    </li>--}}
                <li class="nav-item">
                    <a href="" class="nav-link">
                        <i class="nav-icon fas fa-power-off"></i>
                        <p>{{ __('admin.logout') }}</p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
