import {Audience, Cards, EnlistedLogo, Hero, Publishing, Questioners, Tradition} from "@/components";
// Next
import Image from "next/image";

// Media
import BannerImg from "media/homePage/homebanner.webp";
import Logos from "media/homePage/img2.webp";


const QuestionersData = [
  {
    title: "Experience and Quality",
    desc: "We are a team of experienced publishers who are focused on one thing, providing excellent quality without exception.",
  },
  {
    title: "Industry Experts",
    desc: "As one of the best selling book publishers, our goal is to provide solutions that are optimal and groundbreaking.",
  },
  {
    title: "Range of Services",
    desc: "As one of the best selling publishers, our services vary from book writing that whispers your story to the world, SEO content that puts you on the map, articles, magazines, and web copy that speaks volumes. Not to mention press releases and scripts that make waves — we've got all your writing needs covered! ",
  },
  {
    title: "Goal-Driven",
    desc: "Best Selling Publisher is well-organized in its priorities. The satisfaction of our clients is our only and ultimate objective.",
  },
  {
    title: "Affordable Packages",
    desc: "Don’t you deserve a taste of victory too? We want you to realize all that you are capable of writing. Let us use reasonably priced digital publishing to realize your writing ambitions.",
  },
  {
    title: "Passion and Creativity",
    desc: "And guess what? Regarding passion and originality, we don't mind working through the night. Our desire is like an unquenchable candle. So what are you waiting for? ",
  },
];
const CardData = [
  {
    indexing: true,
    classes: "bg-white shadow-lg px-3 rounded-lg relative pt-[40px] pb-[40px] mt-[40px] transition-all duration-300 ease-in-out hover:!bg-[#40BEE2] hover:!text-white",
    cta: false,
    stepText: "",
    content: [
      {
        title: "Ebook Publishing Services",
        desc: "With our expert guidance, your ebook will be professionally formatted, designed, and distributed to reach a wider audience. We ensure seamless integration with major ebook platforms, maximizing your visibility and potential sales. From manuscript to digital format, we handle every step of the process with precision and care.",
      },
      {
        title: "Amazon Book Publishing",
        desc: `We specialize in <a href="https://bestsellingpublisher.com/amazon-book-publishing" rel="dofollow"> Amazon Publishing Services </a> to provide comprehensive support for authors looking to thrive in the competitive online marketplace. From formatting to optimization, we handle every aspect to ensure your book stands out and reaches its full potential on Amazon. With expertise in Kindle Direct Publishing (KDP) setup and keyword optimization, we maximize your book's reach and potential sales.`,
      },
      {
        title: "Book Editing and Publishing",
        desc: "With our dedicated team of editors tirelessly enhancing your manuscript's quality, and our publishing experts managing formatting, cover design, and distribution logistics, your book is in capable hands. Whether refining prose or perfecting layout, we guarantee every aspect reflects the professionalism and excellence your work deserves. Partner with us for comprehensive book editing services and publishing services, and let us bring your literary masterpiece to life.",
      },
      {
        title: "Book Marketing",
        desc: "We're dedicated to making your book shine in the crowded marketplace! With customized strategies, we ensure your book reaches the right audience through effective promotion across multiple channels. Our experienced team not only specializes in publishing best sellers but also excels in employing strategic techniques to publicize your book. ",
      },
      {
        title: "Book Cover Design",
        desc: "We aim to create covers that not only catch the eye but also tell a story. Using creativity and attention to detail, we ensure your cover stands out on shelves and in online stores. Our team of book cover designers collaborate with you to understand the book’s theme, its characters, and tone to perfectly capture the essence of your book.",
      },
      {
        title: "Book Printing",
        desc: `From paperback to hardcover, we offer many options to suit your needs in our <a href="https://bestsellingpublisher.com/book-printing" rel="dofollow">book printing services.</a> Using cutting-edge technology, we take pride in delivering top-grade printing quality to ensure every detail of your book is reproduced with clarity and precision.`,
      },
    ],
  },
];
export default function Home() {
  return (
    <main>
      <Hero
        title={`Start Selling Your Books Worldwide With Best <br class="mr-xl:block hidden"/> Selling Publisher `}
        desc="Best Selling Publisher specializes in transforming authors into bestsellers! We ensure that your book is showcased to audiences worldwide which boosts your visibility and increases revenue."
        containImg={BannerImg}
        imgClass="lg:absolute lg:bottom-[10px] xl:relative xl:bottom-0 lg:top-[-2px] top-0"
        logos={Logos}
        form={false}
        counter={true}
      />
      <EnlistedLogo />
      <div className="lg::py-[70px] md:py-[50px] py-[30px]">
        <Tradition title="Celebrating Your Wins" desc="Discover how your publications can be glorious with Best Selling Publisher." />
      </div>
      <Audience />
      <Questioners subTitle="Time Again Folks, Do You Want to Be Our Next Happy Author?" title="Here’s Why We Are The Best Book Publishers For Hire" data={QuestionersData}/>
      <Publishing />
      <Cards
      title="Explore the Services We Offer"
      desc="We take pride in providing a remarkable range of services. That said, it’s your moment to make your <br class='mr-lg:block hidden' /> publishing dreams come to life."
      gridsClasses="lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 !gap-x-8"
      cta={true}
      data={CardData}
      />
    </main>
  );
}
