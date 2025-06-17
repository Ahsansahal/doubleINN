import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Bullet2dproofgame2.module.css";
//
import icon11 from '../public/newHomePageImages/done.png'


const Bullet2dproofgame = () => {
    return (

        <>
            <div className={styles.creative2}>
                <section className={styles.creative}>
                    <Container>
                        <Row className={styles.game}>
                            <Col xl={10}>
                                <h3 className='white mb-0'>Services</h3>
                                <h2 className='mb-5'> BitsWits: The Core <br></br> Values! </h2>
                            </Col>
                        </Row>

                        <Row className={styles.boy}>
                            <Col xl={6} className={styles.colname}>

                                <div className={styles.dscool}>
                                    <div className={styles.gredient}>
                                        <h3>Innovation</h3>
                                        <p>Our top app developers at BitsWits, focus on pushing boundaries and thinking outside the box to create amazing mobile applications that meet the user requirements. We are always looking for new ideas and technology to stay ahead of the competition.</p>
                                    </div>
                                    <div className={styles.gredient}>
                                        <h3>Timely Delivery</h3>
                                        <p>We understand that time is valuable and meeting deadlines is important for our client’s success. We prioritize timely deliveries while communicating and updating our clients about the delivery. Professionals at this mobile app development company ensure their client’s projects stay on track. Quality Excellence
                                            BitsWits take great pride in delivering the best mobile app development solutions of the highest quality. By following strict standards and best practices in every step of development, testing, and deployment, our professional app developers ensure that our applications run smoothly, providing quality outcomes.</p>
                                    </div>
                                </div>

                                <div className={` ${styles.dscool} mt-3`}>
                                    <div className={styles.gredient}>
                                        <h3>Quick Collaboration</h3>
                                        <p>At BitsWits, top mobile app development services are offered with the help of teamwork and collaboration. Our professionals work closely with their clients throughout the development process while constantly seeking their feedback and input.
                                        </p>
                                    </div>
                                    <div className={styles.gredient}>
                                        <h3>Reliability and Security</h3>
                                        <p>Our expert app developers and designers understand the significance of keeping their client’s data safe and secure. We implement strong security measures and industry-standard protocols to protect the information in our mobile applications, maintaining confidentiality and availability.</p>
                                    </div>
                                </div>

                                <div className={` ${styles.dscool} mt-3`}>

                                    <div className={styles.gredient}>
                                        <h3>Dealing with Challanges</h3>
                                        <p>At BitsWits, problems and complications aren’t problems but opportunities to grow and learn. Our mobile app development company and its team understand what failure is. We tend to find innovative solutions and deliver positive outcomes when dealing with any issue.</p>
                                    </div>
                                    <div className={styles.gredient1}>
                                        <Link href="tel:+18335006007">CONSULT WITH OUR TEAM!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div className={styles.tested1}>
                                    <Image quality={75} className='img-fluid' src={icon11} alt='BitsWits' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>

    )
}

export default Bullet2dproofgame