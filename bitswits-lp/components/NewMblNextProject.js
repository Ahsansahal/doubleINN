import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewMblNextProject.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon2 from '../public/newHomePageImages/nexticon/1.png'
import icon3 from '../public/newHomePageImages/nexticon/2.png'
import icon4 from '../public/newHomePageImages/nexticon/3.png'
import icon5 from '../public/newHomePageImages/nexticon/5.png'
import icon6 from '../public/newHomePageImages/nexticon/6.png'
import icon7 from '../public/newHomePageImages/nexticon/7.png'
import icon8 from '../public/newHomePageImages/nexticon/8.png'


const Homenextproject = () => {

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

      <section className={styles.texkp}>
        <Container>
          <Row>
            <Col xl={12}>
              <div className={styles.closing}>
                <div>
                  <h3>Let's start talking about your</h3>
                  <h2>Next Project.</h2>
                </div>
                <div>
                  <Link href='telto:(833) 500-6007'>(833) 500-6007</Link>
                </div>
              </div>

            </Col>
          </Row>

        </Container>

        <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-5`}>

          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={icon2} className="img-fluid w-50" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={icon3} className="img-fluid w-50" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={icon4} className="img-fluid w-50" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={icon5} className="img-fluid w-50" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={icon6} className="img-fluid w-50" />
          </div>
          <div className={`${styles.strpImg} ${styles.minImg}`}>
            <Image alt="BitsWits" src={icon7} className="img-fluid w-25" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={icon8} className="img-fluid w-25" />
          </div>

        </Slider>
      </section>
    </>
  )
}

export default Homenextproject