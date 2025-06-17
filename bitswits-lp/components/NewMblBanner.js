import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblBanner.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import BannerImage from "@/public/newMobilePageImages/banner_image.png"
import icon20 from '../public/newHomePageImages/nexticon/1.png'
import icon30 from '../public/newHomePageImages/nexticon/2.png'
import icon40 from '../public/newHomePageImages/nexticon/3.png'
import icon50 from '../public/newHomePageImages/nexticon/5.png'
import icon60 from '../public/newHomePageImages/nexticon/6.png'
import icon70 from '../public/newHomePageImages/nexticon/7.png'
import icon80 from '../public/newHomePageImages/nexticon/8.png'



const NewHomeBanner = () => {

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <p className={`${styles.just} ${styles.just2} text-center font25 font-regular mb-2 mb-lg-0`}>A TOP</p>
                            <h3 className={`${styles.develop} text-center f-50 font-bold mb-1`}>
                                <span className='grdiant d-block'>MOBILE APP DEVELOPMENT</span>
                                <span className='d-block'>Company At Your Service</span>
                            </h3>
                            <p className={`${styles.just} text-center f-13 font-medium mb-4 mb-lg-0`}>We deliver great results, on time and on budget. Contact us to start talking about your project today!</p>

                            <div className={styles.pont}>
                                <Link className={styles.about} href="tel:+18335006007">LET'S CONNECT</Link>
                            </div>

                            <div className={styles.secImage}>
                                <Image quality={75} alt='BitsWits' src={BannerImage} className={`img-fluid`} />
                            </div>

                        </Col>
                    </Row>
                </Container>

                <div>
                    <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-5`}>

                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon20} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon30} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon80} className="img-fluid w-25" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon40} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon50} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon60} className="img-fluid w-50" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="BitsWits" src={icon70} className="img-fluid w-25" />
                        </div>

                    </Slider>
                </div>
            </section>
        </>
    )
}

export default NewHomeBanner