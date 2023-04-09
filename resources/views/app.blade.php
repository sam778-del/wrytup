<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/swiper-bundle.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/progressbar.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/meanmenu.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/master.css') }}">
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com/">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">

        <!-- Scripts -->
        <script src="{{ asset('/js/jquery-3.6.0.min.js') }}"></script>
        <script src="{{ asset('/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('/js/swiper-bundle.min.js') }}"></script>
        <script src="{{ asset('/js/counter.js') }}"></script>
        <script src="{{ asset('/js/gsap.min.js') }}"></script>
        <script src="{{ asset('/js/ScrollTrigger.min.js') }}"></script>
        <script src="{{ asset('/js/ScrollToPlugin.min.js') }}"></script>
        <script src="{{ asset('/js/ScrollSmoother.min.js') }}"></script>
        <script src="{{ asset('/js/SplitText.min.js') }}"></script>
        <script src="{{ asset('/js/chroma.min.js') }}"></script>
        <script src="{{ asset('/js/mixitup.min.js') }}"></script>
        <script src="{{ asset('/js/vanilla-tilt.js') }}"></script>
        <script src="{{ asset('/js/jquery.meanmenu.min.js') }}"></script>
        <script src="{{ asset('/js/main.js') }}"></script>

        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
