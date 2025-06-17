// Next
import Image from "next/image"
// Components
import { AutoScrollSlider } from "@/components"
// Media
import TypesOfVideosMascots from "media/types-of-videos/mascots.png"
import TypesOfVideos1 from "media/types-of-videos/1.png"
import TypesOfVideos2 from "media/types-of-videos/2.png"
import TypesOfVideos3 from "media/types-of-videos/3.png"
import TypesOfVideos4 from "media/types-of-videos/4.png"
import TypesOfVideos5 from "media/types-of-videos/5.png"

export default function TypesOfVideos({
    title = "Pick Your Favorite Style <br className='hidden md:block' /> of Animated Video",
    desc = "<p>As an animation video agency, we help you produce stellar video content that swiftly cuts through the noise, and speaks to your prospects in a highly persuasive way.</p><p>We create outstanding videos for each stage of the marketing funnel. Whether you want to pique interest, outsell competitors or just acquire and retain customers, you’re just one step away from success.</p><p>Close the gap. Partner with Video Animation.</p>",
    types = [
        {
            media: TypesOfVideos1,
            title: "Corporate Videos",
            desc: "We create corporate videos to help you build brand authority, and showcase culture. ",
            color: "bg-[#F0DCA9]"
        },
        {
            media: TypesOfVideos2,
            title: "Testimonial Videos",
            desc: "Build rapport with your prospects by having your happy customers speak to them directly. ",
            color: "bg-[#89CDDF]"
        },
        {
            media: TypesOfVideos3,
            title: "Explainer Videos",
            desc: "Sell your tech products with minimalist, yet engaging presentations with our animation services.",
            color: "bg-[#E098F9]"
        },
        {
            media: TypesOfVideos4,
            title: "Entertainment Videos",
            desc: "Draw attention of everyone with our animation in games, music videos, and entertaining content. ",
            color: "bg-[#BCD1B1]"
        },
        {
            media: TypesOfVideos5,
            title: "E-commerce Videos",
            desc: "Product E-commerce videos for all your products and services, to win top-of-the-mind positioning. ",
            color: "bg-[#FEB13A]"
        },
        {
            media: TypesOfVideos1,
            title: "Animated Pitch Decks",
            desc: "Delight potential investors with animated pitch decks. Outsmart your competitors with a pitch that catches more eyes. ",
            color: "bg-[#F0DCA9]"
        },
        {
            media: TypesOfVideos1,
            title: "Corporate Videos",
            desc: "We create corporate videos to help you build brand authority, and showcase culture. ",
            color: "bg-[#F0DCA9]"
        },
        {
            media: TypesOfVideos2,
            title: "Testimonial Videos",
            desc: "Build rapport with your prospects by having your happy customers speak to them directly. ",
            color: "bg-[#89CDDF]"
        },
    ]
}) {
    return (
        <section>
            <div className="text-foreground py-[80px]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-y-10 gap-x-5">
                        <div className="md:col-span-7">
                            <h2 className="xs:text-[30px] sm:text-[35px] xl:text-[50px] font-bold font-mono leading-tight mb-5 capitalize" dangerouslySetInnerHTML={{ __html: title }} />
                            <div className="text-[16px] xl:text-[20px] 2xl:text-[22px] lg:max-w-[90%] 2xl:max-w-[83%] xs:text-justify leading-relaxed mb-5 [&>*:not(:last-child)]:mb-5" dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                        <div className="md:col-span-5">
                            <Image src={TypesOfVideosMascots} alt="TypesOfVideosMascots" />
                        </div>
                    </div>
                </div>
                <AutoScrollSlider wrapperClasses="mt-[70px]">
                    {
                        types.map((e, i) => (
                            <div key={i} className="grow-0 shrink-0 basis-[270px] min-w-0 pl-4">
                                <div className="relative h-[350px] rounded-2xl overflow-hidden">
                                    <Image tabIndex={0} src={e.media} alt="industry" className="absolute top-0 left-0 bottom-0 right-0 h-[250px] object-cover rounded-2xl w-full" />
                                    <div className={`absolute left-0 right-0 bottom-0 h-[200px] flex flex-col justify-center px-[10px] xl:px-[20px] translate-x-0 transition-transform duration-1000 ${e.color} rounded-2xl`}>
                                        <h3 tabIndex={0} className="font-mono text-[20px] leading-snug mb-2 font-bold">
                                            {e.title}
                                        </h3>
                                        <p tabIndex={0} className="text-[14px] text-justify leading-relaxed">
                                            {e.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </AutoScrollSlider>
            </div>
        </section>
    )
}
