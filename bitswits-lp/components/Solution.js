import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Solution.module.css'
//
import Solution from '../public/blockchaindevelopment/images/solution.png'


const Solutions = () => {

  return (
    <>
      <section className={styles.home}>
        <Container className='qtech'>
          <Row className='align-items-center'>
            <Col lg={6}>
              <p className={styles.para }>Solutions</p>
              <h2 className='font55 font-bold mb-3'>Take Your Gaming Experience <br></br>
                to the Blockchain!</h2>
              <p className='text-white f-16 pb-2'>BitsWits is at the cutting edge of blockchain game development, offering a suite of products to help businesses create fully featured games with all the security and transparency benefits of distributed ledger technology.</p>
              <Link className={styles.about} href="javascript:$zopim.livechat.window.show();">LET'S CONNECT</Link>
            </Col>
            <Col lg={6}>
              <Image quality={75} alt='BitsWits' src={Solution} className='img-fluid mt-5 mt-sm-0'/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Solutions