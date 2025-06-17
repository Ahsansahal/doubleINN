import Head from "next/head";
import React, { useState, useEffect } from "react";
//components
const ServicesBanner = React.lazy(() => import("@/components/ServicesBanner"));
const ServicesMaintain = React.lazy(() => import("@/components/ServicesMaintain"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const ServicesPortfolio = React.lazy(() => import("@/components/ServicesPortfolio"));
const Newsuccess = React.lazy(() => import("@/components/NewMblSuccess"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const LpForm = React.lazy(() => import("@/components/LpForm6"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const WeworkLp = React.lazy(() => import("@/components/new-home-page-fy/WeworkLphome"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
//images
const BannerImage = await import("@/public/images/augmentapp/Augmentebanner.png");
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
const customios = await import("../public/images/augmentreality/2d3dandisometricgamesdevelopment.png");
const iphoneapp = await import("../public/images/augmentreality/interactive3dvisuallearningforeducationwithartechnology.png");
const applewatch = await import("../public/images/augmentreality/arpoweredtravelexperiencesforthemodernexplorer.png");
const appletvappdevelopment = await import("../public/images/augmentreality/designinsightandmanufacturingdigitalmodelswithar.png");
const iphoneappdesigning = await import("../public/images/augmentreality/3dvisualpresentationforproductlaunchthroughar.png");

export default function augmentedrealityappsdevelopment() {
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
  const severcedata = [
    {
      classlayout: {
        newclass: "iosclass",
      },
      heading: {
        subtitle: "BitsWits Sets New Standards",
        title1: "Expert",
        title2: "Augmented Reality Development",
        title3: "at Your Service!",
      },
      serdata: [
        {
          title: <> 2D, 3D, And Isometric Games Development </>,
          text: "We make games super cool by integrating augmented reality elements into 2D, 3D, and Isometric games, creating captivating and dynamic visuals.",
          appclass: "app01",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              Interactive 3D Visual Learning for Education with AR Technology{" "}
            </>
          ),
          text: (
            <>
              {" "}
              Using AR, we create fun 3D experiences for learning. Our
              user-friendly designs and activities offer an engaging way to
              understand things better.{" "}
            </>
          ),
          appclass: "app02",
          imgservice: iphoneapp,
        },
        {
          title: <> AR powered Travel Experiences for the Modern Explorer </>,
          text: "We develop augmented reality solutions for the travel industry, integrating immersive navigation, virtual tours, interactive guides, and cultural experiences for enhanced travel exploration.",
          appclass: "app3",
          imgservice: applewatch,
        },
        {
          title: <> Design Insight and Manufacturing Digital Models With AR </>,
          text: (
            <>
              {" "}
              Our advanced AR solutions for manufacturing, facilitate precise
              design insights and digital model visualization to optimize
              efficiency and streamline production processes effectively.{" "}
            </>
          ),
          appclass: "app4",
          imgservice: appletvappdevelopment,
        },
        {
          title: <> 3D Visual Presentation for Product Launch Through AR </>,
          text: "Our AR solutions offer 3D visual presentations, allowing users to visualize products in real-world contexts and accurately measure space requirements.",
          appclass: "app5",
          imgservice: iphoneappdesigning,
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

      <ServicesBanner
        subtitle="Empower Your Business with"
        title={<> Top Augmented Reality App Development Company </>}
        text={
          <>
            {" "}
            BitsWits is your ultimate destination for Augmented Reality app
            development. Our developers deliver dynamic AR experiences that set
            your business apart from the rest.{" "}
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="augmented"
          subtitle={<> BitsWits Sets New Standards </>}
          title0={<> Expert </>}
          title={<> Augmented Reality Development </>}
          title1={<> at Your Service! </>}
          appContent={[
            {
              title: (
                <>
                  {" "}
                  2D, 3D, And Isometric <br /> Games Development{" "}
                </>
              ),
              text: "We make games super cool by integrating augmented reality elements into 2D, 3D, and Isometric games, creating captivating and dynamic visuals.",
              appclass: "app01",
            },
            {
              title: (
                <>
                  {" "}
                  Interactive 3D Visual Learning for <br /> Education with AR
                  Technology{" "}
                </>
              ),
              text: (
                <>
                  {" "}
                  Using AR, we create fun 3D experiences for learning. Our
                  user-friendly designs and activities offer an engaging way to
                  understand things better.{" "}
                </>
              ),
              appclass: "app02",
            },
          ]}
          appContent1={[]}
          appContent2={[
            {
              title: (
                <>
                  {" "}
                  AR powered Travel Experiences <br /> for the Modern Explorer{" "}
                </>
              ),
              text: "We develop augmented reality solutions for the travel industry, integrating immersive navigation, virtual tours, interactive guides, and cultural experiences for enhanced travel exploration.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: (
                <>
                  {" "}
                  Design Insight and Manufacturing <br /> Digital Models With AR{" "}
                </>
              ),
              text: (
                <>
                  {" "}
                  Our advanced AR solutions for manufacturing, facilitate
                  precise design insights and digital model visualization to
                  optimize efficiency and streamline production processes
                  effectively.{" "}
                </>
              ),
              appclass: "app4",
            },
            {
              title: (
                <>
                  {" "}
                  3D Visual Presentation for Product <br /> Launch Through AR{" "}
                </>
              ),
              text: "Our AR solutions offer 3D visual presentations, allowing users to visualize products in real-world contexts and accurately measure space requirements.",
              appclass: "app5",
            },
          ]}
          appContent4={[]}
          appContent5={[]}
          appContent6={[]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our Augmented Reality App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
              streamlined process for app development is <br /> designed to be
              transparent and collaborative, ensuring your vision comes to life
              exactly as you imagined."
      />
      <Justbuildit />
      <LpChoose transform="transform" />
      <ServicesPortfolio
        title={
          <>
            Showcasing Our <span className="newfycolr">
              Creative Vision
            </span>
          </>
        }
      />
      <Newsuccess
        assignClass="spacing"
        subtitle="Ready For Success?"
        maintitle={
          <>
            {" "}
            Accelerate Your Growth With <br /> Augmented Reality Apps{" "}
          </>
        }
        successSteps={[
          {
            number: "01",
            title: "Consult Our Specialists",
            text: "Reach out to our specialists without any hesitation via email or call to attain a free consultation.",
            buttonText: "Connect Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "02",
            title: (
              <>
                {" "}
                Request a <br /> Quote{" "}
              </>
            ),
            text: "Get a detailed cost breakdown for your app development project.",
            buttonText: "Chat Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "03",
            title: "Build An MVP",
            text: "Start your app development journey with no-obligation consultation via email and phone.",
            buttonText: "Call Now!",
            link: "tel:+18335006007",
          },
        ]}
      />
      <Technologieswe />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question:
              "What's the typical timeline for an AR project with BitsWits?",
            answer: (
              <>
                {" "}
                Project timeline varies but usually ranges from a few weeks to a
                few months.{" "}
              </>
            ),
          },
          {
            question:
              "Do you offer AR app development, and can it be integrated into existing apps?",
            answer: (
              <>
                {" "}
                Yes, we develop AR applications and can integrate them with
                existing ones.{" "}
              </>
            ),
          },
          {
            question:
              "What hardware or devices are required for end-users to access AR experiences developed by BitsWits?",
            answer: (
              <>
                {" "}
                Commonly used devices like smartphones or AR glasses can access
                our AR experiences.{" "}
              </>
            ),
          },
          {
            question:
              "Are there any hidden or additional costs that we should be aware of in the AR development process with BitsWits?",
            answer: (
              <>
                {" "}
                We maintain transparency in our pricing, and there are no hidden
                costs. Any additional expenses will be communicated and agreed
                upon in advance.{" "}
              </>
            ),
          },
          {
            question:
              "Does BitsWits provide 24/7 technical support for critical AR applications?",
            answer: (
              <>
                {" "}
                Yes, we offer 24/7 support for mission-critical applications.{" "}
              </>
            ),
          },
          {
            question:
              "Are there examples or case studies of successful AR projects you've completed?",
            answer: (
              <>
                {" "}
                Yes, we can provide case studies showcasing our work. Sign up
                now, and our customer support team will be in touch with you.{" "}
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
