@extends('layouts.app')
@section('Title', 'Contact Us And Get Your Book Published Today - Book Writing Cube')
@section('Description', 'Book Writing Services Company that helps you become the best-selling author of all times. Get in touch today.')
@section('metas')

<meta name="tags" content="en" />
<meta name="DC.title" content="ghost writing company" />
<meta name="geo.region" content="GB" />
<meta name="geo.position" content="55.753005;-2.857642" />
<meta name="ICBM" content="55.753005, -2.857642" />
<meta name="geo.region" content="US" />
<meta name="geo.position" content="39.78373;-100.445882" />
<meta name="ICBM" content="39.78373, -100.445882" />
<meta property="og:title" content="@yield('Title')" />
<meta property="og:description" content="Book Writing Services Company that helps you become the best-selling author of all times. Get in touch today." />
<meta property="og:url" content="https://www.bookwritingcube.us" />
<meta property="og:site_name" content="Book Writing Cube" />

@endsection



@include('layouts.navigation')

<section class="mb-0 pb-4 pt-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5">
                <h1 class="font-secondary fw-900 text-left font-40 font-50rem text-blue pt-4">
                    Elevate your book. Get published.
                </h1>
                <div class="pt-5">

                </div>
                <p class="text-left text-black font-20 fw-500  line-height-1">
                    <em> Let’s talk about your book</em>
                </p>
                <p class="text-left text-black font-18 fw-500 line-height-1">
                    <span class="fw-500 font-18 line-height-1">Phone:</span> <a href="tel:866-600-0036"
                        class="fw-700 text-black border-b"> 866-600-0036 </a>
                </p>
                <p class="text-left text-black font-18 fw-500 line-height-1">
                    <span class="fw-500 font-18 line-height-1">Email:</span> <a
                        href="mailto:info@bookwritingcube.us" class="text-black border-b fw-700">
                        info@bookwritingcube.us </a>

                </p>
                <p class="text-left text-black font-18 fw-500 pt-5 line-height-1">
                    …or fill out the contact <a href="#contact" class="text-black">form below</a>
                </p>
            </div>

            <div class="col-md-3">
                <div class="justify-content-center text-center">
                    <div class="border">
                        <div class="mapouter">
                            <div class="gmap_canvas"><iframe width="300" height="252" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=12365%20SW%20Pioneer%20Ln%20Suite%20106,%20Beaverton,%20OR%2097008,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                                    href="https://123movies-to.org"></a><br>
                                <style>
                                    .mapouter {
                                        position: relative;
                                        text-align: center;
                                        height: 252px;
                                        width: 300px;
                                    }
                                </style>
                                <style>
                                    .gmap_canvas {
                                        overflow: hidden;
                                        background: none !important;
                                        height: 252px;
                                        width: 300px;
                                    }
                                </style>
                            </div>
                        </div>
                    </div>
                    <h2 class="font-secondary fw-500 font-30 font-50rem text-black pt-4">
                        Beaverton
                    </h2>
                    <h4 class="font-secondary fw-400 font-20 font-50rem text-black text-center">(Headquarters)
                    </h4>
                    <p class="text-black fw-400 pb-2 pt-3">
                        418 Broadway STE R Albany NY 12207, United States
                    </p>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <div class="justify-content-center text-center">
                    <div class="border">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="300" height="252" id="gmap_canvas"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=8%20The%20Green%20STE%20300,%20Dover%20DE%2019901+(8%20The%20Green%20STE%20300,%20Dover%20DE%2019901)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe><a href="https://123movies-to.org"></a><br>
                                <style>
                                    .mapouter {
                                        position: relative;
                                        text-align: center;
                                        height: 252px;
                                        width: 300px;
                                    }
                                </style>
                                <style>
                                    .gmap_canvas {
                                        overflow: hidden;
                                        background: none !important;
                                        height: 252px;
                                        width: 300px;
                                    }
                                </style>
                            </div>
                        </div>
                    </div>
                    <h2 class="font-secondary fw-500 font-30 font-50rem text-black pt-4">
                        Middletown

                    </h2>
                    <h4 class="font-secondary fw-400 font-20 font-50rem text-black text-center">(Operations)
                    </h4>
                    <!-- <p class="text-black fw-400 pb-2 pt-3">
                                8 The Green STE 300, Dover DE 19901
                            </p> -->
                </div>
            </div>
        </div>
    </div>
</section>

<section class="" id="contact">
    <div class="container-fluid">
        <div class="row text-center justify-content-center">
            <div class="col-md-10">
                <h2 class="font-30 text-blue font-50rem fw-500 pb-5"> Fill Out The Form Below & We Will Contact You
                    Promptly</h2>

            </div>
        </div>
        <div class="row justify-content-center">

        </div>

    </div>

    <div class="container">
        <div class="row justify-content-center ">
            <div class="col-md-9">
                <form class="cr-form row justify-content-center" id="contatcform" role="form">
                    <input type="hidden" value="https://www.bookwritingcube.us/contact/" id="page_url"
                        name="page_url" />
                    <div class="col-md-6">
                        <input type="text" id="name" name="name" placeholder="Name"
                            class="form-control col-md-12 mb-3" required=""
                            onkeypress="return /[a-z]/i.test(event.key)">
                    </div>
                    <div class="col-md-6">
                        <input type="email" id="email" name="email" placeholder="Email"
                            class="form-control col-md-12 mb-3" required="">
                    </div>
                    <div class="col-md-6">
                        <input type="phone" id="phone" name="phone" placeholder="Phone" minlength="7" maxlength="15"
                            class="form-control col-md-12 mb-3" required=""
                            onkeypress="return /[0-9]/i.test(event.key)">

                    </div>
                    <div class="col-md-6">
                        <input type="text" id="zip" name="zip" placeholder="Location/Zip Code"
                            class="form-control col-md-12 mb-3" required=""
                            nkeypress="return /[0-9]/i.test(event.key)">

                    </div>

                    <div class="col-md-12 pt-5">
                        <p>Desired Service(s)* see our <b> <em> rates and services </em></b> </p>
                    </div>

                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em1" name="em1" value="ghostwriting-services--I want to hire a
                                professional to write or rewrite my book">
                            <label class="form-check-label" for="exampleCheck1">writing--I want to hire a
                                professional to write or rewrite my book</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em2" name="em2" value="Editing--I have written a manuscript
                                and would like a professional to review and/or edit it">
                            <label class="form-check-label" for="exampleCheck1">Editing--I have written a manuscript
                                and would like a professional to review and/or edit it</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em3" name="em3" value=" Book Coaching--I want to write my book on my own, but with the help of a
                                professional to guide me">
                            <label class="form-check-label" for="exampleCheck1">
                                Book Coaching--I want to write my book on my own, but with the help of a
                                professional to guide me</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em4" name="em4" value="Cultural Accuracy Reading--I would
                                like a professional to review my manuscript and ensure it isn’t offensive,
                                inaccurate, or perpetuating harmful stereotypes">
                            <label class="form-check-label" for="exampleCheck1">Cultural Accuracy Reading--I would
                                like a professional to review my manuscript and ensure it isn’t offensive,
                                inaccurate, or perpetuating harmful stereotypes</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em5" name="em5"
                                value="Book Proposal">
                            <label class="form-check-label" for="exampleCheck1">Book Proposal</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em6" name="em6"
                                value="Beta Reader Services">
                            <label class="form-check-label" for="exampleCheck1">Beta Reader Services</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em7" name="em7">
                            <label class="form-check-label" for="exampleCheck1">Other</label>
                        </div>
                    </div>

                    <div class="col-md-3 pt-5">
                        <p>General Genre Category*</p>
                    </div>

                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em8" name="em8" value="Business">
                            <label class="form-check-label" for="exampleCheck1">Business</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em9" name="em9"
                                value="Memoir/Biography">
                            <label class="form-check-label" for="exampleCheck1">Memoir/Biography</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em10" name="em10" value="Health">
                            <label class="form-check-label" for="exampleCheck1">Health</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em11" name="em11"
                                value="Self-Help/Personal Development">
                            <label class="form-check-label" for="exampleCheck1">Self-Help/Personal
                                Development</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em12" name="em12" value="Fiction">
                            <label class="form-check-label" for="exampleCheck1">Fiction</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em13" name="em13"
                                value="General Nonfiction">
                            <label class="form-check-label" for="exampleCheck1">General Nonfiction</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em14" name="em14"
                                value="Children’s">
                            <label class="form-check-label" for="exampleCheck1">Children’s</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="em15" name="em15" value="Others">
                            <label class="form-check-label" for="exampleCheck1">Others</label>
                        </div>
                    </div>

                    <div class="col-md-12 pt-4">
                        <textarea type="text" id="message" name="message"
                            placeholder="Tell Us More About Your Project and Publishing Goals Here"
                            class="form-control"></textarea>
                    </div>

                    <div class="col-md-12 pt-4">
                        <p class="font-14 fw-400">
                            <em>
                                You may find our confidentiality policy <a href="/privacy-policy/"
                                    class="fw-700 text-black border-b">here</a> , or request a signed NDA by email:
                                <a href="mailto:info@bookwritingcube.us" class="fw-700 text-black border-b">
                                    info@bookwritingcube.us</a>

                                This site is protected by reCAPTCHA and the Google <a href="/privacy-policy/"
                                    class="fw-700 text-black border-b">Privacy Policy</a> and Terms of Service <a
                                    href="/terms-of-use/" class="fw-700 text-black border-b">Terms of Service
                                </a> apply.
                            </em>
                        </p>
                    </div>

                    <div class="col-md-12 pt-4">
                        <button id="homesave11" name="homesave11" type="submit"
                            class="btn btn-secondary2 btn-block fw-900 font-30 mb-2">Submit Form</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

</section>

<section class="backgery">
    <div class="container-fluid">
        <div class="row text-center justify-content-center">
            <div class="col-md-8">
                <h2 class="font-50 text-blue font-50rem fw-900 pb-3"> We Provide Everything You Need to
                    Achieve Your Publishing Goals.</h2>
                <p class="font-16  fw-500 pb-3">Let’s talk about how we can make your book a success. <span
                        class="font-20 text-black fw-700 pb-3"><a href="tel:866-600-0036" class="text-black"> Call
                            now:
                            866-600-0036 </a></span> </p>

            </div>

        </div>
    </div>
</section>


<x-footer />