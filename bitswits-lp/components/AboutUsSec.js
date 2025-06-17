import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import phone1 from '../public/images/aboutslider/phone1.svg'
import phone2 from '../public/images/aboutslider/phone2.svg'
import phone3 from '../public/images/aboutslider/phone3.svg'
import phone4 from '../public/images/aboutslider/phone4.svg'
import phone5 from '../public/images/aboutslider/phone5.svg'
import phone6 from '../public/images/aboutslider/phone6.svg'
import phone7 from '../public/images/aboutslider/phone7.svg'
import phone8 from '../public/images/aboutslider/phone8.svg'
import phone9 from '../public/images/aboutslider/phone9.svg'


const AboutUsSec = () => {

    var phoneSlider = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className={`${styles.aboutus} ${styles.aboutUsSec}`}>
                <Container>
                    <Row className='aboutfold'>
                        <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>About Us</h3>
                        </Col>
                        <Col lg={7}>

                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="tel:+18335006007">
                                CALL NOW!
                            </Link>
                        </Col>
                        <Col lg={12} className='mt-0 mt-md-5'>
                            <p className='font16 fontf font-medium mt-4 mb-4 black'>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.</p>

                            <p className='font16 fontf font-medium mt-4 black'>Our mobile app developers and designers' goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.</p>
                        </Col>
                        <Col lg={12} className='mt-0 mt-md-5'>
                            <div className={styles.phoneSliderBox}>
                                <Slider {...phoneSlider} className={`${styles.phoneSlider} phoneSlider`}>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone1} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone2} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone3} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone4} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone5} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone6} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone7} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone8} className='img-fluid' />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image alt="BitsWits" src={phone9} className='img-fluid' />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutUsSec