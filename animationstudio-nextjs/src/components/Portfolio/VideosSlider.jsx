// Components
import { AutoPlaySlider } from "@/components"
// Media
import ModalVideo from "../ModalVideo"

export default function VideosSlider({ slides }) {
    return (
        <AutoPlaySlider wrapperClasses="mt-[70px] videos3dSlider" arrowsCss="grayscale">
            {
                slides.map((e, i) => (
                    <div key={i} className={`grow-0 shrink-0 basis-[85%] lg:basis-[65%] min-w-0 pl-4`}>
                        <div className="relative rounded-3xl h-full">
                            <ModalVideo thumbnailImage={e.thumbnail} videoSource={e.video} />
                            <div className="absolute top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-end px-[20px] xl:px-[40px] pb-[20px] contentBox translate-x-0 transition-transform duration-1000 opacity-100">
                                <h2 tabIndex={0} className="font-mono xs:text-[18px] sm:text-[20px] lg:text-[24px] leading-snug mb-2">
                                    {e.title}
                                </h2>
                                <p tabIndex={0} className="xs:text-[12px] sm:text-[14px] xs:text-justify xl:max-w-[90%] leading-relaxed mb-2">
                                    {e.desc}
                                </p>
                                <div tabIndex={0} dangerouslySetInnerHTML={{
                                    __html: `<a href=${e.link} class="xs:text-[14px] sm:text-[16px] font-semibold leading-relaxed flex items-center gap-3">
                                        <span>${e.cta}</span>
                                        <img src="/ctaLightArrow.svg" alt="CTAArrow" width="18" height="16" />    
                                    </a>` }} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </AutoPlaySlider>
    )
}