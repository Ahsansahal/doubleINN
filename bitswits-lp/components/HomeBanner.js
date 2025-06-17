import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/HomeBanner.module.css";
//
import Fynewsliderhome from './Fynewsliderhome';


const HomeBanner = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <div className={styles.content}>
                                <p className={`${styles.just} text-center font-bold f-20 mb-lg-0`}>Top Mobile App Development Company</p>
                                <h1 className={`${styles.develop} text-center font55 font-bold`}>Empowering Brands with Big Dreams and Innovative Visions</h1>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href="tel:+18335006007">LET'S CONNECT</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section>

            <Fynewsliderhome />

        </>
    )
}

export default HomeBanner