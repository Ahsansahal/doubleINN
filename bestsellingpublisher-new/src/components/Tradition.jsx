// Components
import {AutoScrollSlider} from "@/components";
// Media
import mock1 from 'media/images/book-mockup/1.webp'
import mock2 from 'media/images/book-mockup/2.webp'
import mock3 from 'media/images/book-mockup/3.webp'
import mock4 from 'media/images/book-mockup/4.webp'
import mock5 from 'media/images/book-mockup/5.webp'
import mock6 from 'media/images/book-mockup/6.webp'
import mock7 from 'media/images/book-mockup/7.webp'
// Next
import Image from "next/image";

export default function Industries({
  subTitle, 
  title="Customer Base From Different Industries", 
  desc="Businesses of every GENRE or SCALE are more than welcome to increase <br className='lg:block hidden'/> their DIGITAL worth with us!", 
}) {
  return (
    <section>
      <div >
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && <h3 className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] xs:pb-[10px] font-semibold text-[#202124]  mb-2`} dangerouslySetInnerHTML={{__html: title}} />}
            {desc && (
              <p
                className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px] font-normal `}
                dangerouslySetInnerHTML={{__html: desc}}
              />
            )}
          </div>
          <div>
            <AutoScrollSlider wrapperClasses="mt-[50px]" direction="forward">
              {[mock1, mock2, mock3, mock4, mock5, mock6, mock7].map((img, i) => (
                <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4">
                  <div className="relative">
                    <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-0 rounded-[10px] group-hover:opacity-0 transition-opacity"></div>
                    <Image tabIndex={0} key={i} src={img} alt="SEO company" className="rounded-[10px]" width={400} height={400} />
                  </div>
                </div>
              ))}
            </AutoScrollSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
