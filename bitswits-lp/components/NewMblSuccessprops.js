import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblSuccess.module.css";
//
import team1 from '../public/newMobilePageImages/bg-f.png'


const Newsuccess = (props) => {

    return (
        <>
            <section className={styles.happens}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div>
                            {props.tilte}
                            {props.subtitle}
                            </div>
                        </Col>
                        <Col xl={12} className='mx-auto'>
                            <div className={styles.mainBox}>
                                <div className={styles.sucssBox}>
                                    <span className='f-60 font-bold grdiant mb-0'>{props.num1} </span>
                                    <span className='font30 font-bold white mb-0'> {props.title1} </span>
                                    <span className='font16 white'> {props.text1} </span>
                                    {props.btn1}
                                </div>
                                <div className={`${styles.sucssBox} ${styles.box2}`}>
                                    <span className='f-60 font-bold grdiant mb-0'> {props.num2} </span>
                                    <span className='font30 font-bold white mb-0'>{props.title2} </span>
                                    <span className='font16 white'> {props.text2} </span>
                                    {props.btn2}
                                </div>
                                <div className={styles.sucssBox}>
                                    <span className='f-60 font-bold grdiant mb-0'>{props.num3}</span>
                                    <span className='font30 font-bold white mb-0'> {props.title3} </span>
                                    <span className='font16 white'> {props.text3} </span>
                                    {props.btn3}
                                </div>
                                <Image quality={75} src={team1} alt='BitsWits' className={`${styles.befImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Newsuccess