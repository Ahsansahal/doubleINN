import Head from "next/head";
import React from "react";
import Link from "next/link";
// css
import styles from "@/styles/bannerlp.module.css";
import stylesjust from "@/styles/Justbuilditlp.module.css";
// components
const Bannerlp = React.lazy(() => import("@/components/Bannerlp"));
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpForm = React.lazy(() => import("@/components/LpFormprops"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const Hurdles = React.lazy(() => import("@/components/Hurdles"));
const Expertapp = React.lazy(() => import("@/components/Expertapp"));
const ProjectProcesslp1 = React.lazy(() => import("@/components/ProjectProcesslp1"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const Technologieslp = React.lazy(() => import("@/components/Technologieslp"));
const Justbuilditlp = React.lazy(() => import("@/components/Justbuilditlp"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const NewFaqslp = React.lazy(() => import("@/components/NewFaqslp"));
const HomeLocationlp = React.lazy(() => import("@/components/HomeLocationlp"));


export default function gamedevelopmentcompany() {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags & OG Tags Added Through Route */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Bannerlp
        title={
          <>
            <h1 className={`${styles.develop} text-center font50 font-bold mb-3`}>
              Top Mobile App Development Company
            </h1>
          </>
        }
        para={
          <>
            <p className="font20 white center mb-3">
              Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span>
            </p>
          </>
        }
        btn2={
          <>
            <div className={styles.pont}>
              <Link className={styles.about} href="javascript:$zopim.livechat.window.show();">
                Transform Your App Idea Into A Success Story - Today Is The Day
                To Start!
              </Link>
            </div>
          </>
        }
        newHomeBgprops="newHomeBg"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm
        addresClass="iosclass"
        heading={`Discover excellence in app innovation with Bitswits, a leading mobile app development company. We turn your ideas into impactful mobile app solutions. Our expertise isn't just in coding; it's about understanding your needs and delivering an app that resonates with your audience. Experience the Bitswits difference: where expertise meets excellence, and your vision becomes a reality.`}
      />
      <Nothing Nothing="nothing" />
      <Hurdles />
      <Expertapp expertapp="expertapp" />
      <ProjectProcesslp1 processclass="process" />
      <LpChoose transform="transform" />
      <Technologieslp />
      <Justbuilditlp
        title={
          <>
            <h2 className={stylesjust.just}>Just Build It.</h2>
          </>
        }
        para={
          <>
            <h3 className={stylesjust.develop}>
              Design, Develop, and Grow with BitsWits.
            </h3>
          </>
        }
        slide="slide1lp"
      />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <NewFaqslp />
      <HomeLocationlp />
    </>
  );
}
