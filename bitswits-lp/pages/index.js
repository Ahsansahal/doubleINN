import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import styles from "../styles/new-home-page-fy.module.css";
//components
const NewIndexBanner = React.lazy(() => import("@/components/new-home-page-fy/NewIndexBanner"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const NewHomeWho = React.lazy(() => import("@/components/new-home-page-fy/NewHomeWho"));
const NewHomeWhat = React.lazy(() => import("@/components/new-home-page-fy/NewHomeWhat"));
const NewMaintain = React.lazy(() => import("@/components/new-home-page-fy/NewMaintain"));
const Globallplp6 = React.lazy(() => import("@/components/new-home-page-fy/Globallplp6"));
const WeworkLp = React.lazy(() => import("@/components/new-home-page-fy/WeworkLphome"));
const StartupsLp = React.lazy(() => import("@/components/new-home-page-fy/StartupsLp6"));
const Industry = React.lazy(() => import("@/components/new-home-page-fy/Industry"));
const Technologieswe = React.lazy(() => import("@/components/new-home-page-fy/Technologieswe"));
const LpChoose = React.lazy(() => import("@/components/new-home-page-fy/LpChoose"));
const Formnewlp = React.lazy(() => import("@/components/new-home-page-fy/Formnewlp"));
const Faqs = React.lazy(() => import("@/components/new-home-page-fy/NewhomeFaqs"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/new-home-page-fy/ServicesMaintainmobile"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
//Images
const customios = await import("../public/newHomePage/images/mobileimages/newMaintain1.png");
const iphoneapp = await import("../public/newHomePage/images/mobileimages/newMaintain2.png");
const applewatch = await import("../public/newHomePage/images/mobileimages/newMaintain3.png");
const appletvappdevelopment = await import("../public/newHomePage/images/mobileimages/newMaintain4.png");
const iphoneappdesigning = await import("../public/newHomePage/images/mobileimages/newMaintain5.png");
const hybridiphone = await import("../public/newHomePage/images/mobileimages/newMaintain6.png");
const appSeven = await import("../public/newHomePage/images/mobileimages/newMaintain7.png");
const appEight = await import("../public/newHomePage/images/mobileimages/newMaintain8.png");


export default function Home() {

  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 7000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);
  // ===================================
  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
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

  // slider 
  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Maintain Data
  const severcedata = [
    {
      classlayout: {
        newclass: "homeclass",
      },
      heading: {
        title2: "Services",
        text: (
          <>
            Maintaining digital quality with our collection of customizable
            services
          </>
        ),
      },
      serdata: [
        {
          title: "Mobile App Development",
          text: "We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              Game <br /> Development{" "}
            </>
          ),
          text: "Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Blockchain Development",
          text: "We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Artificial Intelligence (Ai)",
          text: "Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through Artificial Intelligence that raises its potential.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Web App Development",
          text: " Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "UI/UX App Design",
          text: "Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: "AR/VR",
          text: "BitsWits serves as your AR/VR portal. We specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience.",
          appclass: "app6",
          imgservice: appSeven,
        },
        {
          title: "Internet of Things",
          text: "We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.",
          appclass: "app7",
          imgservice: appEight,
        },
      ],
    },
  ];


  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags & OG Tags Added Through Route */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      {/* googletagmanager */}
      {imagesLoaded &&
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2JSP4C"
          height="0" width="0" className="d-none"></iframe></noscript>
      }

      <NewIndexBanner />
      <section>
        <div className={`${styles.awardsFold}`}>
          <div className="container-fluid px-0">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-12 col-sm-12">
                <p
                  className={`font-bold fontawards25 mb-0 ${styles.textWhite}`}
                >
                  Endorsements on different Platforms
                </p>
                <h1
                  className={`fontawards font-bold mb-3 mb-lg-0 ${styles.textPink}`}
                >
                  Awards & <br />
                  Recognition
                </h1>
              </div>
              {isSliderActive ? (
                <div className={`${styles.appdev} col-7`}>
                  <div className="row">
                    <div className={`${styles.mobileapps} col-3`}>
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/1n.png"
                          alt="bitswits"
                          width={166}
                          height={129}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Developers
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/2n.png"
                          alt="bitswits"
                          width={120}
                          height={130}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Developers 2022
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/3n.png"
                          alt="bitswits"
                          width={148}
                          height={130}
                        />
                        <p className="white center pt-4 font16">
                          Top Application <br />
                          Development Company
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Image
                          quality={95}
                          className={styles.newmob}
                          src="/images/industry/4n.png"
                          alt="bitswits"
                          width={130}
                          height={129}
                        />
                        <p className="white center pt-4 font16">
                          Top Mobile Application <br />
                          Development Company
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Slider
                  {...awardslogo}
                  className={` ${styles.startup1}  startposition mt-4`}
                >
                  <div className={`${styles.mobileapps} col-3`}>
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/1n.png"
                        alt="awards"
                        width={166}
                        height={129}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Developers
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/2n.png"
                        alt="awards"
                        width={120}
                        height={130}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Developers 2022
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/3n.png"
                        alt="awards"
                        width={148}
                        height={130}
                      />
                      <p className="white center pt-4 font16">
                        Top Application <br />
                        Development Company
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <Image
                        className={styles.newmob}
                        src="/images/industry/4n.png"
                        alt="awards"
                        width={130}
                        height={129}
                      />
                      <p className="white center pt-4 font16">
                        Top Mobile Application <br />
                        Development Company
                      </p>
                    </div>
                  </div>
                </Slider>
              )}
            </div>
          </div>
        </div>
      </section>
      <NewHomeWho />
      <NewHomeWhat />
      <Industry industry="industryclass" />
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startupshome" />
      <Technologieswe />
      <Nothing Nothing="nothingLphomefy" />
      {isSliderActive ? (
        <NewMaintain
          title1={<> Delivering Excellence Daily </>}
          title2={<> Trusted Development Company For Tech Solutions </>}
          text={
            <>
              We, at BitsWits, are dedicated to being innovative and making our
              clients happy.
              <br />
              We specialize in customizing services for digital business
              evolution and bring the following services to the table…
            </>
          }
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <Globallplp6 />
      <LpChoose transform="transform" />
      <Formnewlp />
      <Faqs />
      <HomeLocation />
    </>
  );
}
