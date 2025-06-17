import Head from 'next/head'
// components
import Banner from '@/components/Banner'
import Tradition from '@/components/Tradition'
// import Climax from '@/components/Climax'
import EnlistedNew from '@/components/BookPublishing/EnlistedNew'
import Audience from '@/components/Audience'
import BroaderNew from '@/components/BroaderNew'
import Plans from '@/components/Plans'
import Bookshelf from '@/components/Bookshelf'
import Enlistedlogo from '@/components/Enlistedlogo'
import Exceptional from '@/components/Exceptional'
import SwiperTestimonial from '@/components/swiperComponent'
import broader from '../public/images/flods/person-writing.png'
// import { Helmet } from 'react-helmet'
// images
import bannerImg from '../public/images/banner/bookpublishingbanner.png'
import img2 from '../public/images/banner/img2.png'

const bookpublishing = () => {
    const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>Amazon Publishing <br /> Services Company To Make <br /> Your Book Available To <br /> Millions Of Readers!</h1>;
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
          title={"Why Are We"}
          desc="The Best Book Publishing"
          desc2="Company for You?"
        />
        {/*========= Broader fold =========*/}
        <BroaderNew
          title="Where Your Words Could Change The World"
          desc="At Best Selling Publisher, we understand that book publishing can be a daunting task for authors. We are here to help you every step of the way, from start to finish. We have years of experience in the industry, and our team of experts is dedicated to helping you reach your publishing goals. We offer a variety of services to choose from, such as eBook publishing services, digital publishing services, and Amazon publishing services, so you can find the perfect fit for your needs. We are here to help you succeed!
        <br/> <br/>
          We are the leading book publishers in the industry with the creative flair and dedication that you need. Whether you are looking for children's book publishers or science fiction publishers, we have you covered! We publish your dreams so call us today!"
          image={broader}
        />
        {/*========= Audience fold =========*/}
        <Audience />
  
        {/*========= Exceptional fold =========*/}
        <Exceptional
          title="First-Rated Book & Digital Publishing Services <br/>
          We Offer"
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
  
  export default bookpublishing
