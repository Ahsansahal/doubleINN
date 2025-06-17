// Components
import { FrontEndForm } from "@/components"
// Next
import Image from "next/image"
import Link from "next/link"
// Media
import fb from "media/social/fb.svg"
import insta from "media/social/insta.svg"
import youtube from "media/social/youtube.svg"
import linkedin from "media/social/linkedin.svg"
import twitter from "media/social/twitter.svg"
import contactUsBoy from "media/contactUsBoy.png"

export default function ContactUs() {
    return (
        <section>
            <div className="py-[70px] text-foreground">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-x-5 gap-y-10">
                        <div>
                            <h2 tabIndex={0} className="text-[30px] md:text-[40px] xl:text-[50px] font-bold leading-snug">
                                Connect With Us
                            </h2>
                            <p className="text-[14px] xl:text-[16px] leading-relaxed mb-10">
                                Let's engage, Share ideas and explore together.
                            </p>
                            <div className="border-2 border-[#707070] p-5 rounded-md relative">
                                <FrontEndForm />
                                <ul className="list-none flex items-center gap-5 sm:absolute sm:right-5 sm:bottom-5 xs:justify-end xs:mt-5">
                                    {
                                        [
                                            [fb, "/"],
                                            [insta, "/"],
                                            [youtube, "/"],
                                            [linkedin, "/"],
                                            [twitter, "/"]
                                        ].map(([icon, link], i) => (
                                            <li key={i}>
                                                <Link href={link} className="w-[30px] h-[30px] bg-[#d51203] hover:bg-foreground flex items-center justify-center rounded-md">
                                                    <Image src={icon} alt="icon" className="max-w-[25px] h-[20px] object-contain" />
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Image src={contactUsBoy} alt="contactUsBoy" className="max-w-[90%] mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
