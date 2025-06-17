import Head from 'next/head'
// components
import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Tradition from '@/components/Tradition'
// import Climax from '@/components/Climax'
import Enlisted from '@/components/Enlisted'
import Dreams from '@/components/Dreams'
import Audience from '@/components/Audience'
import Broader from '@/components/Broader'
import Advice from '@/components/Advice'
import Plans from '@/components/Plans'
import Bookshelf from '@/components/Bookshelf'
import Enlistedlogo from '@/components/Enlistedlogo'
import Exceptional from '@/components/Exceptional'
// import { Helmet } from 'react-helmet'
// images
import bannerImg from '../public/images/banner/banner1.png'
import img2 from '../public/images/banner/img2.png'




export default function Home() {

  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>Best Book Publishing <br /> Company – The Home Of <br /> Quality Publishing!</h1>;

  const bannertext = [
    {
      title: newSpan,
      discuss: `LET'S DISCUSS`,
      homebannernum: '(800)781-9093',
      bannercounter: 'counter',
      imageban: bannerImg,
      img2: img2,
    }
  ]

  return (
    <>
      <Head>

        <title>Best Book Publishing Company - Best Selling Publisher</title>
        <link rel="icon" href="/images/favicon.png" />

        {/* <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
         </Helmet> */}
      </Head>

      {/*========= Banner =========*/}
      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          bannercounter={item.bannercounter}
          imageban={item.imageban}
          img2={item.img2}
        />
      )}


      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />


      {/*========= Tradition fold =========*/}
      <Tradition />

      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Climax fold =========*/}
      {/* <Climax
        title='The Intro, The Climax and The Finale'
        subtitle='We Publish Excellence!'
        text='Every idea, every story, and plot are brilliant, but they need to be refined for success. Excellence doesn’t guarantee anything—it’s the right professionals who will help you find your way through our solutions. Whether you are a new author or a seasoned veteran, Best Selling Publisher makes it easy to get started in the wonderful world of publishing. We provide everything you need to write the perfect book – all in one place.'
        btn1='Let`s discuss'
        btn2='(800)781-9093'
        imagecli={climax}
      /> */}

      {/*========= Enlisted fold =========*/}
      <Enlisted
        subtitle="Be a Part of the Best Sellers’ Fraternity"
        title={"What Makes Us the Most Preferred Book Publishers?"}
        desc=""
      />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="Discover What Exceptional Writing Services We Offer"
        subtitle="Uncover the unparalleled excellence of our publishing services, where each word is meticulously crafted to captivate and inspire. <br /> Explore the realm of literary mastery with our team and discover the epitome of quality in every page turned."
      />

      {/*========= Dreams fold =========*/}
      <Dreams />

      {/*========= Broader fold =========*/}
      <Broader 
       subtitle="Engage with a Larger Audience Our"
       title="Amazon Publishing Services"
       desc="Best Selling Publisher's Amazon publishing services are among the most popular and well-known in the industry. Our process is simple and straightforward, and we provide a high-quality product that is easy to use and reliable. Additionally, our customer service is excellent, and they offer a wide range of options for writers looking to publish their work."
      />

      {/*========= Enlistedlogo =========*/}
      {/* <Enlistedlogo /> */}

      {/*========= Advice fold =========*/}
      <Advice />

      {/*========= Plans fold =========*/}
      <Plans />

      {/*========= Bookshelf fold =========*/}
      <Bookshelf />

    </>
  )
}
