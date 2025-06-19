@extends('layouts.app')
@section('Title', 'Portfolio')
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

<section>
    <div class="__publishingPortfolio">
        <div class="__smallBanner">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="__content text-md-center text-start">
                            <h1>Our Recent Publishing</h1>
                        </div>
                        <div class="__select mt-md-0 mt-4">
                            <select id="yearlyTabsChange" onchange="yearlyTabsChange()">
                                <option selected value="2024">2024</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-4">
                <div class="col-12">
                    <div id="yearlyTabsChangeContent" onchange="yearlyTabsChangeContent()">
                        <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan"
                                    type="button" role="tab" aria-controls="jan" aria-selected="true">Jan</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb"
                                    type="button" role="tab" aria-controls="feb" aria-selected="false">Feb</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar"
                                    type="button" role="tab" aria-controls="mar" aria-selected="false">Mar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr"
                                    type="button" role="tab" aria-controls="apr" aria-selected="false">Apr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may"
                                    type="button" role="tab" aria-controls="may" aria-selected="false">May</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun"
                                    type="button" role="tab" aria-controls="jun" aria-selected="false">Jun</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul"
                                    type="button" role="tab" aria-controls="jul" aria-selected="false">Jul</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug"
                                    type="button" role="tab" aria-controls="aug" aria-selected="false">Aug</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep"
                                    type="button" role="tab" aria-controls="sep" aria-selected="false">Sep</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct"
                                    type="button" role="tab" aria-controls="oct" aria-selected="false">Oct</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov"
                                    type="button" role="tab" aria-controls="nov" aria-selected="false">Nov</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec"
                                    type="button" role="tab" aria-controls="dec" aria-selected="false">Dec</button>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="jan" aria-selected="true" role="tabpanel"
                                    aria-labelledby="jan-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/riddhima.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Echoes of <br /> Resilience</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Riddhima Rai</span>
                                                    <p>"Echoes of Resilience" is a suspense contemporary fiction
                                                        novel that takes readers on an emotional journey of</p>
                                                    <a href="https://www.amazon.com/Echoes-Resilience-Riddhima-Rai-ebook/dp/B0CT8X2VZ9/ref=sr_1_4?crid=20IKYR5M097D4&dib=eyJ2IjoiMSJ9.kaAw0FZR-BNIBalw7gMcoBu8JPsZch-rYG0mX_NucnQjxp2b-bbeq5IO29ZcNg13OCxZgZpW7OwdGr7ObGCY6EwIgHFj19XElLGL2b2ye94QapMsq_Ip0sV6AlSBSwqsq5TjjlviQGTfTdyDcPbDRCLKH9MZGSGWMs-ahfUWEP2WwnwQ_zlHlCQIi6wyaRPqTU7ZWW1HguKll-wZz_g1tEak1t-hcij-HsZJefaGFVM.3QMgvHxJyNLJhSY5KLuhhU0o3_hDX39Sk752w0iyMIA&dib_tag=se&keywords=echoes+of+resilience&qid=1720486523&s=books&sprefix=Echos+of+Resi%2Cstripbooks%2C332&sr=1-4"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/bradley.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>I Just Wanna <br /> Go Home</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bradley Bisho</span>
                                                    <p>Surrounded by the charm of the Puritan farming town of
                                                        Millbrisk, East Anglia, three sisters – Janice, Gillis, and
                                                        Agnes</p>
                                                    <a href="https://www.amazon.com/I-Just-Wanna-Go-Home/dp/B0CTMJ6NW3/ref=sr_1_1?crid=36OKO58R3ZZR2&dib=eyJ2IjoiMSJ9.zltlwAbZ73h_5C5Bca8yrw.pN8U9T6bWxDsIXRfv9UtfScGlTNc0JgOHINO30iY7Eo&dib_tag=se&keywords=i+just+wanna+go+home&qid=1720556204&s=books&sprefix=i+just+wanna+go+ho%2Cstripbooks-intl-ship%2C277&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/george.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirtman</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>George Russ</span>
                                                    <p>Dirt Man originated back in the mid 1970’s as a bedtime story
                                                        told by the author to his three youngest children at the
                                                        time.</p>
                                                    <a href="https://www.amazon.com/Dirtman-George-Russ-ebook/dp/B0CS58L8P9/ref=sr_1_1?crid=27IMZ9OSKLJ1Y&dib=eyJ2IjoiMSJ9.WpKvgn88e7jOXEOcEQGgLA.f-8hOeUu3Kdo1dbeoQtaxPNNrBoLhJf_6caPfe2NcAE&dib_tag=se&keywords=dirtman&qid=1720558143&s=books&sprefix=dirtman%2Cstripbooks-intl-ship%2C263&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/bob-baio.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Japan Time Travel: Then, Now and Beyond</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bob Baio</span>
                                                    <p>Originally, the plan was to release this book ahead of the 2020 Tokyo Summer Olympic Games. However, as fate</p>
                                                    <a href="https://www.amazon.com/s?k=japan+time+travel&i=stripbooks-intl-ship&crid=2L4256V5N1UPZ&sprefix=japan+time+trave%2Cstripbooks-intl-ship%2C276&ref=nb_sb_noss" target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/dennis-adjepong.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Interview the Interviewer : Series Vol 1</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Dennis Adjepong</span>
                                                    <p>He has a thirst for researching the field of neurosurgery/Neuroscience and Computer Science. Adjepong graduated</p>
                                                    <a href="https://www.amazon.com/Interview-Interviewer-Vol-Dennis-Adjepong-ebook/dp/B0CTFSM7QP/ref=sr_1_1?crid=2PMG3E04GE4OQ&dib=eyJ2IjoiMSJ9.kXQ7h_nUS8r2893TGEBY9IbH0c6_VB5-dCE78ZtWGkNNnfv31hJheQR4VPWEw292ODgD8DQ6NfeQ67-lSDb5Z8y-Dm2CinpcRXBE5PqHNCMPYfbtdCMatVClgAyUf8zkBizgOKU-IlqkzFf2hkpba-zbfG_bLyZi1Rbap8cD-DEa6bmfmH_3WkNMGGnfYzbFdOPg_ze-TkroSU--SkUs3muCDdit9-YxPZmX0vsMx50.sHxQgBZjdkXqh1T8DM_4i3332yi9Rkimm27PUxnWQmo&dib_tag=se&keywords=interview+the+interviewer+series&qid=1720738223&s=digital-text&sprefix=interview+the+interviewer+seri%2Cdigital-text%2C341&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/james-bridges.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Bamboo Boogeyman</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>James Bridges</span>
                                                    <p>Jump into the exciting world of “The Bamboo Boogeyman,” a thrilling memoir of a Vietnam veteran’s life.</p>
                                                    <a href="https://www.amazon.com/Bamboo-Boogeyman-James-R-Bridges-ebook/dp/B0CSXKCP3N/ref=sr_1_1?crid=YEU63RD1C3F8&dib=eyJ2IjoiMSJ9.x2WT-8ozpsz6QwVkGZTrVQ.AwUna4e1bvyorUBznH_havrERsuuYBJeAhJX18HVFZ8&dib_tag=se&keywords=bamboo+boogeyman&qid=1720739501&s=digital-text&sprefix=bamboo+boogeyman%2Cdigital-text%2C345&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/joan-ritchey.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>JERRY’S MESSAGE HOME</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Joan Ritchey</span>
                                                    <p>At the age of 14, Jerry was gifted an upscale guitar while in college. Subsequently, he, along with two friends,</p>
                                                    <a href="https://www.amazon.com/JERRYS-MESSAGE-HOME-Joan-Ritchey/dp/B0CSXW4V6M/ref=sr_1_1?crid=6Z477YUX5I9Z&dib=eyJ2IjoiMSJ9.eYUHTK31sIR7IvdRFMHQlKbOAlmo94CfTEST9hkpPma9zKRqYkbnu_Ypa7u5yTi4cKf6q7COLOpOdBCVKSJbTvB1SKcAgwcWwO54DZ52al_qxEXLPIat3mDt_rebpNlJBh1Qsh1Gko1TG_Lv7GoSC4qYTPHEz0-t7Sn-IWaabjMPrlNpTn6Zpaibc9q5eJxc1rBeCtxYaesFx8YaesfF2Xsejf6cuoUmmLT31sxak0U.Fa9CUuNL9ysGPuvIN4b5Ig1TjnBFxHCvFrBHawJaC-I&dib_tag=se&keywords=jerry%27s+message+home+joan&qid=1720740137&s=digital-text&sprefix=jerry%27s+message+home+joan%2Cdigital-text%2C338&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/kourtney-reed.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Kushite Bully Empire</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Kourtney Reed</span>
                                                    <p>In this guidebook, I aim to provide assistance and guidance to aspiring breeders and owners, offering detailed</p>
                                                    <a href="https://www.amazon.com/Kushite-Bully-Empire-Kourtney-Reed/dp/B0CT5CBCQV/ref=sr_1_1?crid=2C4XW1NJE3GEF&dib=eyJ2IjoiMSJ9.m7pxg3OCm7kYE_zMrfp6Aw.UyiEQqwnjKyeySVrp4vXAnTA_DnRjiGx84SH_q2ThoQ&dib_tag=se&keywords=kushite+bully+empire&qid=1720741846&s=digital-text&sprefix=kushite+bully+empire%2Cdigital-text%2C336&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/lisa.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Moonchild</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Lisa Garcia</span>
                                                    <p>You deserve that space Don't let others make you feel small
                                                        You are magnificent Share it with the world</p>
                                                    <a href="https://www.amazon.com/Moonchild-Lisa-Garcia/dp/B0CSR9WHFG/ref=sr_1_1?crid=2DXO2D2FF0I5G&dib=eyJ2IjoiMSJ9.fIe772cbjmXNTHujhAWXbtsmuv7u5LaaucqbitG1NiQ.p8UmWcpxpSKMexLrYPhot1lkb7c5Y9QY5QZuRMeck2s&dib_tag=se&keywords=moonchild+lisa+garcia&qid=1720742035&s=digital-text&sprefix=moon+child+lisa+garcia%2Cdigital-text%2C327&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/pj-murray.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>SOUNDS</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>PJ Murray</span>
                                                    <p>Maggie Abrahms, a faithful doctor nearing retirement, experiences a life-altering hit-and-run accident, leading</p>
                                                    <a href="https://www.amazon.com/SOUNDS-PJ-Murray-ebook/dp/B0CT26138P/ref=sr_1_1?crid=1Q8T1I45GN0J2&dib=eyJ2IjoiMSJ9.ReVsyREs8wIYhGvctUeqfw.BInt-zWeYcf8bERfsW--GjlZnumhVKj0SQe-F9NjBF8&dib_tag=se&keywords=sounds+pj+murray&qid=1720743666&s=digital-text&sprefix=sounds+pj+murray%2Cdigital-text%2C341&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/drapril.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>BEING <br />CHRIST-LIKE</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Dr. April Capiña</span>
                                                    <p>The author skillfully guides readers through a transforming
                                                        journey in this biblical account in order to strengthen
                                                        their resistance</p>
                                                    <a href="https://www.amazon.com/BEING-CHRIST-LIKE-Dr-April-Capi%C3%B1a-ebook/dp/B0CTXN4BPS/ref=sr_1_1?crid=DKYC8U1UNN4I&dib=eyJ2IjoiMSJ9.pLPW7xwZKTvEr3xCs8umt8onu0DeBpNqBw0fnIhYPfqib3DL2YZpm8efQGvMCLdlHYRIMJMK-haqAB0qMsGMNS3E9qyzwp7FIUO1JBUIONushNiONnJLv5KoAC9kC5gYMgmwrpjJcD3Mq2r5j0q9Itcw8PfDCLZ21TYZ5CzJinZfRrAEc2zkjf25reWSPtFGii0TGyFJlt38MPQqQd2YQ9ttP8f0nxJ6cYrQwxj64dw.1kta9T808dcsNC3BCuSQtpqiPHkGglL1x0zFJgTp4q0&dib_tag=se&keywords=being+christ+like&qid=1720557711&s=books&sprefix=being+christ+li%2Cstripbooks-intl-ship%2C271&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/zezaf.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Maati In Belgium: An Inspiring Story Of Immigration</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Mohamed Zefzaf</span>
                                                    <p>Maati in Belgium is an inspiring and unique
                                                        semi-autobiographical children's story about immigration as
                                                        experienced by Maati,</p>
                                                    <a href="https://www.amazon.com/Maati-Belgium-Inspiring-Story-Immigration/dp/B0CWFD7TPP/ref=sr_1_1?crid=1VYEJXYZAXDC0&dib=eyJ2IjoiMSJ9.utGzVLWNe4K5IyhK8pVO0emYF44Wl7T5s3pdNxu2MkQ.AdxMd00EvYWH-vco3SrVvpACngvtq3lkN-y1qOfMz5E&dib_tag=se&keywords=maati+in+belgium&qid=1720566367&s=books&sprefix=maati+in+%2Cstripbooks-intl-ship%2C250&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/david.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Who Am I?</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>David Lemmer</span>
                                                    <p>Who am I? the existential question that lingers in the minds of many. Through the Internal Family System module,</p>
                                                    <a href="https://www.amazon.com/Who-Am-I-David-Lemmer-ebook/dp/B0CTWDCVDN/ref=sr_1_1?crid=30W0CHMIA49X3&dib=eyJ2IjoiMSJ9.2wT7x_obW8Thr2AJik2hPg.cjdgyuHn7frwxxpbp7ywvAeD7C-bMCrRFxvkMmOi5O8&dib_tag=se&keywords=who+am+i+david+lemmer&qid=1720738022&s=digital-text&sprefix=who+am+i+david+lemme%2Cdigital-text%2C355&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/ray-slater.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Baja Bay</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ray Slater</span>
                                                    <p>A desperate mother seeks help for her troubled son. A few weeks with the boy's grandfather is her last hope.</p>
                                                    <a href="https://www.amazon.com/Baja-Bay-Ray-Slater-ebook/dp/B0CTYQXCZZ/ref=sr_1_1?crid=1MPYSOXDD6G76&dib=eyJ2IjoiMSJ9.rEqwU4GrFWsSYmD6892Yete97suidp5HqHJUQ8ZaU98EMC6UCtDLdP_MhRCQKFGoxcTv6q9QqJf8iV4_mK1pzQ.QcdcIy8NKGY2vY7fodGHlIvFRL9TWbPQlSHIS6fbLi0&dib_tag=se&keywords=baja+bay&qid=1720744124&s=digital-text&sprefix=baja+bay%2Cdigital-text%2C333&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/stephen-muliokela.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>The Grand Leadership Strategy: MASTERING THE ART OF LEADERSHIP</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Stephen Muliokela</span>
                                                    <p>In "The Grand Leadership Strategy," Thought Leader: Stephen A. Muliokela presents a transformative guide</p>
                                                    <a href="https://www.amazon.com/Grand-Leadership-Strategy-MASTERING-LEADERSHIP-ebook/dp/B0CW24RH7V/ref=sr_1_4?crid=15XDQFEPD0R3X&dib=eyJ2IjoiMSJ9.wluw9rRgmNhOweE-QFj3cj4heKx-6FUKMpC1d2ta4d7ReuVxrwmxHGD0FQptfwljKLL6aLHpXQC_S-4zry5bwsnuJHjvTRztZ_JUXKluHSoW9aw0B9IxhsJzm83t8c2BvCpmhgXaTnMcKyNY89y0iW42pfwaV2w7-vnwcAlmUIfJSSuGz1sYY65ANwZiIH1SD5nGQGWpLe7PHeL-9yo_OH5TflciCmsqNt1eQa0OtUQ.YFBi4K7LrCRctu4Woxx8UGt2LynxcOmnAYd-_ywESmk&dib_tag=se&keywords=the+grand+leadership+strategy&qid=1720744556&s=digital-text&sprefix=the+grand+leadership+strategy%2Cdigital-text%2C348&sr=1-4"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-md-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/abdirrazak.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>U.S. CITIZENSHIP AND IMMIGRATION EXAM</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Abdirazak Qasim</span>
                                                    <p>Learn and successfully pass the United States Citizenship
                                                        Exam with Abdirazak Qasim's comprehensive guide.</p>
                                                    <a href="https://www.amazon.com/U-S-CITIZENSHIP-IMMIGRATION-Abdirazak-Qasim-ebook/dp/B0CWYYHPG6/ref=sr_1_2?crid=2KAY0XSUOP4R5&dib=eyJ2IjoiMSJ9.Di_UnXoLfozpnqjUk1CYDmvgazT-csfeHjLFOeLJv_v0sMXpq8wTo1QONpTJdjcVvblM8mkc7ezmdAI5pjaC4A_cyfFAxRZv7RyK6pPOjB7x8xIWHT6aMfVYsrinFeVgukaRr-1sEXDxx-8GFmk8c2gfvghWzu48akK4_IKvtJq9OpwQIxAObRfWQJTfzhGNt2et--DLl2flIiajsDxOLkK0O3YFymkI8Wq35cB3qNE.YSOYiAh_MOSQu8s5oEiGRibNxKfn3WIf2BahB0EZT3E&dib_tag=se&keywords=us+citizenship+and+immigration+exam&qid=1720553018&s=books&sprefix=us+citizenship+and+immigration+exa%2Cstripbooks-intl-ship%2C253&sr=1-2"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/bert.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Sam R. Squirrel Unlikely Hero</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bert Haagenstad</span>
                                                    <p>Join Sam R. the flying squirrel and his adventures when he
                                                        becomes part of
                                                        the Hazelwood School for The Mystical Arts.</p>
                                                    <a href="https://www.amazon.com/Sam-R-Squirrel-Unlikely-Hero-ebook/dp/B0CXYM4DQZ/ref=sr_1_1?crid=TGLWY07FUQZW&dib=eyJ2IjoiMSJ9.ysxC7RA3N-vHwuB8CEvx22c1e9Dwxtv-MX2QUC49rHnGjHj071QN20LucGBJIEps.EExzlUKu6s0zWb6hj76CaK46F3jzSbUXOWnuBb09aYY&dib_tag=se&keywords=sam+r+squirrel&qid=1720555730&s=books&sprefix=sam+r+squirrel%2Cstripbooks-intl-ship%2C281&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/leonard.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Chiropractic Odyssey: A Journey of Practice, Seminars,
                                                        Observation and Reading Science</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Leonard Faye</span>
                                                    <p>Dr. Faye, a professional Chiropractic doctor, released a new
                                                        book, “Chiropractic Odyssey – A Journey of Practice,</p>
                                                    <a href="https://www.amazon.com/Chiropractic-Odyssey-Practice-Seminars-Observation/dp/B0CY3CG8N8/ref=sr_1_1?crid=F820UG8LYZGV&dib=eyJ2IjoiMSJ9.A5tQBdnPkA4CH-U5Fae3rY3ZVuhVzvqvDrlbefy_dFHqMVBGL5YEP-OfKvCw0momcu2SxdjhRPAaE0m9ABJ6q3fklHJlEQImpjh_9Nn_Kc4.Su_IrdnDwYCM7XPC8HttMQij-kn3qADf9uuyFEG0cwM&dib_tag=se&keywords=chiropractic+odyssey&qid=1720562961&s=books&sprefix=chiropractic+odyssey%2Cstripbooks-intl-ship%2C279&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/skyeabellanosa.webp"
                                                        alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>I AM <br />BECOME</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Skye Abellanosa</span>
                                                    <p>Not everyone is comfortable or has someone they can share
                                                        their feelings with, causing them to bottle up their
                                                        emotions.</p>
                                                    <a href="https://www.amazon.com/I-AM-BECOME-Skye-Abellanosa/dp/B0CXGCKLK4/ref=sr_1_2?crid=2CQ3NZB6E2AOL&dib=eyJ2IjoiMSJ9._xdmccQrTSnQdPf8l0OTpVYD8tFyDgNioAOIAxb7ZA02hEOqK6dGBH9IbGTz38CWJjPyFgCU18T9kOwgRZ0UFiD2-LzN8balzznn1wr0qDXWElsgkNgBQ8WC_TJG5iOzk5licGtKv5yuKtSnSUSFaHlNaXfYhTHjL3xoBGfwRZsCg9AylnT701r98vt1ey9f4qANxBtFMbIz6XfsY7IKAwA6iV6Yc9SYi6TXDRnwoLA.YnuYJJm7wli6Cjvw1CD-tIFrx35oWCvBYgVnyZo0TU8&dib_tag=se&keywords=i+am+become&qid=1720564962&s=books&sprefix=i+am+become%2Cstripbooks-intl-ship%2C270&sr=1-2"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/craig-shawn.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Let’s Feed Some Kids (Global Child Hunger Book 1)</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Craig Shawn</span>
                                                    <p>Ending global child hunger seems like a straightforward task, right? Think again. If it were truly that simple,</p>
                                                    <a href="https://www.amazon.com/Lets-Feed-Global-Child-Hunger-ebook/dp/B0CZCN5V4Q/ref=sr_1_1?crid=BWMPOSVZ09FN&dib=eyJ2IjoiMSJ9.nPQF1PIPAsQQFzFmqCN_8KVyBCcVUrCVK_7CTuCwlmhSKhFUVU3Ivq_NR0sNV_DS0Gsea-iNe0zXooqB3lFxxeAP6F8yfJGh-XGjBQPyg7g.6MV2eZ3tGkUlvSW5KI_ovuq2iR-DMszE3-G72KRvE8Q&dib_tag=se&keywords=lets+feed+some+kids&qid=1720737106&s=books&sprefix=lets+feed+somr+ki%2Cstripbooks-intl-ship%2C381&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/frederick.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Follow Your Dreams</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Frederick Russo</span>
                                                    <p>John Ross, a second-generation Italian, experienced grief for the first time, and his life took an unexpected</p>
                                                    <a href="https://www.amazon.com/Follow-Your-Dreams-Frederick-Russo-ebook/dp/B0CWZ8RT11/ref=sr_1_1?crid=O8YGP6FMOGAC&dib=eyJ2IjoiMSJ9.GuZhSGKzxfZxpxgpQOz6N4Ppj5DDD3jpU7llvJVuaopWbSJi9yTQZI0ZG0Q6V0V_n-VGPCYvhmHXtD0xiNk4Gg.O29d-1Aefh1e_IEo1jNC7vzkxe6x0Xuo5jwRW-IB89A&dib_tag=se&keywords=follow+your+dreams+frederick&qid=1720739072&s=digital-text&sprefix=follow+your+dreams+frederi%2Cdigital-text%2C349&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/guy-kornblum.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Mediation Advocacy HandBook: Member, California and Indiana Bars</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Guy Kornblum</span>
                                                    <p>This is a collection of Mr. Kornblum’s columns that he wrote on mediation advocacy as a Fellow of the Litigation</p>
                                                    <a href="https://www.amazon.com/Mediation-Advocacy-HandBook-California-Indiana-ebook/dp/B0CWB45MXC/ref=sr_1_1?crid=19JYZFM24SC5Y&dib=eyJ2IjoiMSJ9.hIlzhpXw5YT_mNDZq-0GNm-j8jTzbMm2QyB8TsEluwI.xeT0oAwp4bcQPNc8vZ1mApHZVP4EpmfksADpSkkhjMQ&dib_tag=se&keywords=mediation+advocacy+handbook&qid=1720739288&s=digital-text&sprefix=mediation+advocacy+handbo%2Cdigital-text%2C347&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/james2.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>She Lived Happily <br /> Ever After</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>James Teague</span>
                                                    <p>The inspiration for this book came from having to explain to my small children why daddy sometimes leaves</p>
                                                    <a href="https://www.amazon.com/DADDY-Always-Comes-Back-Home-ebook/dp/B0CYRFYRL8/ref=sr_1_1?crid=2WER2NCYFDSTJ&dib=eyJ2IjoiMSJ9.FGGo1BQ6pm88kcUzwhY-kbX7-y3y-b3oIM9bTXFXFRzYkxkEMttI1gBhGgDt4hHJ.vLCIKnkw3jAdKphj30_t4nQk988iUG7_1Ahn4vk0KeA&dib_tag=se&keywords=daddy+always+come+back&qid=1720739751&s=digital-text&sprefix=daddy+always+come+back%2Cdigital-text%2C379&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/rafael.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Elucidation of a Historical Falsehood: The Old True Original Historical Reports On “Jean Baptiste Point De Sable.”</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Rafael Pérez</span>
                                                    <p>In "Elucidation of a Historical Falsehood," author and retired surgeon Rafael Pérez Guerra explores the life and legacy</p>
                                                    <a href="https://www.amazon.com/Elucidation-Historical-Falsehood-Original-Baptiste/dp/B0CXMPMSJ3/ref=sr_1_1?crid=3KWA2UX7IMFQ9&dib=eyJ2IjoiMSJ9.D_7XXdnWSroow3YOeDBFq3XLUjIuIrNoWd11y8kr1W0.iSAYvNnacJWpcQjHydOMsSwocZ67i0Z6vl9QIKXaVVY&dib_tag=se&keywords=elucidation+of+a+historical+falsehood&qid=1720743981&s=digital-text&sprefix=elucidation+of+a%2Cdigital-text%2C337&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/tio-tomas.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Divide and Conquer Equals Plunder: Poverty Creation Nation</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Tio Tomas</span>
                                                    <p>An introspective review of the “thirdworldization” of America during the last fifty years. It has been said that cleanliness</p>
                                                    <a href="https://www.amazon.com/Divide-Conquer-Equals-Plunder-Creation-ebook/dp/B0CY78YZV6/ref=sr_1_1?crid=3V4AHNQJSU1T4&dib=eyJ2IjoiMSJ9.1FVvCHlk9EwT48u7xb5F6_E0YHiWIidigDmkZeollN8.x5AVpInKrk9AbihrnWkQmb2z6iNkagPhoP8XArBCS5w&dib_tag=se&keywords=divide+and+conquer+equals+plunder&qid=1720744764&s=digital-text&sprefix=divide+and+conquer+equals+plunde%2Cdigital-text%2C236&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/arjun.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Awesome Narsimha Friends: Battle With Asuras</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Arjun Chervu</span>
                                                    <p>Join the Awesome Narsimha Friends (ANF) Crew as they face a
                                                        sudden and unexpected threat in "The Return of the Asuras."
                                                    </p>
                                                    <a href="https://www.amazon.com/Awesome-Narsimha-Friends-Battle-Asuras/dp/B0D2VDFW93/ref=sr_1_1?crid=1NOH24TKKA4VW&dib=eyJ2IjoiMSJ9.hH4G7tfQ9i-Ui7WeqIif1Q.4xbHzCUzixtBKLQHnOzkWdTY0xK6z0Q9wAJnVj3isPA&dib_tag=se&keywords=awesome+narsimha+friends&qid=1720555250&s=books&sprefix=awesome+narsim%2Cstripbooks-intl-ship%2C276&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/carey.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Off He Goes</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Carey Trahan</span>
                                                    <p>Carey Trahan married into a wonderful Cajun family that
                                                        completely changed her life. After teaching at various
                                                        schools</p>
                                                    <a href="https://www.amazon.com/Off-He-Goes-Carey-Trahan/dp/B0D2QR6DF2/ref=sr_1_1?crid=5QBCUIPECGLH&dib=eyJ2IjoiMSJ9.G5mxQ77ypW29uJ9qJUs_LF9_-QkfVcTcx9K3UNsdxwHJMrqTYJIEV8rs3AcHMG7FFRbkXo8ntNn_lFsetiTOr7Pc0mHeJxak3P85LIMI4tPvPjBBEw7wY4Ib-R8w9k5O.101lASI4VWkEOS03-B85MC0f1xKjjgy9bCc_d2x712A&dib_tag=se&keywords=off+he+goes&qid=1720556578&s=books&sprefix=off+he+goes%2Cstripbooks-intl-ship%2C264&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/sharon.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Reclaiming the Self: A Journey of Healing</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Sharon Alexander</span>
                                                    <p>Growing up with narcissistic parents, Sharon Alexander
                                                        survived the insidious cycle of abuse. She experienced
                                                        firsthand</p>
                                                    <a href="https://www.amazon.com/Reclaiming-Self-Journey-Sharon-Alexander/dp/B0D1NBSX6N/ref=sr_1_2?crid=2V5YIE6BSALS4&dib=eyJ2IjoiMSJ9.zu8iEsR3tDIIpM7di4HqFmFleRkPMcTbC9yjVlGkWjT8AatAfXmaC0yQuUY_cZ85WL-fqEvxglBkN7z29wO50Ytx9AfSGQQyd6zT6hLmEfeHeECO2jpgWhdKHusK5I4XAURXUdTjOlZ_RywgbVVmhSDMY0DASBtn4sZ0zejZgHV1yKzU0-qbwooZLEBd3xdo_ZeDHIU79MFdRnh195cPTwK403WH12OFRBnJaNi811g.GPeg-ctrFhLJ5CRDGB8HTvDnyVo3WrvgRVg9-1Sez9Y&dib_tag=se&keywords=reclaiming+the+self&qid=1720564775&s=books&sprefix=reclaiming+the+self%2Cstripbooks-intl-ship%2C270&sr=1-2"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/steve.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Real Life <br />Rants</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Ricke</span>
                                                    <p>Real Life Rants is a collection of humorous stories the
                                                        author lived through as well as ideas that became stories.
                                                    </p>
                                                    <a href="https://www.amazon.com/Real-Life-Rants-Steve-Ricke-ebook/dp/B0D2BSXK9R/ref=sr_1_1?crid=3K44753GLSIWS&dib=eyJ2IjoiMSJ9.aFF8Y9epsTzhuAB6HG8VfEKCKwC9ENOaX7iymFuaq7A-O7EIbOHVIJS15kUMKIX9iLYt6qzP0GcoLCxRMS97dOnTyTabJ0Ki1ge11WvR-1KMA80PNLlsRg3iKeL-DSpiaCkd5Kg78ZPXYb-BXlvKC0pNwf8NiwQ8MiD3wQ7BovFpPD4w08ZDArupQycKMvjA67B8MriFmd-X2F9GjbJAEdvhnUy0bEvmfBwTNek1kFY.4JyTWVpu4iLRzhLp13I447wtb33IhUmrnnggbVBNDeg&dib_tag=se&keywords=real+life+rants&qid=1720565527&s=books&sprefix=real+life+rant%2Cstripbooks-intl-ship%2C279&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/john-winner.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Sunset Mindset</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>John Winner</span>
                                                    <p>Betty always gets what she wants,and always has.Her husband Bill is soin love with her he has tolerated this personality</p>
                                                    <a href="https://www.amazon.com/Sunset-Mindset-John-Winner/dp/B0D33DDSXJ/ref=sr_1_1?crid=2N7G5LOA190N8&dib=eyJ2IjoiMSJ9.jdbKmaYv_U_Zqk4LzLOeXdRsTVy_cyo_T5Gq5ssAYuumU6mhhkX-uN8-8j0HJ4lLLiZpSQwLEF0cSCmo0_683Dg14wzsuslxZGCz5djFWaiIXFixp0puGGojCEbkxpqRv4PiVpEIrqHkDLDLC9OKYA.wVm-39ijO6i916gU-zitGZtpDMdPQOT-8JUYlvQ81Lo&dib_tag=se&keywords=sunset+mindset+john&qid=1720740388&s=digital-text&sprefix=sunset+mindset+joh%2Cdigital-text%2C336&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/john-austin-snook.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>CROSS BLADE CHRONICLES : VOLUME I THE BLADE’S EDGE</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>John Snook</span>
                                                    <p>Eve is breaking on a time of fragile peace amongst the nations, and an old enemy that once conquered the world</p>
                                                    <a href="https://www.amazon.com/CROSS-BLADE-CHRONICLES-BLADES-EDGE-ebook/dp/B0CW1FWNGW/ref=sr_1_1?crid=2PV98WLOB9XPX&dib=eyJ2IjoiMSJ9._i3uLJQMSsbf3yvXNCig0ztwh-tiwUkJumz3G012L2F56Utgx_Zke4pACVIlP0tuA0Z3G8PMdWJhv5G5lZi_AdfRYKlqYMbM7OuR-tV5sfFx8WG9Sf1V9IhhCW_fQzx6NaANzsiZ4BGyRICsJqPwASWZ3YLEmVphxmQ38Qy9HJ_oIQwGyvI5Bid-NR716A-T7I6oyX_uiE7FX2IC-I_8wMsviCqyEmFmRtH5s3RDIvw.zoCS75Ud-OWCGcxmia8-Feu-Ehha2PrqQgIZAQqI5mk&dib_tag=se&keywords=cross+blade+chronicles&qid=1720740555&s=digital-text&sprefix=cross+blade+chronicles+volume+i+the+blade+s+edge%2Cdigital-text%2C618&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/manuel.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>365 Lessons on Living a Successful Life</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Manuel Parham</span>
                                                    <p>The lessons that are presented here are for you or anyone so that you can live a life of success. These lessons</p>
                                                    <a href="https://www.amazon.com/365-Lessons-Living-Successful-Life-ebook/dp/B0CW1JWQZF/ref=sr_1_1?crid=HDI9QF7IYODQ&dib=eyJ2IjoiMSJ9.3ze_r6ZmYiQKLWm9o16R8A.wc5wGw0catTEFdL6mrxx_oSYlvKhvVUjFbbCBe4F-Ug&dib_tag=se&keywords=365+lessons+on+living+a+successful+life+by+manuel+t.+parham&qid=1720742188&s=digital-text&sprefix=365+lessons+on+living+%2Cdigital-text%2C329&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/luc-gerber.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>LIFE IS <br /> AN ILLUSION</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Luc Gerber</span>
                                                    <p>I am fortunate enough to have had a chance to live in a wide variety of places and meet some amazing people</p>
                                                    <a href="https://www.amazon.com/LIFE-ILLUSION-Luc-Gerber-ebook/dp/B0CW1N9T26/ref=sr_1_1?crid=2TKF5NCA8RKPP&dib=eyJ2IjoiMSJ9.EpZo8iJqAwLmwBbrXcpHlBBItmwxIVWOU3l-lOALDjtfUbK4UEmpfb6Q4iAlPPnjtS6gJGiXQq81-0hIO7Io8JGxHdn5J8upKD11UMC8ZL6YrWRoIiC-nUXm29bRaniYhE4m_SHty5QABLEb25cRhRgxL-7dqcy1A9OTn2ZNcsIoKZdoIOw3WatOOcdVKxGDSuCjDjDr59XvkYTffnTZngVNNNEtkoKbOGJgqChErlc.yEA9QTFlIos3BPUW4q_Y66rQKwC0ydJgT6vf5HQ5HBY&dib_tag=se&keywords=life+is+an+illusion&qid=1720742377&s=digital-text&sprefix=life+is+an+illusio%2Cdigital-text%2C347&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/cindy.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Little Red Running Shawl: Latest Edition</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Cindy Larocque</span>
                                                    <p>Tansi! Cindy Larocque nitisikason, Maskwacisik oci niya. Hello, my name is Cindy Larocque and I am from Maskwacis,</p>
                                                    <a href="https://www.amazon.com/Little-Red-Running-Shawl-Latest/dp/B0D1GCNVXX/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.D9h5Jrt16Dz5UC88ohwBOg.3sx9FljfUf55UwZOSd5ONL6ori3R7WmajLJGevs-NDE&qid=1715899505&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/leslie.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>The Dominion Construct: Take Control or Be Controlled</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Leslie Golliday</span>
                                                    <p>Control, control, control, is what people most desire. When people complain about their lives, it’s because</p>
                                                    <a href="https://www.amazon.com/dp/B0D1VW6J9P?ref=cm_sw_r_cp_ud_dp_N1H10T47PRQK3A591ES8_1&ref_=cm_sw_r_cp_ud_dp_N1H10T47PRQK3A591ES8_1&social_share=cm_sw_r_cp_ud_dp_N1H10T47PRQK3A591ES8_1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/craig-shawn2.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>The Sustainable Charity: Feeding Children WORLDWIDE Through Charitable Innovations (Global Child Hunger Book 3)</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Craig Shawn</span>
                                                    <p>This book is the result of eight years of dedicated work addressing the child hunger crisis. My experiences have exposed</p>
                                                    <a href="https://www.amazon.com/Sustainable-Charity-WORLDWIDE-Charitable-Innovations-ebook/dp/B0D5C1MRGN/ref=sr_1_4?dib=eyJ2IjoiMSJ9.8uuV8rGEURfY11z0NduHZYcpv4Q39GHbT-A7k5DUkc8wiluqpiO3STt2Tb4zWWEK.oE1_zsIlKrWLqH9CGJEVjY2zJETG9kBxGEjM0qMPCj8&dib_tag=se&qid=1720737436&refinements=p_27%3ACraig+Shawn++Williamson&s=digital-text&sr=1-4&text=Craig+Shawn++Williamson"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/dr-maxwell.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>THE UNDERLYING CAUSES OF MENTAL ANOMALIES: The basics that psychiatrists and psychologists missed</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Maxwell Nartey</span>
                                                    <p>In The Underlying of Mental Anomalies, Dr. Maxwell Nartey, for the first time in the history of the world, uses the science</p>
                                                    <a href="https://www.amazon.com/UNDERLYING-CAUSES-MENTAL-ANOMALIES-psychiatrists-ebook/dp/B0D3R67XY5/ref=sr_1_1?crid=2E7UZ38HE94UG&dib=eyJ2IjoiMSJ9.f_JotGxeg-7f8JxmvU0o4w.RPJqpD0IBz558pqHDci5VP76TaDMyO12p2xR1R4_PEk&dib_tag=se&keywords=the+underlying+causes+of+mental+anomalies&qid=1720738672&s=digital-text&sprefix=the+underlying+causes%2Cdigital-text%2C336&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/melanie.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>TO THE <br /> ENDS OF EARTH</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Melanie Seeger</span>
                                                    <p>To the Ends of the Earth is an autobiography by Melanie Seeger about the few incredible years she spent living in Pakistan,</p>
                                                    <a href="https://www.amazon.com/ENDS-EARTH-Melanie-Seeger/dp/B0D3SQ4Z2T/ref=sr_1_1?crid=1OFQZOS9W3TIH&dib=eyJ2IjoiMSJ9.LujGCZy8D0811nyhiHjLsiZMN3_NlU4vULkQFSkrDCUNIkohGf8UaFsnn91P8opx.z6UO58e7v5umb7o332YWVGLmETG0nGlEm3Pon_bpmh4&dib_tag=se&keywords=to+the+end+of+the+earth+melanie+seeger&qid=1720743101&s=digital-text&sprefix=to+the+end+of+the+earth+melanie+seege%2Cdigital-text%2C345&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/ram-srinivasan.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>THE CONSCIOUS MACHINE: FROM ARTIFICIAL TO ENLIGHTENED INTELLIGENCE</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>RAM SRINIVASAN</span>
                                                    <p>In a world defined by accelerating technology and change, explore a visionary framework to shape our interactions</p>
                                                    <a href="https://www.amazon.com/CONSCIOUS-MACHINE-ARTIFICIAL-ENLIGHTENED-INTELLIGENCE-ebook/dp/B0D48GRG2G/ref=sr_1_1?crid=PSVA6MHX766I&dib=eyJ2IjoiMSJ9.mM6AdcoQ0wtAIXPdDgqGDUnI7XyTf0CvJBaVbIXXVkQqNjjnwSmE5PlGCgT6gkmflrXapchqSrh-5HtbDQp_dcPYebwckSYHBBjhVvULD_j0ybTO8DlEVws-E6ZvzaTRtrSWC3R080WI9Sl60x8dQ4J_u7micBkHsOPu7sNhtO0aYTgUkOpUgQUQv-DHqekO_svKUbpjtD4W68SPyb7LmtiVrB1MtukXq-EUqiTpQ8c.6BmzlSe2Tth5sl7WprcFrwu93LJc-qcPEGXGCMZyzII&dib_tag=se&keywords=the+conscious+machine&qid=1720744276&s=digital-text&sprefix=the+concious+machin%2Cdigital-text%2C354&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/christopher.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Hell to Heaven: An American epic story and poem</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Christopher Vincent</span>
                                                    <p>A man has an encounter with hell, reveals the description of it waiting outside the love of God. Emotional</p>
                                                    <a href="https://www.amazon.com/Hell-Heaven-American-epic-story-ebook/dp/B0D5G4K9VW/ref=sr_1_1?crid=2W6W9LFYOLGM3&dib=eyJ2IjoiMSJ9.M_3TC91gFImEnEgEpE_Vo5QLB8Fmq1Bxmev00Z-QDwsNoIKG_pAwpaZvFHUhiSWV7LSdwB8vx9kFogcUboELOiI_C_jj7MjE3C1xZp1d1NY.NZZLVhWfU6JVlp6XTU_OKJE5jxqEu4MxrFT0HpGJ4VE&dib_tag=se&keywords=Hell+to+heaven+by+Christopher+Vincent&qid=1720481544&sprefix=hell+to+heaven+by+%2Caps%2C368&sr=8-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/willie.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Jehova Rapha : The Lord That Heals</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Dr. Willie Taylor</span>
                                                    <p>In "Jehovah Rapha: The Lord Who Heals," Dr. Willie Taylor explores the philosophical significance of healing</p>
                                                    <a href="https://www.amazon.com/Jehova-Rapha-Lord-That-Heals-ebook/dp/B0CXFLCGYX/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/kris-cooper.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Horqinum's Apprentice (Lugeri's Vineyard Book 1)</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Kris Cooper</span>
                                                    <p>After being thrown into a new world, Virgil Carverson has to deal with lost memories while fighting to stay alive</p>
                                                    <a href="https://www.amazon.com/dp/B0D5DFJ7PK?ref=cm_sw_r_cp_ud_dp_35PR8ZZ3MRRPRRH84YKW&ref_=cm_sw_r_cp_ud_dp_35PR8ZZ3MRRPRRH84YKW&social_share=cm_sw_r_cp_ud_dp_35PR8ZZ3MRRPRRH84YKW"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/william.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>The legend <br />of Jack Hollow</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>William Strickler</span>
                                                    <p>The legend of Jack Hollow follows the life of “Hungry” Jack
                                                        Hollow as he grows into maturity orphaned on the dirt
                                                        streets</p>
                                                    <a href="https://www.amazon.com/legend-Jack-Hollow-William-Strickler/dp/B0D717X5FJ/ref=sr_1_1?crid=3S5GSTLSX94UP&dib=eyJ2IjoiMSJ9.OwXmdj70bEWFlWbBNMITgFS8D2pMjCTnRmU1M_vkPwXK9eyJ4PK6j7eubh3fdrwkquctbtvT2v0xMmElcigKCS2ZXnbabqA5y3m7LYiJK8kEdh8h7ucNj6FOh8O-GN42mjx23wo5tUfnNiVoiPpKGLJtedktdnIFY5v6O_2DvvJ7QQ0HGSdT47uqwKMJi8a05noFzE5i4il-TeYfvot2Hy-xPYAJdCQ-cwD4JuO3SWM.1WzKBByo-Hr1T5_fhaywHh_UZjIqzFCHVVHLyvqwndU&dib_tag=se&keywords=the+legend+of+jack+hollow&qid=1720566006&s=books&sprefix=the+legend+of+jack+hollow%2Cstripbooks-intl-ship%2C263&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/martin.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Brooklyn The Borough Of Dreams</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Martin Blumberg</span>
                                                    <p>Embark on a nostalgic journey through time featuring 56 poems with hundreds of photos that vividly recount</p>
                                                    <a href="https://www.amazon.com/Brooklyn-Borough-Dreams-Martin-Blumberg-ebook/dp/B0D72D6GYJ/ref=sr_1_1?crid=3TKE01Y972EOB&dib=eyJ2IjoiMSJ9.-W6-zxpHwiSewR83FWohz0dZly8tlpvirYMUr2ZKUFjGjHj071QN20LucGBJIEps.orsOEYUK3pgovFTSWXuxZgD8PjUabZMGtR8IfVJ4I1Q&dib_tag=se&keywords=the+borough+of+dreams&qid=1720742761&s=digital-text&sprefix=the+borough+of+dreams%2Cdigital-text%2C345&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/jerold.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>Swing Vote - 2024: The Candidates and the Issues Affecting the 2024 Election</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Jerold A. McVay</span>
                                                    <p>In "Swing Vote- 2024," the author, Jerold McVay, provides his readers with an indebt political analysis of all the major</p>
                                                    <a href="https://www.amazon.com/Swing-Vote-Candidates-Affecting-Election-ebook/dp/B0D6DPXR5Y/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.DGYhqBnoPTE7TALmJI52u30H8StokkzGGF3mNiTKZ5k.0860yyZY6qb7mIVGNw8mRZOVXn3pOSn48jx1uetD5Q4&qid=1720481989&sr=8-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225"
                                                        src="../images/portfolio-lp/imelda.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>BIBLE PLUS <br />NOTHING</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Imelda Anyaoha</span>
                                                    <p>The Bible, the Word of God, does not need any help to
                                                        progress or improve, yet today, we see people getting their
                                                        spiritual</p>
                                                    <a href="https://www.amazon.com/BIBLE-PLUS-NOTHING-Imelda-Anyaoha/dp/B0D8L6584S/ref=sr_1_1?crid=2G186IPVPG1D4&dib=eyJ2IjoiMSJ9.p4-wozOK6vCd8hUUWLi5zLO9NbwvfGuzswWTfHUeDOz5EZVov9CIOnKKWA2cSyTUP9KCAaPYyKqterERMk68r5qiuhaZ1SGDLlOm0vXQLmGXtsdZFlK98LtCM5bEhJJDgEKCNAFUcdeGYKOeSmhxgW1zzbn-O2dorNfL7XonAa_ThwK9eYvGKS0SfU0HzsUvzK0QbBDDos4qMyvDWMd8bQ-6UypYUfAiNQcBxAD_NXY.FjvgSF5PxtUCxsWiplXAFqdeG163kzz6WXlv5Z5oM9Y&dib_tag=se&keywords=bible+plus+nothing&qid=1720558868&s=books&sprefix=bible+plus+nothing%2Cstripbooks-intl-ship%2C260&sr=1-1"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png"
                                                            alt="Icons" class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="__bookImages">
                                                    <img width="150" height="225" src="../images/portfolio-lp/jason.webp" alt="Book" />
                                                </div>
                                                <div class="__content">
                                                    <h3>LIFTED: ENCOURAGEMENTS FOR THE DOWNCAST</h3>
                                                    <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Jason Moon</span>
                                                    <p>Encouragements for the Downcast takes its readers on an inspirational and touching journey of faith and hope through</p>
                                                    <a href="https://www.amazon.com/dp/B0D8R98DZF?ref=cm_sw_r_cp_ud_dp_ETRAE23EPZERKZ27CWNB&ref_=cm_sw_r_cp_ud_dp_ETRAE23EPZERKZ27CWNB&social_share=cm_sw_r_cp_ud_dp_ETRAE23EPZERKZ27CWNB"
                                                        target="_blank"><u>Visit On Amazon</u> <img
                                                            src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                                            class="d-inline-block"></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                                    <div class="row align-items-center">
                                        <p class="text-center py-5 w-100">No Book Found</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                                    <div class="row align-items-center">
                                        <p class="text-center py-5 w-100">No Book Found</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                                    <div class="row align-items-center">
                                        <p class="text-center py-5 w-100">No Book Found</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                                    <div class="row align-items-center">
                                        <p class="text-center py-5 w-100">No Book Found</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                                    <div class="row align-items-center">
                                        <p class="text-center py-5 w-100">No Book Found</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="__contectUs">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6 col-12 ">
                    <h2 class="font-secondary fw-900 text-left font-40 font-50rem ">
                        Whether Bookshelf or Amazon Self Publishing – Our Designs
                        Makes You Stand Out
                    </h2>
                    <p class="text-left text-black font-18 fw-500 pb-2 pt-2 line-height-15 mp">
                        Design is the most important aspect when it comes to selling books. We know that might sound
                        like an old cliché, but designing your cover will deliver layout and build intrigue for
                        potential readers; they’ll want more after seeing what’s in store within these pages! So
                        don’t settle on anything less than perfection – let us help make sure every manuscript looks
                        exactly how you envisioned through Book Writing Cube.</p>
                    <div class="py-3  d-none d-lg-block d-md-block d-sm-none">
                        <a href="javascript:void(Tawk_API.toggle())" class="btn btn-secondary-rounded-o">LET'S
                            DISCUSS</a>
                        <a href="tel:866-600-0036" class="btn btn-secondary2 "> 866-600-0036</a>
                    </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4 col-12">
                    <div class="__form">
                        <h2>Contact Us</h2>
                        <form action="">
                            <label for="">Full Name*</label>
                            <input type="text" name="" id="" required placeholder="Type Full Name " />
                            <label for="">Phone *</label>
                            <input type="tel" name="" id="" minlength="7" maxlength="15" required
                                placeholder="123-456-7890" onkeypress="return /[0-9]/i.test(event.key)" />
                            <label for="">Email *</label>
                            <input type="email" name="" id="" required placeholder="Type Full Email" />
                            <label for="">Message</label>
                            <textarea name="" id="" placeholder=""></textarea>
                            <button type="submit">Submit Details</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




<x-footer />