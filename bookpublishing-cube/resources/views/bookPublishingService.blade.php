@extends('layouts.app')
@section('Title', 'The Best Book Service Offered By The Book Company in US')
@section('Description',
    'Get The Best Book Services By The Book Company That Delivers Exceptional Writing Services For
    Many Genres. Call Us Today!')
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
    <meta property="og:description"
        content="Get The Best Book Services By The Book Company That Delivers Exceptional Writing Services For
    Many Genres. Call Us Today!" />
    <meta property="og:url" content="https://www.bookwritingcube.us" />
    <meta property="og:site_name" content="Book Writing Cube" />

@endsection



@include('layouts.navigation')


<x-home-hero />

<x-logo-sliders />

<x-form-c-t-a />

<x-services />


<section class="bg-gray pt-3 pb-2 cover relative">
    <div class="container-fluid">
        <div class="justify-content-center clients-b pr-0">
            <div class="banner-clients1 pt-2 pb-2">
                <div>
                    <img width="120" height="100" class="img-fluid fil-1"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/40d1c642-456f-46af-09b1-b4290e6a7c00/public"
                        alt="book_writing_cube" />
                </div>

                <div>
                    <img width="150" height="100" class="img-fluid fil-1"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/36550884-8469-4db5-3b61-b62fc63c1400/public"
                        alt="book_writing_cube" />
                </div>

                <div>
                    <img width="150" height="100" class="img-fluid fil-1"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/04b840df-799f-4b7b-d09e-a69559f90700/public"
                        alt="book_writing_cube" />
                </div>

                <div>
                    <img width="150" height="100" class="img-fluid fil-1"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/dba11c71-29a2-405c-1a2b-0561310bd300/public"
                        alt="book_writing_cube" />
                </div>

                <div>
                    <img width="150" height="100" class="img-fluid fil-1"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/7c6e49a6-1eef-49dd-6a45-64d1e5367300/public"
                        alt="book_writing_cube" />
                </div>

                <div>
                    <img width="150" height="100" class="img-fluid fil-1"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/fdc63832-6cf5-4be7-b2f3-d6a2851a4000/public"
                        alt="book_writing_cube" />
                </div>

                <div>
                    <img width="150" height="100" class="img-fluid fil-1"
                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/7041fbef-e634-4fcc-b874-28cf45f92600/public"
                        alt="book_writing_cube" />
                </div>
            </div>
        </div>
    </div>
</section>

<x-whychooseus />



<x-portfoliocaro />

<x-blockcta />


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


<section class="backgery pt-5 pb-2" id="getaquote">
    <div class="container" id="formsection">
        <h2 class="fw-900 font-50 font-50rem text-center text-blue">Request A Free Quote</h2>
        <div class="justify-content-center text-center pt-4">
            <form class="cr-form row justify-content-center" id="fupForm-m" role="form">
                <!--<input type="hidden" value="https://www.bookwritingcube.us/" id="page_url" name="page_url" />-->
                <div class="col-12 col-sm-4">
                    <input type="text" id="name" name="name" placeholder="Name"
                        class="form-control col-md-12 mb-3" required=""
                        onkeypress="return /[a-z]/i.test(event.key)" />
                </div>
                <div class="col-12 col-sm-4">
                    <input type="email" id="email" name="email" placeholder="Email"
                        class="form-control col-md-12 mb-3" required="" />
                </div>
                <div class="col-12 col-sm-4">
                    <input type="phone" id="phone" name="phone" placeholder="Phone" minlength="7"
                        maxlength="15" class="form-control col-md-12 mb-3" required=""
                        onkeypress="return /[0-9]/i.test(event.key)" />
                </div>

                <input type="hidden" id="message" name="message" placeholder="Type Your Message Here"
                    class="form-control" />

                <div class="col-lg-4 col-md-4 pt-2">
                    <button id="homesave" name="homesave"
                        class="btn btn-secondary2 btn-block fw-900 font-30 mb-2">Get a
                        Quote</button>
                </div>
            </form>
        </div>

        <div class="row pt-5 pb-5 justify-content-center">
            <div class="col-lg-4 col-md-4">
                <h3 class="font-50 fw-900 text-blue font-50rem">Email Us</h3>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="border-left pl-3">
                    <h4 class="font-22 fw-700 text-blue">For project inquiries only:</h4>
                    <p>
                        <a href="mailto:info(@)bookwritingcube.us">
                            <i class="fa fa-envelope pr-2 text-black"></i>
                            <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/b2eb9018-ef2d-4676-2cf7-d9bb5f1b0700/public"
                                alt="book_writing_cube" width="210" height="20" />
                        </a>
                    </p>
                </div>
            </div>

            <div class="col-lg-4 col-md-4">
                <div class="border-left pl-3">
                    <h4 class="font-22 fw-700 text-blue">For other inquiries only:</h4>
                    <p>
                        <a href="tel:866-600-0036" class="text-black">
                            <i class="fa fa-phone pr-2text-black"></i>
                            866-600-0036
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<x-footer />
