@extends('layouts.app')
@section('Title', 'Book Writing Services Company - Book Writing Cube')
@section('Description', 'Book Writing Services Company to help you pen down your thoughts effortlessly onto paper. Connect to get started.')
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
<meta property="og:description" content="Book Writing Services Company to help you pen down your thoughts effortlessly onto paper. Connect to get started." />
<meta property="og:url" content="https://www.bookwritingcube.us" />
<meta property="og:site_name" content="Book Writing Cube" />

@endsection



@include('layouts.navigation')

<section class="mb-0 pb-4 pt-3 pricing-banner  cover">
    <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <div class="col-md-8 pt-5 pb-5">
                <h1 class="font-secondary fw-900 font-50 font-50rem text-blue ">
                    Services & Rates
                </h1>
                <p class="text-black font-18 fw-500 pb-2 pt-2">
                    We understand that every book project is unique. Call us to discuss how we can tailor our
                    service to achieve your publishing goals.
                </p>
                <p class="text-black font-18 fw-500 pb-2 pt-2">
                    <b> * Note to Publishers and Agents:</b> We offer special services and compensation options
                    not listed below. Please call to inquire.
                </p>
            </div>

        </div>

    </div>
</section>

<section>
    <div class="container-fluid">
        <div class="row ">
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3 ">
                    <div class="card-body">
                        <div class="row pb-4">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue line-height-1">Book</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Marketing</h4>
                                <p>We will help market your book
                                    so that it almost guarantees that you grow your
                                    audience drastically. Building custom marketing
                                    strategies is what we do best!</p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>

                            </div>
                            <div class="col-md-4 pt-5 ">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/b4da8293-86f8-40b8-4e00-992a7f908800/public"
                                    width="167" height="87" class="img-fluid" alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue line-height-1">Book</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Publishing</h4>
                                <p>Our book publishers are the best in the
                                    business at what they do. We will make all
                                    your dreams come true by making you the
                                    next bestselling author.</p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>

                            </div>
                            <div class="col-md-4 pt-5">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/af11899a-ca77-4985-3fd0-e53136dda800/public"
                                    width="168" height="149" class="img-fluid " alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="backgery">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-6  mb-4">
                <h2 class="font-45 fw-900 font-50rem text-blue">Professional
                </h2>
                <h4 class="font-24 fw-500 text-black w-50 border-1 ">writing Services</h4>
                <p>
                    Avail the chance to work alongside authors that are considered to be pioneers of
                    the industry. Our commitment to quality and customer service is unmatched by
                    anyone in the industry as we always try to keep our customers as happy as we can. </p>

                <div class="pt-2 pb-2">
                    <a href="javascript:void(Tawk_API.toggle())" class="btn btn-secondary-rounded-o">LET'S
                        DISCUSS</a>
                    <a href="tel:866-600-0036" class="btn btn-secondary2"> 866-600-0036</a>
                </div>
            </div>
            <div class="col-md-6">
                <img width="625" height="567" class="img-fluid box-shadow" alt="book_writing_cube"
                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/b77f2dbd-9cc3-45bb-a2d5-4161d4732200/public">
            </div>
        </div>
    </div>
</section>

<section class=" pb-2">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue line-height-1">Book</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Cover Design</h4>
                                <p>Our designers will make sure they provide a
                                    book cover design that perfectly encapsulates
                                    your book’s unique identity. We do everything we do from
                                    scratch, which guarantees every book cover that we produce
                                    is unique.</p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>
                            </div>
                            <div class="col-md-4">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/81adeedf-27f4-4b9a-c11d-888aa324ea00/public"
                                    width="174" height="230" class="img-fluid" alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue line-height-1">Premium</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Book Videos</h4>
                                <p>Have your book trailers created by the
                                    best designers in the industry. We create
                                    elaborate cinematic videos for your books that
                                    are intricate and creative simultaneously, which helps
                                    build your book’s awareness.</p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>
                            </div>
                            <div class="col-md-4 pt-4">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/073a8dbe-892e-43eb-8c45-adbb1ebf1900/public"
                                    width="168" height="149" class="img-fluid" alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pt-2 pb-2">
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue  line-height-1">Author</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Website</h4>
                                <p>Have your very own website created
                                    where you can showcase the person
                                    behind the book. You can build a huge fan
                                    following just with the help of your website.</p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>

                            </div>
                            <div class="col-md-4 pt-5">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/b72a4469-22cd-48a9-9f07-58c00393a200/public"
                                    width="174" height="230" class="img-fluid" alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue line-height-1">Professional</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Audiobooks</h4>
                                <p>You can make your audiobooks simply by
                                    contacting us on this website. It’s that easy!
                                    We welcome any queries you might have with
                                    open arms. </p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>

                            </div>
                            <div class="col-md-4 ">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/360ea8b6-bd65-47b3-dda7-e4f3a54ea000/public"
                                    width="130" height="199" class="img-fluid" alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pt-2 ">
    <div class="container-fluid">
        <div class="row ">
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue line-height-1">Custom</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Book Illustrations</h4>
                                <p>We can help create your customer
                                    illustrations at just a fraction of the cost!
                                    We will provide the best quality of products at
                                    the most affordable prices.</p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>

                            </div>
                            <div class="col-md-4 ">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/9dcac56d-60f1-4ddc-ad7d-f3c10c929300/public"
                                    width="145" height="210" class="img-fluid" alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-2 d-flex align-self-stretch">
                <div class="card box-shadow border-0 p-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="fw-900 font-40 text-blue line-height-1">Custom</h2>
                                <h4 class="font-600 font-20 border-1 line-height-1">Book Editing</h4>
                                <p>We know that every word counts, so we're committed to crafting captivating
                                    stories for any length and style.</p>
                                <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                    rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 15px;">Get
                                    A Quote</a>

                            </div>
                            <div class="col-md-4 ">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/e68d7e67-786a-4a36-fc3b-eb9e6734d400/public"
                                    width="145" height="210" class="img-fluid" alt="book_writing_cube">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="cover relative" style="background-color: #2c2c2c;">
    <!-- <div id="color-overlay"></div> -->
    <div class="container-fluid">
        <div class="row text-center justify-content-center ">
            <div class="col-md-12">
                <h2 class="text-center text-white  pb-3">
                    <span class="font-50 font-50rem fw-900"> Talk To Our Experts!</span>
                </h2>
                <p class="text-white text-center fw-600">Call and get a free consultation, sample, &amp; a price
                    quote.
                </p>
                <a href="tel:866-600-0036" class="text-white font-18 fw-600">866-600-0036</a>
                <div class="pt-4 pb-4">
                    <a href="javascript:void(Tawk_API.toggle())" class="btn btn-white mr-2">LET'S
                        DISCUSS</a>

                </div>
            </div>
        </div>
    </div>
</section>




<x-footer />