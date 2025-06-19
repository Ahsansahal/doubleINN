import React from "react";
import { CTA } from ".";
import Image from "next/image";
import img1 from "media/images/bgblack.png"

export default function Publishing({
  subTitle = "Becoming the Next Best Seller has",
  title = "Never Been Easier with <br/> <span class='bg-[#40BEE2] py-1 px-2 mt-2'>Best Selling Publishers.</span> ",
  desc = "",
  bgImage = "",
  Banner= img1,
  classes = "bg-cover bg-no-repeat py-10",
  theme = "light"
}) {
  return (
    <section>
      <div className={`${bgImage} ${classes} text-white relative`}>
      {Banner && <Image src={Banner.src} alt="banner" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10" priority={true} width={1000} height={500}/>}
        <div className="container">
          <div className="grid grid-cols-1 items-center justify-center">
            <div className="text-center w-[80%] mx-auto">
              {subTitle && <span className="text-[30px] font-medium leading-snug" dangerouslySetInnerHTML={{__html: subTitle}} />}
              {title && <h2 className="text-[45px] font-semibold leading-snug" dangerouslySetInnerHTML={{__html: title}} />}
              {desc && <p className="text-[16px] font-light leading-snug" dangerouslySetInnerHTML={{__html: desc}} />}
            </div>
            <div className="flex gap-2 mt-5 justify-center">
              <CTA
                text={"Get Started"}
                className={`!text-[16px] w-max md:w-max lg:h-[50px] h-[40px] bg-[#40bee2] text-white rounded-md flex items-center lg:!px-10 !px-10 font-sans font-medium justify-center border-[1px] transition-all border-transparent  hover:bg-secondary-100 ${ theme === "light" ? "bg-[#40bee2] " : "!bg-white/20"}`} 
              />
              <CTA
                text={"Call Us Now"}
                variant="icon"
                icon={false}
                className={`!text-[16px] w-max md:w-max lg:h-[50px] h-[40px] bg-transparent rounded-md flex items-center lg:!px-10 !px-10 font-sans font-medium justify-center border-[1px] transition-all hover:bg-secondary-100 ${ theme === "light" ? "!text-[#40bee2] !border-[#40bee2] " : "!text-[#000] !border-[#000]"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
