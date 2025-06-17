import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewHomeMaintainlp.module.css";


const NewMaintainlp = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center mb-0`}>Services
                            </p>
                            <h2 className='text-white f-60 font-bold text-center mb-3 mb-md-5'>Our Mobile App Development <br></br>
                                Services and Solutions</h2>


                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>iOS Application Development</h3>
                                    <p className={styles.para}>
                                    We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>Android Application Development</h3>
                                    <p className={styles.para}>
                                    We take Android app development to the next level by following a comprehensive approach, from ideation to launch.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>React NativeApp Development</h3>
                                    <p className={styles.para}>
                                    Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app33}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>Flutter App <br></br> Development</h3>
                                    <p className={styles.para}>
                                    Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app44}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>Cross Platform App Development</h3>
                                    <p className={styles.para}>
                                    We prioritize creating seamless user experiences in cross-platform app development.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app55}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>Web App <br></br> Development</h3>
                                    <p className={styles.para}>
                                    We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.
                                    </p>
                                </div>
                            </div>
                        </Col>


                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewMaintainlp