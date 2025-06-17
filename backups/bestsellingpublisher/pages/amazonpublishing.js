import Head from 'next/head'
// components
import Banner from '@/components/Banner'
import Tradition from '@/components/Tradition'
// import Climax from '@/components/Climax'
import EnlistedNew from '@/components/EnlistedNew'
import Audience from '@/components/Audience'
import BroaderNew from '@/components/BroaderNew'
import Plans from '@/components/Plans'
import Bookshelf from '@/components/Bookshelf'
import Enlistedlogo from '@/components/Enlistedlogo'
import Exceptional from '@/components/Exceptional'
import SwiperTestimonial from '@/components/swiperComponent'

// import { Helmet } from 'react-helmet'
// images
import bannerImg from '../public/images/banner/amazonbanner.png'
import img2 from '../public/images/banner/img2.png'
import broader from '../public/images/flods/amazonpublishingbroder.png'

const amazonpublishing = () => {
  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3 leading-tight'>Amazon Publishing <br /> Services Company To Make <br /> Your Book Available To <br /> Millions Of Readers!</h1>;

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
  const paratitles = [
    {
      para: 1,
      paraTitle: "What is Amazon KDP?",
      paraSubTitle: "Amazon KDP is a self publishing service from Amazon that allows authors to publish  and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy."
    },
    {
      para: 2,
      paraTitle: "How Does Amazon KDP Work?",
      paraSubTitle: "Amazon KDP works by allowing authors to upload their book files to the Amazon Kindle Store, where they can be sold and downloaded by readers. Authors can also choose to have their books printed and shipped to customers via Amazon's CreateSpace service."
    },
    {
      para: 3,
      paraTitle: "How Much Does It Cost To Publish With Amazon KDP?",
      paraSubTitle: "It costs nothing to publish your book with Amazon KDP. You will only be charged when your book is sold, and you will receive a 70% royalty on each sale."
    },
    {
      para: 4,
      paraTitle: "What Are The Requirements For My Book?",
      paraSubTitle: "Your book must be at least 20 pages long and have a professional cover design. Additionally, your book must be formatted correctly to be accepted into the Amazon Kindle Store."
    },
    {
      para: 5,
      paraTitle: "What Are The Benefits Of Publishing With Amazon KDP?",
      paraSubTitle: "It costs nothing to publish your book with Amazon KDP. You will only be charged when your book is sold, and you will receive a 70% royalty on each sale."
    }
  ]


  return (
    <>
      <Head>

        <title>Best Book Publishing Company - Best Selling Publisher - Amazon Publishing Services</title>
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

      {/*========= Enlisted fold =========*/}
      <EnlistedNew
        subtitle=""
        title={"Some Questions Whirling Around Your <br/> Mind About Amazon KDP Publishing <br/> "}
        desc="Have Answers Over Here!"
        data={paratitles}
      />
      {/*========= Broader fold =========*/}
      <BroaderNew
        title="Amazon Ebook Publishing To Help Your Work Be A Cut Above The Rest!"
        desc="Amazon eBook publishing is a great way to get your work out without spending much money. If you're looking for a company that can help you publish your Amazon eBook, look no further than us! We have the experience and expertise to get your book onto Kindle and into the hands of readers worldwide. We know the ins and outs of the Amazon digital book publishing process and can help you navigate it successfully. We'll work with you to format and convert your book, design a professional cover, and create an engaging description. We'll also help you price your book competitively and promote it effectively. And, of course, we'll take care of all the technical details involved in getting your book published on Amazon. If you're ready to take your eBook publishing dreams to the next level, contact us today! We'll be happy to answer any of your questions and get you started on the path to Amazon success owing to our amazon publishing services!"
        image={broader}
      />
      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="KDP Amazon Self Publishing, A Reason for the <br/> Massive Success of Your Book!"
        subtitle="At Best Selling Publisher, we offer professional KDP amazon self publishing services to help you publish your book. We have a team of experienced <br/> professionals who will guide you through the entire process, from editing and designing your book to marketing and selling it. Our books publisher also <br/> offers a wide range of other services, such as self publishing, eBook conversion, and book printing."
      />

      {/*========= swiperComponent fold =========*/}
      <SwiperTestimonial />

      {/*========= Plans fold =========*/}
      <Plans />

      {/*========= Bookshelf fold =========*/}
      <Bookshelf />
    </>
  )
}

export default amazonpublishing
