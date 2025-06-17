import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServicesWho.module.css";
//
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"


const ServicesWho = (props) => {
    return (
        <>
            <section className={`${styles.newHomeBg} ${styles[props.assignClass]}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.text_content}>
                                <h2 className='text-white f-60 font-bold'>{props.subtitle}</h2>
                                <p className={`${styles.wid} f-20 text-white`}>{props.title}</p>
                                <p className={`${styles.width} font14`}>{props.text}</p>
                            </div>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                    Get to know us
                                    <span>
                                        <Image quality={75} alt='BitsWits' src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>

                        <Col lg={10}>
                            <div className={`${styles.secImagebg} text-center pt-4`}>
                                <Image quality={75} alt='BitsWits' height="550" src={props.WhoImage} className={`${styles.secImage} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServicesWho
