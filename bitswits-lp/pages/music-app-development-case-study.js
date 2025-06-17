import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
const Banner = React.lazy(() => import('@/components/CaseBanner'));
const CaseGlamic = React.lazy(() => import('@/components/CaseGlamic'));
const CaseWants = React.lazy(() => import('@/components/CaseWants'));
const CaseGoal = React.lazy(() => import('@/components/CaseGoal'));
const CaseOvercoming = React.lazy(() => import('@/components/CaseOvercoming'));
const CaseAnimate = React.lazy(() => import('@/components/CaseAnimate'));
const CaseServices = React.lazy(() => import('@/components/CaseServices'));
const CaseChoose = React.lazy(() => import('@/components/CaseChoose'));
const CaseGlobal = React.lazy(() => import('@/components/CaseGlobal'));
const CaseCapabilities = React.lazy(() => import('@/components/CaseCapabilities'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const banLogo = await import('../public/images/case-studies/case-beats/banner-logo.png');
const banImg = await import('../public/images/case-studies/case-beats/banner-img.png');
const slide1 = await import('../public/images/case-studies/case-beats/slide1.png');
const slide2 = await import('../public/images/case-studies/case-beats/slide2.png');
const slide3 = await import('../public/images/case-studies/case-beats/slide3.png');
const slide4 = await import('../public/images/case-studies/case-beats/slide4.png');
const features = await import('../public/images/case-studies/case-beats/features.png');
const faced = await import('../public/images/case-studies/case-beats/faced.png');
const tackling = await import('../public/images/case-studies/case-beats/tackling.png');
const goalImg = await import('../public/images/case-studies/case-beats/goal.png');
const animiImg1 = await import('../public/images/case-studies/case-beats/animi1.png');
const animiImg2 = await import('../public/images/case-studies/case-beats/animi2.png');
const animiImg3 = await import('../public/images/case-studies/case-beats/animi3.png');
const service1 = await import('../public/images/case-studies/case-beats/service1.png');
const service2 = await import('../public/images/case-studies/case-beats/service2.png');
const service3 = await import('../public/images/case-studies/case-beats/service3.png');
const service4 = await import('../public/images/case-studies/case-beats/service4.png');
const service5 = await import('../public/images/case-studies/case-beats/service5.png');
const chosImg1 = await import('../public/images/lp-images/icon1.png');
const chosImg2 = await import('../public/images/lp-images/icon2.png');
const chosImg3 = await import('../public/images/lp-images/icon3.png');
const chosImg4 = await import('../public/images/lp-images/icon4.png');
const chosImg5 = await import('../public/images/lp-images/icon5.png');
const chosImg6 = await import('../public/images/lp-images/icon6.png');
const chosImg7 = await import('../public/images/lp-images/icon7.png');
const chosImg8 = await import('../public/images/lp-images/icon8.png');
const chosImg9 = await import('../public/images/lp-images/icon9.png');


export default function Beats() {

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
        title={<> Play It Loud, Play It Proud </>}
        banImg={banImg}
        bannerClass='beats'
      />
      <CaseGlamic
        textArray1={[
          {
            title: <>Music App <span>Solution</span></>,
            text: [
              <>
                <i>Beats</i>, a music app, showcases music albums, lets users collaborate with other application users, and brings together a community of music enthusiasts, all within our vibrant and supportive platform.
              </>,
              <>
                It stands out from the rest with its unique feature that allows users to not only create their own music but also share their albums with a global audience.
              </>
            ]
          },
        ]}

        textArray2={[
          {
            title: <>Looking For Something Similar?</>,
            text: <>Our consultants are ready to hear your idea. Request a free consultation with our app experts and transform it into a digital reality.</>,
          },
        ]}

        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        slide4={slide4}

        textArray3={[
          {
            title: <>The <span>Starting</span> Point</>,
            text: [
              <>Beats started when a group of dedicated musicians and tech enthusiasts came together with a vision to create a platform that would empower individuals to make their mark in the world of music.</>,
              <>The founders’ vision is to create an inclusive community of music lovers, where every user can find their unique rhythm and express themselves freely. </>,
            ],
          },
        ]}
      />
      <CaseWants
        sections1={[
          {
            title: <> Main <span>Features</span> </>,
            textArray: [
              'Artist Profiles',
              'Music Creation Tools',
              'Personalized Playlists',
              'High-Quality Audio Streaming',
              'Synchronized Lyrics Integration',
            ],
          }
        ]}
        wantImg1={features}
        sections2={[
          {
            title: <> A Closer Look at Project <br /> Challenges <span>We Faced</span> </>,
            textArray: [
              'Aggregating and updating artist data and content.',
              'Developing a user-friendly music creation interface.',
              'Creating an effective recommendation algorithm.',
              'Ensuring seamless high-quality audio streaming.',
              'Synchronizing lyrics with songs in real-time.',
            ],
          }
        ]}
        wantImg2={faced}
        sections3={[
          {
            title: <> Trouble <span>Tackling</span> </>,
            textArray: [
              'Designed intuitive artist profile layouts for easy navigation.',
              'Ensured user-friendly interfaces for music creation.',
              'Implemented smart algorithms for personalized playlist suggestions.',
              'Optimized for seamless, high-quality audio playback.',
              'Developed a sync system for precise lyric display.',
            ],
          },
        ]}
        wantImg3={tackling}
        lastPara={<> BitsWits combined the best suitable tech stack and creative design for the app The result is a music mobile application that delivers an exceptional user experience and elevates the way people enjoy and create music. </>}
      />
      <CaseGoal
        golImg={goalImg}
        title={<> Take A <span>Step Toward</span> Your Beauty Goals <br /> From The Comfort Of Your Couch With <br /> Just A Few <span>Taps On Our App!</span> </>}
        goalClass='beats'
      />
      <CaseOvercoming
        appData={[
          {
            title: (<> Overcoming <br /> Development Challenges </>),
            description: 'We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes.',
          },
          {
            title: (<> Hybrid <br /> Development Excellence </>),
            description: (<> Our approach to app development is anything but one-size-fits-all. With a hybrid approach, we strike a balance between predictability and adaptability. For projects with clearly defined timeframes, we employ a waterfall approach to meet the deadlines. This helps us meet the compliance requirements and regulatory standards. </>),
          },
          {
            title: (<> On-Time Delivery - <br /> Every Time </>),
            description: 'Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule.',
          },
          {
            title: (<> Erasing <br /> Time-zone Barriers </>),
            description: (<> Our project managers are trained to remain considerate about time-zone differences, they take into account clients' availability and preferences. We prioritize cultural sensitivity, our developers made a system that shows clients' active hours along with their current location in google maps, and holidays around the globe. </>),
          },
          {
            title: (<> Efficient <br /> Communication </>),
            description: 'BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction.',
          },
          {
            title: (<> Addressing <br /> Payment Disputes </>),
            description: (<> At BitsWits, we rely on the Stripe payment method for all transactions. We've developed an automated dispute resolution portal to efficiently manage payment issues. Our portal also provides clear visibility into the different stages of reported payment disputes and their current statuses. </>),
          },
        ]}
      />
      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />
      <CaseServices
        title={<> <span>Services:</span> For </>}
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
        title={<> <span>Why Trust <br /> BitsWits</span> with App <br /> Development? </>}
        text1={<> We stand as the primary choice for mobile app development, exemplifying excellence in a dynamic field. Our team combines creativity and the most suitable tech stack to develop customized app solutions. </>}
        text2={<> Our track record of delivering on time and within budget, coupled with a commitment to staying ahead of industry trends, sets us apart as the best partner for mobile app development. </>}
        items={[
          {
            image: chosImg1,
            text: (<> Experienced  <br /> Professionals </>)
          },
          {
            image: chosImg2,
            text: (<> On-Time <br /> Delivery </>)
          },
          {
            image: chosImg3,
            text: (<> Cost-Effective <br /> Solutions </>)
          },
          {
            image: chosImg4,
            text: (<> Scalable and <br /> Secure Apps </>)
          },
          {
            image: chosImg5,
            text: (<> User-Centric <br /> Design </>)
          },
          {
            image: chosImg6,
            text: (<> Customized <br /> Development </>)
          },
          {
            image: chosImg7,
            text: (<> Error-Free <br /> Delivery </>)
          },
          {
            image: chosImg8,
            text: (<> Transparent <br /> Communication </>)
          },
          {
            image: chosImg9,
            text: (<> Support and <br /> Maintenance </>)
          }
        ]}
      />
      <CaseGlobal />
      <CaseCapabilities />
      <Nothing Nothing="nothingCase" />
      <Technologieswe />
      <HomeLocation />
    </>
  )
}
