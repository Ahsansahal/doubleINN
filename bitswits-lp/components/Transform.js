import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Transform.module.css";
//images
import banImg1 from '../public/images/tranform/tranform.png'


export default function Transform(props) {
    return (
        <>
            <section className={styles[props.transform]}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7}>
                            <h2 className='white f-60 f-700'>Transform <br></br>
                                Your Vision Into Reality</h2>
                            <p className='white font16 f-500'>We Deliver Mobile App Experiences That Get Your Mobile App <br></br> Trending On The App Stores.</p>
                            <Link href="#" className={styles.dus}>Discuss Your Project</Link>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.ban}>
                                <Image src={banImg1} alt='BitsWits' className='img-fluid' />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

