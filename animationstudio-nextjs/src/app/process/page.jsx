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
import Thumbnail2DAnimations from "media/portfolios/thumbnails/18.jpg"
import Thumbnail3DAnimations from "media/portfolios/thumbnails/19.jpg"
import ThumbnailWhiteboardAnimations from "media/portfolios/thumbnails/20.jpg"
import ThumbnailMotionAnimations from "media/portfolios/thumbnails/21.jpg"
export default function page() {
  return (
    <>
      <Hero
        src={process.env.NEXT_PUBLIC_SCARRED_VIDEO}
        title="The Extraordinary Art <br class='lg:block hidden'/> of Animation"
        desc="You might already know that animation plays a great role in getting your audience attention and maintaining a sound relationship with them. Tools like whiteboard animation and explainer videos help you in transmitting your company’s vision in the most effective and understandable manner. With compelling animations, you get the power to accurately describe your concepts."
        cta="Book an Intro Call"
      />
      <SuccessClients
        numbers={[
          {
            num: "11000+",
            text: "Projects",
          },
          {
            num: "1000 +",
            text: "Reviews",
          },
          {
            num: "30+",
            text: "5 Star ratings for animation service",
          },
          {
            num: "19",
            text: "International Awards",
          },
          {
            num: "$15M+",
            text: "revenue generations for Clients",
          },
          {
            num: "200M+",
            text: "Views on our clients Videos",
          },
        ]}
        title="Animated Video with Exceptional Results"
        desc="We thrive on creating value for our clients <br class='lg:block hidden'/> and boost their brands image in their <br class='md:block hidden'/> respective market."
      />
      <WeAre desc="<p>A 3D animation agency that crafts all the animations that your business is looking for, we thrive on providing unique and innovative animation solutions that match your brand’s identity.</p><p>At Video Animation, we work with a team that serves as the backbone of our company.</p><p>For each project we have a pool of talented experts that includes highly skilled animators, innovative thinkers and technical editors. When you partner with us you’ve chosen a studio that maintains a long term committed relationship and makes sure that you get the best outcomes for your business.</p>" />
      <Grid
        titie="Video Animation Process"
        excerpt="The Process Of <br/> Video Animation"
        content="<p>One of the most powerful solutions for your brand videos is animation, where we use cutting-edge techniques to explain your concepts in an attractive manner that ensures connectivity with your audience.</p><p>The process starts with writing a compelling script that outlines your message, next we create a storyboard that involves sketches and transition techniques to make the key scenes engaging.</p><p>Next our animation experts play with visual elements and characters using the latest software and digital tools. In the final stage we work on voiceover and sound effects for a dynamic experience. We focus on delivering a product that ensures viewers' attention towards your brand.</p>"
      />
      <HomeGrid />
      <FullViewVideo
        video={process.env.NEXT_PUBLIC_GRID_VIDEO_2}
        subTitle="Video Animation Process"
        overlay={true}
        title="All You Need to Know About Our <br class='hidden lg:block' /> Animation Process"
        desc="Whether you’re looking for Whiteboard animation, explainer video animation, or 2D & 3D animation videos, creation of animation is a long process and requires commitment and dedication from all departments, from researching and writing to storyboard and direction, followed by illustrations and animations to voiceovers and sound effects, we choose skilled artists to create something that is remarkable in every area. We ensure that the project is fully integrated with all techniques and elements, making it stand out and connect with the audience in the best way possible."
      />
      <Partners
        title="Drive Growth with Video Animation"
        desc="Our animation agency strives to drive success and value for clients, we’ve served and satisfied a decent clientele consisting of entrepreneurs, startup brands, and global corporations."
      />
      {/* <Portfolio
        title="The Major Animation Steps"
        desc="Our team offers a complete plan for your animation project, with the help of software and technical tools we create your animation that involves 3 most important steps."
        slides={
          [
            {
              thumbnail: ThumbnailWhiteboardAnimations,
              video: process.env.NEXT_PUBLIC_WHITEBOARD_ANIMATION,
              title: "Storyboarding",
              desc: "Once the writers are done with the script, we undergo the sketching of each scene of the video. The sketching serves as a tool of visualization to understand which scene is capable of audience attention and stands out.",
              cta: "Make an Animation",
              link: "/2d-animation"
            },
            {
              thumbnail: Thumbnail3DAnimations,
              video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
              title: "Voiceover",
              desc: "With the correct voice over and sound effects the project comes to life and creates a long-lasting impact. Once we’ve selected the voiceover artist for the video, then we add the compatible sound effects that help maintain the flow of the message.",
              cta: "Make an Animation",
              link: "/3d-animation"
            },
            {
              thumbnail: Thumbnail2DAnimations,
              video: process.env.NEXT_PUBLIC_SCARRED_VIDEO,
              title: "Animation",
              desc: "Starting with character movements, creation of objects and environments that gives a satisfying visual experience, we then work on transitions and lightning to make the video worthy of viewers’ attention.",
              cta: "Make an Animation",
              link: "/whiteboard-animation"
            }
          ]
        }
      /> */}
      <Portfolio/>
      <Industries
        title="The Six Stages of Animation Process"
        desc="No matter how lengthy your project is, our team puts all the magical ingredients to generate results. To create a video animation that adds value to your brand and boost its success, we undergo six major steps in this process."
        industries={[
          {
            media: Industry1,
            title: "Research & Script Writing",
            desc: "You’ll be working with our research team to get the best ideas and concepts that improve your brand’s identity, and then our professional writers would come up with multiple scripts that you may choose from.",
          },
          {
            media: Industry2,
            title: "Storyboarding",
            desc: "Before beginning the animation stage our team crafts various sketches for all the scenes to get a clear picture of which elements are best suitable for the project. It serves as a roadmap for our animators to align the message with the animation.",
          },
          {
            media: Industry3,
            title: "Style",
            desc: "When it comes to style it, we use various text, logos, designs and colors. We focus on using a style that separates itself from the competitors and at the same time creates an astonishing base for the video.",
          },
          {
            media: Industry4,
            title: "Voiceover",
            desc: "One of the most crucial stages for a compelling animation, which requires a fluent tone and affective voice that enhances the flow of the message. Secondly, we add playback music and sound effects that make it unforgettable.",
          },
          {
            media: Industry1,
            title: "Animation",
            desc: "After designing all required objects and characters, our passionate animators put all these items together with complete attention to detail, and create animation that supports all other elements in the best manner.",
          },
          {
            media: Industry2,
            title: "Post Production",
            desc: "This is also called the final editing stage, where we review the whole video from sound effects to animation techniques and color pallets. Our editors then complete all the final touches and transform your ideas into reality.",
          },
        ]}
      />
      <Process
        process={[
          {
            icon: Process1,
            title: "Time Management",
            desc: "<p>Animation is not an easy task; it is a long process that guarantees amazing results. By following each step, we make sure to deliver the project on an agreed date without any delays, which benefits the clients in staying ahead in the market.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process2,
            title: "Cost Effective",
            desc: "<p>It helps in reducing cost and avoids the need of unnecessary revisions and amendments. We focus on productivity to avoid waste and providing our clients the product worth their investment.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process3,
            title: "High Quality",
            desc: "<p>With each step, we keep on adding value and enhance the quality and effectiveness of the project. This ensures the final animation meets the client requirements and delivers results that go beyond their expectations.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
        ]}
      />
      <TypesOfVideos
        title="Six Important Attributes  <br className='hidden md:block' /> of Our Team"
        desc="<p>At Video Animation we work with a team that has served the animation industry for many years and collaborated with global brands in crafting innovative animation videos.</p>"
        types={[
          {
            media: TypesOfVideos1,
            title: "Innovators",
            desc: "For each project we choose the most imaginative designers.",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos2,
            title: "Technical Experts",
            desc: "We use all the technical tools and latest software for every project",
            color: "bg-[#89CDDF]",
          },
          {
            media: TypesOfVideos3,
            title: "Collaboration",
            desc: "We work closely with our clients to make sure their vision is aligned.",
            color: "bg-[#E098F9]",
          },
          {
            media: TypesOfVideos4,
            title: "Professionalism",
            desc: "Simplify complex ideas and convey information quickly and effectively.",
            color: "bg-[#BCD1B1]",
          },
          {
            media: TypesOfVideos5,
            title: "Adaptability",
            desc: "Our team is skilled at adapting all styles and designs of animation.",
            color: "bg-[#FEB13A]",
          },
          {
            media: TypesOfVideos1,
            title: "Client Centric",
            desc: "Open communication with clients is our first priority on each project.",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos1,
            title: "Innovators",
            desc: "For each project we choose the most imaginative designers.",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos2,
            title: "Technical Experts",
            desc: "We use all the technical tools and latest software for every project",
            color: "bg-[#89CDDF]",
          },
        ]}
      />
      <Reviews titie="Recognized by High-Tech Companies, <br class='md:block hidden'/>  Who Are Trusted Globally" />
      <FAQs
        items={[
          {
            title: "What's Important in the Process of Animation Creation?",
            content: "<p>The most important thing in this process is resonating with the brand’s identity, no matter how many steps there are in the process of animation. The message must perfectly align with the brand’s identity because this makes the video engaging.</p>",
          },
          {
            title: "How important is planning in the animation process? ",
            content: "<p>The animation process serves as a roadmap for crafting a product that ensures best results. Without the blueprint of what the final product might look like, you would be unable to produce something that is attractive. From conceptual research and script writing to storyboarding, all stages are crucial for production.</p>",
          },
          {
            title: "How long does it take to animate 1 minute of video?",
            content:
              "<p>It is a lengthy process; it requires various sets of skills and different artists who carry those skills on each stage of the project. It takes time to generate a professional animation video, however, it may take 10 to 15 days for a 1-minute video animation.</p>",
          },
          {
            title: "How long does the animation process take to complete?",
            content:
              "<p>It can take around 2 months of complete dedication and commitment on creating an explainer animation video. Depending on the length of the video the time duration to complete the animation project might increase due to complexities and other aspects.</p>",
          },
          {
            title: "Is the animation process flexible?",
            content:
              "<p>The animation process might get flexible if you want a video without voice over and sound effects. But, remember that each stage is of great importance in making an animation. However, preparing a final product in less time can cost you more and increase the number of revisions.</p>",
          },
        ]}
      />
      <Footer />
    </>
  )
}
