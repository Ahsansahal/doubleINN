import Head from "next/head";
import React, { useState, useEffect } from "react";
//components
const Banner = React.lazy(() => import("@/components/CaseBanner"));
const CaseGlamic = React.lazy(() => import("@/components/CaseGlamic"));
const CaseWants = React.lazy(() => import("@/components/CaseWants"));
const CaseGoal = React.lazy(() => import("@/components/CaseGoal"));
const CaseOvercoming = React.lazy(() => import("@/components/CaseOvercoming"));
const CaseAnimate = React.lazy(() => import("@/components/CaseAnimate"));
const CaseServices = React.lazy(() => import("@/components/CaseServices"));
const CaseChoose = React.lazy(() => import("@/components/CaseChoose"));
const CaseGlobal = React.lazy(() => import("@/components/CaseGlobal"));
const CaseCapabilities = React.lazy(() => import("@/components/CaseCapabilities"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
//images
const banLogo = await import("../public/images/case-studies/case-sponsord/banner-logo.png");
const banImg = await import("../public/images/case-studies/case-sponsord/banner-img.png");
const slide1 = await import("../public/images/case-studies/case-sponsord/slide1.png");
const slide2 = await import("../public/images/case-studies/case-sponsord/slide2.png");
const slide3 = await import("../public/images/case-studies/case-sponsord/slide3.png");
const slide4 = await import("../public/images/case-studies/case-sponsord/slide4.png");
const features = await import("../public/images/case-studies/case-sponsord/features.png");
const faced = await import("../public/images/case-studies/case-sponsord/faced.png");
const tackling = await import("../public/images/case-studies/case-sponsord/tackling.png");
const goalImg = await import("../public/images/case-studies/case-sponsord/goal.png");
const animiImg1 = await import("../public/images/case-studies/case-sponsord/animi1.png");
const animiImg2 = await import("../public/images/case-studies/case-sponsord/animi2.png");
const animiImg3 = await import("../public/images/case-studies/case-sponsord/animi3.png");
const service1 = await import("../public/images/case-studies/case-sponsord/service1.png");
const service2 = await import("../public/images/case-studies/case-sponsord/service2.png");
const service3 = await import("../public/images/case-studies/case-sponsord/service3.png");
const service4 = await import("../public/images/case-studies/case-sponsord/service4.png");
const service5 = await import("../public/images/case-studies/case-sponsord/service5.png");
const chosImg1 = await import("../public/images/lp-images/icon1.png");
const chosImg2 = await import("../public/images/lp-images/icon2.png");
const chosImg3 = await import("../public/images/lp-images/icon3.png");
const chosImg4 = await import("../public/images/lp-images/icon4.png");
const chosImg5 = await import("../public/images/lp-images/icon5.png");
const chosImg6 = await import("../public/images/lp-images/icon6.png");
const chosImg7 = await import("../public/images/lp-images/icon7.png");
const chosImg8 = await import("../public/images/lp-images/icon8.png");
const chosImg9 = await import("../public/images/lp-images/icon9.png");


export default function Sponsord() {

  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags & OG Tags Added Through Route */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Banner
        banLogo={banLogo}
        title={<> Where Creativity Meets Connectivity! </>}
        banImg={banImg}
        bannerClass="sponsord"
      />
      <CaseGlamic
        textArray1={[
          {
            title: (
              <>
                Marketing <span>Partnership App</span>
              </>
            ),
            text: [
              <>
                <i>Sponsor'D</i> is a platform that connects brands, businesses,
                and creators for mutually beneficial collaborations. Our main
                goal is to reinvent influencer marketing and foster healthy
                collaborations.
              </>,
              <>
                It's a platform made to help marketing firms and content
                producers alike find exciting sponsorship possibilities.
                Creators find themselves linked with businesses that share their
                vision.
              </>,
            ],
          },
        ]}
        textArray2={[
          {
            title: <>Looking For Something Similar?</>,
            text: (
              <>
                Our consultants are ready to hear your idea. Request a free
                consultation with our app experts and transform it into a
                digital reality.
              </>
            ),
          },
        ]}
        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        slide4={slide4}
        textArray3={[
          {
            title: (
              <>
                The <span>Starting</span> Point
              </>
            ),
            text: [
              <>
                With the goal of bringing together companies and innovators in a
                unique manner, Sponsor'D was envisioned. It's a platform made to
                assist content creators and marketing agencies in finding
                exciting sponsorship possibilities.
              </>,

              <>
                Ideas are shared openly, collaborations grow, and digital
                marketing efforts enthrall their target audience with a single
                tap within its in-app chat system. The platform Sponsor'D
                connects companies, brands, and creators for profitable
                partnerships.
              </>,
            ],
          },
        ]}
      />
      <CaseWants
        sections1={[
          {
            title: (
              <>
                {" "}
                The Exceptional Selling <br /> Points and <span>
                  Features
                </span>{" "}
              </>
            ),
            textArray: [
              "Find a Company and Talent",
              "Unlocking Achievements",
              "In-App Chat",
              "Dispute Resolution",
              "Task Creation",
              "Contract Signing Within the App",
              "Task Creation",
              "Talent Profiles",
              "Reports and Analytics",
              "Membership Levels",
              "Affiliate Sponsorship",
            ],
          },
        ]}
        wantImg1={features}
        sections2={[
          {
            title: (
              <>
                A Closer Look at Project <br /> Challenges <span>
                  We Faced
                </span>
              </>
            ),
            textArray: [
              "Balancing Supply and Demand",
              "Legal and Contractual Matters",
              "Community Management",
              "Competition and Market Saturation",
              "Scaling Responsibility",
            ],
          },
        ]}
        wantImg2={faced}
        sections3={[
          {
            title: (
              <>
                Trouble <span>Tackling</span>
              </>
            ),
            textArray: [
              "Implement a membership system that matches creators and businesses based on their engagement level",
              "Offer template contracts and legal resources for users to produce agreements with clarity.",
              "Appoint community managers to resolve conflicts and ethical guidelines.",
              "Focus on unique selling points such as niche partnership opportunities.",
              "Invest in scalable infrastructure and technology to accommodate growth and expansion.",
            ],
          },
        ]}
        wantImg3={tackling}
        lastPara={
          <>
            BitsWits' proactive approach to problem solving and constant
            commitment to technology refinement played an important role in
            ensuring the efficiency and user satisfaction. Through our vigilant
            problem-solving mindset, we promptly sought solutions and made sure
            Sponsor’D stands as a leading app in the marketing industry.
          </>
        }
      />
      <CaseGoal
        golImg={goalImg}
        title={
          <>
            Start Your App Development Journey <br /> Effortlessly; Let
            <span>
              Bitswits Be Your <br /> Savior
            </span>
            With A Quick Tap!
          </>
        }
        goalClass="sponsord"
      />
      <CaseOvercoming
        appData={[
          {
            title: (
              <>
                Overcoming <br /> Development Challenges
              </>
            ),
            description:
              "We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes.",
          },
          {
            title: (
              <>
                Hybrid <br /> Development Excellence
              </>
            ),
            description: (
              <>
                Our approach to app development is anything but
                one-size-fits-all. With a hybrid approach, we strike a balance
                between predictability and adaptability. For projects with
                clearly defined timeframes, we employ a waterfall approach to
                meet the deadlines. This helps us meet the compliance
                requirements and regulatory standards.
              </>
            ),
          },
          {
            title: (
              <>
                On-Time Delivery - <br /> Every Time
              </>
            ),
            description:
              "Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule.",
          },
          {
            title: (
              <>
                Erasing <br /> Time-zone Barriers
              </>
            ),
            description: (
              <>
                {" "}
                Our project managers are trained to remain considerate about
                time-zone differences, they take into account clients'
                availability and preferences. We prioritize cultural
                sensitivity, our developers made a system that shows clients'
                active hours along with their current location in google maps,
                and holidays around the globe.{" "}
              </>
            ),
          },
          {
            title: (
              <>
                Efficient <br /> Communication
              </>
            ),
            description:
              "BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction.",
          },
          {
            title: (
              <>
                Addressing <br /> Payment Disputes
              </>
            ),
            description: (
              <>
                At BitsWits, we rely on the Stripe payment method for all
                transactions. We've developed an automated dispute resolution
                portal to efficiently manage payment issues. Our portal also
                provides clear visibility into the different stages of reported
                payment disputes and their current statuses.
              </>
            ),
          },
        ]}
      />
      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />
      <CaseServices
        title={
          <>
            <span>Services:</span> For
          </>
        }
        point1={<> Native Mobile App Development </>}
        point2={<> Stunning UI/UX Design </>}
        point3={<> Consumer/ Service Provider Interface </>}
        service1={service1}
        service2={service2}
        service3={service3}
        service4={service4}
        service5={service5}
      />
      <CaseChoose
        title={
          <>
            <span>
              Why Trust <br /> BitsWits
            </span>
            with App <br /> Development?
          </>
        }
        text1={
          <>
            We stand as the primary choice for mobile app development,
            exemplifying excellence in a dynamic field. Our team combines
            creativity and the most suitable tech stack to develop customized
            app solutions.
          </>
        }
        text2={
          <>
            Our track record of delivering on time and within budget, coupled
            with a commitment to staying ahead of industry trends, sets us apart
            as the best partner for mobile app development.
          </>
        }
        items={[
          {
            image: chosImg1,
            text: (
              <>
                Experienced <br /> Professionals
              </>
            ),
          },
          {
            image: chosImg2,
            text: (
              <>
                On-Time <br /> Delivery
              </>
            ),
          },
          {
            image: chosImg3,
            text: (
              <>
                Cost-Effective <br /> Solutions
              </>
            ),
          },
          {
            image: chosImg4,
            text: (
              <>
                Scalable and <br /> Secure Apps
              </>
            ),
          },
          {
            image: chosImg5,
            text: (
              <>
                User-Centric <br /> Design
              </>
            ),
          },
          {
            image: chosImg6,
            text: (
              <>
                Customized <br /> Development
              </>
            ),
          },
          {
            image: chosImg7,
            text: (
              <>
                Error-Free <br /> Delivery
              </>
            ),
          },
          {
            image: chosImg8,
            text: (
              <>
                Transparent <br /> Communication
              </>
            ),
          },
          {
            image: chosImg9,
            text: (
              <>
                Support and <br /> Maintenance
              </>
            ),
          },
        ]}
      />
      <CaseGlobal />
      <CaseCapabilities />
      <Nothing Nothing="nothingCase" />
      <Technologieswe />
      <HomeLocation />
    </>
  );
}
