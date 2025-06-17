// Components
import { ContactUs, FAQs, Footer, Hero, Reviews } from "@/components"


export default function page() {
  return (
    <>
      <Hero
        src={process.env.NEXT_PUBLIC_SCARRED_VIDEO}
        title="Find endless engaging <br class='hidden md:block' /> 2D animations here that  <br class='hidden md:block' /> suit your taste."
        desc="Discover a world of attractive 2D animations tailored to your preferences at Video Animation. From humorous shorts to mesmerizing art pieces, a 2D animation company that caters everyone. Explore our vast collections and find your next favorite animated masterpiece."
      />
      <ContactUs />
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
  );
}
