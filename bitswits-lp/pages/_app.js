import React, { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
//
import Header from "@/components/Header";
import NewHeaderDesign from "@/components/NewHeader";
import Headerlp from "@/components/Headerlp";
import Headerlphome from "@/components/Headerlphome";
import Footernewfy from "@/components/Footernewfydesign";
import Footernewlp from "@/components/Footernewlp";
import Footernewdesign from "@/components/Footernewdesign";
import EcommerceBanner from "@/components/EcommerceBanner";
import EcommerceFooter from "@/components/EcommerceFooter";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Skicky from "@/components/Skicky";
import Pixel from "@/components/Pixel";
import Pixel2 from "@/components/Pixel2";
import MetaData from "@/components/MetaData";
//
import Zendesk, { ZendeskAPI } from "../pages/zendex";
const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";


export default function App({ Component, pageProps }) {

  const router = useRouter();
  // =======================================
  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };
  // =======================================
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 7000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);
  // =======================================
  const mouse =
    router.pathname == "/" ||
    router.pathname == "/about-us" ||
    router.pathname == "/our-work" ||
    router.pathname == "/privacy-policy" ||
    router.pathname == "/term-and-condition" ||
    router.pathname == "/ios-app-development" ||
    router.pathname == "/android-application-development" ||
    router.pathname == "/augmented-reality-apps-development-company" ||
    router.pathname == "/artificial-intelligence-development-company" ||
    router.pathname == "/cross-platform-app-development" ||
    router.pathname == "/web-app-development" ||
    router.pathname == "/react-native-mobile-development" ||
    router.pathname == "/hybrid-mobile-apps-development" ||
    router.pathname == "/custom-mobile-development" ||
    router.pathname == "/native-mobile-development" ||
    router.pathname == "/flutter-mobile-development" ||
    router.pathname == "/mobile-application" ||
    router.pathname == "/mobile-application-usa" ||
    router.pathname == "/mobile-application-huston" ||
    router.pathname == "/mobile-application-newyork" ||
    router.pathname == "/mobile-application-los-angeles" ||
    router.pathname == "/mobile-application-duplicate" ||
    router.pathname == "/mobile-application-duplicate2" ||
    router.pathname == "/top-mobile-app-development-company" ||
    router.pathname == "/mobile-app-development-company-lp2" ||
    router.pathname == "/game-application-development" ||
    router.pathname == "/nft-game-development" ||
    router.pathname == "/2d-game-development-company" ||
    router.pathname == "/3d-game-development-company" ||
    router.pathname == "/blockchain-game-development" ||
    router.pathname == "/travel-app-development-case-study" ||
    router.pathname == "/real-estate-app-development-case-study" ||
    router.pathname == "/clothing-marketplace-app-development-case-study" ||
    router.pathname == "/social-app-development-case-study" ||
    router.pathname == "/automobile-repair-app-development-case-study" ||
    router.pathname == "/marketing-partnership-app-development-case-study" ||
    router.pathname == "/healthcare-app-development-case-study" ||
    router.pathname == "/ride-app-development-case-study" ||
    router.pathname == "/fitness-app-development-case-study" ||
    router.pathname == "/hiring-app-development-case-study" ||
    router.pathname == "/music-app-development-case-study" ||
    router.pathname == "/handyman-on-demand-app-development-case-study" ||
    router.pathname == "/food-delivery-app-development-case-study" ||
    router.pathname == "/ios-developer" ||
    router.pathname == "/android-developer" ||
    router.pathname == "/hybrid-developer" ||
    router.pathname == "/native-developer" ||
    router.pathname == "/mobile-developer" ||
    router.pathname == "/top-ecommerce-app-development-company" ||
    router.pathname == "/top-mobile-app-development-company" ||
    router.pathname == "/mobile-app-development-services" ||
    router.pathname == "/create-a-mobile-app";
  // =======================================
  const newlps = router.pathname == "/mobile-app-development-company-lp2";
  // =======================================
  const newhomepage = router.pathname == "/top-mobile-app-developers";
  // =======================================
  const newecommercepage =
    router.pathname == "/top-ecommerce-app-development-company";
  const meetup =
    router.pathname == "/meet-our-team-lp";
  // =======================================
  const superecommer = router.pathname == "/top-mobile-app-developers" ||
    router.pathname == "/top-ecommerce-app-development-company";
  // =======================================
  const sluginer = useRouter().asPath;
  const weblink = "https://www.bitswits.co";
  const newcol = weblink + sluginer;
  // =======================================


  const indexingapi = {
    "type": "service_account",
    "project_id": "bitswits-412709",
    "private_key_id": "4859cfdcdf34feea60574b2ad152fd8b278b3b14",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDMhKVvtaYcez5\nnCGDGFFfN5n2L90ljPUrfPTEkGzTxCDWWABqFNB01ych5wYDeL8Mp0ZLyUm1uuVv\nnWyT/a1JWgrQ3d5wi0mXBTMu6r1L30dIb8H42mLVKZpStelsHoqNhVkCrK7Lhfq0\nfgXbYNJB98FK8/zsyd6CzzzeBbc3tN1bSXl0dr1v+BkKL8eRXDtQLJmh0KVRS3tj\nHmNv470Gcn4QjEZ9bybLX1jbOvPp1LC/NVuV4vntZgtDbbTGjN6rmWLBLdsRvLq5\n/FIj/HFiTQlElCKJzc4EhZn2Lis/C0A5ve+GnHQI5L4Yl4lf8n3ePXcNPEtG+REW\n4awcxtS/AgMBAAECggEAGocTlNulY9JtLP8rDsX0nnF6sG/mKNRJ/ZRd2i5GnAEW\nSrXAWKpmKiWTYT15yRRVN+2ugAjlxkJALDXDgS6t/j9eeO8DlrKsraQ8my5hIOPs\nrCDZcRiSQKYGyHbbN6EZngzMAVu2kF0FABf1ySVqGHezV/G7eJ12wBBUwAJxhABe\nca2HVICeh2kxfS6hDZq/SdgrJ+OYOQ0dVCJoVq+V1Yn56twvzCyF0ybUwuLbeT8H\n7z+6jKImYjpJuU6uSVu/GmKW7qCX6rg/Z6JHDqsvvdEuG6CbhkGCIyEW90ICDYYY\nZ0CxVWKuq6Z4Ru49Ikby6OHKVeOy6f0UgLGImIa/AQKBgQDoPQs8xBgfu81Ugmb/\n++B06d7oFaaU7xpsbkDxWUWFFYRWuyOylyjgELzHBDViBQ6hDSwZmYx23Xj/2AIa\ntOtNIsUIuNzx4Cs8qCySwmSBKv1fB2Jq1mPrDsc3XI+s1c6piTB5Rq9DL+blp5XK\nC/4Cu0lXk9hz0jhlhW92y2iLWwKBgQDXKsaQBa3IFqqDC06AkGRpELRo4oEhphm6\nTXnoBCX7s+zKJUCRg1pM3sFOuYYTsR5TCmtj99WBZ0itWO/UPhq70g4a/nE4lL6T\niLgGVDFHByaL004tihwUL+cGOxXyxjRyb3KyA0KcqStp/dl3uZ/eBAGsb8n9FFTL\nhGVfB/WtbQKBgQDZx8zO6hC5SXKuai7OpFODL4FR4GO7TFFaFzYdXZq8x0W303wR\nUIELRYbRlle9GIL0chbF1uEK4ntCaDzo8HmrdwyQNlMzGwVQt2A9K7/2BOte/tzC\n1VMTrWMRvmIZMNLA1x62y5s1BSmgeLwVoZNM2nZXgxQ64Ir0YOH645qg+wKBgDQK\ngYoWBYkuikE1u9/2jIKo6qmvlwH3daOM155ZWoJ9axkdV3eaaH3NJr4OuzIKFcaJ\n7513NOmefIKIz0DrYHXrAURgJCxGNa3jVHcbZ+vA+/63teHn1JDBYUQtiEp2y/qd\noAUUKslPVVPGdRGzEMqW93yocRdIEpZCyG3qs+4lAoGATUwK6xnxgt6rbYDbvrUz\nV2U1KfwS2Avcpt97GmRqV0AE1RX0rBszWn9qkA9CsRbXtm6y+ggEQze1frsr7rMs\nZr/X4or3vcZhoFnCn9QjQGz71UbUC5ANdNxcyLqWcbb8T662pzOzHAO1BQbxNmc2\n8a3sTgEveluuSzo7Diztl00=\n-----END PRIVATE KEY-----\n",
    "client_email": "bitswits-api-service-account@bitswits-412709.iam.gserviceaccount.com",
    "client_id": "115205466003356437781",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bitswits-api-service-account%40bitswits-412709.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}



// this code is for 301 redirection

// useEffect(() => {

  
//   if(window.location.href == 'http://localhost:3000/mobile-app-design-company' ){
//     router.push('/top-mobile-app-development-company');
//   }
//   else if (window.location.href == 'http://localhost:3000/wearable-app-development-company' ){
//     router.push('/flutter-mobile-development');
//   }
// });


  return (
    <>
      <Head>
        {/* Google Search Console Code */}
        <meta name="google-site-verification" content="Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0" />
        <meta name='dmca-site-verification' content='Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090' />
        <link rel="canonical" href={newcol} />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(indexingapi) }}
         />

      </Head>

      <MetaData />
      <Analytics />

      {imagesLoaded &&
        <>
          {/* Google Analytics Code */}
          <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-T8JYHWL639"></Script>
          <Script strategy="lazyOnload">
            {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T8JYHWL639');
            `}
          </Script>

          {/* GTM Code */}
          <Script Script strategy="lazyOnload">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFH5JWNF');
            `}
          </Script>

          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFH5JWNF"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

          <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />

          <Pixel />
          <Pixel2 />
        </>
      }

      {superecommer ?
        ''
        :
        <Skicky />
      }

      {newlps ? (
        <Headerlp />
      ) : newhomepage ? (
        <Headerlphome />
      ) : meetup ? (
        ""
      ) : newecommercepage ? (
        <EcommerceBanner />
      ) : (
        <>
          <NewHeaderDesign />
          <Header />
        </>
      ) 
      }

      {mouse && <Cursor />}

      {imagesLoaded ? <Component {...pageProps} /> : <Loader />}

      {newlps ? (
        <Footernewlp />
      ) : newhomepage ? (
        <Footernewdesign />
      ) : newecommercepage ? (
        <EcommerceFooter />
      ) : meetup ? (
        ""
      ) : (
        <Footernewfy />
      ) 
      
      }
    </>
  );
}
