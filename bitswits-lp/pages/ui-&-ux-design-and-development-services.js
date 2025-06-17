import Head from "next/head";
import React from "react";
import Image from "next/image";
//components
const ServicesBanner = React.lazy(() => import("@/components/uiuxdesigndevelopment/UIUXBanner"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const Smarteruiux = React.lazy(() => import("@/components/uiuxdesigndevelopment/Smarteruiux"));
const Provideuiux = React.lazy(() => import("@/components/uiuxdesigndevelopment/Provideuiux"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const LpForm = React.lazy(() => import("@/components/LpForm6"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
const UIUXTechnology = React.lazy(() => import("@/components/uiuxdesigndevelopment/UIUXTechnologies"));
//images
const BannerImage = await import("@/public/ui-ux-page/banner-img.png");
const banImg1 = await import("../public/servnew/customweb/imgfold.png");
const bestgloba11 = await import("../public/ui-ux-page/icon1.png");
const bestgloba12 = await import("../public/ui-ux-page/icon2.png");
const bestgloba13 = await import("../public/ui-ux-page/icon3.png");
const bestgloba14 = await import("../public/ui-ux-page/icon4.png");
const bestgloba15 = await import("../public/ui-ux-page/icon5.png");
const bestgloba16 = await import("../public/ui-ux-page/icon6.png");
const poe = await import("../public/ui-ux-page/work1.png");
const poe2 = await import("../public/ui-ux-page/work2.png");


export default function UiUxDesign() {
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
        assignClass="UIUX"
        subtitle="Our Award-Winning"
        title={<> UI & UX Design And Development Services </>}
        text={
          <>
            {" "}
            Empowering Businesses with Tailored UI/UX Solutions By Our Design
            Experts{" "}
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      <Smarteruiux
        assignClass="providebussiness"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            Design Services For Smarter User Navigation
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Dynamic User Design Services <br /> For Smarter User Navigation
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            The key to developing a successful app is marrying the functionality
            your users demand with an intuitive design <br /> and experience
            that make it as simple as possible to use. Chetu’s UI/UX experts
            will design the perfect web,
            <br /> desktop, or mobile app to meet your specific business
            requirements, industry needs, and product development
            <br /> goals. We design and develop innovative digital user
            experiences that solve complex business problems.
          </p>
        }
        sec={[
          {
            img1: bestgloba11,
            titl3: "Information Architecture Design",
            para4:
              "Our developers use industry-leading tools to construct new content management lifecycles, content models, and robust Document Information Typing Architecture (DITA) all while streamlining organic processes for conversion rate optimization (CRO).",
          },
          {
            img1: bestgloba12,
            titl3: "User Experience (UX) Development",
            para4:
              "We construct highly responsive Graphical User Interfaces (GUI) that include elements like 2D/3D animations and embedded media, providing an organic, unified user experience throughout our custom solutions. ",
          },
          {
            img1: bestgloba13,
            titl3: "User Interface (UI) Development",
            para4:
              "Our UI/UX designers are experts in graphic libraries, including OpenGL and WebGL. We collaborate with your stakeholders and IT team to develop a style (including color palettes, logo designs and layouts) that harmonizes with your company culture.",
          },
        ]}
        video={<Image src={poe} className="img-fluid" alt="bitswits" />}
      />
      <Provideuiux
        assignClass="provideuiux"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        sec={[
          {
            img1: bestgloba14,
            titl3: "Web & Mobile App UI/UX Development",
            para4:
              "We utilize frameworks like Xamarin, DevExpress, Ionic, Appcelerator, and Apache Cordova to deliver highly responsive UI/UX designs that fully leverage touchscreen functionality and provide mobile-first user experiences for progressive web apps.",
          },
          {
            img1: bestgloba15,
            titl3: "Front-End Programming",
            para4:
              "Our front-end development specialists are experts in key front-end languages (HTML5, CSS, JavaScript) and frameworks like jQuery, AngularJS, Node.js and Bootstrap. We ensure our tightly written code is optimized to work on multiple device types and browsers.",
          },
          {
            img1: bestgloba16,
            titl3: "Intuitive & Interactive Solutions",
            para4:
              "We use well-known UI guidelines like Human Interface Guidelines (HIG) and Material Design to develop intuitive solutions with goal-driven, usable designs that influence positive user responses and facilitate simple communication between a user and the interface.",
          },
        ]}
        video={<Image src={poe2} className="img-fluid" alt="bitswits" />}
      />
      <ProjectProcess
        processclass="processLp6"
        subtitle="Web Development Process"
        title="Our Strategic Web Development Process"
        desc={`We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line Custom <br/> Websites & Applications.`}
        img5={
          <>
            {" "}
            <Image
              src={banImg1}
              alt="BitsWits"
              className="img-fluid mt-4 mt-lg-5"
            />{" "}
          </>
        }
      />
      <Justbuildit assignClass="justforpop" />
      <UIUXTechnology addresClass="tech" />
      <Globallplp6 bannerClass="newclassglobe" />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question: "What is Mobile Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Does Bitswits Offers Hybrid and Native Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Why Choose Bitswits as a Mobile Application Development Company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "Is there any customer support available?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "How to choose a mobile application development company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "What industries does BitsWits cater do?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
