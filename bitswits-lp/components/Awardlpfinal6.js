import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Footerlpform6.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import icon1 from '../public/images/awards/award1.png'
import icon2 from '../public/images/awards/award2.png'
import icon3 from '../public/images/awards/award3.png'
import icon4 from '../public/images/awards/award4.png'
import icon5 from '../public/images/awards/award5.png'
import icon6 from '../public/images/awards/award6.png'
import icon7 from '../public/images/awards/award7.png'
import icon8 from '../public/images/awards/award8.png'
import icon9 from '../public/images/awards/award9.png'
import icon10 from '../public/images/awards/award10.png'
import icon11 from '../public/images/awards/award11.png'


const Awardlpfinal6 = () => {

  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 6,
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

      <section className={styles.footer}>

      
          <Row className={styles.project}>
            <Col lg={12}>
              <h2 className='fontf font-bold white mb-0 text-center'>
              Awards And Recognition
              </h2>
            </Col>
            <Col lg={12} className={styles.trstCol}>
              <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon1} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon2} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon3} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon4} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon5} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon6} className="img-fluid" />
                </div>
                <div className={`${styles.strpImg} ${styles.minImg}`}>
                  <Image alt="BitsWits" src={icon7} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon8} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon9} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon10} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon11} className="img-fluid" />
                </div>
              </Slider>
            </Col>
          </Row>
       
      </section>
    </>
  )
}

export default Awardlpfinal6