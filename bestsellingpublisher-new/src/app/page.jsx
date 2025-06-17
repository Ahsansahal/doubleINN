import {EnlistedLogo, Hero, Tradition} from "@/components";
// Next
import Image from "next/image";

// Media
import BannerImg from "media/homePage/homebanner.webp"
import Logos from "media/homePage/img2.webp"

export default function Home() {
  return (
    <main>
      <Hero
        title={`Start Selling Your Books Worldwide With Best <br class="mr-xl:block hidden"/> Selling Publisher `}
        desc="Best Selling Publisher specializes in transforming authors into bestsellers! We ensure that your book is showcased to audiences worldwide which boosts your visibility and increases revenue. Committed to maximize your book’s sales potential and return on investment, we employ strategic marketing, distribution, and promotion strategies that align with your book's unique strengths."
        containImg={BannerImg}
        logos={Logos}
        form={false}
        counter={true}
      />
      {/* <EnlistedLogo/>
      <div className="md:py-[70px] py-[50px]">
      <Tradition 
       title="Celebrating Your Wins"
       desc="Discover how your publications can be glorious with Best Selling Publisher."
      />
      </div> */}
      
    </main>
  );
}
