import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';


const Homeslider2 = () => {

    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {


        const Cursor2 = document.querySelector('.swiper-slide[data-swiper-slide-index="0"]');
        Cursor2.classList.add('lt3');
        const Cursor3 = document.querySelector('.swiper-slide[data-swiper-slide-index="1"]');
        Cursor3.classList.add('lt2');
        const Cursor4 = document.querySelector('.swiper-slide[data-swiper-slide-index="2"]');
        Cursor4.classList.add('lt1');
        const Cursor5 = document.querySelector('.swiper-slide[data-swiper-slide-index="3"]');
        Cursor4.classList.add('lt1');
        const Cursor6 = document.querySelector('.swiper-slide[data-swiper-slide-index="4"]');
        Cursor6.classList.add('gt2');
        const Cursor7 = document.querySelector('.swiper-slide[data-swiper-slide-index="5"]');
        Cursor7.classList.add('gt3');
        const Cursor8 = document.querySelector('.swiper-slide[data-swiper-slide-index="6"]');
        Cursor8.classList.add('gt4');


        const handleResize = () => {
            const isMobileView = window.innerWidth < 768; 
            setSlidesPerView(isMobileView ? 1 : 5);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        const slides = document.getElementsByClassName('swiper-slide');
        for (const slide of slides) {
            slide.addEventListener('click', () => {
                const { className } = slide;
                if (className.includes('swiper-slide-next')) {
                    swiper.slideNext();
                } else if (className.includes('swiper-slide-prev')) {
                    swiper.slidePrev();
                }
            });
        }
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const slides = [
        {
            avatar: 'images/logoservices/1.svg',
        },
        {
            avatar: 'images/logoservices/2.svg',

        },
        {
            avatar: 'images/logoservices/3.svg',

        },
        {
            avatar: 'images/logoservices/4.svg',

        },
        {
            avatar: 'images/logoservices/5.svg',

        },
        {
            avatar: 'images/logoservices/6.svg',

        },
        {
            avatar: 'images/logoservices/7.svg',

        },
    ];
    return (
        <section className='py-28 xs:py-10'>
            <div className="">

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    slidesPerView={slidesPerView}
                    centeredSlides={true}
                    spaceBetween={0}
                    coverflowEffect={
                        {
                            rotate:0,
                            stretch:0,
                            depth:0,
                            modifier:2.5,
                        }
                    }
                    keyboard={{ enabled: true }}
                    loop={true}

                >
                    {slides.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="card testimonialscard">
                                <img className="" src={testimonial.avatar} alt={testimonial.name} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};


export default Homeslider2