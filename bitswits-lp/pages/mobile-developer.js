import Head from "next/head";
import React, { useState, useEffect } from "react";
//components
const Banner = React.lazy(() => import("@/components/HireBanner"));
const NewAddress = React.lazy(() => import("@/components/NewAddress"));
const HireLogoSlider = React.lazy(() => import("@/components/HireLogoSlider"));
const NewHomeAbout = React.lazy(() => import("@/components/NewHomePageAbout"));
const HireServices = React.lazy(() => import("@/components/HireServices"));
const HireBenifitsMbl = React.lazy(() => import("@/components/HireBenifitsMbl"));
const HireTiming = React.lazy(() => import("@/components/HireTiming"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const Homenextproject = React.lazy(() => import("@/components/Homenextproject"));
const Faqs = React.lazy(() => import("@/components/NewhomeFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
//images
const banImg = await import("../public/images/hire-page/mobile/mbl.png");


export default function MobileDeveloper() {

  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

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
        subtitle={<> Hire </>}
        title={<> Hire Mobile App Developer </>}
        para={
          <>
            We deliver great results, on time and on budget. Contact usto start
            talking about your project today!
          </>
        }
        banImg={banImg}
        bannerClass="mbl"
      />
      <NewAddress />
      <HireLogoSlider />
      <NewHomeAbout addClass="mblHire" />
      <HireServices />
      <HireBenifitsMbl />
      <HireTiming />
      <Technologieswe />
      <Homenextproject title="Brace yourself for an App-venture!" />
      <Faqs />
      <HomeLocation />
    </>
  );
}
