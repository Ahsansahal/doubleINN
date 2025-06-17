import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblPortFolio.module.css";
//
import folio1 from "@/public/newMobilePageImages/portfolio/folio1.png"
import folio2 from "@/public/newMobilePageImages/portfolio/folio2.png"
import folio3 from "@/public/newMobilePageImages/portfolio/folio3.png"
import folio4 from "@/public/newMobilePageImages/portfolio/folio4.png"
import folio5 from "@/public/newMobilePageImages/portfolio/folio5.png"
import folio6 from "@/public/newMobilePageImages/portfolio/folio6.png"


const NewMblPortFolio = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center`}>Portfolio</p>
                            <h1 className='text-white f-55 font-bold text-center pb-5'>
                                Showcasing Our Creative Vision
                            </h1>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox1}`}>
                                <Image quality={75} src={folio1} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Germ Guard Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox2}`}>
                                <Image quality={75} src={folio2} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Find Food Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox3}`}>
                                <Image quality={75} src={folio3} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Bliss Travel Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox4}`}>
                                <Image quality={75} src={folio4} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Soul Sound Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox5}`}>
                                <Image quality={75} src={folio5} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>eride Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox6}`}>
                                <Image quality={75} src={folio6} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>PRO Health Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewMblPortFolio