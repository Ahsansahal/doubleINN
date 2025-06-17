"use client"

import Link from 'next/link'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/NewPopup.module.css";
///
import Logo from 'public/images/logom12.png'
import CloseImage from 'public/images/close-btn.svg'


const NewPopup = () => {

    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        document.body.addEventListener('click', handleClosePopup)

        return () => {
            clearTimeout(timeout);
            document.body.removeEventListener('click', handleClosePopup)
        };
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    return (
        <>
            {showPopup && (
                <section className={styles.mainPopUp}>
                    <Container>
                        <Row>
                            <Col lg={12} className='p-0'>
                                <div className={styles.popup}>
                                    <Row>
                                        <Col sm={4}>
                                            <h3 className='f-700 text-white mb-0 mt-2'>Happy <br /> Thank Giving</h3>
                                        </Col>
                                        <Col sm={4}>
                                            <Image src={Logo} alt='Logo' width={160} height={75} />
                                        </Col>
                                        <Col sm={4}>
                                            <p className='text-center text-white font15 line2'>For <span className='font-bold'>Anually on</span> our <span className='font-bold'>Exclusive SEO Packages</span> </p>
                                            <Link href="javascript:;" className={styles.popupBtn}>
                                                UPGRADE NOW
                                            </Link>
                                        </Col>
                                    </Row>
                                    <button className={`${styles.popBtn} font15`} onClick={handleClosePopup}>
                                        <Image src={CloseImage} className={styles.closeBtn} />
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )

            }
        </>
    )
}

export default NewPopup