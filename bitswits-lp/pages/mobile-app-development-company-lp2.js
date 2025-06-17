import Head from "next/head";
import React, { useState, useEffect } from "react";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import stylesjust from "@/styles/Justbuilditlp.module.css";
// componets
const Bannerlp2 = React.lazy(() => import("@/components/Bannerlp2"));
const Formlp2 = React.lazy(() => import("@/components/Formlp2"));
const Nothinglp2 = React.lazy(() => import("@/components/Nothinglp2"));
const NewMaintain = React.lazy(() => import("@/components/new-home-page-fy/NewMaintain"));
const Wework = React.lazy(() => import("@/components/Wework"));
const Technologieslp = React.lazy(() => import("@/components/Technologieslp"));
const Globallp = React.lazy(() => import("@/components/Globallp"));
const Startups = React.lazy(() => import("@/components/Startups"));
const ProjectProcesslp = React.lazy(() => import("@/components/ProjectProcesslp"));
const Justbuilditlp = React.lazy(() => import("@/components/Justbuilditlp"));
const Transformideas = React.lazy(() => import("@/components/Transformideas"));
const Formnewlp2 = React.lazy(() => import("@/components/Formnewlp2"));
const NewFaqslp = React.lazy(() => import("@/components/NewFaqslp"));
const HomeLocationlp = React.lazy(() => import("@/components/HomeLocationlp"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/new-home-page-fy/ServicesMaintainmobile"));
//Images
const customios = await import("../public/newHomePage/images/mobileimages/newMaintain1.png");
const iphoneapp = await import("../public/newHomePage/images/mobileimages/newMaintain2.png");
const applewatch = await import("../public/newHomePage/images/mobileimages/newMaintain3.png");
const appletvappdevelopment = await import("../public/newHomePage/images/mobileimages/newMaintain4.png");
const iphoneappdesigning = await import("../public/newHomePage/images/mobileimages/newMaintain5.png");
const hybridiphone = await import("../public/newHomePage/images/mobileimages/newMaintain6.png");
const appSeven = await import("../public/newHomePage/images/mobileimages/newMaintain7.png");
const appEight = await import("../public/newHomePage/images/mobileimages/newMaintain8.png");


export default function gamedevelopmentcompany() {

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
  // Slick Slider  
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
            Our Mobile App Development <br></br> Services And Solution
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

      <Bannerlp2 newHomeBgprops="newHomeBg" />
      <Formlp2 />
      <Nothinglp2 Nothing="nothing1" />
      {isSliderActive ? (
        <>
          <NewMaintain
            subtitle="Services"
            title1new={
              <>
                Our Mobile App Development <br></br> Services And Solution
              </>
            }
          />
        </>
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <Wework wework="wework" />
      <Startups startups="startups" />
      <ProjectProcesslp processclass="process1" />
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
        slide="slide2"
      />
      <Technologieslp />
      <Globallp />
      <Transformideas transform="transform" />
      <Formnewlp2 />
      <NewFaqslp />
      <HomeLocationlp />
    </>
  );
}
