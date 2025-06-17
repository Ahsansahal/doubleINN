import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewMblCapabilities.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import team1 from '../public/newMobilePageImages/discuss.png'
import close from '../public/newMobilePageImages/mark.png'


const Capabilities = () => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>

            <section className={styles.home}>
                <Container className='qtech'>
                    <Row className={styles.posttext}>
                        <Col xl={12}>
                            <h3>Industries</h3>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <h2>Mobile Application Development <br />
                                    Company For Everyone Out There</h2>
                                <Link className={styles.about} href="javascript:$zopim.livechat.window.show();">Connect Now!</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className={styles.connsct}>
                            <Row className={` mt-5 mb-5`}>
                                <Col lg={2}><div className={styles.line1}></div></Col>
                                <Col lg={2}><div className={styles.line2}></div></Col>
                                <Col lg={2}><div className={styles.line3}></div></Col>
                                <Col lg={2}><div className={styles.line4}></div></Col>
                                <Col lg={2}><div className={styles.line5}></div></Col>
                                <Col lg={2}><div className={styles.line6}></div></Col>
                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

                            <div className={styles.high}>
                                <Row className='align-items-center'>
                                    <Col xl={6}>
                                        <div className={styles.deter}>
                                            <h3>Health Care </h3>
                                            <p>
                                            We understand the unique challenges and opportunities that the healthcare industry presents. Our team of experienced developers and designers are committed to creating custom solutions that address the specific needs of healthcare providers, patients, and administrators.
                                            </p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Telemedicine Solution</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Electronic Health Records (EHR)</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Practice Management Systems</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Clinical Software Solutions</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Medical Device Integrations Solutions</p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-5 mt-lg-0 text-center'>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row className='align-items-center'>
                                    <Col xl={6}>
                                        <div className={styles.deter}>
                                            <h3>Health Care </h3>
                                            <p>
                                            We understand the unique challenges and opportunities that the healthcare industry presents. Our team of experienced developers and designers are committed to creating custom solutions that address the specific needs of healthcare providers, patients, and administrators.
                                            </p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Telemedicine Solution</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Electronic Health Records (EHR)</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Practice Management Systems</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Clinical Software Solutions</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Medical Device Integrations Solutions</p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-5 mt-lg-0 text-center'>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row className='align-items-center'>
                                    <Col xl={6}>
                                        <div className={styles.deter}>
                                            <h3>Health Care </h3>
                                            <p>
                                            We understand the unique challenges and opportunities that the healthcare industry presents. Our team of experienced developers and designers are committed to creating custom solutions that address the specific needs of healthcare providers, patients, and administrators.
                                            </p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Telemedicine Solution</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Electronic Health Records (EHR)</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Practice Management Systems</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Clinical Software Solutions</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Medical Device Integrations Solutions</p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-5 mt-lg-0 text-center'>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row className='align-items-center'>
                                    <Col xl={6}>
                                        <div className={styles.deter}>
                                            <h3>Health Care </h3>
                                            <p>
                                            We understand the unique challenges and opportunities that the healthcare industry presents. Our team of experienced developers and designers are committed to creating custom solutions that address the specific needs of healthcare providers, patients, and administrators.
                                            </p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Telemedicine Solution</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Electronic Health Records (EHR)</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Practice Management Systems</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Clinical Software Solutions</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Medical Device Integrations Solutions</p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-5 mt-lg-0 text-center'>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row className='align-items-center'>
                                    <Col xl={6}>
                                        <div className={styles.deter}>
                                            <h3>Health Care </h3>
                                            <p>
                                            We understand the unique challenges and opportunities that the healthcare industry presents. Our team of experienced developers and designers are committed to creating custom solutions that address the specific needs of healthcare providers, patients, and administrators.
                                            </p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Telemedicine Solution</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Electronic Health Records (EHR)</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Practice Management Systems</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Clinical Software Solutions</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Medical Device Integrations Solutions</p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-5 mt-lg-0 text-center'>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row className='align-items-center'>
                                    <Col xl={6}>
                                        <div className={styles.deter}>
                                            <h3>Health Care </h3>
                                            <p>
                                            We understand the unique challenges and opportunities that the healthcare industry presents. Our team of experienced developers and designers are committed to creating custom solutions that address the specific needs of healthcare providers, patients, and administrators.
                                            </p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Telemedicine Solution</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Electronic Health Records (EHR)</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Practice Management Systems</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Clinical Software Solutions</p>
                                            <p className={styles.cen}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' />Medical Device Integrations Solutions</p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className='mt-5 mt-lg-0 text-center'>
                                            <Image quality={75} alt='BitsWits' src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Slider>
                    </Row>

                </Container>
            </section>



        </>
    )
}

export default Capabilities