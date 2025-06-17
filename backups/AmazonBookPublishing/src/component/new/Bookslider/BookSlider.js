import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import styles from '@/component/new/Banner/Banner.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const BookSlider = ({
  subtitle, title, desc, discuss, homebannernum
}) => {

  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
  return (
    <>
      <div>
        <section className={` w-full bg-[#f2f2f2] py-10`}>
          <div className='container m-auto'>
            <div className='row'>
              <div className='pb-8'>
                <div className="text-center ">
                  <h6 className='text-[20px] font-semibold mb-3'>
                    {subtitle}
                  </h6>
                  <h2 className='text-[40px] leading-tight font-bold text-[#1d1d1f] font-primary txt-secondary'>
                    {title}
                  </h2>
                  <p className='w-[50%] m-auto justify-center border-b-[2px] pb-3 border-solid border-b-[#40BEE2]'>
                    {desc}
                  </p>
                </div>
              </div>

              <div className='w-[90%] m-auto'>
                <Slider {...settings} className=''>
                  <div className=''>
                    <div>
                      <Image quality={95} src='/images/book-mockup/9.png' alt="ebook1" width={300} height={300} />
                    </div>
                  </div>
                  <div className=''>
                    <div>
                      <Image quality={95} src='/images/book-mockup/10.png' alt="ebook2" width={300} height={300} />
                    </div>
                  </div>
                  <div className=''>
                    <div>
                      <Image quality={95} src='/images/book-mockup/11.png' alt="ebook3" width={300} height={300} />
                    </div>
                  </div>
                  <div className=''>
                    <div>
                      <Image quality={95} src='/images/book-mockup/12.png' alt="ebook4" width={300} height={300} />
                    </div>
                  </div>
                  <div className=''>
                    <div>
                      <Image quality={95} src='/images/book-mockup/8.png' alt="ebook5" width={300} height={300} />
                    </div>
                  </div>
                  <div className=''>
                    <div>
                      <Image quality={95} src='/images/book-mockup/7.png' alt="ebook6" width={300} height={300} />
                    </div>
                  </div>

                </Slider>
              </div>
              <div className='w-[50%] m-auto py-8 '>
                <div className={`mt-4 flex gap-4 justify-center items-center`}>
                  <Link className='btns btnPrimary' href="#">{discuss}</Link>
                  <Link className='btns btnSecondary' href="tel:(800)781-9093"> {homebannernum}</Link>
                </div>
              </div>
            </div>
          </div>




        </section>
      </div>
    </>
  )
}

export default BookSlider
