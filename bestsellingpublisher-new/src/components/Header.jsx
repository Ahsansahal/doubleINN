// Next
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Media
import LogoImage from "media/logo.png"


export default function Header() {
  return (
    <header>
      <div>
        <div className="container">
          <div className="flex items-center py-5">
            <Link href="/">
              <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]" alt="SEO company" />
            </Link>{" "}
            {/* Logo */}
          </div>
        </div>
      </div>
    </header>
  );
}
