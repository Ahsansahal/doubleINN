// Next
import Image from "next/image"
// Media
import Client1 from "media/clients/1.svg"
import Client2 from "media/clients/2.svg"
import Client3 from "media/clients/3.svg"
import Client4 from "media/clients/4.svg"
import Client5 from "media/clients/5.svg"

export default function SuccessClients({
    numbers = [
        {
            num: "2000+",
            text: "Projects"
        },
        {
            num: "1400 +",
            text: "Reviews"
        },
        {
            num: "$500 M+",
            text: "Views on our client’s videos"
        },
        {
            num: "22",
            text: "International Awards",
            link: "See Reviews →"
        },
        {
            num: "$11M+",
            text: "Revenue generations for Clients",
            link: "See Reviews →"
        },
        {
            num: "5★",
            text: "Ratings for animation service"
        }
    ],
    title = "High Quality Video animation <br className='hidden md:block' /> services from our Video <br className='hidden md:block' /> Animation Company",
    desc = "We’re award-winning animators highly skilled in providing the best video animation service with a combined experience of over 10 years in the industry."
}) {
    return (
        <section>
            <div className="py-[80px]">
                <div className="container">
                    <div className="text-foreground">
                        <h2 tabIndex={0} className="text-center text-[16px] 2xl:text-[18px] font-medium leading-snug xs:leading-normal">
                            Trusted by 450+ World-Class Startups and Established Enterprises!
                        </h2>
                        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 mt-8 mb-14 lg:mb-20">
                            {
                                [Client1, Client2, Client3, Client4, Client5].map((e, i) => (
                                    <Image tabIndex={0} key={i} src={e} alt="clients" className="xs:max-w-[35%] lg:max-w-[16%] xl:max-w-full" />
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
                            <div className="lg:col-span-5 text-center lg:text-left">
                                <h2 tabIndex={0} className="xs:text-[27px] sm:text-[24px] xl:text-[28px] 2xl:text-[35px] font-semibold mb-4 leading-relaxed capitalize" dangerouslySetInnerHTML={{__html: title}} />
                                {desc && <p tabIndex={0} className="text-[15px] 2xl:text-[16px] xl:pr-[35px] font-medium leading-relaxed" dangerouslySetInnerHTML={{__html: desc}} />}
                            </div>
                            <div className="lg:col-span-7 grid xs:grid-cols-2 grid-cols-3 gap-4">
                                {
                                    numbers.map((e, i) => (
                                        <div tabIndex={0} key={i} className="border-l-2 border-l-black text-black py-2 pl-4">
                                            <h3 className="text-[25px] md:text-[30px] xl:text-[35px] font-bold leading-relaxed mb-1">{e.num}</h3>
                                            <p className="xs:text-[13px] sm:text-[13px] 2xl:text-[16px] font-semibold leading-relaxed capitalize">{e.text}</p>
                                            {e.link && <div tabIndex={0} dangerouslySetInnerHTML={{ __html: `<a href="javascript:;" class="xs:text-[13px] sm:text-[14px] xl:text-[16px] font-semibold leading-relaxed capitalize">${e.link}</a>` }} />}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}