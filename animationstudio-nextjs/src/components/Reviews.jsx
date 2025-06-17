// Next
import Image from "next/image"
// Media
import ReviewsShift from "media/reviews/shift.svg"
import ReviewsDigitalOcean from "media/reviews/digitalOcean.svg"
import ReviewsCascade from "media/reviews/cascade.svg"
import Reviews1 from "media/reviews/1.png"
import Reviews2 from "media/reviews/2.png"
import Reviews3 from "media/reviews/3.png"
// Componenets
import { AutoPlaySlider, CTA } from "@/components"

export default function Reviews({
    titie = "Let’s hear to what they’ve to say about Us:"
}) {
    return (
        <section>
            <div className="bg-[#F3F3F3] py-[80px] text-foreground">
                <div className="container">
                    <div className="md:flex md:items-center">
                        <h2 tabIndex={0} className="text-[25px] sm:text-[20px] lg:text-[30px] xl:text-[35px] font-semibold leading-relaxed sm:leading-snug md:mr-auto text-center md:text-left mb-5 md:mb-0 capitalize" dangerouslySetInnerHTML={{__html: titie}} />
                        <CTA text="View Case Studies" variant="secondary" className="text-background mx-auto md:mx-0" />
                    </div>
                </div>
                <AutoPlaySlider wrapperClasses="mt-[70px]">
                    {
                        [
                            {
                                media: Reviews1,
                                title: "Deana J. Marr",
                                desc: "Product Marketing Manager",
                                company: ReviewsShift
                            },
                            {
                                media: Reviews2,
                                title: "Roger R. Stout",
                                desc: "Senior Video Operations Manager",
                                company: ReviewsDigitalOcean
                            },
                            {
                                media: Reviews3,
                                title: "Duane B. James",
                                desc: "Chief Operating Officer",
                                company: ReviewsCascade
                            },
                            {
                                media: Reviews1,
                                title: "Deana J. Marr",
                                desc: "Product Marketing Manager",
                                company: ReviewsShift
                            },
                            {
                                media: Reviews2,
                                title: "Roger R. Stout",
                                desc: "Senior Video Operations Manager",
                                company: ReviewsDigitalOcean
                            },
                            {
                                media: Reviews3,
                                title: "Duane B. James",
                                desc: "Chief Operating Officer",
                                company: ReviewsCascade
                            }
                        ].map((e, i) => (
                            <div key={i} className={`grow-0 shrink-0 basis-[85%] lg:basis-[40%] min-w-0 pl-4 text-background`}>
                                <div className="relative rounded-3xl h-[330px]">
                                    <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground rounded-3xl z-10 opacity-50"></div>
                                    <Image tabIndex={0} src={e.media} alt="company" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-top rounded-3xl" />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-end px-[20px] xl:px-[40px] pb-[20px] translate-x-0 transition-transform duration-1000 opacity-100 z-20">
                                        <Image tabIndex={0} src={e.company} alt="company" className="mb-2" />
                                        <h2 tabIndex={0} className="font-medium xs:text-[18px] sm:text-[20px] lg:text-[24px] leading-snug mb-2">
                                            {e.title}
                                        </h2>
                                        <p tabIndex={0} className="xs:text-[12px] sm:text-[14px] xs:text-justify xl:max-w-[90%] leading-relaxed">
                                            {e.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </AutoPlaySlider>
            </div>
        </section>
    )
}
