// Next
import Image from "next/image"
import Link from "next/link"
// Components
import { CTA } from "@/components"
// Media
import Logo from "media/lightLogo.svg"
import fb from "media/social/fb.svg"
import insta from "media/social/insta.svg"
import youtube from "media/social/youtube.svg"
import linkedin from "media/social/linkedin.svg"
import twitter from "media/social/twitter.svg"

export default function Footer() {
    return (
        <footer>
            <div className="bg-foreground text-background pt-[80px]">
                <div className="container">
                    <div className="md:flex md:items-center pb-[40px]">
                        <div className="md:mr-auto text-center md:text-left mb-5 md:mb-0">
                            <h2 tabIndex={0} className="text-[25px] sm:text-[20px] lg:text-[30px] xl:text-[35px] font-semibold leading-relaxed sm:leading-snug mb-2">
                                Want to Discover How Animated Videos Work?
                            </h2>
                            <p tabIndex={0} className="text-[14px] sm:text-[16px] leading-relaxed font-light">
                                You can always start off with our experts by your side. Book a FREE consultation today!
                            </p>
                        </div>
                        <CTA text="Book a Call Now!" variant="secondary" className="text-background mx-auto md:mx-0" />
                    </div>
                </div>
                <div className="border-b-[2px] border-white"></div>
                <div className="py-[70px]">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-5 gap-y-10">
                            <div className="col-span-12 xl:col-span-4 sm:text-center xl:text-left">
                                <Link href="/" className="inline-block">
                                    <Image src={Logo} alt="Logo" />
                                </Link>
                                <p className="text-[14px] 2xl:text-[16px] leading-relaxed font-light mt-5 sm:max-w-[90%] sm:mx-auto xl:mx-0">
                                    Creativity knows no bounds at Infinity Animations, where we specialize in delivering exclusive Infinity Animations services to our customers. Our team of skilled animators and storytellers work tirelessly to bring ideas to life.
                                </p>
                            </div>
                            <div className="col-span-6 sm:col-span-4 xl:col-span-2">
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal">Quick Links</h4>
                                <ul className="list-none mt-5">
                                    {
                                        [
                                            ["Home", "/"],
                                            ["Why Us", "/why-us"],
                                            ["Portfolio", "/portfolio"],
                                            ["Process", "/process"],
                                            ["Pricing", "/pricing"],
                                            ["Case Studies", "/case-studies"],
                                            ["Contact Us", "/contact-us"]
                                        ].map(([text, link], i) => (
                                            <li key={i}>
                                                <Link href={link} className="text-[14px] 2xl:text-[16px] leading-loose font-light hover:text-red-700 transition-colors">
                                                    {text}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-span-6 sm:col-span-4 xl:col-span-3">
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal">Services</h4>
                                <ul className="list-none mt-5">
                                    {
                                        [
                                            ["3D Animation", "/3d-animation"],
                                            ["2D Animation", "/2d-animation"],
                                            ["Whiteboard Animation", "/whiteboard-animation"],
                                            ["Motion Graphics", "/motion-graphics"],
                                            ["Video Editing", "/video-editing"],
                                            ["Logo Animation", "/logo-animation"],
                                            ["Architectural Visualization", "/architectural-visualization"],
                                            ["CGI-VFX", "/cgi-and-vfx"],
                                            ["Infographics", "/infographics"],
                                            ["Hybrid & Cel", "/hybrid-&-cel-animations"]
                                        ].map(([text, link], i) => (
                                            <li key={i}>
                                                <Link href={link} className="text-[14px] 2xl:text-[16px] leading-loose font-light hover:text-red-700 transition-colors">
                                                    {text}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-span-12 sm:col-span-4 xl:col-span-3">
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal">Resource Augmentation</h4>
                                <ul className="list-none mt-5">
                                    {
                                        [
                                            ["Hire 2D Animator", "/"],
                                            ["Hire 3D Animator", "/"],
                                            ["Hire Animator", "/"],
                                            ["Hire Game Designer", "/"],
                                            ["Hire UI/UX Designer", "/"]
                                        ].map(([text, link], i) => (
                                            <li key={i}>
                                                <Link href={link} className="text-[14px] 2xl:text-[16px] leading-loose font-light hover:text-red-700 transition-colors">
                                                    {text}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal mt-5">Follow Links</h4>
                                <ul className="list-none mt-5 flex items-center gap-5">
                                    {
                                        [
                                            [fb, "/"],
                                            [insta, "/"],
                                            [youtube, "/"],
                                            [linkedin, "/"],
                                            [twitter, "/"]
                                        ].map(([icon, link], i) => (
                                            <li key={i}>
                                                <Link href={link} className="text-[14px] 2xl:text-[16px] leading-loose font-light hover:text-red-700 transition-colors">
                                                    <Image src={icon} alt="icon" />
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-[2px] border-white"></div>
                <div className="py-5">
                    <div className="container">
                        <div className="md:flex justify-between">
                            <p className="text-[14px] text-center md:text-left mb-5 md:mb-0 2xl:text-[16px] leading-relaxed font-light">
                                © Copyright 2024 - Animation Studios
                            </p>
                            <ul className="list-none flex divide-x-2 justify-center md:justify-end">
                                {
                                    [
                                        ["Privacy Policy", "/"],
                                        ["Terms & Conditions", "/"]
                                    ].map(([text, link], i) => (
                                        <li key={i} className="first:pr-5 last:pl-5">
                                            <Link href={link} className="text-[14px] 2xl:text-[16px] leading-none font-light hover:text-red-700 transition-colors">
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}