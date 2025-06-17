import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Yearsofexpertise.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import Counter from './Counter';


const Yearsofexpertise = (props) => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
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
            <section className={` ${styles.yearsofexpertise}`}>
                <Container className={` ${styles.allbest} ${styles.desk} `}>
                    <Row>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'>  {props.loop1} </h3>
                            <h4 className='font18 fontf white font-extrabold texttran'> {props.looptext1} </h4>
                            <p className='font15 fontf white font-medium'> {props.looptext11} </p>
                        </Col>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'> {props.loop2} </h3>
                            <h4 className='font18 fontf white font-extrabold texttran'> {props.looptext2} </h4>
                            <p className='font15 fontf white font-medium'> {props.looptext22} </p>
                        </Col>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'> {props.loop3} </h3>
                            <h4 className='font18 fontf white font-extrabold texttran'> {props.looptext3} </h4>
                            <p className='font15 fontf white font-medium'>{props.looptext33}</p>
                        </Col>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'> {props.loop4} </h3>
                            <h4 className='font18 fontf white font-extrabold texttran'> {props.looptext4} </h4>
                            <p className='font15 fontf white font-medium'> {props.looptext44} </p>
                        </Col>
                    </Row>
                </Container>

                <Container className={styles.mobile}>
                    <Slider {...awardslogo} className={` ${styles.allbest} usapost pt-3 mb-5`}>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={21} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>years of <br></br> expertise</h4>
                            <p className='font15 fontf white font-medium'>Established 2002 in the USA </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={1000} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Dedicated <br></br> Developers</h4>
                            <p className='font15 fontf white font-medium'>All directly employed by us </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={12500} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Happy Clients</h4>
                            <p className='font15 fontf white font-medium'>See genuine testimonial videos </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={20000} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Projects <br></br> Delivered</h4>
                            <p className='font15 fontf white font-medium'>See examples our work </p>
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Yearsofexpertise