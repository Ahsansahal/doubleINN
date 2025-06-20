import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Transformative.module.css";

import scr1 from '../public/dubailp/ani/1.png';
import scr2 from '../public/dubailp/ani/2.png';
import scr3 from '../public/dubailp/ani/3.png';
import scr4 from '../public/dubailp/ani/4.png';
import scr5 from '../public/dubailp/ani/5.png';

import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Transformative = (props) => {

    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1201) {
          setIsSliderActive(false);
        } else {
          setIsSliderActive(true);
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    // slider 
    var awardslogo = {
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
        <>
            <section className={`${styles[props.tale]}`}>
                <Container>
                    <Row className={styles.super}>
                        <Col xl={12}>
                        <h2 className="white font50 f-700  mb-3">Bitswits Transformative Impact <br></br> on Myriad Industry Verticals </h2>
                        <p className="font16 font-normal white  mb-4">Being the top app development company in Dubai, we offer solutions to several industries and aid them in overcoming complex business challenges.</p>
                        <p className="font16 font-normal white  mb-5">We know that being technologically advanced in the post-pandemic era is the only viable way to stay relevant for decades, and we consider ourselves as the technology vendor in Dubai that provides businesses with the solutions they need to pivot to a whole new level. Here's a list of the industries we serve:</p>
                        </Col>
                    </Row>
                    {isSliderActive ?

                    <Row>
                    <div className={styles.tak}>
                    <div className={styles.fold1}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr1} />
                        </div>
                        <div className={styles.details}>
                            <h3>Real Estate</h3>
                        </div>
                    </div>
                    <div className={styles.fold}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr2} />
                        </div>
                        <div className={styles.details}>
                            <h3>Banking & Finance</h3>
                        </div>
                    </div>
                    <div className={styles.fold}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr3} />
                        </div>
                        <div className={styles.details}>
                            <h3>Education</h3>
                        </div>
                    </div>
                    <div className={styles.fold}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr4} />
                        </div>
                        <div className={styles.details}>
                            <h3>E-Commerce</h3>
                        </div>
                    </div>
                    <div className={styles.fold1}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr5} />
                        </div>
                        <div className={styles.details}>
                            <h3>Healthcare</h3>
                        </div>
                    </div>
                    </div>
                    </Row>

                    :

                    <Slider
                    {...awardslogo}
                    className={` ${styles.startup1}  startposition`}
                  >
                   
                   
                    <div className={styles.foldsad}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr1} />
                        </div>
                        <div className={styles.details1}>
                            <h3>Real Estate</h3>
                        </div>
                    </div>
                    <div className={styles.foldsad}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr2} />
                        </div>
                        <div className={styles.details1}>
                            <h3>Banking & Finance</h3>
                        </div>
                    </div>
                    <div className={styles.foldsad}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr3} />
                        </div>
                        <div className={styles.details1}>
                            <h3>Education</h3>
                        </div>
                    </div>
                    <div className={styles.foldsad}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr4} />
                        </div>
                        <div className={styles.details1}>
                            <h3>E-Commerce</h3>
                        </div>
                    </div>
                    <div className={styles.foldsad}>
                        <div className={styles.mewpo}>
                            <Image className="img-fluid" src={scr5} />
                        </div>
                        <div className={styles.details1}>
                            <h3>Healthcare</h3>
                        </div>
                    </div>
                    
                    </Slider>

}
                </Container>
            </section>
        </>
    )
}

export default Transformative