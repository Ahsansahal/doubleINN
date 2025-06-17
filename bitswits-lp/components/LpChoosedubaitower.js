import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpChoosedubaitower.module.css";
//images
import banImg1 from "../public/images/lp-images/icon1.png";
import banImg2 from "../public/images/lp-images/icon2.png";
import banImg3 from "../public/images/lp-images/icon3.png";
import banImg4 from "../public/images/lp-images/icon4.png";
import banImg5 from "../public/images/lp-images/icon5.png";
import banImg6 from "../public/images/lp-images/icon6.png";
import banImg7 from "../public/images/lp-images/icon7.png";
import banImg8 from "../public/images/lp-images/icon8.png";
import banImg9 from "../public/images/lp-images/icon9.png";
import towe from "../public/dubailp/towe.png";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const LpChoosedubaitower = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container>
          <Row className="align-items-center gy-lg-5 gy-4">
            <Col lg={6} className={styles.walk}>
              <h3 className="white newchoose font-bold f-700">Bitswits Digital Footprint in Dubai</h3>
              
              <p>
              Bitswits award-winning presence globally and in Dubai speaks volumes about the company and what we believe in as an organization. Extending our reach to the MENA region and having plans for moving beyond, we aim to build high-value and problem-solving digital products for businesses that ensure sustainable growth, scalability and success in the highly competitive market of Dubai.
              </p>
              <p>
              Bringing our expert team of certified software engineers, product developers, Q/A Engineers and business strategists to the region, the company leadership guarantees an environment composed of tech-driven and experience-led digital solutions that will empower the entrepreneurial culture of Dubai.
              </p>
             <p>In addition, against the COVID-19 pandemic, businesses observed a devastating setback that drove several companies out of business. Bitswits digital transformation suite consists of all the digital assets businesses need to unlock opportunities, plan strategically to tackle global uncertainties and keep their industries and business models afloat.</p>
              <Link href="javascript:$zopim.livechat.window.show();" className={styles.dus}>
              Let’s Get Started
              </Link>
            </Col>
            <Col lg={6}>
             <Image className="img-fluid" src={towe} />
            </Col>

          
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LpChoosedubaitower;
