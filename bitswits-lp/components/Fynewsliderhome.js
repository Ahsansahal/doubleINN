import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/Newfyslider.module.css";
//images
import banImg1 from '../public/newHomePage/images/slider1.png'
import banImg2 from '../public/newHomePage/images/slider2.png'
import banImg3 from '../public/newHomePage/images/slider3.png'
import banImg4 from '../public/newHomePage/images/slider4.png'
import banImg5 from '../public/newHomePage/images/slider5.png'
import banImg6 from '../public/newHomePage/images/slider6.png'
import banImg7 from '../public/newHomePage/images/slider7.png'
import banImg8 from '../public/newHomePage/images/slider8.png'


export default function HomeBannerSlider() {

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.BannerSlider}>
                <Slider {...bannerslider} className={`${styles.slider} newLogoSlide pt-5`}>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg1} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg2} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg3} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg4} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg5} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg6} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg7} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image quality={100} alt="BitsWits" src={banImg8} className="img-fluid" />
                    </div>
                </Slider>
            </section>
        </>
    )
}

