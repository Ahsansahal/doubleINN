import Link from 'next/link'
import Image from 'next/image'
import styles from './Banner.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import alignicon from 'media/images/icons/align.png'
import authoricon from 'media/images/icons/author.png'
import cupicon from 'media/images/icons/cup.png'
import banslider1 from 'media/images/banner/logo/1.png'
import banslider2 from 'media/images/banner/logo/2.png'
import banslider3 from 'media/images/banner/logo/3.png'
import banslider4 from 'media/images/banner/logo/4.png'

const Banner = (props) => {
    let bannerslider = {
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
            <section className={`${styles.homeBanner}`}>
                <div className='px-md-5 container'>
                    <div className='truealign grid lg:grid-cols-2 grid-cols-1'>
                        <div className={styles.bannerTxt}>
                            <h1 className='text-[40px] lg:text-[40px] xl:text-[50px] fw-700 font-primary txt-secondary mt-3 leading-tight' dangerouslySetInnerHTML={{ __html: props.title }} />
                            <div className={`${styles.bttns} mt-4`}>
                                <Link className='btns btnPrimary' href="#">{props.discuss}</Link>
                                <Link className='btns btnSecondary' href="tel:(800)781-9093"> {props.homebannernum}</Link>
                            </div>

                            <div className={`${styles.count} mt-3 mainclass lg:block jsutify-center`}>
                                <div className={`${styles.counteRow} flex`}>
                                    <div className='colo'>
                                        <div className='flex items-center gap-3'>
                                            <Image quality={100} loading="lazy" className='img-fluid'
                                                src={alignicon}
                                                alt='Best_Publisher'
                                            />
                                            <div>
                                                <span className='font-45 fw-700 font-primary txt-secondary sm:text-[25px] xs:text-[25px]'>400</span>
                                                <p className='font-13 fw-800 font-primary txt-primary sm:text-[13px] xs:text-[13px]'>Million Words</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='colo'>
                                        <div className='flex items-center gap-3'>
                                            <Image quality={100} loading="lazy" className='img-fluid'
                                                src={authoricon}
                                                alt='Best_Publisher'
                                            />
                                            <div>
                                                <span className='font-45 fw-700 font-primary txt-secondary sm:text-[25px] xs:text-[25px]'>100</span>
                                                <p className='font-13 fw-800 font-primary txt-primary sm:text-[13px] xs:text-[13px]'>Authors</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div md={4} className='colo'>
                                        <div className='flex items-center gap-3'>
                                            <Image quality={100} loading="lazy" className='img-fluid'
                                                src={cupicon}
                                                alt='Best_Publisher'
                                            />
                                            <div>
                                                <span className='font-45 fw-700 font-primary txt-secondary sm:text-[25px] xs:text-[25px]'>870</span>
                                                <p className='font-13 fw-800 font-primary txt-primary sm:text-[13px] xs:text-[13px]'>Cups Of Coffee</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.banshortimg}>
                                <Image quality={100} src={props.img2} alt='Best_Publisher' className='img-fluid mt-4' />
                            </div>
                            <Slider {...bannerslider} className='mt-4 gloslider xl:block hidden'>
                                <div>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={banslider1}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={banslider2}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={banslider3}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={banslider4}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={banslider1}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={banslider2}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div className={`${styles.bannerImg} hidden lg:block`}>
                            <Image quality={100}
                                src={props.imageban}
                                alt='Best_Publisher'
                                className='block m-auto'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner