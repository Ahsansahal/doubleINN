import React from "react";
import Head from "next/head";
// Components
const Banner = React.lazy(() => import("@/components/new-blockchain-page-fy/BlockchainBanner"));
const Provideservices = React.lazy(() => import("@/components/new-blockchain-page-fy/Provideservices"));
const Intelligence = React.lazy(() => import("@/components/new-blockchain-page-fy/Intelligence"));
const SmartContract = React.lazy(() => import("@/components/new-blockchain-page-fy/SmartContract"));
const CustomBlockchainSolutions = React.lazy(() => import("@/components/new-blockchain-page-fy/CustomBlockchainSolutions"));
const Hand = React.lazy(() => import("@/components/new-blockchain-page-fy/Hand"));
const Nftservices = React.lazy(() => import("@/components/new-blockchain-page-fy/Nftservices"));
const Technology = React.lazy(() => import("@/components/new-blockchain-page-fy/Technology"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpForm = React.lazy(() => import("@/components/LpFormprops"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const People = React.lazy(() => import("@/components/People"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
// Images
const BannerImage = await import("@/public/blockchainfynew/banner.png");
const bestgloba11 = await import("/public/servnew/1.png");
const bestgloba12 = await import("/public/servnew/2.png");
const bestgloba13 = await import("/public/servnew/3.png");
const mbestgloba11 = await import("/public/moniter/1.png");
const mbestgloba12 = await import("/public/moniter/2.png");
const mbestgloba13 = await import("/public/moniter/3.png");
const mbestgloba14 = await import("/public/moniter/4.png");
const mbestgloba15 = await import("/public/moniter/5.png");
const mbestgloba16 = await import("/public/moniter/6.png");


export default function blockchaindevelopmentservices() {

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
        assignClass="awardpost"
        subtitle="Our Award-Winning"
        title={<> Blockchain Development Services </>}
        text={
          <>
            Bitswits is a leading development company that can help you hit the
            market with <br /> a newly developed Blockchain solution or revamp
            your existing systems.
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm
        addresClass="iosclass"
        heading={`At Bitswits, we're pioneers in blockchain innovation. Our dedicated team crafts cutting-edge solutions that redefine the digital landscape. From smart contracts to decentralized apps, we turn your vision into a global powerhouse. Join us for a transformative journey where technology meets excellence, and your success in the blockchain realm is our priority.`}
      />
      <Nothing Nothing="nothingLp6" />
      <Provideservices
        assignClass="provideserv"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            Blockchain Development Services
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            We Provide Blockchain Development Services
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            Our software developers are highly proficient in building blockchain
            technologies from scratch and customizing existing <br /> blockchain
            solutions through software integrations, functionality
            modifications, and feature implementations.
          </p>
        }
        title2={
          <h3 className="font_30 font-bold newfycolr">
            Blockchain Technology Development
          </h3>
        }
        para2={
          <p className="font_15 linehight_1 white fontsfregular pt-2">
            Bitswits is a leading development company that can help you hit the
            market with a newly developed Blockchain solution or revamp your
            existing systems. Our Blockchain Development promotes business
            growth while transforming companies and establishing improved
            business models with custom cryptocurrencies, consensus algorithms,
            individual nodes, and architectures.
          </p>
        }
        sec={[
          {
            img1: bestgloba11,
            titl3: "Blockchain Security",
            para4:
              "We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.",
          },
          {
            img1: bestgloba12,
            titl3: "Public & Private Blockchain",
            para4:
              "We develop customized and protected private blockchain for businesses that process hundreds or thousands of transactions per second, as well as open, decentralized public blockchain that grants public access to the network.",
          },
          {
            img1: bestgloba13,
            titl3: "Decentralized Applications (Dapps)",
            para4:
              "We develop custom decentralized applications and integrate them into existing enterprise systems where businesses can leverage a protected, secure environment for collaboration and diverse business transactions.",
          },
        ]}
        video={
          <video
            autoPlay
            loop
            muted
            src="././cry.mp4"
            className="w-100 h-100"
          ></video>
        }
      />
      <SmartContract
        assignClass="provideserv"
        title={
          <h3 className="font_30 fontsfheavy newfycolr center">
            Blockchain Development Services
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white center">
            Custom AI Blockchain Development Services
          </h2>
        }
        para={
          <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">
            Our developers can combine Artificial Intelligence (AI) and
            Blockchain to more effectively secure data, establish ownership,
            optimize <br /> smart contracts, and track goods. We integrate AI
            technology into Blockchain software to develop transformative
            solutions across <br /> various industries. Our AI Blockchain
            solutions provide advanced functionality and optimal benefits.
          </p>
        }
        sec={[
          {
            img1: mbestgloba11,
            title3: "Data Analysis",
            para4:
              "Our experts can develop Blockchain software with AI algorithms that analyze large volumes of data recorded on the Blockchain to gather insights, patterns, and trends. AI can identify anomalies and predict future behavior using machine learning and data analytics strategies.",
          },
          {
            img1: mbestgloba12,
            title3: "Natural Language Processing",
            para4:
              "Our AI and Blockchain experts can incorporate natural language processing capabilities into your AI-powered Blockchain solution to enhance smart contracts to have the ability to understand human-readable language and enable greater accessibility of Blockchain technology. This streamlines business processes and reduces the need for manual intervention.",
          },
          {
            img1: mbestgloba13,
            title3: "Smart Contract Optimization",
            para4:
              "Our Blockchain development using AI includes smart contract optimization, which automates the process of contract creation, validation, and enforcement. AI analyzes contract templates, historical data, and legal regulations to generate more efficient and smart contracts. It improves contract performance, reduces errors, and enhances contract management processes.",
          },
          {
            img1: mbestgloba14,
            title3: "Security and Fraud Detection",
            para4: `We develop AI-powered security solutions to enhance the security of Blockchain networks. It can monitor network activity, detect suspicious behavior, and identify potential security threats or attacks. AI can assist in detecting fraudulent transactions, preventing unauthorized access, and ensuring the Blockchain network's integrity.
            `,
          },
          {
            img1: mbestgloba15,
            title3: "Privacy and Confidentiality",
            para4:
              "We leverage AI techniques like federated learning, which can be applied to protect the privacy of data stored on the blockchain. AI algorithms enable computations on encrypted data, allowing privacy-preserving analysis while maintaining data confidentiality.",
          },
          {
            img1: mbestgloba16,
            title3: "AI-Enhanced Consensus Mechanisms",
            para4:
              "Our experts leverage AI algorithms to optimize consensus mechanisms within Blockchain networks. Using machine learning, AI can adapt the consensus protocol based on network conditions, transaction patterns, or node behavior. This improves scalability, efficiency, and fault tolerance within the Blockchain network.",
          },
        ]}
      />
      <Intelligence assignClass="provideserv" />
      <Hand assignClass="provideserv" />
      <CustomBlockchainSolutions assignClass="provideserv" />
      <div className="bgtext">
        <Nftservices assignClass="provideserv" />
      </div>
      <Technology addresClass="tech" />
      <Justbuildit assignClass="justforpop" />
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
