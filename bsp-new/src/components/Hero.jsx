import Image from "next/image";
import React from "react";
import {HeroCounter} from ".";
import CTA from "./CTA";

export default function Hero({subTitle, title, desc, theme = "light", form = true, containImg, fullImg = "", logos, counter = false, classes = "", groupCTA = true, beforeImg, imgClass=''}) {
  return (
    <section>
      <div className={`relative py-[30px] md:pt-[50px] md:pb-0 ${fullImg} bg-[10% 10%] bg-no-repeat ${classes} !border-b-[#00c4e4] border-solid border-b-[1px]`}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-y-5 md:gap-y-0 md:gap-x-4 ">
            <div className={`md:col-span-6 lg:col-span-6 md:text-left text-center`}>
              {subTitle && <h1 className="text-[18px] uppercase leading-none font-sans font-semibold border-[3px] border-primary-100 text-secondary-100 w-max p-2 !mb-4">{subTitle}</h1>}
              {title && subTitle ? (
               
                  <h2 className="text-[25px] lg:text-[35px] xl:text-[45px] 2xl:text-[40px] font-sans font-semibold leading-tight text-secondary-200 mb-4" dangerouslySetInnerHTML={{__html: title}} />
               
              ) : (
               
                  <h1 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[45px] 2xl:text-[50px] font-bold leading-tight text-secondary-200 mb-4" dangerouslySetInnerHTML={{__html: title}} />
               
              )}
              {desc && <div><p className="text-[14px] md:text-[16px] xs:h-[80px] h-fit font-sans font-normal leading-normal !mb-4  lg:text-left" dangerouslySetInnerHTML={{__html: desc}} /></div>}
              {/* {groupCTA ? <CTAGroup /> : <CTA text="Start Your Publishing Journey Today" classes="hover:bg-secondary-100" handle="onclick='parent.LC_API.open_chat_window();return false;'" />} */}
              <div className="flex gap-2 mt-5">
                <CTA text={"Get Started"} className="w-full md:w-max lg:h-[50px] h-[40px] bg-[#40bee2] text-white rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all border-transparent  hover:bg-secondary-100" />
                <CTA text={"Call Us Now"} variant="icon" icon={false} className={`w-full md:w-max lg:h-[50px] h-[40px] bg-transparent text-[#40bee2] rounded-md flex items-center !px-10 font-\sans font-semibold justify-center border-2 transition-all border-[#40bee2]  hover:bg-secondary-100 ${theme === "light" ? " " : "!bg-white/20"}`} />
              </div>
              {counter && <HeroCounter />}
              {logos && <Image src={logos.src} className="!my-5 pt-5 lg:block hidden w-full" width={1000} height={100} alt="bestsellingpublisher" />}
            </div>
            {containImg && (
              <div className="md:col-span-6 lg:col-span-6 md:block hidden relative">
                <Image src={containImg.src} className={`block m-auto ${imgClass}`} quality={95} alt="bestsellingpublisher" width={1000} height={500} priority />
              </div>
            )}
            {(form || beforeImg) && (
              <div
                className={`z-10 md:col-span-5 xs:mt-5 sm:mt-5 lg:col-span-6 bg-no-repeat ${beforeImg} before:bg-no-repeat before:absolute before:bg-cover before:w-[43%] lg:before:w-[45%] xl:before:w-[48%] before:h-full -z-10 before:right-0 before:bottom-0 before:top-0 before:opacity-25`}
              >
                {/* {form && <MRHeroForm />} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
