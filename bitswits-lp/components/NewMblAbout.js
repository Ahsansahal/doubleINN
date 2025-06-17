import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewHomeAbout.module.css";
//
import AboutImage from "@/public/newHomePageImages/about_image.svg"


const NewHomeAbout = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col lg={12}>
                            <h2 className='text-white f-40 font-bold text-center'>Our Client’s Feedback Has Been</h2>
                            <h2 className='grdiant f-60 font-bold text-center'>Nothing Short Of Amazing!</h2>
                            <div className='sec_image text-center'>
                                <Image quality={75} src={AboutImage} alt='Banner' className={styles.secImage} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default NewHomeAbout