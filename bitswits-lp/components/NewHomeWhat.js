import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewHomeWhat.module.css";
//
import ButtonIcon from "@/public/shark/home_btn.png"


const NewHomeWhat = () => {

    return (
        <>

            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='text-white f-60 font-bold'>Why Hire Us</h2>
                            <p className={`${styles.wid} f-20 text-white`}>Is your current app failing to deliver the results you desire?
                            </p>
                            <p className={`${styles.width} font14`}>At BitsWits, your app’s success is our top priority. We ensure your business stays updated with online trends and tech innovations. Contact us today to elevate your app's performance.
                            </p>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                    Contact us now
                                    <span>
                                        <Image quality={75} alt='BitsWits' src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="mixColor2"></div>

            </section>
        </>
    )
}

export default NewHomeWhat