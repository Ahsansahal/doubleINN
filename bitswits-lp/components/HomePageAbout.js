import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpForm6.module.css";


const HomePageAbout = (props) => {
  return (
    <>
      <section className={`${styles.newAddress} ${styles[props.addresClass]}`}>
        <Container className={styles.appios}>
          <Row className="align-items-start">
            <Col lg={12}>
              <div className={styles.make}>
                <form className={styles.formsbanner}>
                  <div className={`mb-lg-4 pb-1 text-center`}>
                    <h4 className="font50 text-white font-bold mb-3">
                      Turn Your App Idea Into An App
                    </h4>
                  </div>
                  <Row>
                    <Col lg={3}>
                      <div>
                        <input
                          type="text"
                          className={styles.forminput}
                          placeholder="Your Name"
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <input
                          type="email"
                          className={styles.forminput}
                          placeholder="Email Address"
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <input
                          type="number"
                          className={styles.forminput}
                          placeholder="Phone Number"
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <Link className={`${styles.book}`} href="#">
                          Submit
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.keyFrame}>
        <Container>
          <div className={styles.cirMain}>
            <div className={styles.cir1}></div>
            <div className={styles.cir2}></div>
          </div>

          <div className={styles.para}>
            <p className="mb-0">
              Welcome to the innovative realm of Bitswits, where we're more than
              just developers – innovators and dream-weavers in the digital
              domain. At Bitswits, we blend imaginative creativity with
              technical excellence, establishing ourselves as a leading solution
              provider committed to propelling your business forward. Our team
              thrives on transforming complex challenges into seamless digital
              solutions, crafting each project with precision and passion.
              Choose Bitswits for a partnership that redefines industry
              standards and sets your project to remarkable success.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePageAbout;
