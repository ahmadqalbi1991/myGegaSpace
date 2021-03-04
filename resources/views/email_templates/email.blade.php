<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <style>
        body {
            font-family: monospace, monospace;
        }
        p {
            font-size: 18px;
        }
        table {
            width: 100%;
        }
        .w-50 {
            width: 50%;
        }

        .logo {
            width: 150px;
        }
        .text-right {
            text-align: right;
        }
        .text-center {
            text-align: center;
        }
        .text-justify {
            text-align: justify;
        }
        .border {
            border: 1px solid #e3e3e3;
        }
        .p-20 {
            padding: 20px;
        }
        .p-20-50 {
            padding: 20px 50px;
        }
        .p-50 {
            padding: 50px;
        }
        .p-10 {
            padding: 10px;
        }
        .login-btn {
            color: #fff !important;
            background: #35495e;
            text-decoration: none;
        }
        .login-btn:hover{
            text-decoration: none;
            background: #345373;
        }
        .mt-20 {
            margin-top: 20px;
        }
    </style>
</head>
<body>
<table class="p-50">
    <tr>
        <td class="p-20">
            <img src="{{ $shop_setting->logo_path }}" class="logo">
        </td>
    </tr>
    <tr class="text-center">
        <td>
            <h1>{{ __('message.welcome') }}, {{ $user_data['name'] }}</h1>
        </td>
    </tr>
    <tr class="text-center">
        <td class="w-50">
            <p>Congratulations, your account on <b>{{ $shop_setting->shop_name }}</b> has been created. Please click the button below to login,
                Your account details are given below, Your Password will expire in 3 days.
            </p>
        </td>
    </tr>
    <tr>
        <td><br><br><br></td>
    </tr>
    <tr class="text-center">
        <td>
            <a href="{{ URL('login') }}" class="login-btn p-20-50">
                {{ __('message.click_here_to_login') }}
            </a>
        </td>
    </tr>
    <tr>
        <td><br><br><br></td>
    </tr>
    <tr>
        <td>
            <hr>
        </td>
    </tr>
    <tr>
        <td>
            <table>
                <tr>
                    <td>
                        <h2>{{ __('message.login_info') }}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><b>{{ __('message.username') }}: </b> {{ $user_data['username'] }}</p>
                        <p><b>{{ __('message.password') }}: </b> {{ $user_data['original_password'] }}</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <hr>
        </td>
    </tr>
    <tr class="text-center">
        <td>
            <p>If this email is wrong, then reply us back at <b>{{ $shop_setting->shop_email }}</b></p>
        </td>
    </tr>
</table>
</body>
</html>
