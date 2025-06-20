import Head from "next/head";
import React, { useEffect, useState } from "react";
//components
const ServicesBanner = React.lazy(() => import("@/components/ServicesBanner"));
const ServicesMaintain = React.lazy(() => import("@/components/ServicesMaintain"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const ServicesPortfolio = React.lazy(() => import("@/components/ServicesPortfolio"));
const Newsuccess = React.lazy(() => import("@/components/NewMblSuccess"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const LpForm = React.lazy(() => import("@/components/LpForm6"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const WeworkLp = React.lazy(() => import("@/components/new-home-page-fy/WeworkLphome"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
//images
const BannerImage = await import("@/public/custommobiledevelopment/banner_image.png");
const app = await import("../public/images/customMblApp/app.png");
const android = await import("../public/images/customMblApp/android.png");
const ios = await import("../public/images/customMblApp/ios.png");
const cross = await import("../public/images/customMblApp/cross.png");
const mobile = await import("../public/images/customMblApp/mobile.png");
const legacy = await import("../public/images/customMblApp/legacy.png");


export default function CustomMobile() {

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
        subtitle: (<> Go Beyond Expectations With </>),
        title: (<> Custom Mobile Application </>),
        title1: (<> Development Services </>),
      },
      serdata: [
        {
          title: (<> App <br /> Design </>),
          text: "Create an exceptional app with an attractive design, intuitive interface, and convenient user experience.",
          appclass: "app",
          imgservice: app,
        },
        {
          title: (<> Android App <br /> Development </>),
          text: (<> Develop high-performing, scalable and native looking apps for Android devices with Kotlin and Java. </>),
          appclass: "app1",
          imgservice: android,
        },
        {
          title: (<> iOS App <br /> Development </>),
          text: "Make intuitive mobile apps with rich functionality for Apple mobile devices with Swift and Objective-C.",
          appclass: "app2",
          imgservice: ios,
        },
        {
          title: "Cross-Platform Mobile Development",
          text: "Build an app that runs across multiple platforms using the same codebase with Flutter or React Native.",
          appclass: "app3",
          imgservice: cross,
        },
        {
          title: (<> Mobile Server-Side <br /> Development </>),
          text: (<> Setup cloud or hardware infrastructure for app execution, components coordination, and API integrations. </>),
          appclass: "app4",
          imgservice: mobile,
        },
        {
          title: (<> Legacy Application <br /> Modernization </>),
          text: "Improve performance and throughput, upgrade UX/UI, and add new features to existing mobile apps.",
          appclass: "app5",
          imgservice: legacy,
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
        subtitle="BitsWits Is Your One-Stop Shop For"
        title={<> Custom Mobile Application Development for Businesses </>}
        text={
          <>

            BitsWits is your ultimate destination for custom mobile application
            development for businesses. We provide comprehensive solutions for
            companies seeking tailored mobile apps to boost their operations and
            customer engagement
          </>
        }
        BannerImage={BannerImage}
        assignClass="custom"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="customApp"
          subtitle={<> Go Beyond Expectations With </>}
          title={<> Custom Mobile Application </>}
          title1={<> Development Services </>}
          appContent={[]}
          appContent1={[
            {
              title: (<> App <br /> Design </>),
              text: "Create an exceptional app with an attractive design, intuitive interface, and convenient user experience.",
              appclass: "app",
            },
            {
              title: (<> Android App <br /> Development </>),
              text: (<> Develop high-performing, scalable and native looking apps for Android devices with Kotlin and Java. </>),
              appclass: "app1",
            },
            {
              title: (<> iOS App <br /> Development </>),
              text: "Make intuitive mobile apps with rich functionality for Apple mobile devices with Swift and Objective-C.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Cross-Platform Mobile Development",
              text: "Build an app that runs across multiple platforms using the same codebase with Flutter or React Native.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: (<> Mobile Server-Side <br /> Development </>),
              text: (<> Setup cloud or hardware infrastructure for app execution, components coordination, and API integrations. </>),
              appclass: "app4",
            },
            {
              title: (<> Legacy Application <br /> Modernization </>),
              text: "Improve performance and throughput, upgrade UX/UI, and add new features to existing mobile apps.",
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
        title="Explore Our Custom Mobile Development Journey"
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
            question: "What is a custom mobile application?",
            answer: (
              <>
                A custom mobile application is a software program developed
                specifically for a particular business or organization to meet
                its unique requirements. It is tailored to address specific
                needs and goals.
              </>
            ),
          },
          {
            question:
              "Why should a business consider developing a custom mobile app?",
            answer: (
              <>
                Custom apps can provide tailored solutions, streamline business
                processes, enhance user experience, and offer a competitive
                advantage. They can be designed to meet specific business goals
                and requirements.
              </>
            ),
          },
          {
            question:
              "How does custom app development differ from using off-the-shelf solutions?",
            answer: (
              <>
                Off-the-shelf solutions are pre-built applications designed for
                a wide audience, while custom apps are built from scratch to
                address specific business needs. Custom apps offer more
                flexibility and can be precisely tailored to the organization's
                requirements.
              </>
            ),
          },
          {
            question:
              "What technologies are commonly used in custom mobile app development?",
            answer: (
              <>
                The choice of technologies depends on the platform and specific
                requirements, but commonly used technologies include Swift and
                Objective-C for iOS, Java and Kotlin for Android, and frameworks
                like React Native, Flutter, or Xamarin for cross-platform
                development.
              </>
            ),
          },
          {
            question: "How long does it take to develop a custom mobile app?",
            answer: (
              <>
                The development time varies depending on the complexity of the
                app, features, and the development approach. Simple apps may
                take a few weeks, while more complex ones could take several
                months.
              </>
            ),
          },
          {
            question:
              "What is the typical cost of developing a custom mobile app?",
            answer: (
              <>
                The cost varies significantly based on factors such as features,
                complexity, platform(s), and development time. It's essential to
                discuss requirements with a development team to get an accurate
                estimate.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
