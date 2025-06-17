// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"

export default function Grid({
    titie,
    content,
    excerpt = "Show content <br /> that stands out.",
    media
}) {
    return (
        <section>
            <div className="py-[80px] text-foreground">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-10">
                        <div className="col-span-12 md:col-span-5">
                            {titie && <h2 tabIndex={0} className="xs:text-[30px] sm:text-[35px] xl:text-[40px] font-semibold mb-4 leading-snug" dangerouslySetInnerHTML={{ __html: titie }} />}
                            <p tabIndex={0} className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#BFBFBF] font-semibold leading-normal mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
                            <CTA text="Book An Intro Call" className="hover:!bg-[#d51203] !text-background" />
                        </div>
                        <div className="col-span-12 md:col-span-7">
                            <div className="text-[15px] md:text-[14px] 2xl:text-[15px] leading-relaxed text-justify xl:text-left [&>*:not(:last-child)]:mb-5" dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                    {media && <div className="grid grid-cols-12 gap-5 mt-[100px]">
                        <div className="col-span-6 md:col-span-4">
                            <Image src={media[0]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" />
                        </div>
                        <div className="col-span-6 md:col-span-8">
                            <Image src={media[1]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" />
                        </div>
                        <div className="col-span-12">
                            <Image src={media[2]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" />
                        </div>
                        <div className="col-span-6 md:col-span-6">
                            <Image src={media[3]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" />
                        </div>
                        <div className="col-span-6 md:col-span-6">
                            <Image src={media[4]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" />
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    )
}
