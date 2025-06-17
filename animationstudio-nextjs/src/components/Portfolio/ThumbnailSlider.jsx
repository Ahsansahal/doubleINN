// Next
import Image from "next/image"
// Components
import { AutoScrollSlider } from "@/components"
// Media
import Thumbnail1 from "media/portfolios/thumbnails/1.png"
import Thumbnail2 from "media/portfolios/thumbnails/2.png"
import Thumbnail3 from "media/portfolios/thumbnails/3.png"
import Thumbnail4 from "media/portfolios/thumbnails/4.png"
import Thumbnail5 from "media/portfolios/thumbnails/5.png"
import Thumbnail6 from "media/portfolios/thumbnails/6.png"
import Thumbnail7 from "media/portfolios/thumbnails/7.png"
import Thumbnail8 from "media/portfolios/thumbnails/8.png"
import Thumbnail9 from "media/portfolios/thumbnails/9.png"
import Thumbnail10 from "media/portfolios/thumbnails/10.png"
import Thumbnail11 from "media/portfolios/thumbnails/11.png"
import Thumbnail12 from "media/portfolios/thumbnails/12.png"
import Thumbnail13 from "media/portfolios/thumbnails/13.png"
import Thumbnail14 from "media/portfolios/thumbnails/14.png"
import Thumbnail15 from "media/portfolios/thumbnails/15.png"
import Thumbnail16 from "media/portfolios/thumbnails/16.png"
import Thumbnail17 from "media/portfolios/thumbnails/17.png"

export default function ThumbnailSlider() {
    return (
        <>
            <AutoScrollSlider wrapperClasses="mt-[70px]">
                {
                    [Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4, Thumbnail5, Thumbnail6, Thumbnail7, Thumbnail8, Thumbnail9].map((e, i) => (
                        <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4">
                            <div className="relative">
                                <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-50 rounded-[10px] group-hover:opacity-0 transition-opacity"></div>
                                <Image tabIndex={0} key={i} src={e} alt="thumbnails" className="rounded-[10px]" />
                            </div>
                        </div>
                    ))
                }
            </AutoScrollSlider>
            <AutoScrollSlider wrapperClasses="mt-[50px]" direction="backward">
                {
                    [Thumbnail10, Thumbnail11, Thumbnail12, Thumbnail13, Thumbnail14, Thumbnail15, Thumbnail16, Thumbnail17].map((e, i) => (
                        <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4">
                            <div className="relative">
                                <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-50 rounded-[10px] group-hover:opacity-0 transition-opacity"></div>
                                <Image tabIndex={0} key={i} src={e} alt="thumbnails" className="rounded-[10px]" />
                            </div>
                        </div>
                    ))
                }
            </AutoScrollSlider>
        </>
    )
}
