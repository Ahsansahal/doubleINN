import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import styles from '@/styles/Ourservices.module.css'
//
import icon1 from '../public/images/icons/driven.png'
import icon2 from '../public/images/icons/perspective.png'
import icon3 from '../public/images/icons/challenge.png'
import icon4 from '../public/images/icons/collaborative.png'
import icon5 from '../public/images/icons/Communicate.png'


const AbtOurservices = () => {

    return (
        <>
            <section className={`${styles.ourservices} ${styles.abtServices} abtourservices`}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white'>Services</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font50 black fontf font-bold line60 white'>BitsWits: <span className='grdiant'>The Core Values!</span></h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="javascript:$zopim.livechat.window.show();">CONSULT WITH OUR TEAM!</Link>
                        </Col>
                    </Row>
                    <Row className='mt-5 pb-5 ourservicesfaqs'>
                        <Col lg={12}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <Image alt="BitsWits" src={icon1} className='img-fluid' />
                                        Innovation
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Our <span className='grdiant'>top app developers</span> at BitsWits, focus on pushing boundaries and thinking outside the box to create amazing mobile applications that meet the user requirements. We are always looking for new ideas and technology to stay ahead of the competition.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <Image alt="BitsWits" src={icon2} className='img-fluid' />
                                        Timely Delivery
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We understand that time is valuable and meeting deadlines is important for our client’s success. We prioritize timely deliveries while communicating and updating our clients about the delivery. Professionals at this <span className='grdiant'>mobile app development company</span> ensure their client’s projects stay on track. <strong>Quality Excellence</strong>
                                        <span className='mt-2 d-block'>BitsWits take great pride in delivering the best <span className='grdiant'>mobile app development solutions</span> of the highest quality. By following strict standards and best practices in every step of development, testing, and deployment, our professional <span className='grdiant'>app developers</span> ensure that our applications run smoothly, providing quality outcomes. </span>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <Image alt="BitsWits" src={icon3} className='img-fluid' />
                                        Quick Collaboration
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        At BitsWits, top <span className='grdiant'>mobile app development services</span> are offered with the help of teamwork and collaboration. Our professionals work closely with their clients throughout the development process while constantly seeking their feedback and input.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <Image alt="BitsWits" src={icon4} className='img-fluid' />
                                        Reliability and Security
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Our expert <span className='grdiant'>app developers</span> and designers understand the significance of keeping their client’s data safe and secure. We implement strong security measures and industry-standard protocols to protect the information in our mobile applications, maintaining confidentiality and availability.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        <Image alt="BitsWits" src={icon5} className='img-fluid' />
                                        Dealing with Challenges
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        At BitsWits, problems and complications aren’t problems but opportunities to grow and learn. Our <span className='grdiant'>mobile app development company</span> and its team understand what failure is. We tend to find innovative solutions and deliver positive outcomes when dealing with any issue.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default AbtOurservices