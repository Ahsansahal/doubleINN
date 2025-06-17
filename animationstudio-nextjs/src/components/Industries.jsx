// Next
import Image from "next/image"
// Components
import { AutoPlaySlider } from "@/components"
// Media
import Industry1 from "media/industries/1.png"
import Industry2 from "media/industries/2.png"
import Industry3 from "media/industries/3.png"
import Industry4 from "media/industries/4.png"

export default function Industries({
    title = "Industries we revolutionize with our <br /> Video Animation Service",
    desc = "Where our video animation expertise and best animated service can take your brand and message to the next level",
    industries = [
        {
            media: Industry1,
            title: "E-commerce & Retail",
            desc: "Craft stunning product visualizations, breathe life into interactive online experiences, and create captivating social media ads to drive traffic and conversions with our animation video service"
        },
        {
            media: Industry2,
            title: "Software",
            desc: "Be it Technology or Software, we offer animation services explaining complex features, showcase product functionalities, and create engaging explainer videos to boost user adoption and sales."
        },
        {
            media: Industry3,
            title: "Education & Training",
            desc: " Develop engaging and informative training materials, create interactive explainer videos for students of all ages, and make learning fun and memorable."
        },
        {
            media: Industry4,
            title: "Healthcare",
            desc: "Explain complicated medical techniques, exhibit the blessings of latest remedies, and create health education videos in a clear and attractive way."
        },
        {
            media: Industry1,
            title: "Advertising",
            desc: "With impactful animation video commercials, increase your brand’s awareness, and capture target audience with dynamic movement portraits and animation."
        },
        {
            media: Industry2,
            title: "Engineering ",
            desc: "Showcase the intricacies of your product layout, visually explain complicated technical principles, and create amazing education materials in your personnel."
        }
    ]
}) {
    return (
        <section>
            <div className="py-[80px]">
                <div className="container">
                    <div className="text-center mb-[60px]">
                        <h2 tabIndex={0} className="xs:text-[25px] sm:text-[30px] md:text-[40px]  xl:text-[50px] font-semibold mb-4 leading-snug capitalize" dangerouslySetInnerHTML={{ __html: title }} />
                        <p tabIndex={0} className="text-[14px] xl:text-[16px] font-medium leading-relaxed md:max-w-[80%] mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <AutoPlaySlider wrapperClasses="industriesSlider" options={{ align: "start" }}>
                        {
                            industries.map((e, i) => (
                                <div key={i} className="grow-0 shrink-0 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 min-w-0 pl-4">
                                    <div className="relative h-[450px] rounded-2xl overflow-hidden">
                                        <Image tabIndex={0} src={e.media} alt="industry" className="absolute top-[-1px] left-[-1px] bottom-[-1px] right-[-1px] h-full w-full object-cover object-center rounded-2xl" />
                                        <div className="absolute left-[-1px] right-[-1px] bottom-[-1px] overly opacity-0 transition-opacity duration-1000 rounded-3xl h-[250px] md:h-[350px]"></div>
                                        <div className="absolute top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-end px-[10px] xl:px-[18px] pb-[20px] contentBox translate-x-0 transition-transform duration-1000 opacity-100 text-background">
                                            <h3 tabIndex={0} className="font-mono xs:text-[18px] sm:text-[20px] lg:text-[24px] leading-snug mb-2 font-bold">
                                                {e.title}
                                            </h3>
                                            <p tabIndex={0} className="text-[14px] lg:text-[16px] text-justify leading-relaxed">
                                                {e.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <h3 tabIndex={0} className="font-mono text-center text-foreground xs:text-[16px] sm:text-[20px] lg:text-[24px] leading-snug mt-2 font-bold">
                                        {e.title}
                                    </h3>
                                </div>
                            ))
                        }
                    </AutoPlaySlider>
                </div>
            </div>
        </section>
    )
}