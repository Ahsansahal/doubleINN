import Link from "next/link";
import {CTA, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Sheet, SheetContent, SheetTrigger} from "@/components";
import Image from "next/image";
import LogoImage from "media/logo.png";
import SeoWriting from "media/images/newimg/SEO-Writing.png";
import ArticleWriting from "media/images/newimg/Article-Writing.png";
import MagazineWriting from "media/images/newimg/magazine-writing.png";
import WebCopyWriting from "media/images/newimg/Web-Copy-Writing.png";
import PressRelease from "media/images/newimg/Press-Release.png";
import ScriptWriting from "media/images/newimg/Script-Writing.png";
import Marketing from "media/images/newimg/marketing.png";
import Publication from "media/images/newimg/publication.png";
import Printing from "media/images/newimg/printing.png";
import BookCover from "media/images/newimg/book-cover.png";

// import BookEditing from "media/images/newimg/book-editing.svg"
export default function Header() {
  return (
    <header>
      <div>
        <div className="container ">
          <div className="flex items-center py-6 md:border-b-[0px] border-b-[1px] border-black">
            <Link href="/">
              <Image src={LogoImage} className="xl:max-w-[150px] max-w-[150px]" alt="SEO company" />
            </Link>{" "}
            {/* Logo */}
            <div className="ml-auto mr-5 hidden lg:block">
              <nav>
                <NavigationMenu>
                  <NavigationMenuList className="flex gap-2 2xl:gap-[15px]">
                    {[
                      ["Home", "/"],
                      ["About", "/about-us"],
                      [
                        "Writing Services",
                        [
                          [Marketing, "Marketing", "/book-marketing"],
                          [Publication, "Publication", "/publication"],
                          [Printing, "Printing", "/book-printing"],
                          [BookCover, "Cover Design", "/book-cover-design"],
                          [SeoWriting, "SEO Writing", "/local-seo-services"],
                          [ArticleWriting, "Article Writing", "/nationwide-seo"],
                          [MagazineWriting, "Magazine Writing", "/white-label-seo-services"],
                          [ScriptWriting, "Book Editing", "/on-page-seo-services"],
                          [WebCopyWriting, "Web Copy Writing", "/ecommerce-seo"],
                          [PressRelease, "Press Release", "/google-services"],
                          [ScriptWriting, "Script Writing", "/google-ads-ppc"],
                        ],
                      ],
                      ["Genre", "/genre"],
                      ["Case Studies", "/case-studies"],
                      ["Contact Us", "/contact-us"],
                    ].map(([text, link], i) => (
                      <NavigationMenuItem key={i}>
                        {typeof link === "string" ? (
                          <Link href={link} className="text-[14px] xl:text-[16px] font-semibold hover:text-red-700 transition-colors">
                            {text}
                          </Link>
                        ) : (
                          <>
                            <NavigationMenuTrigger className="text-[14px] xl:text-[16px] focus:!bg-transparent !py-0 px-1 font-semibold hover:text-red-700 transition-colors">
                              Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="w-[500px] max-w-[600px]  overflow-hidden bg-white p-5 !z-[9999999] relative">
                                <div className="grid grid-cols-12 gap-5 py-3 ">
                                  <div className="col-span-12 p-5">
                                    <ul className="columns-2 group">
                                      {link.map(([imgIcon, text, link], i) => (
                                        <li key={i} className="mb-5 flex items-center gap-2  group-hover:bg-[#f7f7f7]">
                                          <Image src={imgIcon} className="filter brightness-50" alt="Best Selling Publisher Icon" width={40} height={40} />
                                          <Link href={link} className="text-[12px] xl:text-[16px] font-medium hover:text-red-700 transition-colors ">
                                            {text}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  {/* <div className="col-span-4 rounded-[25px] ">
                                    <Image src={MenuImage} alt="SEO COMPANY" className="w-[320px] h-[270px]" />
                                  </div> */}
                                </div>
                              </div>
                            </NavigationMenuContent>
                          </>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>{" "}
            {/* Desktop Menu */}
            <div className="lg:hidden ml-auto sm:mr-5">
              <Sheet>
                <SheetTrigger asChild>
                  <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="mb-10">
                    <Image src={LogoImage} className="xl:max-w-[200px] max-w-[150px]" alt="SEO company" />
                  </div>{" "}
                  {/* Logo */}
                  <nav>
                    <ul className="grid grid-cols-1 gap-5">
                      {[
                        ["Home", "/"],
                        ["About", "/about-us"],
                        [
                          "Writing Services",
                          [
                            [Marketing, "Marketing", "/book-marketing"],
                            [Publication, "Publication", "/publication"],
                            [Printing, "Printing", "/book-printing"],
                            [BookCover, "Cover Design", "/book-cover-design"],
                            [SeoWriting, "SEO Writing", "/local-seo-services"],
                            [ArticleWriting, "Article Writing", "/nationwide-seo"],
                            [MagazineWriting, "Magazine Writing", "/white-label-seo-services"],
                            [ScriptWriting, "Book Editing", "/on-page-seo-services"],
                            [WebCopyWriting, "Web Copy Writing", "/ecommerce-seo"],
                            [PressRelease, "Press Release", "/google-services"],
                            [ScriptWriting, "Script Writing", "/google-ads-ppc"],
                          ],
                        ],
                        ["Genre", "/genre"],
                        ["Case Studies", "/case-studies"],
                        ["Contact Us", "/contact-us"],
                      ].map(([text, link], i) => (
                        <li key={i}>
                          {typeof link === "string" ? (
                            <>
                              <Link href={link} className=" text-[14px] xl:text-[16px]   font-medium hover:text-red-700 transition-colors">
                                {text}
                              </Link>
                            </>
                          ) : (
                            <>
                              <Sheet>
                                <SheetTrigger>{text}</SheetTrigger>
                                <SheetContent side="left">
                                  <ul className="">
                                    {link.map(([imgIcon, text, link], i) => (
                                      <li key={i} className="mb-5 flex items-center gap-4 border-b-[1px] pb-2 border-b-[#e8e8e8]">
                                        <Image src={imgIcon} className="filter brightness-50" alt="Best Selling Publisher Icon" width={40} height={40} />
                                        <Link href={link} className="text-[14px] xl:text-[16px] font-medium hover:text-red-700 transition-colors ">
                                          {text}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </SheetContent>
                              </Sheet>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <CTA text={"800-781-9093"} variant="icon" className="mt-10 !w-full rounded-md !bg-[#40BEE2] h-[40px] text-center" icon={false} /> {/* Desktop Menu */}
                </SheetContent>
              </Sheet>
            </div>
            <CTA text={"800-781-9093"} variant="icon" className="xs:hidden rounded-none !bg-[#40BEE2] h-[40px] xl:px-10 " icon={false} /> {/* Desktop Menu */}
          </div>
        </div>
      </div>
    </header>
  );
}
function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
