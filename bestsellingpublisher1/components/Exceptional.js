import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Dreams.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
const data = [
    {
        heading: "Amazon Publishing",
        para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
        path: "/images/flods/amazon_publishing.png",
        alt: "Amazon Publishing"
    },
    {
        heading: "Book Publishing",
        para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
        path: "/images/flods/book_publishing.png",
        alt: "Book Publishing"
    },
    {
        heading: "Digital Book Publishing",
        para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
        path: "/images/flods/digital_book_publishing.png",
        alt: "Digital Book Publishing"
    },
    {
        heading: "eBook Publishing",
        para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
        path: "/images/flods/ebook_publishing.png",
        alt: "eBook Publishing"
    },
    {
        heading: "Self Publishing",
        para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
        path: "/images/flods/self_publishing.png",
        alt: "Self Publishing"
    },
    {
        heading: "Book Marketing",
        para: "Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.",
        path: "/images/flods/book_marketing.png",
        alt: "Book Marketing"
    }
]

const Exceptional = ({

}) => {
    return (
        <>
            <section className={styles.dreamsFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <div className={`${styles.dreamsHead} text-center`}>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>Discover What Exceptional Writing Services We Offer</h2>
                                <p className='font-15 font-secondary txt-secondary mb-5'>Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. <br /> Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.dreams1Flod}>
                <Container fluid className='px-md-5 bg-gray'>
                    <Row className={`${styles.dreamsRow} justify-content-center pt-4 pb-5 gy-4 gx-2`}>
                        {data?.map((e, i) => (
                            <Col key={i} lg={4} >
                                <div className={`${styles.ExceptionalCard} bg-white text-left`}>
                                    <h3 className='font-26 fw-500 font-primary txt-secondary1 pb-2'>{e.heading}</h3>
                                    <Row>
                                        <Col lg={7}>
                                            <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>{e.para}</p>
                                        </Col>
                                        <Col lg={5}>
                                            <Image src={e.path} alt={e.alt} quality={100} loading="lazy" width={500} height={500} className='img-fluid pt-3 vertical-align' />
                                        </Col>
                                    </Row>
                                    {/* <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link> */}
                                </div>
                            </Col>
                        ))}
                        <div className={`${Bookshelf.bttns} dislpay-flex mt-5 justify-content-center`}>
                            <Link className='btns btnPrimary' href="#">Let's discuss</Link>
                            <Link className='btns btnSecondary' href="tel:(800)781-9093">(800)781-9093</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Exceptional
