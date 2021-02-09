<!DOCTYPE html>
<html lang="en">
    @include('layout.head')
    <body>
        <!-- Top bar Start -->
        @include('sections.topbar')
        <!-- Top bar End -->
        
        <!-- Nav Bar Start -->
        @include('sections.navbar')
        <!-- Nav Bar End -->      
        
        <!-- Header Bar Start -->
        @include('sections.header')
        <!-- Header Bar End -->       
        <div id="app">
            @yield('content')  
        </div>
        
        <!-- Footer Start -->
        @include('sections.footer')
        <!-- Footer End -->
        
        <!-- Footer Bottom Start -->
        @include('sections.footer-bottom')
        <!-- Footer Bottom End -->       
        
        <!-- Back to Top -->
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        
        @include('layout.scripts')
    </body>
</html>
