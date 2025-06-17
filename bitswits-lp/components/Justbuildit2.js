import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Justbuildit2.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from '../public/images/banner/bannerImg1.png'
import banImg2 from '../public/images/banner/bannerImg2.png'
import banImg3 from '../public/images/banner/bannerImg1.png'
import banImg4 from '../public/images/banner/bannerImg2.png'
import banImg5 from '../public/images/banner/bannerImg1.png'


const Justbuildit = () => {

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>

            <section className={styles.slide}>
                <Container>
                    <Row className={` ${styles.hybired} gy-3`}>
                        <Col xl={10}>
                            <h2 className='text-white f-50 font-bold'>About</h2>
                            <h4 className='text-white font-500'>Our mobile app developers and designers' goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.</h4>
                            <p className='text-white font-500'>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
                        </Col>
                        <Col xl={2}>
                            <Link className={styles.justNow} href='#'>Call Now!</Link>
                        </Col>
                    </Row>
                </Container>

                <Slider {...bannerslider} className='mt-5'>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg1} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg2} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg3} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg4} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" src={banImg5} className="img-fluid" />
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default Justbuildit