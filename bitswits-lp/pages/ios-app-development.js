import Head from "next/head";
import React, { useState, useEffect } from "react";
// css //
import styles from "@/styles/LpChoose.module.css";
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
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const WeworkLp = React.lazy(() => import("@/components/new-home-page-fy/WeworkLphome"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const LpForm = React.lazy(() => import("@/components/LpForm6"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
//images
const customios = await import("../public/images/iosappdevelopment/customios.png");
const iphoneapp = await import("../public/images/iosappdevelopment/iphoneapp.png");
const applewatch = await import("../public/images/iosappdevelopment/applewatch.png");
const appletvappdevelopment = await import("../public/images/iosappdevelopment/appletvappdevelopment.png");
const iphoneappdesigning = await import("../public/images/iosappdevelopment/iphoneappdesigning.png");
const hybridiphone = await import("../public/images/iosappdevelopment/hybridiphone.png");


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
  
  const severcedata = [
    {
      classlayout: {
        newclass: "iosclass",
      },
      heading: {
        subtitle: "iOS App Development Services",
        title1: "Craft Incredible Apps",
        title2: "Hire an iOS App Developer",
        text: `As a premier iOS app development company, our iOS developers create
            eye-catching and user-friendly iPhone and iPad apps that capture
            attention immediately. To develop customized applications that are
            appropriate for Apple devices, our professional iOS developers and
            designers make use of the newest iOS capabilities.`,
      },
      serdata: [
        {
          title: "Custom iOS App Development",
          text: "Our custom iOS app development solutions got you covered when it comes to developing your iOS app. From the initial idea to the final design and development stages, we provide customized iOS app solutions tailored to your needs.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              iPhone App <br /> Development{" "}
            </>
          ),
          text: "We turn app ideas into reality with fast and efficient iPhone app development services. No idea is too complex or ambitious for us. We help you take your idea from concept to launch in no time.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Apple Watch Development",
          text: "Our team of expert iOS developers create exceptional Apple Watch apps that flawlessly blend with advanced technology and coding standards. We prioritize maximizing battery efficiency and exceeding user expectations with superb performance.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Apple TV App Development",
          text: "Our team specializes in developing custom apps for Apple TV with impeccable design and performance. We also offer iPhone compatibility consultations. Let's turn your app ideas into reality!",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "iPhone App Designing",
          text: "Our team creates custom iPhone apps to streamline workflow processes, improve customer engagement, and enhance their experience with innovative and intuitive designs.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Hybrid iPhone App Development",
          text: "Boost your business with our hybrid iPhone app development services. Run your applications seamlessly across platforms to increase productivity and efficiency. Contact us now to learn more.",
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
        subtitle="Reimagine Possibilities With"
        title={<> Our iOS App Development Company </>}
        text={
          <>
            Our iOS development team works with you to determine the ideal
            features, design, and user experience that will make your app a
            success. We also take care of all the technical details, including
            testing and security measures. 
          </>
        }
        video={
          <video
            autoPlay
            muted
            src="../../bannerVideos/ios.mp4"
            className="w-50"
          ></video>
        }
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="ios"
          subtitle="iOS App Development Services"
          title1={<> Craft Incredible Apps </>}
          title2={<> Hire an iOS App Developer! </>}
          text={
            <>
              As a premier iOS app development company, our iOS developers
              create eye-catching and user-friendly iPhone and iPad apps that
              capture <br className="d-lg-block d-none" />
              attention immediately. To develop customized applications that are
              appropriate for Apple devices, our professional iOS developers and 
              <br className="d-lg-block d-none" />
              designers make use of the newest iOS capabilities. 
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: "Custom iOS App Development",
              text: "Our custom iOS app development solutions got you covered when it comes to developing your iOS app. From the initial idea to the final design and development stages, we provide customized iOS app solutions tailored to your needs.",
              appclass: "app",
            },
            {
              title: (
                <>
                  {" "}
                  iPhone App <br /> Development{" "}
                </>
              ),
              text: "We turn app ideas into reality with fast and efficient iPhone app development services. No idea is too complex or ambitious for us. We help you take your idea from concept to launch in no time.",
              appclass: "app1",
            },
            {
              title: "Apple Watch Development",
              text: "Our team of expert iOS developers create exceptional Apple Watch apps that flawlessly blend with advanced technology and coding standards. We prioritize maximizing battery efficiency and exceeding user expectations with superb performance.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Apple TV App Development",
              text: "Our team specializes in developing custom apps for Apple TV with impeccable design and performance. We also offer iPhone compatibility consultations. Let's turn your app ideas into reality!",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "iPhone App Designing",
              text: "Our team creates custom iPhone apps to streamline workflow processes, improve customer engagement, and enhance their experience with innovative and intuitive designs.",
              appclass: "app4",
            },
            {
              title: "Hybrid iPhone App Development",
              text: "Boost your business with our hybrid iPhone app development services. Run your applications seamlessly across platforms to increase productivity and efficiency. Contact us now to learn more.",
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
        title="Explore Our iOS App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
        streamlined process for app development is <br /> designed to be
        transparent and collaborative, ensuring your vision comes to life
        exactly as you imagined." 
      />
      <Justbuildit />
      <LpChoose transform="transform" marginTop={styles.marginTop} />
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
      <Technologieswe addresClass="appdev" />
      <Globallplp6 />
      <Partnerships /> 
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question:
              "What are the stages and costs involved in iOS app development?",
            answer: (
              <> 
                iOS development is a complex process that requires careful
                planning and budgeting. The stages of iOS development involve
                concepts to launch. The first stage is concept creation, which
                involves coming up with an idea for an app and determining how
                it will be designed and developed. Next comes the design phase,
                where developers create wireframes that help define the look and
                feel of an app. After that, the development stage begins, where
                coding and testing take place. Finally, the launch stage
                involves ensuring the app is compliant with Apple standards and
                distributing it through either the App Store or other means. 
              </>
            ),
          },
          {
            question: "What are the types of iOS development?",
            answer: (
              <> 
                iOS development is an incredibly versatile field. Whether you're
                creating a brand-new app, tweaking an existing one, or
                developing a mobile-friendly website, there are several
                different types of iOS development to explore. Here's a look at
                some of the most popular:
                <br />
                <br />
                1. Native Development: This type of development involves using
                Apple's Xcode IDE and the official SDK to create apps that are
                specifically designed for iOS devices. Native development is
                popular because it takes full advantage of all the latest
                features available on iOS, including access to device hardware
                and software libraries.
                <br />
                <br />
                2. Cross-Platform Development: This type of development involves
                creating a single app that can be used on both iOS and Android
                devices. Cross-platform development is becoming increasingly
                popular as it reduces the need to develop multiple versions of
                the same app.
                <br />
                <br />
                3. Web Development: This type of development involves creating a
                mobile-friendly version of an existing website using HTML, CSS,
                and JavaScript technologies. Web development is ideal for
                companies that want their users to access content on the go.
                <br />
                <br />
                4. Hybrid App Development: This type of development combines
                elements of native and web development to create an app that is
                both functional and visually appealing. It’s ideal for companies
                who want a custom solution that looks great on any device.
                <br />
                <br />
                No matter what type of iOS development you choose, a
                well-designed and optimized app can help your business stand out
                from the competition. With the right iOS and android app
                developer such as BitsWits, you can create an amazing user
                experience that will keep customers coming back for more. 
              </>
            ),
          },
          {
            question:
              "Why you should consider investing in iOS app development?",
            answer: (
              <> 
                Investing in iOS app development company is a great way to
                ensure that your business stands out from the competition.
                Here’s how:
                <br />
                <br />
                1. Increased Brand Visibility: Developing an iOS app can make
                your business more visible to potential customers, allowing them
                to easily find and use your services. This is especially useful
                if you want to reach a wider audience outside of your
                traditional local area.
                <br />
                <br />
                2. Improved Customer Engagement: By giving customers the ability
                to access and interact with your services via an iOS app, you
                can improve customer engagement and build stronger relationships
                with them. This in turn could lead to an increase in sales or a
                more loyal customer base.
                <br />
                <br />
                3. Increased Efficiency: Developing an iOS app can streamline
                processes such as ordering products or services, making
                payments, and scheduling appointments. By automating many of
                these tasks, you can save time and money, allowing you to focus
                on other areas of your business.
                <br />
                <br />
                4. Improved Security: iOS apps are more secure than other
                platforms, providing an added layer of protection for customer
                data. This can help to give customers peace of mind that their
                information is being kept safe and secure when using your
                services.
                <br />
                <br />
                Overall, investing in iOS app development company is a smart
                decision that can benefit your business in numerous ways. 
              </>
            ),
          },
          {
            question:
              "What are the programming language(s) for iOS development?",
            answer: (
              <> 
                The best programming language for iOS development depends on the
                app you want to create. If you’re just starting, consider
                learning Swift—Apple’s modern and intuitive coding language. It
                features a streamlined syntax that makes it easy to learn, and
                its versatile nature allows developers to create everything from
                simple apps with minimal code to advanced applications with
                elaborate features. Objective-C is another popular choice for
                the apple app development language, and if you’ve already
                written apps in this language, it might be a good option to
                stick with it. Both languages are supported by Apple, so the
                decision ultimately comes down to personal preference and what's
                most comfortable for you. 
              </>
            ),
          },
          {
            question: "What is Swift iOS app development?",
            answer: (
              <> 
                Swift iOS App Development is the process of creating, coding,
                and designing mobile applications for Apple's iOS operating
                system. With Swift being an open-source language, it allows
                developers to develop apps quickly with fewer code lines and
                robust features. The result? A faster, more efficient
                development process that produces exceptionally designed,
                user-friendly applications. For those who are looking for an
                innovative and reliable way to build their app, Swift is a
                perfect choice. From simple games to complex enterprise
                solutions – whatever you need, iOS App Development with hire
                swift developers has you covered! 
              </>
            ),
          },
          {
            question: "What are iOS app development services?",
            answer: (
              <> 
                iOS app development company help businesses create custom,
                engaging, and user-friendly applications for Apple's iOS
                platform. With their experienced professionals, they provide
                comprehensive services to develop an app that fits your business
                needs and stands out from the competition. They are well-versed
                in the latest iOS technologies and have a proven track record of
                developing apps for both the App Store and enterprise solutions.
                Whether you need an app to increase customer engagement or
                expand your market reach, iOS app development company will help
                take your business to the next level. 
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
