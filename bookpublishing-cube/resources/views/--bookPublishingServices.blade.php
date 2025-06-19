@extends('layouts.app')
@section('Title', 'About us - Book Writing Cube')
@section('Description', 'Book Writing Company that molds your ideas into captivating stories and make them happen.
    Connect with us to become the best-selling author now.')
@section('metas')

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="max-image-preview:large" />
    <meta name="tags" content="">
    <meta name="DC.title" content="Book Writing Company" />
    <meta name="geo.region" content="en" />
    <meta name="geo.position" content="39.78373;-100.445882" />
    <meta name="ICBM" content="39.78373, -100.445882" />
    <meta name="DC.title" content="About us - Book Writing cube " />
    <meta name="geo.region" content="GB" />
    <meta name="geo.position" content="55.753005;-2.857642" />
    <meta name="ICBM" content="55.753005, -2.857642" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="About us - Book Writing cube " />
    <meta property="og:description"
        content="Book Writing Company that molds your ideas into captivating stories and make them happen. Connect with us to become the best-selling author now." />
    <meta property="og:url" content="https://www.bookwritingcube.us/about-us/" />

@endsection



@include('layouts.navigation')

@section('body')
{{-- <x-home-hero /> --}}
<section class="mb-0 pb-1 pt-4 about-writing cover">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-7 ">
                <h1 class="font-secondary fw-900 text-left font-50 font-50rem text-blue ">
                    Your <span class="extraColor">Trusted Partner</span> in Book Writing
                </h1>
                <div class="pr-md-5 pr-0">
                    <div class="pr-md-5 pr-0">
                        <h2 class="text-left text-black font-18 fw-500 pb-3 pt-2 line-height-15 mp pr-md-5 pr-0">
                            As self-searching as this question might sound, we are a book writing, editing, and
                            publishing company. Well, that sounds a bit too over-simplified, but you get the
                            gist. We produce, publish, and market book, a synergy of creativity fueled by a
                            staff of writers, editors, publishers, developers, and designers.
                        </h2>
                    </div>
                </div>
                <div class="pb-3 pt-1">
                    <a href="javascript:void(Tawk_API.toggle())" class="btn btn-secondary"
                        id="btn2">LET'S
                        DISCUSS</a>
                    <a href="tel:866-600-0036" class="btn btn-secondary2 "> 866-600-0036</a>
                </div>

                <!-- For Mobile-->
                <div class="row pt-4 pb-4 d-block d-lg-none d-md-none d-sm-block">
                    <div class="col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <a href="#"> <img class="img-fluid" alt="book_writing_cube"
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/bc20d1f9-01f6-44e4-ae57-cd1592c5f600/public"
                                    width="120"></a>
                        </div>
                        <div>
                            <a href="#"> <img class="img-fluid  pl-4" alt="book_writing_cube"
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/a550be31-f3cc-4b8d-1dd0-66777c4de000/public"
                                    width="160"></a>
                        </div>
                        <div>
                            <a href="#"> <img class="img-fluid  pl-4" alt="book_writing_cube"
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/6ead1ecf-f3c3-4ea1-9f60-ab7772924f00/public"
                                    width="120"></a>
                        </div>
                    </div>
                </div>
                <!-- For Mobile-->
                <div class="row pt-3 pr-5 d-none d-lg-block d-md-block d-sm-none">
                    <div class="col-lg-12 col-md-12 pb-5">
                        <a href="#"> <img class="img-fluid" alt="book_writing_cube"
                                src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/4657d808-ddb8-4b7e-621b-a9f432ad4800/public"
                                width="877" height="27"></a>
                    </div>
                </div>
                <div class="d-none d-lg-block d-md-block d-sm-none">
                    <div class="row pt-2 pb-5 align-items-center">
                        <div class="col-lg-3 col-md-3">
                            <a href="#"> <img class="img-fluid" alt="book_writing_cube"
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/bc20d1f9-01f6-44e4-ae57-cd1592c5f600/public"></a>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <a href="#"> <img class="img-fluid  pl-4" alt="book_writing_cube"
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/a550be31-f3cc-4b8d-1dd0-66777c4de000/public"></a>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <a href="https://www.bbb.org/us/or/beaverton/profile/publishers-book/book-writing-cube-1296-1000120771/#sealclick"
                                target="_blank" rel="nofollow noreferrer">
                                <img class="img-fluid  pl-3"
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/65f9c8d0-35f9-48f4-21ba-351b4b859600/public"
                                    alt="Book Writing Cube BBB Business Review" />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <a href="#"> <img class="img-fluid  pl-4" alt="book_writing_cube"
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/6ead1ecf-f3c3-4ea1-9f60-ab7772924f00/public"></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-5">

        </div>
    </div>
</section>



<x-logo-sliders />

<x-form-c-t-a />
<x-portfoliocaro />


<section class="pt-5 pb-5">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-12 mb-3 d-block d-lg-none d-md-none d-sm-block">
                <img width="495" height="329" class="img-fluid box-shadow rounded" alt="book_writing_cube"
                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/ca56a74c-18ff-4b01-fc15-b47d7955d700/public">
            </div>

            <div class="col-md-6  mb-4">
                <h3 class="font-40 fw-900 font-50rem text-blue text-capitalize pb-4">
                    The Origin of Our <span class="extraColor">Expertise and Vision </span>
                </h3>
                <p>
                    It calls for storytime! At first, it was just an idea to escape the daily 9 to 5 frustration and
                    explore the storyteller hiding within. So after attempting multiple book writing projects, it
                    convinced me of my storytelling destiny. Relaxing and solving the rubic’s cube, I came up with
                    the name and booked the domain. It was my eureka moment!
                </p>
                <p>
                    So it is our story of inspiration and courage to do what we want. If you are inspired to write
                    and put the courage to pen down a story, we are pretty sure you want it to be a bestseller? Why
                    not let us be your guide in the journey from a writer to a bestseller?
                </p>
                <div class="pt-2 pb-2">
                    <a href="javascript:void(Tawk_API.toggle())" class="btn btn-secondary">LET'S
                        DISCUSS</a>
                    <a href="tel:866-600-0036" class="btn btn-secondary2"> 866-600-0036</a>
                </div>
            </div>

            <div class="col-md-6 d-none d-lg-block d-md-block d-sm-none">
                <div class="d-flex justify-content-center">
                    <img width="580" height="720" class="img-fluid box-shadow rounded" alt="book_writing_cube"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/d9209363-294a-42e1-a8ae-474ff7187700/public">
                </div>
            </div>
        </div>
    </div>
</section>




<x-blockcta />

<section class="pt-5 pb-5">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="d-flex justify-content-center">
                    <img width="580" height="720" class="img-fluid box-shadow rounded" alt="book_writing_cube"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/f460359e-5a97-47be-7dd6-7ab065179400/public">
                </div>
            </div>
            <div class="col-md-6  mb-4">
                <h3 class="font-40 fw-900 pt-3 font-50rem text-blue pb-4">Why Select <span class="extraColor">Book Writing Cube </span> for Your Publishing Journey?
                </h3>
                <p>
                    Started as a small online organization, expanded the team from a few to a handful of people, and
                    set the office. We put our skills, experience, and everything we knew of book writing, editing,
                    publishing, and marketing to acquire a significant clientele. Soon, we got partnerships with
                    publications houses, reputable editors, and experienced marketers—it was my dream come true!
                </p>

                <div class="pt-2 pb-2">
                    <a href="javascript:void(Tawk_API.toggle())" class="btn btn-secondary">LET'S
                        DISCUSS</a>
                    <a href="tel:866-600-0036" class="btn btn-secondary2"> 866-600-0036</a>
                </div>
            </div>

        </div>
    </div>
</section>


<x-logo-sliders />

<section class="pt-5 pb-2 testimonials">
    <div class="container-fluid">
        <h2 class="font-secondary text-center text-blue font-50 fw-900 pt-3 pb-4">What Our Clients Says About Us</h2>
        <!-- <h4 class="text-center fw-400 font-22 line-height-1">Let Our Book Marketing Team Help You</h4> -->

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Carousel indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>
            <!-- Wrapper for carousel items -->
            <div class="carousel-inner">
                <div class="item carousel-item active">
                    <div class="row justify-content-center text-center">
                        <div class="col-md-8">
                            <div class="img-box"><img
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/903eff67-9f3c-487f-3991-5fddd12b0200/public"
                                    width="145" height="145" alt="book_writing_cube" /></div>
                            <p class="testimonial">
                                If you are looking for professional writers, I highly recommend the Book Writing Cube
                                services.
                                Affordable prices. Mark Rivera and his team are superb! They explained the entire
                                process before starting my manuscript and are guiding me in every step. I am very
                                pleased with their
                                work.
                            </p>
                            <p class="overview">
                                <b>Sharon Mondier</b>
                                US
                            </p>
                            <div class="star-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item carousel-item">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8 col-md-8">
                            <div class="img-box"><img
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/903eff67-9f3c-487f-3991-5fddd12b0200/public"
                                    width="145" height="145" alt="book_writing_cube" /></div>
                            <p class="testimonial">
                                This was my first book to be published, I was extremely nervous, I wasn’t sure I could
                                trust the
                                company I was sending my money to. Book Writing Cube has EXCEEDED my expectations.
                                Mark and his team are/were very attentive to my requests, they have presented several
                                illustrations
                                based on my vision, they have edited and presented ideas to make my story
                                stronger, I could not be more pleased with their honesty and their commitment. Getting a
                                book
                                published is no easy task and I have procrastinated for years due to uncertainty. I’m
                                now relieved that I trusted this team to do as they said and they have.
                            </p>
                            <p class="overview">
                                <b>Elizabeth Waldorf</b>
                                US
                            </p>
                            <div class="star-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item carousel-item">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8 col-md-8">
                            <div class="img-box"><img
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/903eff67-9f3c-487f-3991-5fddd12b0200/public"
                                    width="145" height="145" alt="book_writing_cube" /></div>
                            <p class="testimonial">
                                This is the first time I’ve worked with Book Writing Cube and I’m happy that I chose to
                                work with
                                them. I am self-publishing my book for the first time and I didn’t know what to
                                expect. To be honest I happen to come by Book Writing Cube by accident. I was
                                researching websites
                                that helped with self-publishing and I clicked on it and accidentally clicked on
                                the chat icon. Someone responded and at first I didn’t write anything back. But then I
                                decided to take
                                a chance and the person I talked to put me in contact with Mark Rivera. Mark
                                and his team have been very helpful during this whole process. They take my suggestions
                                and show me
                                where I can make improvements.
                            </p>
                            <p class="overview">
                                <b>Ana</b>
                                US
                            </p>
                            <div class="star-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item carousel-item">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8 col-md-8">
                            <div class="img-box"><img
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/903eff67-9f3c-487f-3991-5fddd12b0200/public"
                                    width="145" height="145" alt="book_writing_cube" /></div>
                            <p class="testimonial">
                                This is a fantastic business! Their editing team did a great job on the design of the
                                book cover, and
                                formatting of the text for uploading onto KDP for print and ebook made it
                                feasible for me to swiftly self-publish my book. Their staff was quick to reply to my
                                queries,
                                sometimes the same day, and provided me with excellent advice throughout.
                                Furthermore, in comparison to many other publishing firms, their services were
                                inexpensive. I'd
                                recommend them to everybody who's just started out with their writing career!
                            </p>
                            <p class="overview">
                                <b>Mark M. Cole</b>
                                US
                            </p>
                            <div class="star-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item carousel-item">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8 col-md-8">
                            <div class="img-box"><img
                                    src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/903eff67-9f3c-487f-3991-5fddd12b0200/public"
                                    width="145" height="145" alt="book_writing_cube" /></div>
                            <p class="testimonial">
                                BWC made my first book experience really easy. Mark was there with me whenever I had
                                questions or
                                revisions to be made and just overall helpful. His team is supremely skillful and
                                so their illustrations are one of the best I've seen so far! BWC bought my characters to
                                life in a way
                                I couldn't have imagined. I'd recommend Book Writing Cube to everyone now!
                            </p>
                            <p class="overview">
                                <b>Jason Bill</b>
                                US
                            </p>
                            <div class="star-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Carousel controls -->
            <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev"><i
                    class="fa fa-angle-left"></i></a>
            <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                <i class="fa fa-angle-right"></i>
            </a>
        </div>
        <!-- <div class="before-border-center"></div> -->
    </div>
</section>


<section>
    <div class="__ourClientsReviews">
        <div class="container-fluid">
            <span class="d-block font-30 font-50rem text-black fw-700 text-center">Book Reviews</span>
            <h2 class="font-50 font-50rem text-blue fw-800 text-center">Let’s hear what they have to say!</h2>
            <p class="font-15 font-50rem text-black fw-400 text-center">We have been delivering top-notch services to
                our
                clients, which has established us as one of the most trusted book writing, <br
                    class="d-lg-block d-none" />
                publishing and marketing company in the eyes of every author out there!</p>
            <div class="row pt-lg-5 pt-3">
                <div class="col-md-12">
                    <div class="__videoTesti pb-4">
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/995491814/rendition/1080p/file.mp4?loc=external&log_user=0&signature=32fe5036b11e17c727db995a5a67fe5098346f64653f47797f928275a64a0cf1"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos"
                                    data-caption="Client #1"><img
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/2ca08b11-7674-413d-8063-4f37ddda0f00/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/995491850/rendition/1080p/file.mp4?loc=external&log_user=0&signature=4bb8389f1131ddfd34f8e6115ecc8ad4089c8a452c57c4110b124c7c7708d99e"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos" data-caption="Client #2">
                                    <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/f657c17b-4899-4d0f-8bdb-5e9e9fdf2100/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/995490632/rendition/1080p/file.mp4?loc=external&log_user=0&signature=da4b9c78eb55e44ce0f14ba5ea87506c35140ea87ba6172b1f0879f3d8d29777"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos"
                                    data-caption="Client #3"><img
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/028f663f-4d76-44e2-ded1-382026b50b00/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/995490780/rendition/1080p/file.mp4?loc=external&log_user=0&signature=84cdd3a1c8f2859cf2d7df977f4285720c7ee9a302cd647eb38dfe51ec0e3e58"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos"
                                    data-caption="Client #4"><img
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/a01189f5-9fcf-4479-b655-fffc9b4dd300/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/995490750/rendition/1080p/file.mp4?loc=external&log_user=0&signature=db936b7294f495525237d512018f1c20f298a94bed04c630e59ac0c0e85a0b87"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos"
                                    data-caption="Client #5"><img
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/f08e1042-7718-4fb2-6337-38370287cd00/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/995490592/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6be17f4d8bbea91c94bf414a9784c21a4762ea2251e11f7a5fab422d0f8ed35d"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos"
                                    data-caption="Client #6"><img
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/b94841dc-fc7a-4aed-edb3-d8e439273200/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/999622973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a54acea0fcb9cfbb74ab338136fecba3e4deeefae9e5408588a9dc01d2361fe3"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos"
                                    data-caption="Client #6"><img
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/f1425f56-7507-4f93-7232-59b7fa5d2f00/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                        <div class="position-relative">
                            <span class="d-block">
                                <a href="https://player.vimeo.com/progressive_redirect/playback/999623002/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d7d47ac629c0251f60aa53aa5a4c5828c9e0b8b92aafcae0d36522163771c58b"
                                    class="__testiPlayIcon" data-fancybox="clientsVideos"
                                    data-caption="Client #6"><img
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/9804f300-260c-41bc-1c93-d5ac27c38d00/public"
                                        width="400" height="225" alt="testimonial"
                                        class="d-block mx-auto" /></a>
                            </span>
                        </div>
                    </div>
                    <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
</section>



<section class="backgery">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-7 text-left">
                <h2 class="font-50 font-50rem fw-900 text-blue">
                    Attention to All Bold and <span class="extraColor">Ambitious Aspiring Authors!</span>
                </h2>
                <p class="pt-2 text-black">
                    “A book is all about the verbal artificiality of reality and how well you convey your idea
                    through this—and this is what we aim to bring out. We respect the efforts of every client, as we
                    know what it takes to write a book. That’s why we try not to disrupt the original idea but make
                    it sound convincing.” – A message from teams of The Bookwriting Cube.
                </p>

                <div class="pt-2 pb-3">
                    <a href="javascript:void(Tawk_API.toggle())" class="btn btn-secondary" id="btn7">LET'S
                        DISCUSS</a>
                    <a href="tel:866-600-0036" class="btn btn-secondary2"> 866-600-0036</a>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-4 pr-0 relative animate__fadeInLeft wow">
                <div class="pt-3 pl-0 contact-form relative">
                    <div class="leadforms">
                        <h4 class="pb-3 text-center font-30 fw-900 text-black">
                            Get A Free Quote
                        </h4>
                    </div>
                    <form id="fupForm-2" class="contactform-bottom pl-4 pr-4 pb-4" role="form">
                        <!--<input type="hidden" value="https://www.bookwritingcube.us/about-us/" id="page_url" name="page_url" />-->
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label for="">Full Name*</label>
                                <input type="text" id="name" name="name" placeholder="Your name..."
                                    class="form-control" required="">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="">Emai Address *</label>
                                <input type="email" id="email" name="email" placeholder="Type Email Address"
                                    class="form-control" required="">
                            </div>
                            <div class="form-group col-md-12 ">
                                <label for="">Phone *</label>
                                <input type="phone" id="phone" name="phone" placeholder="123-456-7890"
                                    class="form-control" minlength="7" maxlength="15" required=""
                                    onkeypress="return /[0-9]/i.test(event.key)">

                            </div>
                            <div class="form-group col-md-12">
                                <label for="">Message *</label>
                                <textarea type="text" id="message" name="message"
                                    placeholder="Type Your Message Here" class="form-control "></textarea>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit" name="saves1" id="butact2"
                                class="btn btn-secondary text-uppercase fw-800  btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<x-footer />


@endsection