<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


    {{-- METAS  --}}
    <title> @yield('Title') </title>
    <meta name="description" content="@yield('Description')" />
    @section('metas')
    
    @show
    {{-- END METAS --}}



    <link rel="stylesheet prerender" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet prerender" href="{{ asset('assets/css/style.css') }}" media="all" />
    <link rel="stylesheet prerender" href="{{ asset('assets/slick/slick.css') }}" media="all" />
    


    <!-- Portfolio CSS -->
    <link rel="stylesheet prerender" href="{{ asset('assets/portfolio/style.css') }}" media="all" />
    <link rel="preconnect" href="https://fonts.googleapis.com" media="print"
        onload="this.onload=null;this.removeAttribute('media');" />

    <link rel="preconnect" href="https://fonts.gstatic.com" media="print"
        onload="this.onload=null;this.removeAttribute('media');" crossorigin />

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />

    <link rel="icon" href="{{ asset('assets/images/favicon.png') }}" sizes="32x32" title="logo" alt="favicon" />

    {{-- CANONICAL --}}
    <link rel="canonical" href="https://www.bookwritingcube.us" />
    {{-- END CANONICAL --}}


</head>

<body>
    {{-- FOR NO SCRIPT AND OTHER TAGS --}}
    @section('tagsforhead')
    @show



    {{-- MAIN BODY / CONTENT --}}
    @section('body')
        
    @show





    <!--Site Sticky -->
    <div class="sticky-container">
        <ul class="sticky">
            <li class="p-2">
                <i class="fa fa-phone"></i>
                <p class=""><a href="tel:866-600-0036" target="_self" rel="noopener noreferrer">866-600-0036</a>
                </p>
            </li>
            <li class="p-2">
                <i class="fa fa-comments"></i>
                <p class=""><a href="javascript:void(Tawk_API.toggle())" rel="noopener noreferrer">Let's
                        Discuss</a></p>
            </li>
        </ul>
    </div>

    <!--Site Sticky -->
    <script defer src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
        (jQuery.event.special.touchstart = {
            setup: function(e, t, s) {
                this.addEventListener("touchstart", s, {
                    passive: !t.includes("noPreventDefault")
                });
            },
        }),
        (jQuery.event.special.touchmove = {
            setup: function(e, t, s) {
                this.addEventListener("touchmove", s, {
                    passive: !t.includes("noPreventDefault")
                });
            },
        }),
        (jQuery.event.special.wheel = {
            setup: function(e, t, s) {
                this.addEventListener("wheel", s, {
                    passive: !0
                });
            },
        }),
        (jQuery.event.special.mousewheel = {
            setup: function(e, t, s) {
                this.addEventListener("mousewheel", s, {
                    passive: !0
                });
            },
        });
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" crossorigin="anonymous">
    </script>
    <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" crossorigin="anonymous">
    </script>
    <script src="{{ asset('assets/slick/slick.js') }} " crossorigin="anonymous"></script>

    <!-- Portfolio Script -->
    <script src="{{ asset('assets/portfolio/presentingEvents.js') }} " crossorigin="anonymous"></script>

    <script src="{{ asset('assets/js/custom.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
    <script>
        Fancybox.bind('[data-fancybox="clientsVideos"]', {
            hideScrollbar: false,
            infinite: false,
            animationEffect: "zoom",
            buttons: ["zoom", "close"],
            transitionEffect: "fade",
            loop: false,
            arrows: true,
            autoFocus: false,
            keyboard: true
        });
    </script>
    <script src="{{ asset('assets/js/loader.js') }}"></script>
    <!-- For Chat -->
    <script>
        !(function() {
            var t = document.querySelectorAll("img[data-src]"),
                n = 0,
                e = function() {
                    if (!(n >= t.length)) {
                        var r = t[n];
                        if (this.scrollY + this.innerHeight > r.offsetTop) {
                            var c = r.getAttribute("data-src");
                            (r.src = c),
                            r.addEventListener("load", function() {
                                    r.removeAttribute("data-src");
                                }),
                                n++,
                                e();
                        }
                    }
                };
            window.addEventListener("scroll", e), e();
        })(),
        (window.cg_convert = function(t, n) {
            window._cg_convert ?
                window._cg_convert(t || null, n || null) :
                setTimeout(function() {
                    cg_convert(t || null, n || null);
                }, 500);
        });
    </script>
    <script>
        $(".brand-clients").slick({
            infinite: !0,
            speed: 1e3,
            autoplay: !0,
            autoplaySpeed: 2e3,
            slidesToShow: 4,
            slidesToScroll: 3,
            prevArrow: !1,
            nextArrow: !1
        });
    </script>
    

    <script defer type="application/ld+json" src="book-writing-cube-indexing-api.json"></script>
</body>

</html>
