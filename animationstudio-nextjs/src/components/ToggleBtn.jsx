"use client"
// Next
import Link from "next/link"
// Components
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components"

const mainMenu = [
    ["Home", "/"],
    ["Why Us", "/why-us"],
    ["Portfolio", "/portfolio"],
    ["Services", "/"],
    ["Process", "/process"],
    ["Pricing", "/pricing"],
    ["Case Studies", "/case-studies"],
    ["Contact Us", "/contact-us"]
]

const servicesMenu = [
    ["2D Animation", "/2d-animation"],
    ["3D Animation", "/3d-animation"],
    ["Whiteboard Animation", "/whiteboard-animation"],
    ["Motion Graphics", "/motion-graphics"],
    ["Video Editing", "/video-editing"],
    ["Logo Animation", "/logo-animation"],
    ["Architectural Visualization", "/architectural-visualization"],
    ["CGI-VFX", "/cgi-and-vfx"],
    ["Infographics", "/infographics"],
    ["Hybrid & Cel", "/hybrid-&-cel-animations"]
]

export default function ToggleBtn() {
    return (
        <>
            <Sheet>
                <SheetTrigger className="inline-flex flex-col gap-2 ml-auto">
                    <span className={`block w-[50px] h-[6px] bg-white`}></span>
                    <span className={`block w-[50px] h-[6px] bg-white`}></span>
                </SheetTrigger>
                <SheetContent className="overflow-y-scroll">
                    <SheetHeader className="hidden">
                        <SheetTitle>Title</SheetTitle>
                        <SheetDescription>Description</SheetDescription>
                    </SheetHeader>
                    <ul className="list-none mt-5">
                        {
                            mainMenu.map(([text, link], i) => (
                                text === "Services" ? (
                                    <div key={i}>
                                        <Sheet>
                                            <SheetTrigger className="text-[30px] font-mono leading-loose font-semibold hover:text-red-700 transition-colors flex items-center">
                                                <span>Services</span>
                                            </SheetTrigger>
                                            <SheetContent className="overflow-y-scroll">
                                                <SheetHeader className="hidden">
                                                    <SheetTitle>Title</SheetTitle>
                                                    <SheetDescription>Description</SheetDescription>
                                                </SheetHeader>
                                                <ul className="list-none mt-5">
                                                    {
                                                        servicesMenu.map(([text, link], i) => (
                                                            <li key={i}>
                                                                <Link href={link} className="text-[20px] font-mono leading-loose font-semibold hover:text-red-700 transition-colors">
                                                                    {text}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </SheetContent>
                                        </Sheet>
                                    </div>
                                )
                                    :
                                    (
                                        <li key={i}>
                                            <Link href={link} className="text-[30px] font-mono leading-loose font-semibold hover:text-red-700 transition-colors">
                                                {text}
                                            </Link>
                                        </li>
                                    )
                            ))
                        }
                    </ul>
                </SheetContent>
            </Sheet>
        </>
    );
}