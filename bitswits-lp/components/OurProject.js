import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/OurProject.module.css'
import Slider from 'react-slick'
//images
import slideImg1 from '../public/images/workprojects/1.jpg'
import slideImg2 from '../public/images/workprojects/2.jpg'
import slideImg3 from '../public/images/workprojects/3.jpg'
import slideImg4 from '../public/images/workprojects/4.jpg'
import slideImg5 from '../public/images/workprojects/5.jpg'
import slideImg6 from '../public/images/workprojects/6.jpg'
import slidebefore from '../public/images/workprojects/slidebefore.png'


const OurProject = () => {

    var projectslider = {
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '90px',
        variableWidth: false,
    };

    var ourproject1 = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={styles.ourProject}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={12}>
                            <h5 className='font20 fontf font-semibold letterspace fyColor2 text-center mb-3'>CAPABILITIES</h5>
                        </Col>
                        <Col lg={12}>
                            <h2 className='font50 black fontf font-bold line60 white text-center mb-0'>
                                The Game Plan for <span className='grdiant'> Building Your App </span>
                            </h2>
                        </Col>
                        
                        <Row>
                            <Col lg={2}><div className={styles.line1}></div></Col>
                            <Col lg={2}><div className={styles.line2}></div></Col>
                            <Col lg={2}><div className={styles.line3}></div></Col>
                            <Col lg={2}><div className={styles.line4}></div></Col>
                            <Col lg={2}><div className={styles.line5}></div></Col>
                            <Col lg={2}><div className={styles.line6}></div></Col>
                        </Row>

                        <Col lg={12}>
                            <Slider {...projectslider} className={`${styles.newproject} newproject`}>
                                <div className={styles.slideBox}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Initial Consultation</h3>
                                                <p className='font18 fontf'>Our top Android app developers start by talking about the objectives, obstacles, and limitations you have for your app.</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Determining UX/UI goals and challenges. </p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Extensive competitor analysis.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Map our user personas and use cases.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="tel:+18335006007" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="BitsWits" className='img-fluid'
                                                    src={slideImg1}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Gathering Requirements</h3>
                                                <p className='font18 fontf'>We'll work with you to define the specific requirements and functionality for your business app.</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Monitoring and maintenance.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Optimizing performance post-release.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Post launch QA and optimization.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="tel:+18335006007" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="BitsWits" className='img-fluid'
                                                    src={slideImg2}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Design and Prototype</h3>
                                                <p className='font18 fontf'>In order to give you a sense of how your app will look and work, we design wireframes and prototypes.</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Mapping out app structure and flow.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Designing low-fidelity skeletal framework.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Enabling quick revision based on feedback. </p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="tel:+18335006007" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="BitsWits" className='img-fluid'
                                                    src={slideImg3}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Development</h3>
                                                <p className='font18 fontf'>Utilizing development approaches, our team will create your app in a way that swiftly responds to any issues or modifications.</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Applying visual branding assets and styles.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Crafting intuitive user experiences.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Creating an interactive prototype.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="tel:+18335006007" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="BitsWits" className='img-fluid'
                                                    src={slideImg4}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Tests and Quality Control</h3>
                                                <p className='font18 fontf'>Your app will be thoroughly evaluated by us to make sure it is dependable, stable, and simple to use.</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Applying visual branding assets and styles.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Crafting intuitive user experiences.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Creating an interactive prototype.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="tel:+18335006007" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="BitsWits" className='img-fluid'
                                                    src={slideImg5}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Launch</h3>
                                                <p className='font18 fontf'>To guarantee the success of your app, our top Android app developers assist you with the submission procedure and offer continuous assistance.</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Applying visual branding assets and styles.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Crafting intuitive user experiences.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="BitsWits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Creating an interactive prototype.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="tel:+18335006007" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="BitsWits" className='img-fluid'
                                                    src={slideImg6}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </Col>
                    </Row>

                    {/*============= mobile slider ==============*/}

                    <Slider {...ourproject1} className='sidenewlong mt-5'>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Initial Consultation</h3>
                                        <p className='font18 fontf'>Our top Android app developers start by talking about the objectives, obstacles, and limitations you have for your app.</p>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Determining UX/UI goals and challenges. </p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Extensive competitor analysis.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Map our user personas and use cases.</p>
                                        </div>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="tel:+18335006007" className='white'>
                                                Book a Call!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="BitsWits" className='img-fluid'
                                            src={slideImg1}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Gathering Requirements</h3>
                                        <p className='font18 fontf'>We'll work with you to define the specific requirements and functionality for your business app.</p>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Monitoring and maintenance.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Optimizing performance post-release.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Post launch QA and optimization.</p>
                                        </div>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="tel:+18335006007" className='white'>
                                                Book a Call!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="BitsWits" className='img-fluid'
                                            src={slideImg2}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Design and Prototype</h3>
                                        <p className='font18 fontf'>In order to give you a sense of how your app will look and work, we design wireframes and prototypes.</p>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Mapping out app structure and flow.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Designing low-fidelity skeletal framework.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Enabling quick revision based on feedback. </p>
                                        </div>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="tel:+18335006007" className='white'>
                                                Book a Call!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="BitsWits" className='img-fluid'
                                            src={slideImg3}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Development</h3>
                                        <p className='font18 fontf'>Utilizing development approaches, our team will create your app in a way that swiftly responds to any issues or modifications.</p>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Applying visual branding assets and styles.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Crafting intuitive user experiences.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Creating an interactive prototype.</p>
                                        </div>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="tel:+18335006007" className='white'>
                                                Book a Call!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="BitsWits" className='img-fluid'
                                            src={slideImg4}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Tests and Quality Control</h3>
                                        <p className='font18 fontf'>Your app will be thoroughly evaluated by us to make sure it is dependable, stable, and simple to use.</p>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Applying visual branding assets and styles.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Crafting intuitive user experiences.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Creating an interactive prototype.</p>
                                        </div>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="tel:+18335006007" className='white'>
                                                Book a Call!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="BitsWits" className='img-fluid'
                                            src={slideImg5}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Launch</h3>
                                        <p className='font18 fontf'>To guarantee the success of your app, our top Android app developers assist you with the submission procedure and offer continuous assistance.</p>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Applying visual branding assets and styles.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Crafting intuitive user experiences.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Creating an interactive prototype.</p>
                                        </div>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="tel:+18335006007" className='white'>
                                                Book a Call!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="BitsWits" className='img-fluid'
                                            src={slideImg6}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>

                </Container>
            </section>
        </>
    )
}

export default OurProject
