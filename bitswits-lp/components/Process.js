import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Process.module.css";
import scr1 from '../public/dubailp/icons/1.jpg';
import scr2 from '../public/dubailp/icons/2.png';
import scr3 from '../public/dubailp/icons/3.png';
import scr4 from '../public/dubailp/icons/4.png';
import scr5 from '../public/dubailp/icons/5.png';
import scr6 from '../public/dubailp/icons/6.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Process = (props) => {

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        loop: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    return (
        <>
            <section className={`${styles[props.tale]}`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <h2 className="white font50 f-700 center mb-3">The Process Our Mobile App Development <br></br> Company in Dubai Leverages </h2>
                        <p className="font16 font-normal white text-center mb-3">The app development process that Bitswits follows to build remarkable mobile applications is always evolving and changing. Our objective is to keep complexity out of the app development in the UAE process to ensure that our clients completely understand what we're doing, when we're doing it, and how we'll do it.</p>
                        <p className="font16 font-normal white text-center mb-5">
Though standardized, our mobile application process includes various stages or sprints that are integrated together to create mobile applications capable of withstanding the test of time and high competition.</p>
                        </Col>
                    </Row>

                 
                    <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div className={styles.solved}>01</div>
                                        <div className={styles.deter}>
                                            <h3 className="white fw800">Project Scoping</h3>
                                            <p className="white">Our app developers in Dubai connect with our clients to understand their requirements. This scoping session is also being overlooked by our technical consultants, who are tasked to identify and streamline the best technologies, development methodology, and other factors that are critical to the success of your mobile application:</p>
                                            <p className="white mt-3 mb-3">Requirement Analysis. Here's what the phase includes:</p>
                                            <ul className={styles.newlong}>
                                                <li>Market Research</li>
                                                <li>Streamlining Technologies</li>
                                                <li>Feasibility Study</li>
                                                <li>Competitor Analysis</li>
                                                <li>Scope Assessment</li>
                                            </ul>
                                           
                                        </div>
                                    </Col>
                                  
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div className={styles.solved}>02</div>
                                        <div className={styles.deter}>
                                            <h3 className="white fw800">Strategic Planning</h3>
                                            <p className="white">Once the requirements are understood by our mobile app developers in UAE, a strategic plan is developed right after the initial scoping, brainstorming, conceptualization, pre-development prep, and other processes are completed.</p>
                                            <p className="white mt-3 mb-3">This strategic plan describes the best app development approach that our app development company in Dubai will take and the time that will be required to develop your application. In a nutshell, here's what you can expect in this phase:</p>
                                            <ul className={styles.newlong}>
                                                <li>Identifying Product's Objective</li>
                                                <li>TAM Finalization</li>
                                                <li>Product Development & Designing</li>
                                                <li>Product Delivery & Launch</li>
                                            </ul>
                                        </div>
                                    </Col>
                                  
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div className={styles.solved}>03</div>
                                        <div className={styles.deter}>
                                            <h3 className="white fw800">Design Phase</h3>
                                            <p className="white">The design phase is the part where an initial design (Screens, UI/UX, Visuals, Aesthetics, Etc.) is created and sent to the concerned individual for approval. Meetings can also be scheduled to review the design of the mobile application.</p>
                                            <p className="white mt-3 mb-3">Any suggestions, feedback, or recommendations are recorded during this process, and corrections are made before moving on to the next phase, which is development. Like any other app development phase, this phase also includes various stages, i.e.:</p>
                                            <ul className={styles.newlong}>
                                                <li> Designing Sketches</li>
                                                <li> Wireframing</li>
                                                <li>Design Mock-ups</li>
                                                <li>  Prototyping & Designing</li>
                                            </ul>
                                           
                                        </div>
                                    </Col>
                                  
                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div className={styles.solved}>04</div>
                                        <div className={styles.deter}>
                                            <h3 className="white fw800">Development Phase</h3>
                                            <p className="white mb-3">In the development phase, our app developers in Dubai create the functionality of the product. If the product is cross-platform, we start with developing your Android app first because Android apps are comparatively easier to build, test and deploy. Once the development of both your iOS and Android app ends, the apps are moved to the initial testing stage, where experienced app developers in Dubai test your applications for performance and functionality. The following are some aspects that go hand in hand with the development of your mobile app's development:</p>
                                            
                                            <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
    <li>Integrating Latest Technologies</li>
    <li>Ensuring Robustness Scalability</li>
    <li>Completing Source Codes IP Rights</li>
                                            </ul>
                                           
                                        </div>
                                    </Col>
                                  
                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div className={styles.solved}>05</div>
                                        <div className={styles.deter}>
                                            <h3 className="white fw800">Feedback & Iterations</h3>
                                            <p className="white mb-3">The feedback and reiterations phase involves presenting the mobile application to the client to receive valuable feedback. The app is only presented once it is tested for functionality and performance, and since we're the pioneering app development company in Dubai, we ensure that the presented application hits the 70% approval mark while the rest is changed as per the client's direction.</p>
                                            
                                            <ul className={styles.newlong}>
                                            <li>Custom Application Development</li>
    <li>Integrating Latest Technologies</li>
    <li>Ensuring Robustness Scalability</li>
    <li>Completing Source Codes IP Rights</li>
                                            </ul>
                                           
                                        </div>
                                    </Col>
                                  
                                </Row>
                            </div>
                        </Slider>
                </Container>
            </section>
        </>
    )
}

export default Process