// Components
import { CTA } from "@/components"

const data = [
    {
        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
        title: "2D Animation",
        desc: "<p>Adding intrigue, and emotion to your presentations, websites, and social media content including infographics, animated logos, and data visualizations with our 2D animation. Creating adorable mascots, engaging presenters, and even doing explainers with characters to connect with your audience on an emotional level. From classic hand-drawn animation to trendy designs, we craft 2D animations that perfectly match your brand identity and message. We are a leading Video Animation Agency specializing in creating high-quality animation video services that elevate your brand and captivate audiences</p>",
        cta: "javascript:;",
        bgColor: "from-[#1953FD] to-[#03EFFF]",
        leftCol: "col-span-7",
        rightCol: "col-span-5",
    },
    {
        video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
        title: "3D Animation",
        desc: "<p>Showcase intricate details and functionalities of your product in stunning 3D animation. Create 360° product views, interactive demos, or even game animations for solid entertainment. Design and showcase stunning 3D models of architectural projects, allowing clients to visualize spaces and make informed decisions before construction begins. Develop characters for explainer videos, product demonstrations, or even create engaging mascots for your brand.</p>",
        cta: "javascript:;",
        bgColor: "from-[#F903FE] to-[#3B45FF]",
        leftCol: "col-span-5",
        rightCol: "col-span-7",
    },
    {
        video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
        title: "Corporate Video Production Services:",
        desc: "<p>We can help you capture the essence of your event and share it with a wider target audience. Create spotlight reels showcasing key moments.</p><p>Developing attractive and engaging employee training materials that empower your group of workers. Breathe life into complex processes, protection protocols, or even onboarding applications with outstanding video production.</p><p>Showcase your company's values, team spirit, and work surroundings in a visually captivating manner.</p>",
        cta: "javascript:;",
        bgColor: "from-[#E94236] to-[#FBBD06]",
        leftCol: "col-span-7",
        rightCol: "col-span-5",
    }
]

export default function Grid() {
    return (
        <section>
            <div className="py-[80px]">
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-5 xl:w-[calc(100%_-_80px)] xl:mx-auto">
                        {
                            data?.map((e, i) => (
                                i % 2 === 0 ?
                                    (<div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-y-5 md:gap-y-0 md:gap-x-5">
                                        <div className="md:col-span-7">
                                            <div className="relative h-[400px] md:h-full">
                                                <video tabIndex={0} preload="none" loop autoPlay muted playsInline aria-label="Video Player" className="max-w-full w-full h-full object-cover object-center">
                                                    <source src={e.video} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5">
                                            <div className={`bg-gradient-to-b ${e.bgColor} h-full flex flex-col justify-evenly text-background px-2 py-10 lg:px-4`}>
                                                <h3 tabIndex={0} className="xs:text-[18px] sm:text-[20px] lg:text-[30px] leading-snug font-semibold">
                                                    {e.title}
                                                </h3>
                                                <div tabIndex={0} className="text-[14px] leading-relaxed text-justify my-5 [&>*:not(:last-child)]:mb-5" dangerouslySetInnerHTML={{ __html: e.desc }} />
                                                <CTA text="Book An Intro Call" />
                                            </div>
                                        </div>
                                    </div>)
                                    :
                                    (<div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-y-5 md:gap-y-0 md:gap-x-5">
                                        <div className="md:col-span-5 order-last md:order-first">
                                            <div className={`bg-gradient-to-b ${e.bgColor} h-full flex flex-col justify-evenly text-background px-2 py-10 lg:px-4`}>
                                                <h3 tabIndex={0} className="xs:text-[18px] sm:text-[20px] lg:text-[30px] leading-snug font-semibold">
                                                    {e.title}
                                                </h3>
                                                <div tabIndex={0} className="text-[14px] leading-relaxed text-justify my-5 [&>*:not(:last-child)]:mb-5" dangerouslySetInnerHTML={{ __html: e.desc }} />
                                                <CTA text="Book An Intro Call" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-7">
                                            <div className="relative h-[400px] md:h-full">
                                                <video tabIndex={0} preload="none" loop autoPlay muted playsInline aria-label="Video Player" className="max-w-full w-full h-full object-cover object-center">
                                                    <source src={e.video} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>)
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}