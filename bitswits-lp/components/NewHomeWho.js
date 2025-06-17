import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewHomeWho.module.css";
//
import WhoImage from "@/public/newHomePageImages/who_image.png"
import ButtonIcon from "@/public/shark/home_btn.png"


const NewHomeWho = () => {

    return (
        <>

            <section className={styles.newHomeBg}>
                <Container>

                    <Row>
                        <Col lg={12}>
                            <div className={styles.text_content}>
                                <h2 className='text-white f-60 font-bold'>Our Value Proposition</h2>
                                <p className={`${styles.wid} f-20 text-white`}>With a track record of dedication and innovation, we're not just developers; we're passionate problem-solvers invested in your success.
                                </p>
                                <p className={`${styles.width} font14`}>Hire BitsWits for mobile application development that engages users and generates measurable results. With over a decade of experience, we're the industry's best option.</p>
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
                    </Row>
                </Container>

                <div className='sec_image text-center pt-4'>
                    <Image quality={75} alt='BitsWits' src={WhoImage} className={styles.secImage} />
                </div>

                <div className="mixColor1"></div>
            </section>
        </>
    )
}

export default NewHomeWho