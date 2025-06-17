// Next
import Image from "next/image"
// Media
import Process1 from "media/process/1.svg"
import Process2 from "media/process/2.svg"
import Process3 from "media/process/3.svg"

export default function Process({
    process = [
        {
            icon: Process1,
            title: "Creative Solutions",
            desc: "<p>Our animated video services set new trends, from brainstorming to final touches, our video animation company pushes boundaries, crafting unique video ideas that captivate your target audience with a long-lasting effect.</p><p>Narratives we tell are creative, yet simply spot-on. Want to discover the creative angle for your branding?</p>",
            ctaText: "Discover How",
            link: "javascript:;"
        },
        {
            icon: Process2,
            title: "Seamless Delivery",
            desc: "<p>Your project is assigned to a dedicated team of experts who manage the entire production process, ensuring consistent communication and clear deadlines.</p><p>Relax and focus on your core business. We handle everything, delivering a polished final product that exceeds your expectations.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;"
        },
        {
            icon: Process3,
            title: "Exceptional Results",
            desc: "<p>Let us help you obtain award-worth results.</p><p>From character designs to spellbinding animations, everything is cooked in a way to deliver a visually beautiful and immersive experience. We always focus on quality, and our commitment to excellence is evident in every video we create.</p>",
            ctaText: "Book a FREE Call",
            link: "javascript:;"
        }
    ]
}) {
    return (
        <section>
            <div className="bg-foreground py-[70px]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                            process.map(({ title, desc, ctaText, link, icon }, i) => (
                                <div key={i} className="text-foreground bg-background rounded-2xl px-[20px] py-[40px]">
                                    <Image tabIndex={0} src={icon} alt="icon" />
                                    <h3 tabIndex={0} className="xs:text-[18px] sm:text-[20px] lg:text-[18px] xl:text-[22px] font-medium leading-snug mb-4 mt-5 capitalize">
                                        {title}
                                    </h3>
                                    <div tabIndex={0} className="text-[15px] lg:text-[14px] xl:text-[16px] xs:text-justify leading-relaxed [&>*:not(:last-child)]:mb-3 mb-4 text-justify" dangerouslySetInnerHTML={{ __html: desc }} />
                                    <div tabIndex={0} dangerouslySetInnerHTML={{
                                        __html: `<a href="${link}" class="xs:text-[14px] sm:text-[16px] font-semibold leading-relaxed flex items-center gap-3 text-[#0156FF]">
                                            <span>${ctaText}</span>
                                            <img src="/ctaBlueArrow.svg" alt="CTAArrow" width="18" height="16" />    
                                        </a>` }} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
