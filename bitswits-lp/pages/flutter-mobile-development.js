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
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
//images
const customios = await import("../public/images/flutterappdeveloper/dartapplicationdevelopmentservices.png");
const iphoneapp = await import("../public/images/flutterappdeveloper/fluttercrossplatformappdevelopment.png");
const applewatch = await import("../public/images/flutterappdeveloper/flutterdevelopmentforiosandroid.png");
const appletvappdevelopment = await import("../public/images/flutterappdeveloper/customizedflutterdevelopmentsolutions.png");
const iphoneappdesigning = await import("../public/images/flutterappdeveloper/testingqualityassurance.png");
const hybridiphone = await import("../public/images/flutterappdeveloper/maintenancesupportservices.png");


export default function HybridMobile() {

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
        title1: "No Challenge Is Too Great For Our",
        title2: "Flutter App Development Company!",
      },
      serdata: [
        {
          title: "Dart Application Development Services",
          text: "Our Dart application development services create efficient and powerful hybrid apps using the latest libraries to modernize your native apps. We'll help your app stand out and succeed with seamless solutions exceeding expectations.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: "Flutter Cross-Platform App Development",
          text: "As a leading Flutter app development company, our expertise lies in developing innovative Flutter apps and provide solutions that extend your app's potential reach, driving your business growth to new heights. Hire us, and experience the difference of our exceptional Flutter app development services.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Flutter Development For IOS & Android",
          text: "We make stellar Flutter apps that work on both iOS and Android platforms. We aim to make your application stand out in the industry with our Flutter app development service. Trust our expert flutter developers to deliver seamless user experience and robust functionality.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Customized Flutter Development Solutions",
          text: "Flutter app developers at BitsWits can make customized powerful apps that help your business grow and reach more people. Hire top-rated Flutter development services and skyrocket your business growth.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Testing & Quality Assurance",
          text: "Our Flutter mobile app developers, quality analysts, and testers, collaborate seamlessly to ensure your app is free of bugs during development. We guarantee you a dependable, top-notch final product that meets your expectations.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Maintenance & Support Services",
          text: "BitsWits offers maintenance and support services to keep your Flutter applications running smoothly after launch. Our experts provide top-notch services to ensure your applications remain in excellent condition for a long term, giving you peace of mind and ensuring the success of your business.",
          appclass: "app5",
          imgservice: hybridiphone,
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
        title={<> Flutter Mobile Apps Development Company </>}
        text={
          <>
            BitsWits is an expert Flutter app development agency with years of
            experience creating innovative, powerful apps for businesses of all
            sizes. From startups to established corporate entities, we have the
            expertise and technology to turn your ideas into amazing apps.
          </>
        }
        video={<video autoPlay muted src='../../bannerVideos/flutter.mp4' className="w-75" ></video>}
        assignClass="flutter"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="flutter"
          title1={<> No Challenge Is Too Great For Our </>}
          title2={<> Flutter App Development Company! </>}
          appContent={[]}
          appContent1={[
            {
              title: "Dart Application Development Services",
              text: (
                <>

                  Our Dart application development services create efficient and
                  powerful hybrid apps using the latest libraries to modernize
                  your native apps. We'll help your app stand out and succeed
                  with seamless solutions exceeding expectations.
                </>
              ),
              appclass: "app",
            },
            {
              title: <> Flutter Cross-Platform App Development </>,
              text: (
                <>

                  As a leading Flutter app development company, our expertise
                  lies in developing innovative Flutter apps and provide
                  solutions that extend your app's potential reach, driving your
                  business growth to new heights. Hire us, and experience the
                  difference of our exceptional Flutter app development
                  services.
                </>
              ),
              appclass: "app1",
            },
            {
              title: <> Flutter Development For IOS & Android </>,
              text: "We make stellar Flutter apps that work on both iOS and Android platforms. We aim to make your application stand out in the industry with our Flutter app development service. Trust our expert flutter developers to deliver seamless user experience and robust functionality.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Customized Flutter Development Solutions",
              text: "Flutter app developers at BitsWits can make customized powerful apps that help your business grow and reach more people. Hire top-rated Flutter development services and skyrocket your business growth.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: (
                <>

                  Testing & Quality <br /> Assurance
                </>
              ),
              text: (
                <>

                  Our Flutter mobile app developers, quality analysts, and
                  testers, collaborate seamlessly to ensure your app is free of
                  bugs during development. We guarantee you a dependable,
                  top-notch final product that meets your expectations.
                </>
              ),
              appclass: "app4",
            },
            {
              title: (
                <>

                  Maintenance & Support <br /> Services
                </>
              ),
              text: "BitsWits offers maintenance and support services to keep your Flutter applications running smoothly after launch. Our experts provide top-notch services to ensure your applications remain in excellent condition for a long term, giving you peace of mind and ensuring the success of your business.",
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
        title="Explore Our Flutter App Development Journey"
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
        maintitle="Brace Yourself for What Happens Next"
        successSteps={[
          {
            number: "01",
            title: "Talk To Our Experts",
            text: "Contact us without obligation by email or phone and secure your free consultation.",
            buttonText: "Connect Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "02",
            title: "Get A Quote",
            text: "Get an exact cost breakdown structure of your app.",
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
            question: "How much does Flutter app development cost?",
            answer: (
              <>

                Flutter mobile app development is an increasingly popular and
                cost-effective way to develop mobile applications. Developing
                with Flutter is faster, easier, and produces more reliable
                results than other cross-platform solutions. But how much does
                flutter app development cost? The answer depends on the
                complexity of the application and the number of features you
                want to include. Generally speaking, simple applications with
                basic functionality can cost anywhere from $[Our Basic Package]
                - $[Our Premium Package], while more complex applications can
                range up to $[Our Basic Package] or more.
              </>
            ),
          },
          {
            question: "What is Flutter app development?",
            answer: (
              <>

                Flutter mobile app development is a powerful software
                development kit (SDK) created by Google. It allows developers to
                quickly create beautiful, high-performance mobile applications
                for both iOS and Android platforms from the same codebase.
                Flutter apps are built using the Dart programming language and
                have access to a wide range of powerful features such as
                hardware acceleration, advanced UI elements, and animation
                capabilities. Flutter apps run smoothly on both platforms
                because of their highly optimized codebase.
              </>
            ),
          },
          {
            question: "Why should I choose Flutter for app development?",
            answer: (
              <>

                Flutter app development is the ideal choice because it offers a
                wide range of advantages. It is an open-source framework that
                simplifies mobile app creation, giving flutter developers more
                control over their projects and enabling them to write code
                faster. You should choose Flutter app development because it
                allows for the rapid development of high-performance apps with
                expressive and flexible UI, using minimal effort, time, and
                code.
              </>
            ),
          },
          {
            question: "Is Flutter good for mobile app development?",
            answer: (
              <>

                Flutter is a great choice for mobile app development. It is an
                open-source UI toolkit created by Google to help developers
                build beautiful and engaging apps quickly and efficiently.
                Flutter makes it easy for developers to create cross-platform
                applications with near-native performance. With features like
                hot reloading, extensive libraries of widgets, and its own
                rendering engine, Flutter can help you create beautiful mobile
                apps faster than ever before. These are some of the most
                prominent reasons why Flutter is better for app development.
              </>
            ),
          },
          {
            question: "What are some of the advantages of Flutter?",
            answer: (
              <>

                The Flutter framework is quickly becoming one of the most
                popular development tools around. It's easy to see why, as it
                offers developers many advantages over traditional app
                development methods. Here are six big benefits of Flutter:
                <br />
                <br />
                1. Faster Development Speed - Flutter enables developers to
                create apps at lightning speed thanks to its hot reload feature.
                This allows developers to quickly make changes and see the
                results immediately, rather than waiting for a build cycle every
                time they make an adjustment.
                <br />
                <br />
                2. Easy to Learn - Flutter is designed with simplicity in mind
                and requires very little code to get started. It's a great
                choice for new developers who want to get their feet wet in the
                world of app development.
                <br />
                <br />
                3. Increased Productivity - With Flutter, developers can make
                changes quickly and easily as well as reuse code for future
                projects. This helps speed up development time and increases
                productivity overall.
                <br />
                <br />
                4. Cross-Platform Support - One of the biggest advantages of
                using Flutter is its cross-platform support. It allows
                developers to create apps for multiple platforms without having
                to rewrite code for each one.
                <br />
                <br />
                5. Accessibility - With Flutter, developers can easily make
                their apps accessible to people with disabilities by taking
                advantage of the accessible components and APIs within the
                framework itself. This helps ensure that the app is accessible
                to everyone.
                <br />
                <br />
                6. Open Source - Flutter is open source, meaning developers can
                use the source code and freely distribute it as they please.
                This helps keep development costs low and allows developers to
                build apps faster by taking advantage of existing libraries and
                components.
                <br />
                <br />
                In short, Flutter application development is the ultimate choice
                for app development because it offers an easy-to-use interface
                and powerful features that make developing apps faster and
                simpler.
              </>
            ),
          },
          {
            question: "What does Flutter Firebase do?",
            answer: (
              <>

                Flutter Firebase is a mobile development platform that combines
                the power of Flutter, Google's UI toolkit for building beautiful
                apps, with the robustness and scalability of Firebase. It offers
                a wide range of features like cloud storage, authentication,
                analytics, messaging, and much more. With Flutter Firebase, you
                can create powerful and dynamic mobile apps with ease. With the
                help of its extensive framework, developers can quickly and
                easily create beautiful user interfaces and powerful backends,
                enabling a smooth user experience. It also allows you to build
                complex data structures without having to write complicated
                code, making it perfect for quickly prototyping ideas and
                building highly-functional applications.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
