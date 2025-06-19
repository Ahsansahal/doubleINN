import React from "react";
import {CTA} from ".";
import audience from "media/images/audience1.png";
import Image from "next/image";

export default function Audience({
  bgClass = "bg-[#40bee2] text-white",
  title = "<span class='bg-black text-white mt-2 p-1 inline-block'>Amazon Publishing Services </span> <br/> That Helped 3000+ Authors <br class='lg:block hidden md:hidden'/> Publish Their Books ",
  desc = "From Manuscript to Global Distribution, let’s connect your story to every corner <br class='lg:block hidden md:hidden'/> of the world in no time! <br/><br/> <Strong><em>Your Story Deserves to Shine!</em></strong>",
  theme = "light",
}) {
  return (
    <section>
      <div className={`${bgClass} md:py-0 py-8`}>
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center md:justify-start justify-center">
            <div className="md:text-left text-center">
              <h2 className="text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-semibold mb-3 leading-tight" dangerouslySetInnerHTML={{__html: title}} />
              <p className="text-[14px] lg:text-[16px] font-normal leading-tight" dangerouslySetInnerHTML={{__html: desc}} />

              <div className="flex gap-2 mt-5 md:justify-start justify-center">
                <CTA
                  text={"Get Started"}
                  className="!text-[16px] w-max md:w-max lg:h-[50px] h-[40px] bg-[#000] text-white rounded-none flex items-center lg:!px-16 !px-10 font-sans font-medium justify-center border-[1px] transition-all border-transparent  hover:bg-secondary-100"
                />
                <CTA
                  text={"Call Us Now"}
                  variant="icon"
                  icon={false}
                  className={`!text-[16px] w-max md:w-max lg:h-[50px] h-[40px] bg-transparent text-[#000] rounded-none flex items-center lg:!px-16 !px-10 font-sans font-medium justify-center border-[1px] transition-all border-[#000]  hover:bg-secondary-100 ${ theme === "light" ? " " : "!bg-white/20"}`}
                />
              </div>
            </div>
            <div className="md:block hidden">
              <Image quality={100} className="w-full py-[20px]" src={audience} alt="Best_Publisher" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
