import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServicesWhat.module.css";
//
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"


const ServicesWhat = (props) => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <div className={styles.mixColor1}></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='text-white f-60 font-bold'>{props.subtitle}</h1>
                            <p className={`${styles.wid} f-20 text-white`}>{props.title}</p>
                            <p className={`${styles.width} font14`}>{props.text}</p>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                    Get to know us
                                    <span>
                                        <Image quality={75} alt='BitsWits' src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className='sec_image text-center pt-5'>
                    <Image quality={75} alt='BitsWits' height="550" src={props.WhatImage} className={styles.secImage} />
                </div>
                <div className={styles.mixColor2}></div>
            </section>
        </>
    )
}

export default ServicesWhat
