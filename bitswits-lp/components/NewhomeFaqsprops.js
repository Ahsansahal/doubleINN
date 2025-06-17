import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/NewhomeFaqs.module.css'
//images
import arrow from '../public/newHomePageImages/pick.png'
import close from '../public/newHomePageImages/close.png'
import open from '../public/newHomePageImages/open.png'


const NewhomeFaqs = (props) => {

    const [faq1show, setfaq1] = useState(false);
    const [faq2show, setfaq2] = useState(false);
    const [faq3show, setfaq3] = useState(false);
    const [faq4show, setfaq4] = useState(false);
    const [faq5show, setfaq5] = useState(false);
    const [faq6show, setfaq6] = useState(false);

    function faq1() {
        setfaq1(!faq1show);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq2() {

        setfaq1(false);
        setfaq2(!faq2show);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq3() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(!faq3show);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq4() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(!faq4show);
        setfaq5(false);
        setfaq6(false);
    }
    function faq5() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(!faq5show);
        setfaq6(false);
    }
    function faq6() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(!faq6show);
    }


    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble`}>
                <Container>
                    <Row className={styles.comfort}>
                        <Col lg={12}>
                            <h2 className="white f-60 f-700">
                                FAQs
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className={`${faq1show ? 'touch' : ''} mb-4 mb-lg-0 mt-5`}>
                                <div onClick={faq1} className={styles.heading}>
                                    <h3>
                                       {props.title1}  {faq1show ? <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p>
                                       {props.para1}
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq2show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq2} className={styles.heading}>
                                    <h3>
                                    {props.title2} {faq2show ? <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p>
                                    {props.para2}
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq3show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq3} className={styles.heading}>
                                    <h3>
                                    {props.title3} {faq3show ? <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <p>
                                    {props.para3}
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq4show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq4} className={styles.heading}>
                                    <h3>
                                    {props.title4} {faq4show ? <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p>
                                    {props.para4}
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq5show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq5} className={styles.heading}>
                                    <h3>
                                    {props.title5} {faq5show ? <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p>
                                    {props.para5}
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={faq6show ? 'touch' : ''}>
                                <div onClick={faq6} className={styles.heading}>
                                    <h3>
                                    {props.title6} {faq6show ? <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='BitsWits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <p>
                                    {props.para6}
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={arrow}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Link className={styles.about} href="#">LET'S CONNECT</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewhomeFaqs