// Next
import Image from "next/image"
import Link from "next/link"
// Components
import { ToggleBtn } from "@/components"
// Media
import Logo from "media/lightLogo.svg"

export default function Header() {
    return (
        <header>
            <div className="py-[40px] absolute left-0 right-0 top-0">
                <div className="container">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image src={Logo} alt="logo" priority={true} className="xs:max-w-40" />
                        </Link>
                        <ToggleBtn />
                    </div>
                </div>
            </div>
        </header>
    )
}