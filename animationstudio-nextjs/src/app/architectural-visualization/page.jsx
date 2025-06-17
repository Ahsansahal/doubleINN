// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/architectural-visualization-page/grid/1.png"
import GridImg2 from "media/architectural-visualization-page/grid/2.png"
import GridImg3 from "media/architectural-visualization-page/grid/3.png"
import GridImg4 from "media/architectural-visualization-page/grid/4.png"
import GridImg5 from "media/architectural-visualization-page/grid/5.png"
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
        src={process.env.NEXT_PUBLIC_ARCHITECTURAL}
        title="Your Perfect Choice for <br class='hidden md:block' /> Architectural 3D Visualization "
        desc="Bring your architectural designs to life with our architectural 3D visualization and rendering company.We create perfect exterior and interior visualization and renderings. Even if you have little input ideas and data, we can deliver original exterior designs, realistic 3D floor plans and models for your company.  Our architectural visualization company also provides best solutions for real estate."
        cta="Book a Free Call"
      />
      <SuccessClients
        title="Award Winning  Architectural  Visualization Studios"
        desc="Sign up today and let your ideas come to life"
        numbers={[
          {
            num: "17000+",
            text: "Projects",
          },
          {
            num: "30 +",
            text: "5 Star ratings for animation service",
          },
          {
            num: "$11M+",
            text: "revenue generations for Clients",
          },
          {
            num: "1350+",
            text: "Reviews",
          },
          {
            num: "19",
            text: "International Awards",
          },
          {
            num: "200M+",
            text: "Views on our clients videos",
          },
        ]}
      />
      <WeAre desc="<p>An architectural visualization company that uses photorealistic technology to create realistic images for your real estate projects. We offer 3D images and videos for your architecture projects that add life to your real estate ideas.</p> <p>All architectural visualization companies can craft real estate objects for residential projects, but they may fail in showcasing all key areas and dimensions of properties and floor plans. That’s where we come in with our 360 angle renderings, interactive infrastructure presentations and models for your complex residential projects.</p>" />
      <Grid
        titie="Choosing From Architectural Visualization "
        content="<p>If you are looking for architectural visualization companies to help you build the right landscape model for your project, then you’ve come to the right Architectural Visualization Studio.</p><p>Your dream residence needs the most exquisite and phenomenal 3D interior and exterior designs so you can construct your home in the best possible way.</p><p>With us you’ll get the most profound experience where you can examine the models from every dimension, explore the lighting effects, furniture, floor plans, and all surroundings that best fits your residence.</p>"
        media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
        excerpt="Companies to Build <br/> Your Dream Residence"
      />
      <FullViewVideo
        subTitle="Architectural Visualization"
        title="How Do We Create These  Magical <br class='hidden md:block' /> Architectural Visualizations?"
        desc="First we transform your inputs and ideas into 3D images, then we add color and lighting to make your project stand out. Next we use the latest software and tools to make your project realistic by achieving the right measurements to make the project ready for informed decisions. From creating high end 3d architectural visualization models to delivering your desired outputs each step is given our team's dedicated attention"
      />
      <Partners
        title="Renowned Brands Satisfied with Our 3D Architectural Visualization Services"
        desc="We pride on our team’s continuous efforts on delivering accurate 3D architectural visualization solutions to all our clients."
      />
      {/* <Portfolio
        title="Build Dynamic Spaces with <br class='hidden md:block' /> Architecture Visualization Company"
        desc="We can manage virtual designing of your real estate project. Get the best valued services for your homes with our architectural visualization company."
        slides={[
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
            title: "Interior/Exterior Visualizations",
            desc: "Detailed attention to each object and area of your project, from interior walls, decorations, furniture, layouts to exterior landscape objects.",
            link: "Create Architectural Visualization",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
            title: "Virtual Tours",
            desc: "Experience complete virtual tours of your preferred designs and models with the help of our 3D architecture visualization studios experts.",
            link: "Create Architectural Visualization",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
            title: "360 Degree Images",
            desc: "Get a 360-degree view, that helps you understand what the final architecture would look like.",
            link: "Create Architectural Visualization",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
            title: "Interior/Exterior Visualizations",
            desc: "Detailed attention to each object and area of your project, from interior walls, decorations, furniture, layouts to exterior landscape objects.",
            link: "Create Architectural Visualization",
          },
        ]}
      /> */}
      <Portfolio />
      <Industries
        title="Industries We Excelled With Architectural Visualization Services "
        desc="At Video Animation, our team is well equipped with all the necessary tools and software for delivering best architectural visualization service to each sector"
        industries={[
          {
            media: Industry1,
            title: "Architects",
            desc: "Designers and architects require different designs and models for showcasing concepts to clients. We’ve catered a decent number of architects with our 3D architectural visualization service",
          },
          {
            media: Industry2,
            title: "Real Estate",
            desc: "Generated 100’s of visual illustrations and models for real estate developers, created exceptional virtual tours to increase buyers and sellers and helped them market their real estate projects.",
          },
          {
            media: Industry3,
            title: "Construction Companies",
            desc: "We’ve built interactive visuals for entire construction plans while examining any potential challenges or hurdles that may affect the property’s worth.",
          },
          {
            media: Industry4,
            title: "Interior Designers",
            desc: "From furniture styles to art pieces and floor plans, we create models and prototypes for interior designers who then evaluate and make construction decisions accordingly. ",
          },
          {
            media: Industry1,
            title: "Healthcare ",
            desc: "We develop detailed architectural 3D visualization for emergency rooms, operation theaters, waiting areas and more. Healthcare sector deserves the best architecture to deliver proper service to patients.",
          },
          {
            media: Industry2,
            title: "Government Agencies",
            desc: "Serving the government with massive and detailed future city development plans. Created each object with attention, keeping in mind all elements that impact the city’s environment and ecosystem.",
          },
        ]}
      />
      <Process
        process={[
          {
            icon: Process1,
            title: "Design Accuracy",
            desc: "<p>Our team of expert 3D architecture model designers focuses on accuracy and viability of the project; we deliver accurate designs with 360-degree view to ensure reliability of our models</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process2,
            title: "Enhanced Visualization",
            desc: "<p>With virtual tours, and 3D V-R designs and visuals you can have the perfect idea of how the project might look after completion. </p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process3,
            title: "Cost Saving",
            desc: "<p>By delivering 3D architecture visualizations, we help our clients in identifying and addressing any potential problems or hurdles that may appear during the construction phase, which saves their cost.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
        ]}
      />
      <TypesOfVideos
        title="A 3D Architectural Visualization  Studio <br className='hidden md:block 2xl:hidden' /> with Various Offerings"
        desc="You can choose from a range of architectural visualization videos that best suit your project"
        types={[
          {
            media: TypesOfVideos1,
            title: "Interior Rendering",
            desc: "From interior lighting to designing and decorations experience the magic of interior rendering",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos2,
            title: "Exterior Visualizations",
            desc: "Build your home’s exterior concept and models and witness the stunning exteriors",
            color: "bg-[#89CDDF]",
          },
          {
            media: TypesOfVideos3,
            title: "Virtual Tours",
            desc: "We make your real estate virtual tours as interactive as you have never seen before.",
            color: "bg-[#E098F9]",
          },
          {
            media: TypesOfVideos4,
            title: "Digital Animation",
            desc: "From building demonstrations to architectural walkthroughs, we deliver stunning animations",
            color: "bg-[#BCD1B1]",
          },
          {
            media: TypesOfVideos5,
            title: "3D Presentations ",
            desc: "Create your real estate project presentations and marketing materials to attract clients",
            color: "bg-[#FEB13A]",
          },
          {
            media: TypesOfVideos1,
            title: "Photorealism",
            desc: "Create high quality photo realistic images and videos of your projects with our team of Visual artists",
            color: "bg-[#F0DCA9]",
          },
        ]}
      />
      <Reviews titie="Partnered with Top-rated Global Brands  <br className='hidden md:block' /> whose products you regularly consume" />
      <FAQs
        items={[
          {
            title: "Why is architectural Visualization important?",
            content:
              "<p>Architectural visualization companies create concepts that communicate directly to your clients.</p> <p>It enables designers to collaborate with architects and create magical prototypes, enabling them in achieving client’s satisfaction</p>",
          },
          {
            title: "How much is 3D visualization in the USA?",
            content:
              "<p>It would cost you around $50- $550, depending on the quality of the product rendering. For more complex and massive designs the price might increase to $5000</p>",
          },
          {
            title: "How much does Arch Viz cost?",
            content:
              "<p>Many architectural visualization companies fall under the price between $1000-$2000/image for a basic project, and would increase to $3000 due to complexities. While if you are looking for a video it would cost you around $5000-$10000</p>",
          },
          {
            title: "How much does architectural visualization cost?",
            content:
              "<table class='table-auto w-full text-left'><thead ><tr><th>Types of Services</th><th>Cost</th></tr></thead> <tbody><tr></tr><tr><td>Animation</td><td>$6000-$12000/image</td></tr><tr><td>3D Floor Plans</td><td>$600-$1500/image</td></tr><tr><td>Product Rendering</td><td>$150-$600/image</td> </tr>   <tr><td>Interiors</td><td>$900-$1800/image</td></tr></tbody></table>",
          },
          {
            title: "what is 3D rendering cost per hour",
            content:
              "<p>It would cost you around $50 to $150 on hourly basis The price may differ in developing countries because the charge less, you may see major price difference due to specific locations of Production studios</p>",
          },

        ]}
      />
      <Footer />
    </>
  )
}
