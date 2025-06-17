import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "@/styles/Headerproduct.module.css";
//
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
// images
import logo from "../public/images/icons/footerlogo.png";
import icontwo from "../public/images/newfydemand/icontwo.svg";
import security from "../public/images/newfydemand/security.png";
import alcohol from "../public/images/newfydemand/alcohol.png";
import construction from "../public/images/newfydemand/construction.png";
import healthsafety from "../public/images/newfydemand/health-safety.png";
import elearning from "../public/images/newfydemand/elearning.png";
import driving from "../public/images/newfydemand/driving.png";
import securitygear from "../public/images/newfydemand/security-gear.png";
import securityjobs from "../public/images/newfydemand/security-jobs.png";
import gamehead from "../public/images/newfydemand/gamehead.png";
import blockchainhead from "../public/images/newfydemand/blockchainhead.png";
//
import about from "../public/images/newfydemand/about.svg";
import about2 from "../public/images/icons/about.png";
import employers from "../public/images/newfydemand/employers.svg";
import listcourse from "../public/images/newfydemand/list-course.svg";
import faqs from "../public/images/newfydemand/faqs.svg";
import help from "../public/images/newfydemand/help.svg";
import call from "../public/images/icons/phone-icon.webp";
import mail from "../public/images/icons/email-icon.webp";
//
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
//
import company from "../public/images/icons/company.png";
import ourbg from "../public/images/icons/ourbg.png";
import estate from "../public/images/icons/estate.png";
import travel from "../public/images/icons/travel.png";
import health from "../public/images/icons/health.png";
import foods from "../public/images/icons/foods.png";
import music from "../public/images/icons/music.png";
import ride from "../public/images/icons/ride.png";
import wisu from "../public/images/icons/wisu.png";
import fit from "../public/images/icons/fit.png";
import grease from "../public/images/icons/grease.png";
import homeconnect from "../public/images/icons/homeconnect.png";
import ready from "../public/images/icons/ready.png";
import scribe from "../public/images/icons/scribe.png";
import sponsord from "../public/images/icons/sponsord.png";
import mbllogo from "../public/images/icons/footerlogo.png";
//
import Bitswitspopup from "../components/Bitswitspopup";


const Header = () => {
  const [isSliderActive, setIsSliderActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 991) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const opnen = () => {
    window.open("../companyprofile.pdf", "_blank");
  };

  const [show, setShow] = useState(false);

  function modal(e) {
    e.preventDefault();
    setShow(true);
  }
  function closemodal() {
    setShow(false);
  }

  const [isHovered, setIsHovered] = useState("");

  function fun1(vale) {
    setIsHovered(vale);
  }
  function fun2(vale1) {
    setIsHovered(vale1);
  }

  function handleClickproduct(val5) {
    setIsHovered1(val5);
  }

  const [isHovered1, setIsHovered1] = useState("");

  function fun11(vale) {
    setIsHovered1(vale);
  }
  function fun21(vale1) {
    setIsHovered1(vale1);
  }

  const [isHovered2, setIsHovered2] = useState("");

  function funserve(vale) {
    setIsHovered2(vale);
  }
  function funserve2(vale1) {
    setIsHovered2(vale1);
  }

  const [isHovered3, setIsHovered3] = useState("");

  function funcom(vale) {
    setIsHovered3(vale);
  }
  function funcom2(vale1) {
    setIsHovered3(vale1);
  }

  const [isHovered4, setIsHovered4] = useState("");

  function funwork(vale) {
    setIsHovered4(vale);
  }
  function funwork2(vale1) {
    setIsHovered4(vale1);
  }

  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className={styles.headernew}>
        <div className={styles.logo}>
          <Link href="/">
            <Image alt="bitswits" src={logo} className="img-fluid" />
          </Link>
        </div>
        <nav>
          <ul
            className={
              isActive
                ? `${styles.newone} ${styles.active}`
                : `${styles.newone}`
            }
          >
            <div className={`${styles.navLogo} ${styles.mblLogo}`}>
              <Link href="/">
                <Image alt="bitswits" className="img-fluid" src={mbllogo} />
              </Link>
            </div>
            <li>
              <Link href="/" className={styles.post}>
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => fun11("active1")}
              onMouseLeave={() => fun21("secImage11")}
              className={styles.product}
            >
              <Link className={styles.post} href="#">
                Services
                <FaAngleDown />
              </Link>
              {isHovered1 === "active1" ? (
                <div className={styles.megamenu}>
                  <Row>
                    <Col lg={4} className={` ${styles.newspace}`}>
                      <div>
                        <h4 className={styles.course1}>
                          Mobile App Development
                        </h4>
                      </div>
                      <div className={styles.hire}>
                        <Link
                          href="/ios-app-development"
                          className={styles.polo}
                        >
                          <h4>IOS App</h4>
                          <Image
                            alt="bitswits"
                            src={security}
                            className="img-fluid"
                          />
                        </Link>
                        <Link
                          href="/android-application-development"
                          className={styles.polo}
                        >
                          <h4>Android App </h4>
                          <Image
                            alt="bitswits"
                            src={alcohol}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className={styles.hire}>
                        <Link
                          href="/flutter-mobile-development"
                          className={styles.polo}
                        >
                          <h4>Flutter App </h4>
                          <Image
                            alt="bitswits"
                            src={construction}
                            className="img-fluid"
                          />
                        </Link>
                        <Link
                          href="/react-native-mobile-development"
                          className={styles.polo}
                        >
                          <h4>
                            React Native <br /> App{" "}
                          </h4>
                          <Image
                            alt="bitswits"
                            src={healthsafety}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className={styles.hire}>
                        <Link
                          href="/hybrid-mobile-apps-development"
                          className={styles.polo}
                        >
                          <h4>
                            Hybird Mobile <br /> App{" "}
                          </h4>
                          <Image
                            alt="bitswits"
                            src={elearning}
                            className="img-fluid"
                          />
                        </Link>
                        <Link
                          href="/cross-platform-app-development"
                          className={styles.polo}
                        >
                          <h4>
                            Cross Platform <br /> App{" "}
                          </h4>
                          <Image
                            alt="bitswits"
                            src={driving}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className={styles.hire}>
                        <Link
                          href="/web-app-development"
                          className={styles.polo}
                        >
                          <h4>Web App</h4>
                          <Image
                            alt="bitswits"
                            src={securitygear}
                            className="img-fluid"
                          />
                        </Link>
                        <Link
                          href="/augmented-reality-apps-development-company"
                          className={styles.polo}
                        >
                          <h4>
                            Augmented <br /> Reality App{" "}
                          </h4>
                          <Image
                            alt="bitswits"
                            src={securityjobs}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className={styles.hire}>
                        <Link
                          href="/game-application-development"
                          className={styles.polo}
                        >
                          <h4>
                            Game App <br /> Development
                          </h4>
                          <Image
                            alt="bitswits"
                            src={gamehead}
                            className="img-fluid"
                          />
                        </Link>
                        <Link
                          href="/blockchain-game-development"
                          className={styles.polo}
                        >
                          <h4>
                            Blockchain App <br /> Development{" "}
                          </h4>
                          <Image
                            alt="bitswits"
                            src={blockchainhead}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                    </Col>
                    <Col lg={4} className={` ${styles.menupostblog1}`}>
                      <div>
                        <h4 className={styles.course}>GOOD LINKS</h4>
                      </div>
                      <div>
                        <ul className={styles.mega}>
                          <li className={styles.imgpost}>
                            <div className={styles.dsicon}>
                              <Image
                                alt="bitswits"
                                src={about}
                                className="img-fluid"
                              />
                            </div>
                            <Link href="/about-us">About us </Link>{" "}
                          </li>
                          <li className={styles.imgpost}>
                            <div className={styles.dsicon}>
                              <Image
                                alt="bitswits"
                                src={employers}
                                guardicon
                                className="img-fluid"
                              />
                            </div>
                            <Link href="#">Employers </Link>{" "}
                          </li>
                          <li className={styles.imgpost}>
                            <div className={styles.dsicon}>
                              <Image
                                alt="bitswits"
                                src={listcourse}
                                className="img-fluid"
                              />
                            </div>
                            <Link href="#partners">Partners </Link>{" "}
                          </li>
                          <li className={styles.imgpost}>
                            <div className={styles.dsicon}>
                              <Image
                                alt="bitswits"
                                src={faqs}
                                className="img-fluid"
                              />
                            </div>
                            <Link href="#faqsection">FAQs </Link>{" "}
                          </li>

                          <li className={styles.imgpost}>
                            <div className={styles.dsicon}>
                              <Image
                                alt="bitswits"
                                src={help}
                                className="img-fluid"
                              />
                            </div>
                            <Link href="#">Help </Link>{" "}
                          </li>
                        </ul>

                        <div className={styles.medg}>
                          <h4 className={styles.big}>WE’RE BIG ON SOCIALS</h4>
                          <ul className={styles.social}>
                            <li>
                              <Link className={styles.show1} href="#">
                                <IoLogoFacebook />
                              </Link>
                            </li>
                            <li>
                              <Link className={styles.show2} href="#">
                                <FaYoutube />
                              </Link>
                            </li>
                            <li>
                              <Link className={styles.show3} href="#">
                                <FaInstagram />
                              </Link>
                            </li>
                            <li>
                              <Link className={styles.show4} href="#">
                                <FaTwitter />
                              </Link>
                            </li>
                            <li>
                              <Link className={styles.show5} href="#">
                                <FaLinkedin />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} className={styles.newset}>
                      <div className={styles.lptow}>
                        <div className={styles.newbits}>
                          <div>
                            <h6>
                              Train Now, <br></br>{" "}
                              <span className={styles.pay}>Pay Later</span>{" "}
                            </h6>
                            <p>Book now and pay in instalments</p>
                            <Link href="#">
                              Learn more{" "}
                              <RiArrowDropRightLine
                                className={styles.train12}
                              />{" "}
                            </Link>
                          </div>
                          <div>
                            <Image
                              alt="bitswits"
                              src={icontwo}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className={styles.proper}>
                          <h4>FOR BUSINESS CUSTOMERS</h4>
                          <h3>
                            HIRING & <br></br> TRAINING
                          </h3>
                          <p>
                            Welcome to Bitswits, where app creation meets
                            innovation. Whether it's 'Creating an App,' 'Making
                            an App,' or diving into 'iOS' or 'Android
                            Application' development, we're your team. Let's
                            turn your vision into reality with our leading-edge
                            app development expertise. Our Client’s Feedback Has
                            Been
                          </p>
                        </div>
                        <div className={styles.slaes}>
                          <p className="pb-0 mb-0">
                            {" "}
                            <Link href="tel:18335006007">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={call}
                                loading="lazy"
                              />
                              <span className="number">+1 833 500 6007</span>
                            </Link>
                          </p>
                          <p>
                            <Link href="mailto:info@BitsWits.co">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={mail}
                                loading="lazy"
                              />
                              <span className="email f-uppercase">
                                Contact Email
                              </span>
                            </Link>
                          </p>
                          <p className="mb-0 pb-3">
                            <Link href="#" className={styles.newyork}>
                              Learn More{" "}
                              <RiArrowDropRightLine className={styles.train} />
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : null}
            </li>
            <li
              onMouseEnter={() => funcom("active3")}
              onMouseLeave={() => funcom2("secImage2")}
              className={styles.product}
            >
              <Link href="#" className={styles.post}>
                OUR COMPANY
                <FaAngleDown />
              </Link>

              {isHovered3 == "active3" ? (
                <div className={styles.megamenucom}>
                  <Row>
                    <Col lg={4}>
                      <ul className={`${styles.glop} mb-0 mt-0`}>
                        <div className={styles.listHeading}>
                          <div className={styles.megaIcon}>
                            <Image
                              alt="bitswits"
                              className="img-fluid"
                              src={about2}
                            />
                          </div>
                          <h5 className="font14 fontf font-semibold mb-0">
                            ABOUT US
                          </h5>
                        </div>
                        <div className={styles.california}>
                          <Row>
                            <Col md={12}>
                              <p>
                                Based in California, US, our company is driven
                                by a relentless commitment to client
                                satisfaction, fueled by our passion for
                                technology innovation and business process
                                expertise. Since our inception in 2002, we have
                                experienced remarkable growth year after year,
                                currently boasting a thriving in-house team of
                                over 1,000 employees spread across various
                                international locations.
                              </p>
                              <Link
                                className={styles.download}
                                onClick={opnen}
                                href="#"
                                download
                              >
                                <FaAngleRight className="white font14" />
                                Download our E-brochure
                              </Link>
                            </Col>
                          </Row>
                        </div>
                      </ul>
                    </Col>

                    <Col lg={2}>
                      <ul className={`${styles.glop} mb-0 mt-0`}>
                        <div className={styles.listHeading}>
                          <div className={styles.megaIcon}>
                            <Image
                              alt="bitswits"
                              className="img-fluid"
                              src={company}
                            />
                          </div>
                          <h5 className="font14 fontf font-semibold mb-0">
                            COMPANY
                          </h5>
                        </div>

                        <li>
                          <Link href="/about-us">
                            <FaAngleRight />
                            <span>About Us</span>
                          </Link>
                        </li>
                      </ul>
                    </Col>

                    <Col lg={6}>
                      <div className={styles.glop}>
                        <div className={styles.listImg}>
                          <Image
                            alt="bitswits"
                            className="img-fluid"
                            src={ourbg}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : (
                ""
              )}
            </li>
            <li
              onMouseEnter={() => funwork("active4")}
              onMouseLeave={() => funwork2("secImage2")}
              className={styles.product}
            >
              <Link href="#" className={styles.post}>
                OUR WORK
                <FaAngleDown />
              </Link>

              {isHovered4 == "active4" ? (
                <div className={styles.megamenuwork}>
                  <Row className="gy-4">
                    <Col lg={4}>
                      <div className={styles.boxSpace}>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={travel} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/travel-app-development-case-study"
                            >
                              Travel App
                            </Link>
                            <span className={styles.realDummy}>
                              Create Hassle-Free Travel...
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.workBox}`}>
                          <Image alt="bitswits" src={estate} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/real-estate-app-development-case-study"
                            >
                              Real Estate App
                            </Link>
                            <span className={styles.realDummy}>
                              A Real Estate App Instilling...
                            </span>
                          </div>
                        </div>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={wisu} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/clothing-marketplace-app-development-case-study"
                            >
                              Ecommerce App
                            </Link>
                            <span className={styles.realDummy}>
                              Ecommerce - E-Store...
                            </span>
                          </div>
                        </div>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={scribe} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/social-app-development-case-study"
                            >
                              Scribe App
                            </Link>
                            <span className={styles.realDummy}>
                              Soul Scribe - Germ-Guard...
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.workBox} ${styles.lastBox}`}>
                          <Image alt="bitswits" src={grease} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/automobile-repair-app-development-case-study"
                            >
                              Grease App
                            </Link>
                            <span className={styles.realDummy}>
                              Monkey Grease - Cleaning...
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4}>
                      <div className={styles.boxSpace}>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={sponsord} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/marketing-partnership-app-development-case-study"
                            >
                              Sponsord App
                            </Link>
                            <span className={styles.realDummy}>
                              Developed A Sponsord App...
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.workBox}`}>
                          <Image alt="bitswits" src={health} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/healthcare-app-development-case-study"
                            >
                              Health Care App
                            </Link>
                            <span className={styles.realDummy}>
                              AS Medicare - A Pharmacy...
                            </span>
                          </div>
                        </div>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={ride} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/ride-app-development-case-study"
                            >
                              Rider App
                            </Link>
                            <span className={styles.realDummy}>
                              EZ Ride is a two-sided market...
                            </span>
                          </div>
                        </div>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={fit} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/fitness-app-development-case-study"
                            >
                              Fitnow App
                            </Link>
                            <span className={styles.realDummy}>
                              Fitnow two-sided...
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.workBox} ${styles.lastBox}`}>
                          <Image alt="bitswits" src={ready} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/hiring-app-development-case-study"
                            >
                              Ready App
                            </Link>
                            <span className={styles.realDummy}>
                              Ready App market...
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4}>
                      <div className={styles.boxSpace}>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={foods} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/food-delivery-app-development-case-study"
                            >
                              Crave App
                            </Link>
                            <span className={styles.realDummy}>
                              Crave Courier - Food...
                            </span>
                          </div>
                        </div>
                        <div className={styles.workBox}>
                          <Image alt="bitswits" src={homeconnect} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/handyman-on-demand-app-development-case-study"
                            >
                              Homeconnect Pro
                            </Link>
                            <span className={styles.realDummy}>
                              Home connect...
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.workBox}`}>
                          <Image alt="bitswits" src={music} />
                          <div className={styles.ourWork}>
                            <Link
                              className={styles.workTitle}
                              href="/music-app-development-case-study"
                            >
                              Beats App
                            </Link>
                            <span className={styles.realDummy}>
                              Ios And Android Games...
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.workBox} ${styles.lastBox}`}>
                          <div className={`${styles.ourWork} ${styles.cntct}`}>
                            <div className={styles.fill}>
                              <div>
                                <BsFillEnvelopeFill
                                  size={20}
                                  className={styles.email}
                                />
                              </div>
                              <div>
                                <Link
                                  className="font15 font-medium white fontf"
                                  href="mailto:info@bitswits.co"
                                >
                                  info@bitswits.com
                                </Link>
                              </div>
                            </div>
                            <div className={styles.fill}>
                              <div>
                                <BsFillTelephoneFill
                                  size={25}
                                  className={styles.email}
                                />
                              </div>
                              <div>
                                <Link
                                  className="font15 font-medium white fontf"
                                  href="tel:+1 312 379 5987"
                                >
                                  +1 312 379 5987
                                </Link>
                              </div>
                            </div>
                            <div className={styles.fill}>
                              <div>
                                <BsFillTelephoneFill
                                  size={25}
                                  className={styles.email}
                                />
                              </div>
                              <div>
                                <Link
                                  className="font15 font-medium white fontf"
                                  href="tel:+18335006007"
                                >
                                  +1 833 500 6007
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <Link href="/about-us" className={styles.post}>
                About
              </Link>
            </li>
            <li>
              <Link href="/ontact-us" className={styles.post}>
                Contact
              </Link>
            </li>
            <li onClick={modal}>
              <Link className={`${styles.post} ${styles.quote}`} href="#">
                GET A QUOTE
              </Link>
            </li>
          </ul>
          <div className={styles.navTogle} onClick={handleMenu}>
            <span
              className={
                isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`
              }
            ></span>
            <span
              className={
                isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`
              }
            ></span>
            <span
              className={
                isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`
              }
            ></span>
          </div>
        </nav>

        <Modal show={show} onHide={closemodal} className={styles.modalnew}>
          <Modal.Body>
            {" "}
            <Bitswitspopup formsaspire="popquote" />{" "}
            <span onClick={closemodal} className={styles.cross}>
              {" "}
              <RxCross2 />{" "}
            </span>{" "}
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default Header;
