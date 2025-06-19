<section class="backgery">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-7 text-left">
                <h2 class="font-50 font-50rem fw-900 text-blue">
                    {!! $title !!}
                </h2>
                <p class="pt-2 text-black">
                    {!!$description!!}
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