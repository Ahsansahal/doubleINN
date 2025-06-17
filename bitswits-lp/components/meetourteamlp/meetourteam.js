import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Card, Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Meeteam.module.css'
import logo from '../../public/images/icons/footerlogo.webp'
import Isam from '/public/meetourteam/Isaam.png'
import Farhan from '/public/meetourteam/Farhan.png'
import FY from '/public/meetourteam/FY.png'
import MI from '/public/meetourteam/Mi.png'
import Gavin from '/public/meetourteam/Gavin.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const meetourteamlp = () => {
  let meetOurTeamSlider = {
    dots: false,
    arrows: false,
    autoplay: true,
    loop: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  let meetteam = [
    {
      teamMember: Isam,
      name: "Isam <br/> Rashid",
      position: "Sales Manager",
      email: "Isam@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: Farhan,
      name: "Farhan <br/> Feroz Ali",
      position: "President",
      email: "Farhan@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: FY,
      name: "Faisal Qadeer <br/> Yousufi",
      position: "Founder & CEO",
      email: "FY@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: MI,
      name: "Muhammad <br/> Imran",
      position: "Co-Founder",
      email: "MI@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: Gavin,
      name: "Gavin <br/> Fernandes",
      position: "Vice President",
      email: "Gavin@bitswits.co",
      phone: "0321-8280391",
    },
  ]

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const updateScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 991); // Change the breakpoint to 992 pixels
  };

  useEffect(() => {
    updateScreenSize();

    const handleResize = () => {
      updateScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className={`${styles.meetteam} meetteam`}>
        <Container className={`text-center`}>
          <Row>
            <Col lg={12}>
              <Image src={logo} className={`${styles.logo} img-fluid`} alt="Bitwits Meet Our Team" />
            </Col>
            <Col lg={12} className='mb-0 mt-4'>
              <h1>Tap to connect</h1>
            </Col>
          </Row>
          <Row className='justify-content-around mt-5'>
            {isLargeScreen && meetteam?.map((e, i) => (
              <Col lg={2} key={i}>
                <div className={`${styles.flipBox} ${styles.hoverEffect}`}>
                  <div className={styles.flipBoxInner}>
                    <div className={styles.flipBoxFront}>
                      <Image src={e.teamMember} quality={100} alt="Bitwits Meet Our Team" className='img-fluid' />
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p>{e.position}</p>
                    </div>
                    <div className={styles.flipBoxBack}>
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p>{e.position}</p>
                      <p><a href="mailto:{e.email}">{e.email}</a></p>
                      <p><a href="tel:{e.phone}">{e.phone}</a></p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}

            
              {!isLargeScreen && meetteam?.map((e, i) => (
                <Col md={4} sm={12} xs={12} key={i} className='py-1'>
                  <div className={`${styles.flipBox} ${styles.hoverEffect}`}>
                    <div className={styles.flipBoxInner}>
                      <div className={styles.flipBoxFront}>
                        <Image src={e.teamMember} quality={100} alt="Bitwits Meet Our Team" className='img-fluid d-inline' />
                        <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                        <p>{e.position}</p>
                      </div>
                      <div className={styles.flipBoxBack}>
                        <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                        <p>{e.position}</p>
                        <p><a href="mailto:{e.email}">{e.email}</a></p>
                      <p><a href="tel:{e.phone}">{e.phone}</a></p>
                      </div>
                    </div>
                  </div>

                </Col>
              ))}
            



          </Row>
        </Container>
      </section>
    </>
  )
}

export default meetourteamlp
