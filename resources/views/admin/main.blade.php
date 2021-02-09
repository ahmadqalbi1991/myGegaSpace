{{-- @dd(cache('translations')) --}}
@php
    $rights = havePermissions();
    $shop_settings = shopSetting();
    $settings = adminSetting();
@endphp
    <!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ isset($shop) ? $shop->shop_name : "Shop Name" }}</title>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link rel="stylesheet" href="{{ asset("admin/fonts/fonts.css") }}">
</head>
<body class="scrollbar">
<div id="admin-app">
    <content-wrapper></content-wrapper>
</div>
<script>
    window._locale = '{{ app()->getLocale() }}'
    window._rights = {!! $rights !!}
    window.shop_settings = {!! $shop_settings !!}
    window.settings = {!! $settings !!}
    window._translations = {!! cache('translations') !!}
</script>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
