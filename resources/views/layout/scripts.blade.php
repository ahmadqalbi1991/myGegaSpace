<!-- Template Javascript -->
<script src="{{ asset('shop/js/jquery.min.js') }}"></script>
<script src="{{ asset('shop/js/bootstrap.min.js')}}"></script>
<script src="{{ asset('shop/js/lib/easing/easing.min.js')}}"></script>
<script src="{{ asset('shop/js/lib/slick/slick.min.js')}}"></script>
<script src="{{ asset('shop/js/main.js') }}"></script>
<script src="{{ asset('shop/js/sweetalert.min.js') }}"></script>
<script src="{{ asset('shop/js/shop.js') }}"></script>
<script src="/js/app.js"></script>
@if (Session::has("status"))
    <script>
        // Session flash message
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: '{{ Session::get("status") }}',
            title: '{{ Session::get("message") }}'
        })
    </script>
@endif