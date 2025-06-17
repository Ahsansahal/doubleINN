// Next
import dynamic from "next/dynamic"
// Components
import { CTA } from "@/components"
const VideosSlider = dynamic(() => import("./VideosSlider"))
const ThumbnailSlider = dynamic(() => import("./ThumbnailSlider"))
// Media
import Thumbnail2DAnimations from "media/portfolios/thumbnails/18.jpg"
import Thumbnail3DAnimations from "media/portfolios/thumbnails/19.jpg"
import ThumbnailWhiteboardAnimations from "media/portfolios/thumbnails/20.jpg"
import ThumbnailMotionAnimations from "media/portfolios/thumbnails/21.jpg"
const slides = [
    {
        thumbnail: Thumbnail2DAnimations,
        video: process.env.NEXT_PUBLIC_SCARRED_VIDEO,
        title: "2D Animations",
        desc: "Discover a world of attractive 2D animations tailored to your preferences at Video Animation. From humorous shorts to mesmerizing art pieces, a 2D animation company that caters everyone.",
        cta: "Make an Animation",
        link: "/2d-animation"
    },
    {
        thumbnail: Thumbnail3DAnimations,
        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
        title: "3D Animation",
        desc: "Explore a world of stunning 3D animations designed for you at Video Animation. From exciting scenes to detailed art, our 3D animation studio has something for everyone. Experience creativity in every dimension.",
        cta: "Make an Animation",
        link: "/3d-animation"
    },
    {
        thumbnail: ThumbnailWhiteboardAnimations,
        video: process.env.NEXT_PUBLIC_WHITEBOARD_ANIMATION,
        title: "Whiteboard Animation",
        desc: "Explore engaging Whiteboard animations crafted to your needs at Video Animation. From educational insights to creative storytelling, our Whiteboard animation studio offers something for everyone.",
        cta: "Make an Animation",
        link: "/whiteboard-animation"
    },
    {
        thumbnail: ThumbnailMotionAnimations,
        video: process.env.NEXT_PUBLIC_VIDEO_EDIIING,
        title: "Motion Graphics",
        desc: "Dive into a world of dynamic Motion Graphics tailored to your needs at Video Animation. From eye-catching visuals to captivating animations, our Motion Graphics studio brings your ideas to life with flair.",
        cta: "Make an Animation",
        link: "/motion-graphics"
    }
]

export default function Portfolio() {
    return (
        <section>
            <div className="bg-foreground py-[100px] text-background">
                <div className="container">
                    <div className="text-center">
                        <h2 tabIndex={0} className="text-[25px] sm:text-[30px] lg:text-[40px] 2xl:text-[50px] leading-snug font-medium mb-4 capitalize">
                            A Video Animation Agency
                        </h2>
                        <p tabIndex={0} className="text-[16px] leading-relaxed sm:max-w-[80%] mx-auto">
                            The science and art of crafting amazing animations, transform your ideas with our animated services
                        </p>
                    </div>
                </div>
                <VideosSlider slides={slides} />
                <ThumbnailSlider />
                <CTA text="Check our Portfolio" variant="blue" className="mx-auto mt-[50px]" />
                <p tabIndex={0} className="text-[16px] leading-relaxed text-center mt-5 capitalize">
                    Watch these free animated videos and fill<br />  your mind with creative inspiration!
                </p>
            </div>
        </section>
    )
}