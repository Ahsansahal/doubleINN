import Image from "next/image";
import Checkmark from "media/images/checkmark.webp";
import {CTA} from ".";

const MRCards = ({subTitle, title, desc, classes = " ", gridsClasses = " ", cta = "", variant = "steps", data, theme = "dark"}) => {
  return (
    <section>
      <div className={`py-[40px] lg:py-[70px] ${classes}`}>
        <div className="container">
          <div className="text-center mb-5">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && (
              <h2
                className={`text-[26px] md:text-[30px] lg:text-[50px] block leading-tight font-semibold ${theme == "light" ? "text-[#000000]" : "text-white"} mb-2`}
                dangerouslySetInnerHTML={{__html: title}}
              />
            )}
            {desc && (
              <p
                className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px] font-normal ${theme == "light" ? "text-[#000000]" : "text-white"}`}
                dangerouslySetInnerHTML={{__html: desc}}
              />
            )}
          </div>
          {variant == "steps" && (
            <div className={`grid ${gridsClasses} gap-x-4 gap-y-5`}>
              {data &&
                data?.map(({content, cta, classes, stepText, indexing}) =>
                  content?.map(({title, desc, border, padding, image, minHeight, textColor}, i) => (
                    <div className={`${classes} cursor-pointer`} key={i}>
                      {stepText && indexing && (
                        <span className={`lg:text-[20px] text-[20px] block leading-tight font-semibold text-[#40BEE2] group-hover:text-white my-[16px]`}>
                          {stepText} 0{i + 1}
                        </span>
                      )}
                      {!stepText && indexing && (
                        <div
                          className={`absolute flex items-center justify-center bg-[#40BEE2] w-[80px] rounded-[50%] h-[80px] text-white border-4 border-[#E2E2E2] lg:text-[25px] text-[20px] font-semibold -top-[40px] bottom-0 left-5 right-0`}
                        >
                          0{i + 1}
                        </div>
                      )}
                      <div>
                        {image && <Image src={image} alt="icon" priority />}
                        {title && <h3 className={`text-[25px] block leading-tight ${textColor} ${border} ${padding} font-semibold mt-[15px] mb-[10px]`}>{title}</h3>}
                        {desc && <p className={`text-[14px] ${minHeight} 2xl:text-[15px] block leading-normal font-normal`} dangerouslySetInnerHTML={{__html: desc}} />}
                        {cta && (
                          <div className="flex gap-2 mt-5">
                            <CTA
                              text={"Get Started"}
                              className="w-full md:w-max lg:h-[50px] h-[40px] bg-[#40bee2] text-white rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all border-transparent  hover:bg-secondary-100"
                            />
                            <CTA
                              text={"Call Us Now"}
                              variant="icon"
                              icon={false}
                              className={`w-full md:w-max lg:h-[50px] h-[40px] bg-transparent text-[#40bee2] rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all border-[#40bee2]  hover:bg-secondary-100 ${
                                theme === "light" ? " " : "!bg-white/20"
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
            </div>
          )}
          {variant == "icons" && (
            <div className={`grid ${gridsClasses} gap-x-4 gap-y-5`}>
              {data &&
                data?.map(({content, classes}) =>
                  content?.map(({title, desc, icon}, i) => (
                    <div className={`${classes} cursor-pointer`} key={i}>
                      <div>
                        {title && desc && <h3 className={`text-[20px] block text-[#40BEE2] leading-tight font-semibold mt-[15px] mb-[10px]`} dangerouslySetInnerHTML={{__html: `${title}`}} />}
                        {icon ? (
                          <Image src={icon} alt="checkmark" className="block mx-auto my-[16px] group-hover:brightness-0 group-hover:invert" />
                        ) : (
                          <Image src={Checkmark} alt="checkmark" className="block mx-auto my-[16px]" />
                        )}
                        {desc && title && <p className={`text-[16px] 2xl:text-[16px] block leading-normal font-normal`} dangerouslySetInnerHTML={{__html: `${desc}`}} />}
                        {!desc && title && <h3 className={`text-[20px] block leading-tight font-semibold mt-[15px] mb-[10px]`} dangerouslySetInnerHTML={{__html: `${title}`}} />}
                      </div>
                    </div>
                  ))
                )}
            </div>
          )}
          {cta && (
            <div className="flex justify-center gap-2 mt-5">
              <CTA
                text={"Get Started"}
                className="w-full md:w-max lg:h-[50px] h-[40px] bg-[#40bee2] text-white rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all border-transparent  hover:bg-secondary-100"
              />
              <CTA
                text={"Call Us Now"}
                variant="icon"
                icon={false}
                className={`w-full md:w-max lg:h-[50px] h-[40px] bg-transparent text-[#40bee2] rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all border-[#40bee2]  hover:bg-secondary-100 ${
                  theme === "light" ? " " : "!bg-white/20"
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MRCards;
