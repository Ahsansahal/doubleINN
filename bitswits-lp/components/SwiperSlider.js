import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

const SwiperSlider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    register();
    const params = {
      slidesPerGroupSkip: 1,
      speed: 1500,
      slidesPerView: 1,
      navigation: true,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      autoplayDelay: 2500,
      injectStyles: [
        `
                .swiper-pagination {
                    bottom: 5px !important;
                }
                .swiper-pagination-bullet {
                    width: 16px;
                    height: 16px;
                    text-align: center;
                    line-height: 16px;
                    font-size: 8px;
                    color: rgb(255, 255, 255);
                    opacity: 1;
                    background: #DB3340;
                }
                .swiper-pagination-bullet-active {
                    color: #fff;
                    background: #007AFF;
                }
            `,
      ],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      paginationType: "progressbar",
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    };
    // Assign it to swiper element
    Object.assign(swiperRef.current, params);
    // initialize swiper
    swiperRef.current.initialize();
  }, []);
  return (
    <>
      <swiper-container ref={swiperRef} init={false}>
        <swiper-slide>1</swiper-slide>
        <swiper-slide>2</swiper-slide>
        <swiper-slide>3</swiper-slide>
        <swiper-slide>4</swiper-slide>

      </swiper-container>
    </>
  );
};

export default SwiperSlider;
