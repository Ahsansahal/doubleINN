import Head from "next/head";
import React, { useState, useEffect } from "react";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import stylesjust from "@/styles/Justbuilditlp.module.css";
// componets
const Bannerdubai = React.lazy(() => import("@/components/Bannerdubai"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpForm = React.lazy(() => import("@/components/LpFormpropsdubai"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const Expertappdubai = React.lazy(() => import("@/components/Expertappdubai"));
const Technologieslp = React.lazy(() => import("@/components/Technologieslp"));
const Justbuilditlp = React.lazy(() => import("@/components/Justbuilditlp"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Formnewlpdubai = React.lazy(() => import("@/components/Formnewlpdubai"));
const ServicesFaqsdubai = React.lazy(() => import("@/components/ServicesFaqsdubai"));
const Tale  = React.lazy(() => import("@/components/Tale"));
const Technologieslpdubai  = React.lazy(() => import("@/components/Technologieslpdubai"));
const LpChoosedubai  = React.lazy(() => import("@/components/LpChoosedubai"));
const LpChoosedubaitower  = React.lazy(() => import("@/components/LpChoosedubaitower"));
const LpChoosedubaiship  = React.lazy(() => import("@/components/LpChoosedubaiship"));
const Nextproject2dubai  = React.lazy(() => import("@/components/Nextproject2dubai"));
const Succes  = React.lazy(() => import("@/components/Succes"));
const Experiance  = React.lazy(() => import("@/components/Experiance"));
const Transformative  = React.lazy(() => import("@/components/Transformative"));
const ServicesFaqsdubaimobile  = React.lazy(() => import("@/components/ServicesFaqsdubaimobile"));
const Process  = React.lazy(() => import("@/components/Process"));


//Images
const customios = await import("../public/newHomePage/images/mobileimages/newMaintain1.png");
const iphoneapp = await import("../public/newHomePage/images/mobileimages/newMaintain2.png");
const applewatch = await import("../public/newHomePage/images/mobileimages/newMaintain3.png");
const appletvappdevelopment = await import("../public/newHomePage/images/mobileimages/newMaintain4.png");
const iphoneappdesigning = await import("../public/newHomePage/images/mobileimages/newMaintain5.png");
const hybridiphone = await import("../public/newHomePage/images/mobileimages/newMaintain6.png");
const appSeven = await import("../public/newHomePage/images/mobileimages/newMaintain7.png");
const appEight = await import("../public/newHomePage/images/mobileimages/newMaintain8.png");

const appEight1 = await import("../public/dubailp/faqs/andriod.png");
const appEight2 = await import("../public/dubailp/faqs/2.png");
const appEight3 = await import("../public/dubailp/faqs/3.png");
const appEight4 = await import("../public/dubailp/faqs/4.png");



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

      <Bannerdubai newHomeBgprops="newHomeBg" />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm
        addresClass="iosclass"
        heading={`Bitswits transforms Dubai's mobile app development with high-end innovation. Redefining conventional processes, we leverage data-driven expertise for business success. We aim to bring ingenious mobile applications to Dubai's thriving market, igniting disruption for a transformative development journey.`}
      />
        <Nothing Nothing="nothingLphomefy" />


        <ServicesFaqsdubaimobile

faqsData={[
  {
    question:"Android App Development In Dubai",
    ques2:"Bitswits' Android mobile app development in Duba",
    answer: (
      <> 
     Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.
      </>
    ),
    imggodd:appEight1,
    hiteclass:"class1",
  },
  {
    question: "Iphone App Development In Dubai",
    ques2:"Develop an iPhone Application ",
    answer: (
      <> 
       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </>
    ),
    imggodd:appEight2,
    hiteclass:"class2",
  },
  {
    question:
      "Flutter App Development In Dubai",
      ques2:"Develop Your Flutter Mobile Application ",
    answer: (
      <> 
       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </>
    ),
    imggodd:appEight3,
    hiteclass:"class3",
  },
  {
    question:
      "PWA App Development In Dubai",
      ques2:"Develop Your PWA Application ",
    answer: (
      <> 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </>
    ),
    imggodd:appEight4,
    hiteclass:"class4",
  },
 
]}

/>


<Process
 tale= "tale"
/>

        <Tale
        tale= "tale"
        />



        <Technologieslpdubai />

   
       
        <LpChoosedubai
        transform="transformlp"
        />
      
       
        <Nextproject2dubai
        />
       <Succes
        tale= "tale"
        />
       <Experiance
        tale= "tale"
        />
      <LpChoosedubaitower
        transform="transformlp"
        />
 <Transformative
        tale= "tale"
        />

<LpChoosedubaiship
        transform="transformlp"
        />

             <Expertappdubai expertapp="expertapp" />
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
      
     
      <Formnewlpdubai />
      <ServicesFaqsdubai
        faqsData={[
          {
            question:
              "How can I launch an app in the UAE?",
            answer: (
              <> 
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). 
              </>
            ),
          },
          {
            question: "How much time is required to build a mobile application?",
            answer: (
              <> 
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
          },
          {
            question:
              "How much does it cost to create an app in Dubai?",
            answer: (
              <> 
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
          },
          {
            question:
              "What is a mobile app support service, and does Bitswits offer it?",
            answer: (
              <> 
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
          },
         
        ]}
      />
     <HomeLocation />
    </>
  );
}
