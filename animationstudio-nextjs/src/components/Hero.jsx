// Components
import { CTA } from "@/components"

export default function Hero({
    src = process.env.NEXT_PUBLIC_HOME_HERO_VIDEO,
    title,
    desc,
    cta = "Get a Quote",
    overlay = false
}) {
    return (
        <>
            <section>
                <div className="relative h-[600px] -z-10">
                    <video tabIndex={0} preload="none" loop autoPlay muted playsInline aria-label="Video Player" className="max-w-full w-full h-full object-cover object-center">
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {overlay && <div className="absolute top-0 left-0 right-0 bottom-0 bg-foreground opacity-70"></div>}
                </div>
            </section>
            <section>
                <div className="bg-foreground text-background py-[40px]">
                    <div className="container">
                        <div className="grid grid-cols-12 items-center gap-y-5  gap-x-4 md:text-center lg:text-left">
                            <div className="col-span-12 lg:col-span-5 xl:col-span-4">
                                {title && <h1 tabIndex={0} className="xs:text-[20px] leading-relaxed sm:text-[25px] md:text-[35px] lg:text-[25px] 2xl:text-[30px] font-bold capitalize" dangerouslySetInnerHTML={{ __html: title }} />}
                            </div>
                            <div className="col-span-12 lg:col-span-7 xl:col-span-5">
                                {desc && <p tabIndex={0} className="text-[14px] 2xl:text-[15px] leading-[24px] text-justify md:text-center lg:text-left [&>*:not(:last-child)]:mb-2" dangerouslySetInnerHTML={{ __html: desc }} />}
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:mt-[40px] xl:mt-0">
                                <CTA text={cta} className="md:mx-auto" variant="secondary" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}