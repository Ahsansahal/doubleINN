import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/NewLpFooter.module.css'
//images
import call from '../public/newlppage/phone-icon.webp'
import mail from '../public/newlppage/email-icon.webp'
import fb from '../public/newlppage//fb-icon.webp'
import inta from '../public/newlppage/insta-icon.webp'
import tweet from '../public/newlppage/twitter-icon.webp'
import linkedin from '../public/newlppage/linkedin-icon.webp'
import youtube from '../public/newlppage/youtube-icon.webp'


const Footerlp = () => {


    return (
        <>
            <footer className={`${styles.footer} ${styles.newLpFooter}`}>
                <Container>

                    <div className={styles.footerNav}>
                        <Row>
                            <Col lg={5} className="mb-lg-0 mb-2 mb-lg-4">
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3 className="f-montserrat f-w f-22">Services</h3>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <ul className='p-0 mb-0'>
                                            <li> <Link href="/ios-app-development-company">Ios App Development</Link></li>
                                            <li> <Link href="/mobile-app-development">Mobile App Development</Link></li>
                                            <li> <Link href="/android-app-development-company">Android App Development</Link></li>
                                            <li> <Link href="/flutter-app-development-company">Flutter App Development</Link></li>
                                            <li> <Link href="/react-native-app-development-company">React Native App Development</Link></li>
                                            <li> <Link href="/wearable-app-development-company">Wearable App Development</Link></li>
                                            <li> <Link href="/cross-platform-app-development-company">Cross Platform App Development</Link></li>
                                            <li> <Link href="/web-app-development-company">Web App Development</Link></li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li><Link href="/web-development">Web Development</Link>  </li>
                                            <li><Link href="/php-development-service">Php Development Services</Link>  </li>
                                            <li><Link href="/e-commerence-development">ECommerce Development</Link>  </li>
                                            <li><Link href="/enterprise-portal-solution">Enterprise Portal Solution</Link>  </li>
                                            <li><Link href="/magento-enterprise-solution">Magento Enterprise Solution</Link>  </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} className="mb-lg-0 mb-2 mb-lg-4">
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3 className="f-montserrat f-w f-22">On Demand Solutions</h3>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <ul className='p-0 mb-0'>
                                            <li>  <Link href="/game-app-development-company-lp" className="modal-toggle">  Game App Development</Link> </li>
                                            <li>  <Link href="/2d-game-development-company-lp" className="modal-toggle">  2D Game Development </Link> </li>
                                            <li>  <Link href="/3d-game-development-company-lp" className="modal-toggle">  3D Game Development </Link> </li>
                                            <li>  <Link href="/nft-game-development-company-lp" className="modal-toggle">  NFT Game Development </Link> </li>
                                            <li>  <Link href="/blockchain-game-development-company-lp" className="modal-toggle">  Blockchain Game Development </Link> </li>
                                            <li>  <Link href="/game-app-development-company-lp" className="modal-toggle">  Game Development </Link> </li>
                                            <li>  <Link href="#" className="modal-toggle">  2D Art </Link> </li>
                                            <li>  <Link href="#" className="modal-toggle">  3D Art </Link> </li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className='p-0'>
                                            <li>
                                                <Link href="/blockchain-development-lp" className="modal-toggle">Blockchain Development</Link>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2}>
                                <div className={`${styles.footTitle} mb-3 pb-3`}>
                                    <h3 className="f-montserrat f-w f-22">Useful Links</h3>
                                </div>
                                <ul className='p-0 mb-lg-1'>
                                    <li>
                                        <Link href="#">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Works</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Testimonials</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms & Conditions</Link>
                                    </li>
                                </ul>
                                <ul className={`${styles.contacts} ${styles.myLinks} p-0`}>
                                    <li className="mb-2">
                                        <Link href="mailto:info@BitsWits.co">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={mail}
                                                loading="lazy"
                                            />
                                            <span className="email f-uppercase">Contact Email</span>
                                        </Link>
                                    </li>
                                    <li className="fw-bold">
                                        <Link href="tel:13123795987">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={call}
                                                loading="lazy"
                                            />
                                            <span className="number">+1 312 379 5987</span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className={styles.footNotes}>
                    <Container>
                        <Row className="align-items-md-center">
                            <Col md={4} lg={3} className="mt-md-0 mt-4">
                                <ul className={`${styles.socials} mb-0 p-0`}>
                                    <li>
                                        <Link href="https://www.facebook.com/officialBitsWits" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={fb}
                                                loading="lazy"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/officialBitsWits/" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={inta}
                                                loading="lazy"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/BitsWits_/" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={tweet}
                                                loading="lazy"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/officialBitsWits" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={linkedin}
                                                loading="lazy"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/@officialBitsWits" target="_blank" rel="noopener noreferrer">
                                            <Image alt="BitsWits" className='img-fluid'
                                                src={youtube}
                                                loading="lazy"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={4} lg={6}>
                                <p className={`${styles.trmCon} f-montserrat f-12 white f-500 mb-0`}>
                                    Copyright © 2024 BitsWits. |
                                    <Link href="#" className="white ps-1" target="_blank">
                                        Brand Of Bhaoo Incorporation Company
                                    </Link>
                                </p>
                            </Col>
                            <Col md={4} lg={3}>
                                <div className={styles.termsMain}>
                                    <ul className={`${styles.termsCo} p-0 mb-0`}>
                                        <li>
                                            <Link href="#">Terms of Use</Link>
                                        </li>
                                        <li>
                                            <p className="f-montserrat f-12 white f-500 mb-0 white"> | </p></li>
                                        <li>
                                            <Link href="#">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footerlp