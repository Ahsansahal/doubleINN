// Components
import { FAQs, Footer, Hero, PackageCard, Reviews, SuccessClients, WeAre } from "@/components"


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
      <WeAre
        desc="<p>A 2D animation Company that reflects your customers' aspirations. Our customized animations humanize your brand, making it relatable and memorable. Let's transform your message into a breathtaking visual experience.</p><p>We are committed to empowering the virtual art and design industry through terrific animation services. Our services and offerings, from generation of ideas to visuals and project competition, all are highly capable to cater each customer's needs.</p><p>Our team of skilled artists is able to tackle any project. We select the perfect talent for each project, ensuring the best quality results.</p>"
      />
      <PackageCard />
      <Reviews
        titie="Partnered with the renowned <br class='hidden md:block' /> and leading Global Brands"
      />
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
