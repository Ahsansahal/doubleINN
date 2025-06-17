import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblSlider.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import team1 from '../public/newHomePageImages/clutch.png'


const Newslider = () => {

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>

            <section className={styles.team}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className='f-80 font-bold white center'>What <span className='grdiant'>Clients</span> <br></br> <span className='grdiant'>Think</span> About US</h2>

                            <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>
                                <div className={styles.high}>
                                    <Image alt='BitsWits' className='img-fluid' src={team1} />
                                    <p className='mt-3 mb-3'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                    <h3>Vivien Francis</h3>
                                    <p className={styles.digi}>Digital Marketing Consultant of Asia School of Business</p>
                                </div>

                                <div className={styles.high}>
                                    <Image alt='BitsWits' className='img-fluid' src={team1} />
                                    <p className='mt-3 mb-3'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                    <h3>Vivien Francis</h3>
                                    <p className={styles.digi}>Digital Marketing Consultant of Asia School of Business</p>
                                </div>

                                <div className={styles.high}>
                                    <Image alt='BitsWits' className='img-fluid' src={team1} />
                                    <p className='mt-3 mb-3'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                    <h3>Vivien Francis</h3>
                                    <p className={styles.digi}>Digital Marketing Consultant of Asia School of Business</p>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Newslider