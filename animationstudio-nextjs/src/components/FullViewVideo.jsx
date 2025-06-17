// Next
import Image from "next/image"
// Components
import { CTA } from "@/components"
// Media
import Clutch22 from "media/clutch22.svg"

export default function FullViewVideo({
    video = process.env.NEXT_PUBLIC_SCARRED_VIDEO,
    subTitle = "Scarred - Cel",
    overlay = false,
    title = "Tune into Creative Branding <br class='hidden md:block' /> with Video Animation Agency’s <br class='hidden md:block' /> Spellbinding Animation",
    desc = "Exceptional design is the backbone of brilliant animation. Our team guarantees that every element, from individual animation to design, will serve a clean motive and supports your message. Connect to viewers on a deeper level."
}) {
    return (
        <section>
            <div className="relative overflow-hidden  h-[900px] sm:h-[800px] lg:h-[700px] xl:h-[800px]">
                <video tabIndex={0} preload="none" loop autoPlay muted playsInline aria-label="Video Player" className="max-w-full w-full h-full object-cover object-center">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {overlay && <div className="absolute top-0 left-0 right-0 bottom-0 bg-foreground opacity-50"></div>}
                <div className="container absolute top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-end pb-[50px] xl:pb-[70px]">
                    <div className="text-background">
                        <Image tabIndex={0} src={Clutch22} alt="Clutch22" />
                        <p className="bg-[#d51203] text-[20px] 2xl:text-[25px] font-bold leading-none w-max px-4 py-2 my-3 2xl:my-4">
                            {subTitle}
                        </p>
                        <h2 tabIndex={0} className="xs:text-[25px] leading-relaxed sm:leading-snug sm:text-[30px] lg:text-[40px] 2xl:text-[50px] font-bold mb-4 2xl:mb-5 capitalize" dangerouslySetInnerHTML={{ __html: title }} />
                        <p tabIndex={0} className="text-[14px] 2xl:text-[16px] leading-[24px] 2xl:leading-[26px] font-light text-justify md:text-left lg:max-w-[70%] 2xl:max-w-[60%]" dangerouslySetInnerHTML={{ __html: desc }} />
                        <div className="grid sm:flex grid-cols-1 gap-5 mt-4">
                            <CTA text="Book An Intro Call" variant="secondary" />
                            <CTA text="Book An Intro Call" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
