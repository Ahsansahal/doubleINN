function yearlyTabsChange() {
    let x = document.getElementById("yearlyTabsChange").value;

    let content2023 = `

<ul class="nav nav-tabs my-5" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan" type="button" role="tab"
            aria-controls="jan" aria-selected="true">Jan</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button" role="tab"
            aria-controls="feb" aria-selected="false">Feb</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button" role="tab"
            aria-controls="mar" aria-selected="false">Mar</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button" role="tab"
            aria-controls="apr" aria-selected="false">Apr</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button" role="tab"
            aria-controls="may" aria-selected="false">May</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button" role="tab"
            aria-controls="jun" aria-selected="false">Jun</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button" role="tab"
            aria-controls="jul" aria-selected="false">Jul</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button" role="tab"
            aria-controls="aug" aria-selected="false">Aug</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button" role="tab"
            aria-controls="sep" aria-selected="false">Sep</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button" role="tab"
            aria-controls="oct" aria-selected="false">Oct</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button" role="tab"
            aria-controls="nov" aria-selected="false">Nov</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button" role="tab"
            aria-controls="dec" aria-selected="false">Dec</button>
    </li>
</ul>
<div class="container">
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="jan" role="tabpanel" aria-labelledby="jan-tab">
            <div class="row align-items-center">
                <p class="text-center py-5 w-100">No Book Found</p>
            </div>
        </div>
        <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
            <div class="row align-items-center">
                <p class="text-center py-5 w-100">No Book Found</p>
            </div>
        </div>
        <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
            <div class="row align-items-center">
                <p class="text-center py-5 w-100">No Book Found</p>
            </div>
        </div>
        <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
            <div class="row align-items-center">
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/todd.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Saving Grace Never Walking Alone: A Mother's Dementia - A Son's Devotion</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Todd Schulze</span>
                            <p>"A true gift from the heart and soul." -Curt
                                "Beautiful, uplifting, yet heart-wrenching story; incredibly well-told."-Kate</p>
                            <a href="https://www.amazon.com/Saving-Grace-Never-Walking-Alone-ebook/dp/B0C3PPDP69/ref=sr_1_1?crid=2NMSYRQPEEY96&dib=eyJ2IjoiMSJ9.msToiaGgSjiLYOVBFXwrog.CHbcvU_XqJE-1t4s79YCtpSAN1uCfAeVrImi31qYOtQ&dib_tag=se&keywords=saving+grace+never+walking+alone&qid=1720565712&s=books&sprefix=saving+grace+never+walking+alo%2Cstripbooks-intl-ship%2C298&sr=1-1"
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
                            <img width="150" height="225" src="../images/portfolio-lp/paul.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>A Christological Briefing of the New Testament: Your Guide to a Better Understanding of
                                Christ</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Paul Dan</span>
                            <p>This Christological essay was written with you, the reader, in mind. Your time is
                                limited, but your interest in spirituality</p>
                            <a href="https://www.amazon.com/Christological-Briefing-New-Testament-Understanding-ebook/dp/B0C58BF5DZ/ref=sr_1_1?crid=A1IH237T2GVV&dib=eyJ2IjoiMSJ9.4m1zNYAeKZf1FYyz4bX-XvdS6zsWOQJDGZ25Y0JroAE.MORmYBRt4i5pdqfPy154ZmE9fm9EVeFD5JG_lJgXC7k&dib_tag=se&keywords=a+christological+briefing&qid=1720563575&s=books&sprefix=a+christologocal+brifing%2Cstripbooks-intl-ship%2C264&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/seven.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Toward a New Metaphysics: Seven Biorhythms And The Evolution of Consciousness</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>M. F. Taylor</span>
                            <p>This book is about the evolution of consciousness as a process of cyclic transcendence as
                                seven levels of identity</p>
                            <a href="https://www.amazon.com/Toward-New-Metaphysics-Biorhythms-Consciousness/dp/B0C47J8X6Z/ref=sr_1_6?crid=3KGZI8BIVH1P3&dib=eyJ2IjoiMSJ9._a06DpwfzknB3YhfoAdfdR-2UdR1ilxnoq3PCC9AVtNWav0hLSvEVJf3bASjmG42WKXH-Q5hG5iAI--V-mEb7tg6XIOfhzfsvYKlMtdf3zk4DObXD7cE3YP3tzEsuPdcVEtRLUArOoEl217yhAxPK4igmY9sJ9HTtRMuDik2lumEUNcLBCmXAEd_JUmdKq3NEFci4GYj9HyGnTSDCKIFPGmfk0AJhaWrwJeUv9PIyaA.VENWgMz1cu5rf9ixLufzSCiVmvyUNLs55fg38PeGUOI&dib_tag=se&keywords=toward+a+new+metaphysics&qid=1720564571&s=books&sprefix=toward+a+new+metaphysics%27%2Cstripbooks-intl-ship%2C273&sr=1-6"
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
                            <img width="150" height="225" src="../images/portfolio-lp/john.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>GREEN CARD LOTTERY AND AMERICAN DREAM</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>John Kananda</span>
                            <p>Green Card Lottery and American Dream is a book by John Kananda, a Canadian citizen who
                                lived in the U.S. for 17 years</p>
                            <a href="https://www.amazon.com/GREEN-CARD-LOTTERY-AMERICAN-DREAM-ebook/dp/B0C7LRM9L9/ref=sr_1_1?crid=28U8R3D9HYOQ5&dib=eyJ2IjoiMSJ9.qQTbSGcP45iw2bdt7dYrTzuqwuS2LYz-1KVtPVMOdaEf68t18Iq-SoYZ7PBjU71-.JyiUt17yw3iG2k9tVBnQlVffXkoop63TJd541gcuoRU&dib_tag=se&keywords=green+card+lottery+and+american+dream&qid=1720562603&s=books&sprefix=green+card+lottery+and+american+dream%2Cstripbooks-intl-ship%2C280&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/kyra.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>I Like the New Me Better:: Inspiration for Women Going Through a Hard Time</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Kyra Denton</span>
                            <p>Have you suffered hardships in life and thought to yourself "it'll never get better” or
                                “this is obviously how my life</p>
                            <a href="https://www.amazon.com/Like-New-Me-Better-Inspiration/dp/B0C6W2YYML/ref=sr_1_1?crid=14G9299IW9YLZ&dib=eyJ2IjoiMSJ9.oUHxlMhygqZJXKPENopf5r-hOUTYKbm9xFq1zxRlMvLfEITeSHnHcEIwRCfXuUaHvsD-4SFykDRb95ceAgwUi5Rm0qWY5fbjrFrADd_fmS7CRsCTsmuiZZ6a7ju3n2vI1JPbhQSiqS31HipAPToW6xEbJ2AodDqSEwMVlW5fQ00pBb4I7DYMFo_Uvk0Rl3KanS-KEs1YUBvjbaTGpThd2n5EaLW24MDis_18ScnE7k0.ishDThj64UtUdxIi8JH7ydchfrRIoJKoVqpKf5gLBKs&dib_tag=se&keywords=i+like+the+new+me+better&qid=1720562764&s=books&sprefix=i+like+the+new+me+bette%2Cstripbooks-intl-ship%2C277&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/william-02.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Worth The Wait: Tragedy Transition Redemption</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Richard Emerson Williams</span>
                            <p>This is a romantic fiction spiritually based story with principles and morals that you
                                may not see in today’s novels.</p>
                            <a href="https://www.amazon.com/Worth-Wait-Tragedy-Transition-Redemption/dp/B0C6VZ2WDG/ref=sr_1_1?crid=34BXITBUKBKTR&dib=eyJ2IjoiMSJ9.zAR6nsboCWbx8eclf1_JJYdCopYCuvB0gO_UABXi0J7vyJALNJ7QjsAEAKkLK1JGimZZd32M7mA0IzwluTpDQbrv4EWTLnQBReJuwIp4ovK1QajpmAJlxOMFCVt6qt-5u0cOXIQ6fO5jljM8IlG2ubkLzyB7X2tTdpAzRMacjevsAoecGZ2Kl6IJOH6y623xOBwe6kbrxlLxuxo_NOqDx14aSPU6hUnlylI2wpI1nYA.Hq0U7pzVqevwu-B92SnIuaZBgYqJvC64TZ6ERqVfFf8&dib_tag=se&keywords=worth+the+wait+tragedy&qid=1720566189&s=books&sprefix=worth+the+wait+tragedy%2Cstripbooks-intl-ship%2C267&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/melvin.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Reflections of  <br /> Bygone Days</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Melvin Rasmussen</span>
                            <p>A collection of classic and timeless poetrie.</p>
                            <a href="https://www.amazon.com/Reflections-Bygone-Days-Melvin-Rasmussen/dp/B0C87M9TLT/ref=sr_1_1?crid=1170PDOWHVFTD&keywords=reflections+of+bygone+days&qid=1690848313&s=digital-text&sprefix=reflections+of+bygone+day%2Cdigital-text%2C454&sr=1-1-catcorr"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/joseph.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Rural EMS IS Different : An Early History of Beaver Island EMS</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Joseph Moore </span>
                            <p>This book is written from the perspective of an emergency medical care provider, who worked his way from</p>
                            <a href="https://www.amazon.com/Rural-EMS-Different-History-Beaver-ebook/dp/B0C7Y664C1/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
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
                            <img width="150" height="225" src="../images/portfolio-lp/cheryl.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Bedtime Prayers <br />with Lolli & Pops</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Cheryl Kacal</span>
                            <p>Bedtime Prayers with Lolli & Pops is a book that keeps grandparents and grandchildren
                                close in heart even when they are miles apart!</p>
                            <a href="https://www.amazon.com/Bedtime-Prayers-Lolli-Cheryl-Kacal/dp/B0C9SF6JF7/ref=sr_1_1?crid=RCVNH5XM3DAY&dib=eyJ2IjoiMSJ9.ntlFRxoE1JMIYGH4iqqdpg.gewtOVpm0ORImAgfQVwR9FScnQvqCvmbMi6HILYLBFQ&dib_tag=se&keywords=bedtime+prayers+with+lollipops&qid=1720557200&s=digital-text&sprefix=bedtime+prayers+with+loll%2Cdigital-text%2C272&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/james.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>A Badge <br />Well Worn</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>James Mitchell</span>
                            <p>"A Badge Well Worn" is a captivating exploration of the unsung heroes, the Sheepdogs, who
                                protect the weak and defenseless</p>
                            <a href="https://www.amazon.com/Badge-Well-Worn-James-Mitchell-ebook/dp/B0C9YNBNCN/ref=sr_1_1?crid=19CFAPAKOTHW2&dib=eyJ2IjoiMSJ9.n7PrkdxkH_DoVBqTNqmULQ.oCuMFpLhANHtnLlxHdtMHt1ry-DSd881jMySu3H4mUU&dib_tag=se&keywords=a+badge+well+worn&qid=1720562282&s=books&sprefix=a+badge+well+wor%2Cstripbooks-intl-ship%2C283&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/rodrigo.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>O Amante <br />(The Lover)</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Rodrigo Brand</span>
                            <p>Following the Brazilian writing style called “Tragédia Carioca”, originally created by
                                the great playwright Nelson Rodrigues,</p>
                            <a href="https://www.amazon.com/Amante-Lover-Rodrigo-Brand-ebook/dp/B0CBXTKMQW/ref=sr_1_2?crid=369ODPRZ1NS5N&dib=eyJ2IjoiMSJ9.t0DdV7qcridcm9hwV3MbaAUb6ggmGo4krZlIRZGmgYUNDYNxmipP4izxw275c4ra_qDBeOC9cyQxik3XTxljdpOwb4NkX_YaOr2wsLfLfIJzUvm3duWohzC1WYKN0JEjnZogR7WEhfKeqXei8tLxJHhF3zsE7CyUR7OB40ueAoLWayIY3djyxxcwRvBXc4PFQKZulmxDsTK4PrPwDq7FOFQXK9_bhZWy0dcyc6DIO80.hKBBIuWhZE6RpSpl8r48nPm8KknngfiM5czDL8DexbU&dib_tag=se&keywords=O+amante&qid=1720564249&s=books&sprefix=o+amante+%2Cstripbooks-intl-ship%2C272&sr=1-2"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/rebecca.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Clarke and Mudd</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Rebecca Garcia</span>
                            <p>This story is about a girl and a boy who are lost in life, but are the best of friends. Their adventures are many from</p>
                            <a href="https://www.amazon.com/Clarke-Mudd-Rebecca-Garcia-ebook/dp/B0CB739XJH/ref=sr_1_1?crid=22I7GMB24N9JM&dib=eyJ2IjoiMSJ9.EAPWAy7dUFvpNN39ZoWrnw.Ddmq4zSNoXb7WGsYzasOLbOn3VDiTXPd3ZZLult3L08&dib_tag=se&keywords=clarke+and+mudd&qid=1720744725&s=digital-text&sprefix=clarke+and+mud%2Cdigital-text%2C348&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/maribeth.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Drew the shrew And The Bouncing Kangaroo</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Maribeth Merryman</span>
                            <p>Little Drew the Shrew
                            Knows just what to do
                            If you learn from Drew Then you will know too</p>
                            <a href="https://www.amazon.com/shrew-Bouncing-Kangaroo-Maribeth-Merryman/dp/B0CCCWXND4/ref=sr_1_1?crid=2FF6KRUFHGMJN&dib=eyJ2IjoiMSJ9.QEPhWYYz-2gyFSJKGjTVw0__bSCPraa4tPlVIvsEG-HGjHj071QN20LucGBJIEps.JLdlRQRJH6OrZKmraHDtobKIg1oeX1csXnmNhXW8ebw&dib_tag=se&keywords=drew+the+shrew+and+the+bouncing+kangaroo&qid=1720742565&s=digital-text&sprefix=drew+the+shrew+and+the+bouncing+kangr%2Cdigital-text%2C338&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/my-daddy.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>My Daddy The Electrician</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Suelynn Howden</span>
                            <p>Once upon a time there was a girl named Ivy who was very proud of her dad. Her dad was an ordinary man,</p>
                            <a href="https://www.amazon.com/My-Daddy-Electrician-Suelynn-Howden-ebook/dp/B0CCXN9X1R/ref=sr_1_1?crid=JI0SMFCJUR8D&dib=eyJ2IjoiMSJ9.Qylhz_x2qvzIiUPcB61F3w.Swf5k19YVB15HjAdHYSDYCiuCs2jjRfzQsvmufmVsAo&dib_tag=se&keywords=my+daddy+the+electrician&qid=1720746910&s=digital-text&sprefix=my+daddy+the+electrician%2Cdigital-text%2C258&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/Raymond.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Drawing Nudes</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Raymond Skibinski </span>
                            <p>I have collected a series of drawings of nudes, male and female. The sketches were done in a studio setting</p>
                            <a href="https://www.amazon.com/Drawing-Nudes-Raymond-M-Skibinski/dp/B0CCCMPBZ4/ref=sr_1_1?crid=JXMXSZX3JZQ1&dib=eyJ2IjoiMSJ9.Z7JQdSrguEAgeI9eI0tnLA.Jdwvoq2Rmw7iGZGQNuj_3oph_vUz6bpvlWcbTeUVDW0&dib_tag=se&keywords=Raymond+Skibinski&qid=1720478423&s=books&sprefix=raymond+skibinsk%2Cstripbooks%2C321&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/claude.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Prequill: Once upon a time, and times, and half a time</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Claude Moreau</span>
                            <p>The Prequill
                                Once upon a time, and times and half a time…

                                The greatest hunter of all time,</p>
                            <a href="https://www.amazon.com/Prequill-Once-upon-time-times-ebook/dp/B0CBCY9CYX/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
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
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/patrick.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>NO GOOD DEED GOES UNPUNISHED: BASED ON A TRUE STORY</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Patrick Beason</span>
                            <p>Patrick was raised in the Oil and Gas business; his father was in upper management of the Sinclair Oil Company.</p>
                            <a href="https://www.amazon.com/NO-GOOD-DEED-GOES-UNPUNISHED/dp/B0CFZKZGG8/ref=sr_1_2?crid=1ROTNUQUZJ78A&dib=eyJ2IjoiMSJ9.uUFUjigDeEAVtAYXFp44cRXpQSbO_LE7vpnOCC31a_PGjHj071QN20LucGBJIEps.G9nt15Vh7YY1h4oqfu6fckf3PkGNTjBgatcYrFz70EI&dib_tag=se&keywords=no+good+deed+goes+unpunished+patrick+beason&qid=1720743848&s=digital-text&sprefix=no+good+deed+goes+unpunished+patrick+beas%2Cdigital-text%2C331&sr=1-2"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
            <div class="row align-items-center">
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/a.lang.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>LITTLE BOOK <br />OF BASEBALL</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Amy Lang</span>
                            <p>Whether you’re an avid fan or a newcomer to the sport, you’ll find The Little Book of
                                Baseball packed with everything</p>
                            <a href="https://www.amazon.com/LITTLE-BOOK-BASEBALL-Lang/dp/1961563118"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/a-young-boy's-dream.webp"
                                alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>A Young <br />Boy’s Dream</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Captain Aubrey</span>
                            <p>The author describes his Navy life beginning with growing up in the” Cradle of Naval
                                Aviation” in Pensacola,</p>
                            <a href="https://www.amazon.com/Young-Boys-Dream-Captain-Aubrey-ebook/dp/B0CK7W5ZWL/ref=sr_1_1?crid=1X6JRMSH2R9X3&dib=eyJ2IjoiMSJ9.AkT6ocTGWU4kyfgdpqHRhULpfN5aFMeC6Cj9WLOFsqbc9ZJ0HOqkw0CZPnm85j4qE5D8G5UlDKyzJcNK7v5sMN2x73BvcLw7npWimilvXjO1QnOBuSjpxFPkkqayz3pq1g87CjLOp7MXfT2hhonwbK9PVRJw11J7vs9py4xQAATFzdYt1Vf99Jo3n-6zaJVIHdjeNyJNPFGjWzwu2422B6ss8RAlW-KDMTH9_XaVvAs.iyq-l51LIgnjdcqrrCVlrwstF_IMDLPXD686UDpAvgg&dib_tag=se&keywords=a+young+boys+dream&qid=1720555471&s=books&sprefix=a+young+boys+%2Cstripbooks-intl-ship%2C276&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/haroon.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>LEADERS ARE NOT PROPHETS: You Are a Leader…Be Confident About Inspiring Others</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Haroon Khan</span>
                            <p>Why Do Some Leaders Make People Feel Important and Inspire Them To Achieve Success Again
                                And Again?</p>
                            <a href="https://www.amazon.com/LEADERS-ARE-NOT-PROPHETS-Confident-ebook/dp/B0CJZC6TW9/ref=sr_1_1?crid=3B2PH153WEOAH&dib=eyJ2IjoiMSJ9.SOyWOM5cK-zuEvC0xvXExQ.oOQA_ytOmwF9wJ-wjdYON_CzRjDEzNYYrddtwKrpA7U&dib_tag=se&keywords=leaders+are+not+prophet&qid=1720558353&s=books&sprefix=leaders+are+not+prophe%2Cstripbooks-intl-ship%2C285&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/matilda.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Diamonds in the Dirt: A Women's Journey from Survival to Serenity</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Matilda Cathyagar</span>
                            <p>This book can serve as a guide to wholeness for others who have suffered sexual abuse. It
                                also delivers a colorful backdrop</p>
                            <a href="https://www.amazon.com/Diamonds-Dirt-Journey-Survival-Serenity/dp/B0CJ3X988K/ref=sr_1_5?crid=1OIPXXOXFWPOA&dib=eyJ2IjoiMSJ9.yHHkRaT8kGBYZCjhhtAKPnBPkMP8qTPPwGCSRR-HH5zpMBXdyzh3V5Uole5ccIgz_5hS5i2-CJwJSD34ChUxurUQYpmztfdTHrx-G5ZuOsBOddBNW5abFB2ZubQ1M3bF9qNoBdqUJdfZFI1UeL6p3kyaonUMtxd1iyOdzFYLwWHsSytpfIhrUwN_nxV9yLCqcWbHMtBqTXMocx8VNwqkPrH0BUvhI648MO_Xuwh-TOE.5px1aArZVvfFC7Ct-vC_O2TuJwTaR1WQ79Op2Pc1DhY&dib_tag=se&keywords=diamond+in+the+dirt&qid=1720563234&s=books&sprefix=diamond+in+the+dir%2Cstripbooks-intl-ship%2C274&sr=1-5"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/stephen.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Invisible <br />Enemy</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Stephen J. Babsky</span>
                            <p>In the dynamic urban center of China, beneath the shadow of towering research facilities,
                                two American agents are entrusted</p>
                            <a href="https://www.amazon.com/Invisible-Enemy-Stephen-J-Babsky-ebook/dp/B0CK7XKGKM/ref=sr_1_1?crid=1TVV7RUZL9HYN&dib=eyJ2IjoiMSJ9.wmTLX27ro0yreCtLA1fhf3sOzlqI4TPGQIOd8cXnvoBp_WUGAFKqoHw5Tse_2aq_noO8vR7OUxqeI84glhy5dkAhlX6dWG0gQ7ePFxwAorQVr6qD-smq1PgNGK9WFL5cv_HHPal0tK_dSBYPa9Kq7InDcP92qBrSJUXItHdcbpz1rop6-EZr1QrG3lIr1cLV7u-HK-PlSA9EAzkfWFJ_LFJC4YktNBuwlDlQ_oESC_s.3-3fyVg4NnkLd7t09TSLlwh5N-fXVAPruXCT4hg4X4M&dib_tag=se&keywords=the+invisible+enemy&qid=1720565359&s=books&sprefix=the+invisible+enem%2Cstripbooks-intl-ship%2C271&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/marjorie.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Beyond the Banks of Frog Creek: 40 Days of Devotions for Times of Painful Change</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Marjorie Hodgson</span>
                            <p>The forty devotionals in Beyond the Banks of Frog Creek weave Texas ranch life with Scripture and the stories</p>
                            <a href="https://www.amazon.com/Beyond-Banks-Frog-Creek-Devotions-ebook/dp/B0CHPVR3W7/ref=sr_1_1?crid=6B447PMKTNPJ&dib=eyJ2IjoiMSJ9.mg-eW4FLn96Yw4RJW9Mj1Q.ZFfaBOhWOYTfuRUIFPYA3Ib7HOk1p0nsBlhNTKDJlng&dib_tag=se&keywords=beyond+the+banks+of+frog+creek&qid=1720742620&s=digital-text&sprefix=beyond+the+banks+%2Cdigital-text%2C351&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/liberty-life.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Legal Living Will and Last Testament Kit</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Iyanu Aina</span>
                            <p>ENSURING YOUR FAMILY IS PROTECTED AND PREPARING FOR WHEN YOU PASS DOES NOT HAVE TO BE DIFFICULT</p>
                            <a href="https://www.amazon.com/Legal-Living-Will-Last-Testament-ebook/dp/B0CJLTMV4V/ref=sr_1_1?crid=59PGBR1BLLQ4&dib=eyJ2IjoiMSJ9.oOF7RajDqGBuQnksB-jiQqsY32AOAqTs-aCAn8ryFr0foqdent0jkNAmdlH6c0Ba7FAgXrXSM8d7pa27TFSyYd2Rxh0HeZOGp9o-P9yXnhwH3qK9aYDIFERpdBbI17iQBNhugMjwCIjBiN0zXkoLlhldFNgd-kzFDlpKOqWiqAm8C-E4kut1y2MWAa28AyyWMf7Z--BZB06gIvZmwK70NyxbXuQ602Zwi8O4g8jXmkA.9YnOij8FRUis6cQ7ZjzBrEqw3xvrBza8oaUjY0e7j2M&dib_tag=se&keywords=legal+living+will+and+last+testament&qid=1720741794&s=digital-text&sprefix=legal+living+will+and+last+testamen%2Cdigital-text%2C336&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/robert.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Funny, I Don’t Remember Any Good Dope Days</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Robert Durst</span>
                            <p>This book is dedicated to the memories of those who have lost their lives to addiction and to the courage of those</p>
                            <a href="https://www.amazon.com/Funny-Dont-Remember-Good-Dope/dp/B0CHL7DGYV"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/keenan.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>I Love You and I Am Sorry: The High Cost of Loss</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Keenan Corley</span>
                            <p>All readers, beware you are going to fall in love with little Kee-Kee (Keenan). “I Love You and I Am Sorry” is a fascinating</p>
                            <a href="https://www.amazon.com/Love-You-Am-Sorry-High-ebook/dp/B0CHGJJHWF/ref=sr_1_1?crid=1UEO7GYW4RQ2H&dib=eyJ2IjoiMSJ9.3VxX0wjsOOVHQfBGsXocrhiD-Y-Z_0Nyz3XmC5iqs5VVL9D0Us8l2nC0yOMTLyKO6K3MdQeU-9Xltf7OGaS_HAEhCp9ttwR2CruBCImNrjW4uV0r7c-DwFENfhbQWiaaYXctbj_0kzpgklYldGxCjAsr8wRspaTwW973bW2RUde7y-Oqp5-pKWXzCRcPe8vr2nvYdvzJjW93ZXnuHKKLRJCOYNBPb4x8om_gWBh5MGA.JRCCq6aRlNGl4Hiw-J6gTCemYI0PrHbVei4qjP_GTS0&dib_tag=se&keywords=Keenan+Corley&qid=1720478571&s=digital-text&sprefix=keenan+corley%2Cdigital-text%2C320&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
            <div class="row align-items-center">
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/alex.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Denying the Beauty Within: The Forbidden SMILE</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Alexandra Lovio</span>
                            <p>To my children,
                                Thank you for believing in me and making it possible to become the mother you so
                                deserved as children.</p>
                            <a href="https://www.amazon.com/Denying-Beauty-Within-Forbidden-SMILE/dp/B0CKKJL2MR/ref=sr_1_1?crid=18ZXB1D5U26BD&dib=eyJ2IjoiMSJ9.lviSqRGvY6CPbmLI-ytKjou6TVgNesCOKevx4fd8xoXGjHj071QN20LucGBJIEps.jaHkkb6iIH03E6tEXcAGbdqs5AXdul2p1ohRlmuwV8U&dib_tag=se&keywords=Denying+the+beauty+within&qid=1720482971&s=books&sprefix=denying+the+beauty+within%2Cstripbooks%2C329&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/brad.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Hate Me Now, Thank Me Later: Barefoot Brad’s Guide to Healthy Aging and Weight Loss</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Brad Henderson</span>
                            <p>This book is about a hero. The hero in the book is you. All humans have the same basic
                                goals in life: Survive and thrive.</p>
                            <a href="https://www.amazon.com/Hate-Me-Now-Thank-Later/dp/B0CLJQGSY3/ref=sr_1_1?crid=39IXDVKRL470W&dib=eyJ2IjoiMSJ9.ED5bwifj6krlYpeJSkC9uG0oPyiRtrInuSeLyh1r9c4.fRC6SXhHKKwMR_24jljIjRK6Jm3B9cGqGhM-dh1K2ws&dib_tag=se&keywords=hate+me+now+thank+me+later+brad+henderson&qid=1720555940&s=books&sprefix=hate+me+now+%2Cstripbooks-intl-ship%2C276&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/brandon.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Art <br />of Adaptation</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Brandon Richard</span>
                            <p>As a young boy, Brandon’s world shatters when he is forced to move away from home,
                                leaving behind the one person</p>
                            <a href="https://www.amazon.com/Art-Adaptation-Brandon-Richard/dp/1961563126/ref=sr_1_1?crid=3BYCKBB37HDQO&dib=eyJ2IjoiMSJ9.yXE_bMUp69ATWMXB7TTpNkjpyomRlG2PsZTlKwv4XqwH1WqM0Q1Ect4PPRQLSi6OOvUbMv5w-_yD6TjW8_ILD_zVmuCDGvHiS67aIdjJE3eKkbUG1nYYXQmsieD87xPhZIGErNj-n-3E710YYb4Vi-J8t8jVYHUqAG1VvYiNG6h_o8HhcfFj8FDY4k4zYdm6mF6BwxcYsPZSnCsknWuZ3N6DAc-OVCLFonXzw0TM88Y.VWIjz6ipwh3ZOX3xJjjZfb9Xlqz3lQSb1_llgEw_ScQ&dib_tag=se&keywords=the+art+of+adaptation&qid=1720556413&s=books&sprefix=the+art+of+adaptation%2Cstripbooks-intl-ship%2C252&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/dave-f-woody.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Devil and the Details: COVID – What Really Happened.</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Dave Woody</span>
                            <p>The Devil and the Details: COVID – What Really Happened. A Short Story by Dave F. Woody
                            </p>
                            <a href="https://www.amazon.com/Devil-Details-COVID-Really-Happened-ebook/dp/B0CLJ4KMN6/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.VZi2v0TFNrHVCt-tg8usAhD_xQAE6h1a0a3Cy9xqLNK7UsniogI35k6bQWnRnvY5gkhDDAwsQRwmh3I-yPysJvpKIFzRQubFbfmHZh9YhkiIBTXTHRMZNXe0V2vcLnVWGGI1W-D2JmnCESYPHGAdWQJx_9sJcVGca7z_bw4D4YfV6SbMELis5zJhsR8KvJfbN4M1x7JfCHEaUxLjt5Z3hE2Lud-LWtXHX2OrK5yHAL4.1tq_TJiFklS_LjuAmCseqVs1WPJQO9gV82KrZV10jRI&qid=1720737721&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/jill.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>40 Weeks</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Jill Rosenfeld</span>
                            <p>This is the amazing true story of one woman's determination and struggle to carry a child to term. The devastation</p>
                            <a href="https://www.amazon.com/40-Weeks-Jill-Rosenfeld-ebook/dp/B0CLZ4S79J/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/sasha.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>CAROUSEL: A Novel</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Sasha Seltsova</span>
                            <p>Alice's world seems perfect: a successful company she leads, a loving family that adores her, and everything</p>
                            <a href="https://www.amazon.com/CAROUSEL-Novel-Sasha-Seltsova/dp/B0CLVSN621/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.w0YrBhIMafma2Hy5oMC_PQ.iLjnX4m3ey_VzPHCVQ67oA1K5cSZNp7Cm_-DcE6lyaQ&qid=1720478714&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/mary.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>WISDOM FROM A WOMAN OF FAITH’S SPIRITUAL JOURNEY</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Mary Uzoma</span>
                            <p>This book chronicles a woman's spiritual journey, addressing human imperfections in applying the Bible's guidance.</p>
                            <a href="https://www.amazon.com/WISDOM-WOMAN-FAITHS-SPIRITUAL-JOURNEY-ebook/dp/B0CLR654KB/ref=sr_1_1?crid=3CSMI6VZZF7XI&dib=eyJ2IjoiMSJ9.JhTGdoWf9aUZ23C1GPJUE8RjIfPpFOzVJZCTkf6DOGhCb4saKjTJGtAmhRDNY4ou.qiqL0T49u1vny0gK5G2tWAzhUjz8-vHlvi7nL1W3Ve8&dib_tag=se&keywords=mary+pat+Uzoma&qid=1720481395&sprefix=mary+pat+uzom%2Caps%2C339&sr=8-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
            <div class="row align-items-center">
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/adda.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>She Lived Happily <br /> Ever After</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Adda Dahlke</span>
                            <p>Adda Christine Dahlke’s book takes you on a journey of finding joy in simple things–a
                                memoir that will unravel the incredible</p>
                            <a href="https://www.amazon.com/She-Lived-Happily-Ever-After-ebook/dp/B0CNYJ5SFK/ref=sr_1_1?crid=DY6SX54YA2WE&dib=eyJ2IjoiMSJ9.XI-OiaphJsz89EpDIzRcv-92hyu-8G0MlXws9HsEeP4pSJSplELT7p5bcJrIVEYzrbZtTyDV2BAHZ5dr7abmD8sTmNEvbSlJYoL6xS6nxRFYjRVsRfX4Dape33wUyCvpytpEhyBDylJhJXyyy6sYTiJvm1KTkqrcZq-z7bl0tkBdgu9fMBkXCP-qNgo5ym63kgV96_qubl0P_ciHJOPzbI70xKAudLuY6DqCwO056g-kJlEUjlfMDH9Z6-djzMF75TQqGy2OCQfM2bscXlZVQB__7okayRn4mQfQAFiRsQs.dKbWdjQ_bvJW44xrDDscv1VvkUMDcnt3UMLWxa-3kHY&dib_tag=se&keywords=she+lived+happily+ever+after&qid=1720481009&sprefix=she+lived+happily+ever+after%2Caps%2C335&sr=8-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/drnajiba.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Irreplaceable Human Intelligence:: Surpassing AI Outreach</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Najiba Benabess</span>
                            <p>Irreplaceable Human Intelligence: Surpassing AI Outreach" by Najiba Benabess serves as a
                                guide for leaders facing</p>
                            <a href="https://www.amazon.com/Irreplaceable-Human-Intelligence-Surpassing-Outreach-ebook/dp/B0CN57VGLN/ref=sr_1_2?crid=265ABI1TD1DRU&dib=eyJ2IjoiMSJ9.jYpgoUju51KWHD7WEIj_2xYk0_g9G6KCt8tVbzlOk-338uGIUqDg-Ou54r2dUSLsiVUOkq4bXcAdIIr4brZRGTCrwf1G2uAuKHMzB687qbRvkTzAqQTGCnwweXAeSEON96y9ZzoNeZY2NjVd-Zw1zAGV5pyaEw2shiklWQK-efqcXbKFm3miye3lgu3CXQXwEBsHoeGYgfEx9aXhB9DT4A.Qhcu4Wybmp28Qs7t1Omvna6-9uylO2vrQvMA26dOp-Y&dib_tag=se&keywords=irreplaceable+human&qid=1720557903&s=books&sprefix=irreplaceable+human%2Cstripbooks-intl-ship%2C261&sr=1-2"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/stacy.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Emperor And The Desert Queen</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Stacy Haigney</span>
                            <p>"This novel tells the story of Emperor Aurelian's near-miraculous restoration of the
                                Roman Empire after it had collapsed</p>
                            <a href="https://www.amazon.com/Emperor-Desert-Queen-Stacy-Haigney-ebook/dp/B0CNMV3QT7/ref=sr_1_1?crid=BQEQ52HZQD9O&dib=eyJ2IjoiMSJ9.MyRXGxKp_56Z2T6O2m5IEQ.muopNuPPAhHX6dJ9TbbxAU2VVfUwUIxG1r6wMuwcqhA&dib_tag=se&keywords=the+emperor+of+and+the+desert+queen&qid=1720565191&s=books&sprefix=the+emperor+of+and+the+desert+quee%2Cstripbooks-intl-ship%2C280&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/asiana.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Poems, Vignettes And Fantasies Sallies into the Mind and Street</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>J.E. Arévalo</span>
                            <p>They say that everyone has at least one book within them. This is mine. Within these
                                pages are expressions</p>
                            <a href="https://www.amazon.com/Poems-Vignettes-Fantasies-Sallies-Street-ebook/dp/B0CP6ZQVNN/ref=sr_1_1?crid=1MH4SLZ5G1K9F&dib=eyJ2IjoiMSJ9.5m8w37cBWoSpEfAtim4GHP1bO4fQh8q2tBezh6gMKuQKSmDxvQnmRFtqmMQx64SuhoJR_iC5Z2w6PbnPSDc0_lzXkn789x7bv5bnqcu3Orf0DDOdjg0VY4DbZ6tVxd6-Oz91aJKD-_YG44si7P2DgnwgWyVY3LAb-TKKt0Y_NFh3qZ4ZlJe8xf1C8oHYnNvIoh3yeOQmOEEuO6Y2tQousWHu3TEIhs0M_D4gvLakBUI.XJS4mF2xB7I2gorkHZXyDzi6wCr3Zz9TNQJ8JqzZX0o&dib_tag=se&keywords=poems+vignettes+and+fantasies&qid=1720731863&s=books&sprefix=poems+vignettes+and+fantasies%2Cstripbooks-intl-ship%2C237&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/diane.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Colors: a story about you, me and endless possibility.</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Diane Capasso</span>
                            <p>Diane Capasso’s “Colors…” is a light-hearted children’s book that personifies colors to
                                effectively represent</p>
                            <a href="https://www.amazon.com/Colors-story-about-endless-possibility-ebook/dp/B0CN5Z6ZL6/ref=sr_1_1?crid=NU2MEL4205L3&dib=eyJ2IjoiMSJ9.yWl-rYuKiRRM2_HCv8LyhdWC7H1Rjf6XWdRy_r7T1rPGjHj071QN20LucGBJIEps.K6RCl9UrzRQCIHNN4BfLIIR4c3hswUNgqeH1KzuPkmg&dib_tag=se&keywords=a+story+about+you%2Cme+and+endless+possibility&qid=1720738499&s=digital-text&sprefix=a+story+about+you%2Cme+and+endless+posibilit%2Cdigital-text%2C343&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/mary-pat-uzoma.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>BUILDING A FUNCTIONAL HOME OR FAMILY IS POSSIBLE</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Mary Uzoma</span>
                            <p>This book is designed for the entire family, specifically focusing on adult children. It addresses a common issue</p>
                            <a href="https://www.amazon.com/BUILDING-FUNCTIONAL-HOME-FAMILY-POSSIBLE-ebook/dp/B0CMXXBXCZ/ref=sr_1_1?crid=2QSJLJUGREV15&dib=eyJ2IjoiMSJ9.5t4-_iMMmVs8JveRe1hfIw.aXyrBqXLYBwGAP5vVWfMDju9IJOsKkUMpI9GjjtEtP8&dib_tag=se&keywords=building+a+functional+home+or+family+is+possible&qid=1720742918&s=digital-text&sprefix=building+a+functional+home+or+family+is+possible%2Cdigital-text%2C332&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/keith.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>First Fires: It’s a Pretty Good Life</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Keith Holloway</span>
                            <p>They say scent is the strongest sense tied to memory. The first fires of a season are especially unmistakable</p>
                            <a href="https://www.amazon.com/First-Fires-Pretty-Good-Life-ebook/dp/B0CNMSD6WP/ref=sr_1_1?crid=2144ZN8TXLEDH&dib=eyJ2IjoiMSJ9.kM1iJvtB8QryYZNnC0LI9lOSwxdztvOqV0EiAHY2hMp8ylxP2VRUSpvel55vrjXvhsJOCBeu33nUbUlXPpUDLQ.zNcirMBx9venwvEXZJ2SDVG9AD7lPIhlBCRp-6vntnM&dib_tag=se&keywords=first+fires+its+a+pretty+good+life&qid=1720741692&s=digital-text&sprefix=first+fires+its+a+pretty+good+li%2Cdigital-text%2C340&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/alex2.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>THE FORBIDDEN SMILE</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Alex J </span>
                            <p>To my children,
                            Thank you for believing in me and making it possible to become the mother you so deserved as children.</p>
                            <a href="https://www.amazon.com/FORBIDDEN-SMILE-Alex-J-ebook/dp/B0CN9R7GM3/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.lfKivAl3u8JrvRZgtdvho5IeMdJjAbne-61AyoT3Rw8vpe1gWXv_nSlIyiYEKE5_l0C0gDJXoWvp5FcNuaJbwTn00tDIUNfEFrMzj2o12GDfMwRasEWZAl9upqE1alhZHraHhq3zj-IXRZaL4xXS4FCaW9njpyxmL67D1u_zQkozZ3R8NDepHseu5j5fR3866SV_1z73LWyA_lqNTEJHHzzMIrKLlCP5SGjkTlbiXuM.M3sZKSiKP0_7w7dtGcoAhSk1IpkZw-2x-UzQmxC6DFA&qid=1720482900&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
            <div class="row align-items-center">
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/ana.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Discovering The Rainforest Where Animals Come To Life</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Ana Marques</span>
                            <p>The author of this children’s book is a talented and passionate storyteller with a love
                                for vivid imagination.</p>
                            <a href="https://www.amazon.com/Discovering-Rainforest-Where-Animals-Come-ebook/dp/B0CQ73VW9P/ref=sr_1_2?crid=36ZYPVSIUFYGB&dib=eyJ2IjoiMSJ9.d5CDdFuR-WHcGtUc8fT7gL1QseQIvRcEWcpGjQ_YMFeWOLzHNEYAZvUlWuAd0XnmZZchtouxcwUO0xozu80iwzowmnXMO3UzLfat9a4lIBu2cOyPa81bzRiP8PtCbo3UAnwzrLw6J4w5VDexIxWdjPiKFq3iCvYFe4XVXilPHBU8WepmbcagtPBwmh-Iomwmw7SYZI-O3h0sckCy6WifoYII4GkxrVlZHpgvuFEp3xo.1HI-XlIl9auy857n6C3uY9b5JInIHJn3pU8COwfTAfs&dib_tag=se&keywords=discovering+the+rainforest&qid=1720554893&s=books&sprefix=discovering+the+rain%2Cstripbooks-intl-ship%2C302&sr=1-2"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/herbert.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Unkosher <br />Truth</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Herbert Brody</span>
                            <p>Herbert Brody's memoir, "The Unkosher Truth," is a refreshing and light-
                                hearted read, capturing the journey,</p>
                            <a href="https://www.amazon.com/Unkosher-Truth-Herbert-Brody/dp/B0CR5NCL7G/ref=sr_1_1?crid=1GUFH1W1TDLDY&dib=eyJ2IjoiMSJ9.s7AMMu2IVdzfnYWy2UGeFw.PkWm455BRQwNLuFjuBD-i82E0k3I8R-eF7UNSyzKtRY&dib_tag=se&keywords=the+unkosher+truth&qid=1720558654&s=books&sprefix=the+unkosher+truth%2Cstripbooks-intl-ship%2C293&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/richard.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Enterprise Architecture in Action: Turning Business Strategy into Reality</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Richard Reese</span>
                            <p>If you are asking yourself these questions then this book is for you:
                                Will AI eliminate the need for Enterprise Architects?</p>
                            <a href="https://www.amazon.com/Enterprise-Architecture-Action-Business-Strategy-ebook/dp/B0CQZ48T42/ref=sr_1_1?crid=2N6WJ6BRD0D8L&dib=eyJ2IjoiMSJ9.U9cowWFco3mEhHnwvTiMbAFS9lAYB58gJHnZIj7ScCb6F4uWWf7tuGt7NFIuoYpEF0ZaqfAEiBs9fz6ojGNTgLUiaYG4aSJH9uVExC7tVB9_TQ9VFuoEwCLtmW4csB_MX8isbi-DAbcp4VQPQTuy5d5p87arQtFgmaoVOgPI5i3NteLB2lahr9vQ-dM1acy1DPIbtlYZss1ukQHjeou_Evp53lASZ-yJQ0L9LNHkfZY.ve5WCNOCO2lkZTGfS60fFO7XDQwQEluerjD7Kgzz4yo&dib_tag=se&keywords=enterprise+architecture+in+action&qid=1720563934&s=books&sprefix=enterprise+architecture+in+actio%2Cstripbooks-intl-ship%2C248&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/charlie.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>My Cheating Heart: An Expert's Guide For Not Getting Caught</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Charlie North</span>
                            <p>It started as straight-up, How to Cheat for Dummies guide. However, it didn’t take long
                                for me to realizethat</p>
                            <a href="https://www.amazon.com/My-Cheating-Heart-Experts-Getting/dp/B0CQDLNR2X/ref=sr_1_2?crid=JQ5JF0BDUE2Q&dib=eyJ2IjoiMSJ9._9t2Gij5Vw25sEaSdCm9hmM1Kw_alMRQrK4vJJaTronL7Tb14x5jYxdLtkzVrpbzWMmRZtnrTE_68LkCmlL9bCVMJrB4bQXnrJmxRd7zVH47VIHps9lurbC5delsTQbs7dLSzNkzbpsOsIq9N61cOgtNSHjJ3OOF0KVE6ePknsq3N7TlZN0AfJiVAjdVITguKV94MKZQoZ0Ma40_X0b8yUMr-sghgnWVKCGGs6S6Uvs.W-7sLNUsg7jYnva-Yak0-ir7asUgEhgXlegz2GIqHIA&dib_tag=se&keywords=my+cheating+heart&qid=1720736705&s=books&sprefix=my+cheating+heart%2Cstripbooks-intl-ship%2C384&sr=1-2"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/f.r.-hotchkiss.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>JUST A <br /> COMMON MAN</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>FRANK HOTCHKISS</span>
                            <p>Arch Bailey was driving his classic Morgan home through the rain one night when something
                                unseen's lid into the bucket</p>
                            <a href="https://www.amazon.com/JUST-COMMON-MAN-FRANK-HOTCHKISS-ebook/dp/B0CPNW2XZG/ref=sr_1_1?crid=PTRN111FPC5W&dib=eyJ2IjoiMSJ9.q2i4HnskefJavluD8ev_z_W0TYxLzHYcrFhu4PvgCD_bY8cXJNkbMtwX9g7Y0mpb0DDl3G7kQsS9DXTGeCO13BRwDo_JKXec8lxhuDpfbdTFZEBRm51xk2T00svzPrTzuLEZVHm3wKA6XjzH2_itgwDjVbQCyeAfSmGjWj_QgcIGXgCA1jmmgkbCoX6qPrGizLSC6-Abx9MGxhAsYROomd0rd_nPMDxOouwhTN6ayeI.QXpQn6d-ljYUrC4lLGEdkQYq1WaB6WTlesRGnpxQPdU&dib_tag=se&keywords=just+a+common+man&qid=1720738860&s=digital-text&sprefix=just+a+common+ma%2Cdigital-text%2C339&sr=1-1"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/mahra.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Sun and the Moon Are the Best of Friends: A short story about friendshipr</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Mahra Alhosani</span>
                            <p>"The Sun and the Moon Are the Best of Friends," embark on a journey celebrating the unbreakable bond between</p>
                            <a href="https://www.amazon.com/dp/B0CR7ZNDCQ?ref=cm_sw_r_cp_ud_dp_V7R2AKJRPPQFN3MZ6ZGM&ref_=cm_sw_r_cp_ud_dp_V7R2AKJRPPQFN3MZ6ZGM&social_share=cm_sw_r_cp_ud_dp_V7R2AKJRPPQFN3MZ6ZGM"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    let content2024 = `
<ul class="nav nav-tabs my-5" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan" type="button" role="tab"
            aria-controls="jan" aria-selected="true">Jan</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button" role="tab"
            aria-controls="feb" aria-selected="false">Feb</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button" role="tab"
            aria-controls="mar" aria-selected="false">Mar</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button" role="tab"
            aria-controls="apr" aria-selected="false">Apr</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button" role="tab"
            aria-controls="may" aria-selected="false">May</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button" role="tab"
            aria-controls="jun" aria-selected="false">Jun</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button" role="tab"
            aria-controls="jul" aria-selected="false">Jul</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button" role="tab"
            aria-controls="aug" aria-selected="false">Aug</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button" role="tab"
            aria-controls="sep" aria-selected="false">Sep</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button" role="tab"
            aria-controls="oct" aria-selected="false">Oct</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button" role="tab"
            aria-controls="nov" aria-selected="false">Nov</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button" role="tab"
            aria-controls="dec" aria-selected="false">Dec</button>
    </li>
</ul>
<div class="container">
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="jan" aria-selected="true" role="tabpanel" aria-labelledby="jan-tab">
            <div class="row align-items-center">
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/riddhima.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/bradley.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/george.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/bob-baio.webp" alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Japan Time Travel: Then, Now and Beyond</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Bob Baio</span>
                            <p>Originally, the plan was to release this book ahead of the 2020 Tokyo Summer Olympic
                                Games. However, as fate</p>
                            <a href="https://www.amazon.com/s?k=japan+time+travel&i=stripbooks-intl-ship&crid=2L4256V5N1UPZ&sprefix=japan+time+trave%2Cstripbooks-intl-ship%2C276&ref=nb_sb_noss"
                                target="_blank"><u>Visit On Amazon</u> <img
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/dennis-adjepong.webp"
                                alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>Interview the Interviewer : Series Vol 1</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Dennis Adjepong</span>
                            <p>He has a thirst for researching the field of neurosurgery/Neuroscience and Computer
                                Science. Adjepong graduated</p>
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
                            <p>Jump into the exciting world of “The Bamboo Boogeyman,” a thrilling memoir of a Vietnam
                                veteran’s life.</p>
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
                            <p>At the age of 14, Jerry was gifted an upscale guitar while in college. Subsequently, he,
                                along with two friends,</p>
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
                            <p>In this guidebook, I aim to provide assistance and guidance to aspiring breeders and
                                owners, offering detailed</p>
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
                            <p>Maggie Abrahms, a faithful doctor nearing retirement, experiences a life-altering
                                hit-and-run accident, leading</p>
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
                            <img width="150" height="225" src="../images/portfolio-lp/drapril.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/zezaf.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

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
                            <p>Who am I? the existential question that lingers in the minds of many. Through the
                                Internal Family System module,</p>
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
                            <p>A desperate mother seeks help for her troubled son. A few weeks with the boy's
                                grandfather is her last hope.</p>
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
                            <img width="150" height="225" src="../images/portfolio-lp/stephen-muliokela.webp"
                                alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>The Grand Leadership Strategy: MASTERING THE ART OF LEADERSHIP</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Stephen Muliokela</span>
                            <p>In "The Grand Leadership Strategy," Thought Leader: Stephen A. Muliokela presents a
                                transformative guide</p>
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
                            <img width="150" height="225" src="../images/portfolio-lp/abdirrazak.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/bert.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/leonard.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/skyeabellanosa.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

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
                            <p>Ending global child hunger seems like a straightforward task, right? Think again. If it
                                were truly that simple,</p>
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
                            <p>John Ross, a second-generation Italian, experienced grief for the first time, and his
                                life took an unexpected</p>
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
                            <p>This is a collection of Mr. Kornblum’s columns that he wrote on mediation advocacy as a
                                Fellow of the Litigation</p>
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
                            <p>The inspiration for this book came from having to explain to my small children why daddy
                                sometimes leaves</p>
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
                            <h3>Elucidation of a Historical Falsehood: The Old True Original Historical Reports On “Jean
                                Baptiste Point De Sable.”</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Rafael Pérez</span>
                            <p>In "Elucidation of a Historical Falsehood," author and retired surgeon Rafael Pérez
                                Guerra explores the life and legacy</p>
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
                            <p>An introspective review of the “thirdworldization” of America during the last fifty
                                years. It has been said that cleanliness</p>
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
                            <img width="150" height="225" src="../images/portfolio-lp/arjun.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/carey.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/sharon.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 py-5">
                    <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                        <div class="__bookImages">
                            <img width="150" height="225" src="../images/portfolio-lp/steve.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

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
                            <p>Betty always gets what she wants,and always has.Her husband Bill is soin love with her he
                                has tolerated this personality</p>
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
                            <img width="150" height="225" src="../images/portfolio-lp/john-austin-snook.webp"
                                alt="Book" />
                        </div>
                        <div class="__content">
                            <h3>CROSS BLADE CHRONICLES : VOLUME I THE BLADE’S EDGE</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>John Snook</span>
                            <p>Eve is breaking on a time of fragile peace amongst the nations, and an old enemy that
                                once conquered the world</p>
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
                            <p>The lessons that are presented here are for you or anyone so that you can live a life of
                                success. These lessons</p>
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
                            <p>I am fortunate enough to have had a chance to live in a wide variety of places and meet
                                some amazing people</p>
                            <a href="https://www.amazon.com/LIFE-ILLUSION-Luc-Gerber-ebook/dp/B0CW1N9T26/ref=sr_1_1?crid=2TKF5NCA8RKPP&dib=eyJ2IjoiMSJ9.EpZo8iJqAwLmwBbrXcpHlBBItmwxIVWOU3l-lOALDjtfUbK4UEmpfb6Q4iAlPPnjtS6gJGiXQq81-0hIO7Io8JGxHdn5J8upKD11UMC8ZL6YrWRoIiC-nUXm29bRaniYhE4m_SHty5QABLEb25cRhRgxL-7dqcy1A9OTn2ZNcsIoKZdoIOw3WatOOcdVKxGDSuCjDjDr59XvkYTffnTZngVNNNEtkoKbOGJgqChErlc.yEA9QTFlIos3BPUW4q_Y66rQKwC0ydJgT6vf5HQ5HBY&dib_tag=se&keywords=life+is+an+illusion&qid=1720742377&s=digital-text&sprefix=life+is+an+illusio%2Cdigital-text%2C347&sr=1-1"
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
                            <h3>The Sustainable Charity: Feeding Children WORLDWIDE Through Charitable Innovations
                                (Global Child Hunger Book 3)</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Craig Shawn</span>
                            <p>This book is the result of eight years of dedicated work addressing the child hunger
                                crisis. My experiences have exposed</p>
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
                            <h3>THE UNDERLYING CAUSES OF MENTAL ANOMALIES: The basics that psychiatrists and
                                psychologists missed</h3>
                            <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                            <span>Maxwell Nartey</span>
                            <p>In The Underlying of Mental Anomalies, Dr. Maxwell Nartey, for the first time in the
                                history of the world, uses the science</p>
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
                            <p>To the Ends of the Earth is an autobiography by Melanie Seeger about the few incredible
                                years she spent living in Pakistan,</p>
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
                            <p>In a world defined by accelerating technology and change, explore a visionary framework
                                to shape our interactions</p>
                            <a href="https://www.amazon.com/CONSCIOUS-MACHINE-ARTIFICIAL-ENLIGHTENED-INTELLIGENCE-ebook/dp/B0D48GRG2G/ref=sr_1_1?crid=PSVA6MHX766I&dib=eyJ2IjoiMSJ9.mM6AdcoQ0wtAIXPdDgqGDUnI7XyTf0CvJBaVbIXXVkQqNjjnwSmE5PlGCgT6gkmflrXapchqSrh-5HtbDQp_dcPYebwckSYHBBjhVvULD_j0ybTO8DlEVws-E6ZvzaTRtrSWC3R080WI9Sl60x8dQ4J_u7micBkHsOPu7sNhtO0aYTgUkOpUgQUQv-DHqekO_svKUbpjtD4W68SPyb7LmtiVrB1MtukXq-EUqiTpQ8c.6BmzlSe2Tth5sl7WprcFrwu93LJc-qcPEGXGCMZyzII&dib_tag=se&keywords=the+conscious+machine&qid=1720744276&s=digital-text&sprefix=the+concious+machin%2Cdigital-text%2C354&sr=1-1"
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
                            <img width="150" height="225" src="../images/portfolio-lp/william.webp" alt="Book" />
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
                                    src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                    class="d-inline-block"></a>

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
                            <p>Embark on a nostalgic journey through time featuring 56 poems with hundreds of photos
                                that vividly recount</p>
                            <a href="https://www.amazon.com/Brooklyn-Borough-Dreams-Martin-Blumberg-ebook/dp/B0D72D6GYJ/ref=sr_1_1?crid=3TKE01Y972EOB&dib=eyJ2IjoiMSJ9.-W6-zxpHwiSewR83FWohz0dZly8tlpvirYMUr2ZKUFjGjHj071QN20LucGBJIEps.orsOEYUK3pgovFTSWXuxZgD8PjUabZMGtR8IfVJ4I1Q&dib_tag=se&keywords=the+borough+of+dreams&qid=1720742761&s=digital-text&sprefix=the+borough+of+dreams%2Cdigital-text%2C345&sr=1-1"
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
                            <img width="150" height="225" src="../images/portfolio-lp/imelda.webp" alt="Book" />
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
`
    if (x == 2023) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2023;
    } else if (x == 2024) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2024;
    }

}