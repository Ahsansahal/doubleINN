import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewHomeHear.module.css";
//
import ButtonIcon from "@/public/newHomePageImages/hear-btn.png"


const NewHomeHear = () => {

    return (
        <>
            <section className={styles.newHomeBg}>

                <div className={styles.videobackground}>
                    <video width="100%" autoPlay loop muted src="https://player.vimeo.com/progressive_redirect/playback/875311008/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d5c1966ef82208d885f6995333dfa1a93ac2c200fa509a9544e39f5fc6539054" type="video/mp4"></video>
                </div>

                <div className={styles.newHomeOvrly}>
                    <Container className={styles.polt}>
                        <Row>
                            <Col lg={12}>
                                <p className=' f-20 font-bold text-white'>Mobile App Development Company </p>
                                <h2 className={`${styles.headContent} text-white f-60 font-bold`}>Your Project, Our Expertise <br></br> – A Winning Combination
                                </h2>
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
                </div>
            </section>
        </>
    )
}

export default NewHomeHear