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
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const LpForm = React.lazy(() => import("@/components/LpForm6"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const WeworkLp = React.lazy(() => import("@/components/new-home-page-fy/WeworkLphome"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
//images
const BannerImage = await import("@/public/images/iosbanner/ios.png");
const customios = await import("../public/images/andriodappdevelopment/customandroidappdevelopment.png");
const iphoneapp = await import("../public/images/andriodappdevelopment/androidappintegration.png");
const applewatch = await import("../public/images/andriodappdevelopment/androidgamedevelopment.png");
const appletvappdevelopment = await import("../public/images/andriodappdevelopment/androidweardevelopment.png");
const iphoneappdesigning = await import("../public/images/andriodappdevelopment/enterpriseandroidapps.png");
const hybridiphone = await import("../public/images/andriodappdevelopment/androiduiuxdesign.png");


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
        title1: "Leveling Up Your App Game With Our Slew of",
        title2: "Android App Development",
        title3: "Service!",
      },
      serdata: [
        {
          title: "Custom Android App Development",
          text: "Our expert Android development team can help take your business to the next level with custom Android mobile app development services. Let us create stunning visuals, intuitive interfaces, and robust security features to keep you ahead of the competition. Contact us today to get started.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: "Android App Integration",
          text: "Need help integrating your Android app with other software systems and APIs? Look no further. Our expert Android development team is here to assist you in streamlining the process, ensuring your users have a seamless experience with enhanced functionality. Let us help take your app to the next level.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Android Game Development",
          text: "Do you plan to produce an exceptional Android mobile game that will captivate your audience? Worry no more, as our team of Android game developers can provide you with the best assistance in developing exciting and irresistible games that will keep your users hooked and always craving more.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Android Wear Development",
          text: "Expand your reach in the wearable market with our expert Android developers. Our advanced Android Wear solutions will give you a competitive edge and elevate your brand visibility. Allow us to help you take your enterprise to new heights.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Enterprise Android Apps",
          text: "We can help streamline your business operations with our enterprise Android app development services. Our solutions cover all aspects, from employee communication and data management to workflow optimization. Contact us to learn more.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Android UI/UX Design",
          text: "Our team of experienced Android designers can assist you in crafting visually appealing and user-friendly interfaces for your Android app. With our expertise, we can enhance user engagement and ensure a seamless user experience.",
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
        subtitle="Revolutionizing & Creating A Smarter Future"
        title={<> Android App Development Company </>}
        text={
          <>
            At BitsWits, we specialize in creating custom-crafted Android
            applications that meet our customer's needs. Our android app
            development team firmly believes that no two businesses are the
            same, and neither should their apps be.
          </>
        }
        video={
          <video
            autoPlay
            muted
            src="../../bannerVideos/android.mp4"
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
          assignClass="android"
          title1={<> Leveling Up Your App Game With Our Slew of </>}
          title2={<> Android App Development </>}
          title3={<> Service! </>}
          appContent={[]}
          appContent1={[
            {
              title: "Custom Android App Development",
              text: "Our expert Android development team can help take your business to the next level with custom Android mobile app development services. Let us create stunning visuals, intuitive interfaces, and robust security features to keep you ahead of the competition. Contact us today to get started.",
              appclass: "app",
            },
            {
              title: (
                <>

                  Android App <br /> Integration
                </>
              ),
              text: "Need help integrating your Android app with other software systems and APIs? Look no further. Our expert Android development team is here to assist you in streamlining the process, ensuring your users have a seamless experience with enhanced functionality. Let us help take your app to the next level.",
              appclass: "app1",
            },
            {
              title: (
                <>

                  Android Game <br /> Development
                </>
              ),
              text: "Do you plan to produce an exceptional Android mobile game that will captivate your audience? Worry no more, as our team of Android game developers can provide you with the best assistance in developing exciting and irresistible games that will keep your users hooked and always craving more.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Android Wear Development",
              text: "Expand your reach in the wearable market with our expert Android developers. Our advanced Android Wear solutions will give you a competitive edge and elevate your brand visibility. Allow us to help you take your enterprise to new heights.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "Enterprise Android Apps",
              text: (
                <>

                  We can help streamline your business operations with our
                  enterprise Android app development services. Our solutions
                  cover all aspects, from employee communication and data
                  management to workflow optimization. Contact us to learn more.
                </>
              ),
              appclass: "app4",
            },
            {
              title: "Android UI/UX Design",
              text: "Our team of experienced Android designers can assist you in crafting visually appealing and user-friendly interfaces for your Android app. With our expertise, we can enhance user engagement and ensure a seamless user experience.",
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
        title="Explore Our Andriod App Development Journey"
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
            question: "What is best language for Android app development?",
            answer: (
              <>

                Android app development is a complex process that requires a
                deep understanding of the best language for it. Java has been
                the traditional go-to language for the android mobile app
                development company, but there are other options worth
                considering. Kotlin and C++ are both languages that have become
                popular in recent years. They offer different levels of
                performance and abstraction, so you can choose the language
                which best suits your app's needs.
              </>
            ),
          },
          {
            question: "What is Android development?",
            answer: (
              <>

                Mobile app development android is the process of creating mobile
                applications for Android devices. It involves writing code in
                Java and Kotlin, integrating APIs, designing apps with a great
                user experience, and more. With Android's large market share and
                open-source nature, it is one of the best platforms for app
                developers to create innovative applications that can reach
                millions of users. Android development is also an ever-evolving
                field as new technologies, frameworks, and APIs are frequently
                released by Google and other third parties. By developing with
                Android, developers can create powerful apps that have the
                potential to revolutionize the way we use mobile devices today.
                So, get ready to take full advantage of this amazing platform
                and join the world of Android development now with BitsWits! We
                are experts in serving you in android and iOS app development.
              </>
            ),
          },
          {
            question: "How much does it cost to develop an Android app?",
            answer: (
              <>

                Designing an Android app can be a complex and expensive process.
                But there is no one-size-fits-all answer to the question, "How
                much does it cost to design an Android app?” The price of
                developing an Android app varies depending on the type of
                features, complexity, size, and other elements that need to be
                included. The android app developer cost can range from a few
                thousand to hundreds of thousands of dollars, depending on the
                scope and complexity of the project. The price to build
                applications for Android includes labor costs, design expenses,
                hosting fees, and other costs associated with releasing the app
                in Google Play Store. Professional teams may charge up to [Our
                Own Bundle Cost], depending on their experience and skill set.
              </>
            ),
          },
          {
            question: "Who is a Google Android app developer?",
            answer: (
              <>

                Google Android app developer is a one-stop shop for developing
                and launching Android apps. From creating an app concept to
                distributing it on Google Play, this team of expert developers
                has the experience and resources necessary to make your vision
                come true. Whether you're looking to build a game, create a
                business tool, or create something completely unique, they have
                the skills to make it happen. Whatever your needs are, the
                Google Android app developer is here to help you get started and
                guide you every step of the way. Don't just dream it; code it!
                Make your app dreams a reality today with BitsWits.
              </>
            ),
          },
          {
            question: "What is Android app development using Python?",
            answer: (
              <>

                Android app development using Python is the process of creating
                native Android applications with the popular coding language
                Python. This open-source programming language allows you to
                create powerful and interactive mobile apps that are both
                feature-rich and user-friendly. With a wide array of libraries,
                tools, and modules available, developers can quickly build
                secure and reliable Android apps with minimal effort.
                Additionally, Python has been optimized for mobile computing and
                is ideal for producing complex applications that require
                low-level control over device resources. This makes it a great
                choice for creating advanced Android apps that are tailored
                specifically to the needs of mobile users. Whether you're a
                beginner or an experienced android app developer looking to
                develop a cutting-edge Android app, it is an excellent choice
                for python android app development. With its flexibility and
                power, you can ask for android app developer for hire and create
                innovative apps that will bring your ideas to life!
              </>
            ),
          },
          {
            question: "How much does it cost to hire an app developer?",
            answer: (
              <>

                Hiring an app developer to create a great user experience for
                your business can be costly, but it doesn't have to break the
                bank. The android app development cost varies widely and depends
                on many factors such as the complexity of the project, the
                platform you want your app built for, and any specific features
                or customization requested. In general, you can expect to pay
                anywhere from a few thousand dollars up to tens of thousands for
                more advanced projects. Investing in an experienced app
                developer can help ensure that your android app dev project is
                built efficiently and effectively while saving you time and
                money in the long run. So, if you're looking to create a great
                user experience with an app, you'll need to hire dedicated
                android app developer like BitsWits.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
