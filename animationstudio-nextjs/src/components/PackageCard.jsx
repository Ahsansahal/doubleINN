// JSON
import data from "@/json/packages.json"
// Next
import Image from "next/image"
// Media
import check from "media/check.svg"

export default function PackageCard() {
    return (
        <section>
            <div className="py-[80px] text-foreground">
                <div className="container">
                    <div className="text-center">
                        <h2 tabIndex={0} className="text-[30px] md:text-[40px]  xl:text-[45px] font-semibold mb-2 leading-tight capitalize">
                            Our Plans
                        </h2>
                        <p tabIndex={0} className="text-[14px] xl:text-[16px] font-medium leading-relaxed md:max-w-[80%] mx-auto">
                            We have something in store for everyone, and that something is affordable services
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-[40px]">
                        {
                            data.map(({ name, price, list }) => (
                                <div key={price} className="px-5 py-10 border-2 border-[#F5090B] rounded-xl overflow-hidden relative z-10 text-black/90 group hover:bg-gradient-to-r hover:from-[#FF2D4B] hover:to-[#F5090B] transition-all hover:cursor-pointer">
                                    <div>
                                        <h3 className="text-[30px] font-bold leading-snug group-hover:text-white">
                                            {name}
                                        </h3>
                                        <p className="text-[70px] text-[#F5090B] font-semibold leading-snug mt-4 group-hover:text-white">
                                            ${price}
                                        </p>
                                    </div>
                                    <div className="h-[230px] px-3 py-5">
                                        <ul>
                                            {list.map((e, i) => (
                                                <li key={i} className="text-[16px] font-normal flex items-center gap-2 leading-loose group-hover:text-white">
                                                    <Image src={check} alt="check" className="group-hover:brightness-0 group-hover:invert" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}