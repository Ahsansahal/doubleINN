import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components"

export default function FAQs({ items }) {
    return (
        <section>
            <div className="py-[80px] text-foreground">
                <div className="container">
                    <h2 tabIndex={0} className="mb-8 md:mb-14 text-center text-[30px] md:text-[40px] lg:text-[50px] font-bold leading-normal">
                        Frequently Asked Question
                    </h2>
                    <Accordion type="single" collapsible className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                        {
                            items?.map(({ title, content }, i) => (
                                <AccordionItem key={i} value={`item-${i + 1}`} className="h-auto">
                                    <AccordionTrigger>
                                        {title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="[&>*:not(:last-child)]:mb-5" dangerouslySetInnerHTML={{ __html: content }} />
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}