import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Experance.module.css";

import scr4 from '../public/dubailp/dem/1.png';
import scr5 from '../public/dubailp/dem/2.png';
import scr6 from '../public/dubailp/dem/3.png';
import arrow from '../public/dubailp/dem/arrow.png';
import arrow2 from '../public/dubailp/dem/arrow2.png';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experiance = (props) => {

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
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };


 

    return (
        <>
            <section className={`${styles[props.tale]}`}>
                <Container className={styles.startups}>
                    <Row className={styles.super}>
                        <Col xl={12}>
                        <h2 className="white font50 f-700  mb-3 center">Experience A Workforce is Built to Help <br></br>
You Celebrate Many Triumphs</h2>
                        <p className="font16 font-normal white center">Talent at Bitswits thrives on building highly competitive digital products that go on to help enterprises to disrupt their industries while enabling startups to make an impact while ensuring speed-to-market. Through a comprehensive process of hiring the best app developers and designers in Dubai, we ensure that every individual hired aligns with the vision of our organization and believes in leveraging the art of individualistic collectivism to learn, ideate, iterate, incubate and scale.</p>
                        <p className="font16 font-normal white  mb-5 center">In the fewest possible words, our entire team of developers, designers, Q/A engineers, project managers, UI/UX specialists and business analysts are passionate and always ready to help you find novel ways of competing in this highly competitive market place.</p>
                        </Col>
                    </Row>
                    {isSliderActive ?

                    <Row className={styles.dust}>
                        <Col xl={4}>
                       <div className={styles.dustpost}>
                        <h4>300+</h4>
                        <p>Apps Developed</p>
                       </div>
                        </Col>
                        <Col xl={4} className={styles.moutn}>
                        <div className={styles.dustpost}>
                        <h4>65+</h4>
                        <p>Clutch Reviews</p>
                       </div>
                       </Col>
                       <Col xl={4}>
                       <div className={styles.dustpost}>
                        <h4>35+</h4>
                        <p>Industries Served</p>
                       </div>
                       </Col>
                    </Row>

                    :
                    <Slider
                    {...awardslogo}
                    className={` ${styles.startup1}  startposition d-block m-auto text-center`}
                  >
                     
                       
                       <div className={styles.dustpost}>
                        <h4>300+</h4>
                        <p>Apps Developed</p>
                       </div>
                        
                     
                        <div className={styles.dustpost}>
                        <h4>65+</h4>
                        <p>Clutch Reviews</p>
                       </div>
                       
                
                       <div className={styles.dustpost}>
                        <h4>35+</h4>
                        <p>Industries Served</p>
                       </div>
                       
                
                  </Slider>

}
                
                </Container>
            </section>
        </>
    )
}

export default Experiance