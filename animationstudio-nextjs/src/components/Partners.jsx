// Next
import Image from "next/image"
// Media
import Partners1 from "media/partners/1.png"
import Partners2 from "media/partners/2.png"
import Partners3 from "media/partners/3.png"
import Partners4 from "media/partners/4.png"
import Partners5 from "media/partners/5.png"
import Partners6 from "media/partners/6.png"
import Partners7 from "media/partners/7.png"
import Partners8 from "media/partners/8.png"
import Partners9 from "media/partners/9.png"
import Partners10 from "media/partners/10.png"
import Partners11 from "media/partners/11.png"
import Partners12 from "media/partners/12.png"
import Partners13 from "media/partners/13.png"
import Partners14 from "media/partners/14.png"
import Partners15 from "media/partners/15.png"

export default function Partners({
    title = "Roadmap",
    desc = "We’ve worked with small startups and helped them become big brands, because we don't just create designs and animations we build relations for mutual growth."
}) {
    return (
        <section>
            <div className="py-[80px] text-foreground">
                <div className="container">
                    <div className="text-center mb-[40px]">
                        <h2 tabIndex={0} className="xs:text-[25px] sm:text-[30px] md:text-[40px]  xl:text-[50px] font-semibold mb-4 leading-tight capitalize" dangerouslySetInnerHTML={{ __html: title }} />
                        <p tabIndex={0} className="text-[14px] xl:text-[16px] font-medium leading-relaxed md:max-w-[80%] mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className="flex flex-wrap md:grid md:grid-cols-5 items-center justify-center gap-5 md:gap-10">
                        {
                            [Partners1, Partners2, Partners3, Partners4, Partners5, Partners6, Partners7, Partners8, Partners9, Partners10, Partners11, Partners12, Partners13, Partners14, Partners15].map((e, i) => (
                                <Image tabIndex={0} key={i} src={e} alt="clients" className="xs:max-w-[20%] max-w-[25%] md:max-w-[70%] mx-auto cursor-pointer grayscale hover:grayscale-0 transition-all duration-500" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}