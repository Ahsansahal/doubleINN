// Components
import { FAQs, Footer, HomeGrid, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import Industry1 from "media/industries/1.png"
import Industry2 from "media/industries/2.png"
import Industry3 from "media/industries/3.png"
import Industry4 from "media/industries/4.png"
import Process1 from "media/process/1.svg"
import Process2 from "media/process/2.svg"
import Process3 from "media/process/3.svg"
import TypesOfVideos1 from "media/types-of-videos/1.png"
import TypesOfVideos2 from "media/types-of-videos/2.png"
import TypesOfVideos3 from "media/types-of-videos/3.png"
import TypesOfVideos4 from "media/types-of-videos/4.png"
import TypesOfVideos5 from "media/types-of-videos/5.png"

export default function page() {
  return (
    <>
      <Hero
        src={process.env.NEXT_PUBLIC_SCARRED_VIDEO}
        title="Find endless engaging <br class='hidden md:block' /> 2D animations here that  <br class='hidden md:block' /> suit your taste."
        desc="Discover a world of attractive 2D animations tailored to your preferences at Video Animation. From humorous shorts to mesmerizing art pieces, a 2D animation company that caters everyone. Explore our vast collections and find your next favorite animated masterpiece."
      />
      <SuccessClients
        numbers={[
          {
            num: "1500+",
            text: "Projects",
          },
          {
            num: "1300+",
            text: "Reviews",
          },
          {
            num: "500M+",
            text: "Views on our client videos",
          },
          {
            num: "16+",
            text: "International Awards",
          },
          {
            num: "$18M+",
            text: "revenue generations for Clients",
          },
          {
            num: "50+",
            text: "5 Star ratings for animation service",
          },
        ]}
        title="Recognized by some of the industry’s top Brands and leaders."
        desc="Our serious commitment to excellence and years of hard work have earned us this distinction."
      />
      <WeAre desc="<p>A 2D animation Company that reflects your customers' aspirations. Our customized animations humanize your brand, making it relatable and memorable. Let's transform your message into a breathtaking visual experience.</p><p>We are committed to empowering the virtual art and design industry through terrific animation services. Our services and offerings, from generation of ideas to visuals and project competition, all are highly capable to cater each customer's needs.</p><p>Our team of skilled artists is able to tackle any project. We select the perfect talent for each project, ensuring the best quality results.</p>" />
      <Grid
        titie="Why Us"
        excerpt="Show content <br/> that stands out."
        content="<p>Video Animation is your go-to 2D animation studio for cost-effective, full-cycle video production. Our 2D animation services and minimal resource requirements can bring your creative vision to life faster.</p><p>We create original and compelling 2D animations that boosts your brand’s awareness. Our engaging content helps you connect with your audience on an emotional level.</p><p>We don't just provide 2D animation services; we build universal experiences. From intricate product demonstrations to memorable brand identities, we transform your vision into stunning visuals that leave a lasting impact.</p><p>Whether you desire the charm of 2D or the realism of 3D, our collaborative approach ensures your ideas come to life flawlessly.</p>"
      />
      <HomeGrid />
      <FullViewVideo
        video={process.env.NEXT_PUBLIC_GRID_VIDEO_2}
        subTitle="Video Animation"
        overlay={true}
        title="A globally trusted <br class='hidden md:block' /> 2D animation Company"
        desc="We specialize in streamlined 2D digital animation production, creating phenomenal and high-quality videos at low costs. Our 2D animation service ensures you the best possible results with efficiency. By combining engaging visuals with compelling storytelling, we create animations that resonate deeply with your audience. From concise explainers to logo narratives, our digital 2D animation is carefully curated for the viewer to easily understand the message, build a connection and drive results."
      />
      <Partners
        title="Top-Rated 2D Animation Agency"
        desc="We've partnered with startups to fuel their growth. Our approach extends beyond design and animation; we focus on making best 2D animation to gain long-term trust."
      />
      {/* <Portfolio
        title="Collaborate with the Experts"
        desc="Join us and create the most advanced and top-notch visuals and boost your success."
        slides={[
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
            title: "Explainer Videos",
            desc: "Transform and present your complex ideas and products through clear and engaging visuals.",
            link: "Create 2D Explainers",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
            title: "Character Animation",
            desc: "Now you can Create relatable and memorable characters to represent your brand or tell a story.",
            link: "Design 2D Characters",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
            title: "Kinetic Typography",
            desc: "Partner with us and Animate text to create visually striking and impactful messages.",
            link: "Do animated typography",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
            title: "Explainer Videos",
            desc: "Transform and present your complex ideas and products through clear and engaging visuals.",
            link: "Create 2D Explainers",
          },
        ]}
      /> */}
      <Portfolio />
      <Industries
        title="Areas Of 2D Expertise"
        desc="Niches where we served with focus and diligence resulting in clients conquering their desired aspirations"
        industries={[
          {
            media: Industry1,
            title: "Education & E-learning",
            desc: "Our 2D animation transforms online learning by capturing attention and simplifying complex subjects. We create engaging visuals that help viewers to grasp concepts faster, retain knowledge and engage in a proactive way.",
          },
          {
            media: Industry2,
            title: "Advertising",
            desc: "Creating memorable and relatable characters was not easy before, we offer powerful solutions for advertising and marketing that grabs attention, tells compelling stories, and drives brand engagement.",
          },
          {
            media: Industry3,
            title: "Training",
            desc: "From military training to medical procedures, providing safe and effective training 2D animated materials. Allowing professionals to practice difficult scenarios, build confidence, and enhance their skills.",
          },
          {
            media: Industry4,
            title: "Gaming & Entertainment",
            desc: "With our highly skilled team you can experience the lifeblood of gaming and thrilling immersive gaming universes.  Acknowledging the boundaries of entertainment, captivating audiences with stunning visuals and innovative gameplay.",
          },
          {
            media: Industry1,
            title: "Architecture",
            desc: "By visualizing the technical landscapes, we help architects identify potential challenges and produce clear designs, helping them predict the right outcomes and making informed decisions.",
          },
          {
            media: Industry2,
            title: "Medical & Healthcare",
            desc: "Offering digital arts and visuals that give insight into human anatomy and medical procedures. From medical education to patient communication, the best solutions for development of innovative treatments.",
          },
        ]}
      />
      <Process
        process={[
          {
            icon: Process1,
            title: "High-impactful & Budget friendly",
            desc: "<p>Our 2D animation services offer exceptional value without sacrificing quality. The clients can avail high quality digital visuals and cost-effective production as we focus on building long-term trust.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process2,
            title: "Crucial for Attention",
            desc: "<p>Capturing digital attention is crucial. We help individuals and companies excel at grabbing viewers and keeping them engaged. Our 2D animated content is designed to be visually compelling and memorable.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process3,
            title: "Search Engine Rankings",
            desc: "<p>Our team excels at video SEO optimization, and skilled at producing video content that captures the maximum benefits of search engines, primarily focusing on attracting more traffic and enhancing your website’s visibility.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
        ]}
      />
      <TypesOfVideos
        title="We are your complete <br className='hidden md:block' /> 2D animation Company"
        desc="<p>Our 2D animation studio specializes in crafting timeless visuals. With mastery over classic animation styles, we create unique and impactful animations that perfectly capture your brand's essence.</p>"
        types={[
          {
            media: TypesOfVideos1,
            title: "Career Videos",
            desc: "Showcase your professional journeys, share career advice and boost personal branding.",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos2,
            title: "Ecommerce Videos",
            desc: "Tell brand stories, create attractive visuals for your products and drive sales.",
            color: "bg-[#89CDDF]",
          },
          {
            media: TypesOfVideos3,
            title: "Animated GIFs",
            desc: "Seek attention with animated graphics for use in websites and emails.",
            color: "bg-[#E098F9]",
          },
          {
            media: TypesOfVideos4,
            title: "Explainer Videos",
            desc: "Simplify complex ideas and convey information quickly and effectively.",
            color: "bg-[#BCD1B1]",
          },
          {
            media: TypesOfVideos5,
            title: "Social Media Videos",
            desc: "Reach millions of viewers with innovative clips for platforms like Instagram, TikTok, and YouTube.",
            color: "bg-[#FEB13A]",
          },
          {
            media: TypesOfVideos1,
            title: "Animated Presentations",
            desc: "Glamorize your presentations with dynamic visuals and engaging storytelling.",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos1,
            title: "Career Videos",
            desc: "Showcase your professional journeys, share career advice and boost personal branding.",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos2,
            title: "Ecommerce Videos",
            desc: "Tell brand stories, create attractive visuals for your products and drive sales.",
            color: "bg-[#89CDDF]",
          },
        ]}
      />
      <Reviews titie="Partnered with the renowned <br class='hidden md:block' /> and leading Global Brands" />
      <FAQs
        items={[
          {
            title: "How much does a 30 second 2D animation cost?",
            content: "<p>It would cost you around $2000-$4500 for a 30-seconds 2D animation video. Factors like numbers of revision and project complexity can influence the final price.</p>",
          },
          {
            title: "How long does a 2D animation company take to produce a 2D video?",
            content: "<p>Creating a 5–10-minute 2D animation can take at least 4-6 months. The exact timeline depends on factors like team size, project’s complication and custom requirements.</p>",
          },
          {
            title: "Why should we get a 2D animated video?",
            content:
              "<p>2D animation simplifies the complex. By combining visual storytelling with clear explanations, we transform highly anticipated ideas into engaging content. Our animations combine the power of motion graphics, graphic design, and character animation to create mind blowing and informative videos.</p>",
          },
          {
            title: "Why is 2d animation service good?",
            content:
              "<p>2D animation offers unmatched efficiency, affordability and versatility. It's the ideal choice for businesses who are looking for impactful video content that delivers results.</p>",
          },
        ]}
      />
      <Footer />
    </>
  )
}
