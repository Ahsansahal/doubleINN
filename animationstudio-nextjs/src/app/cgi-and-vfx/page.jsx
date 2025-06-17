// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/cgi-and-vfx-page/grid/1.png"
import GridImg2 from "media/cgi-and-vfx-page/grid/2.png"
import GridImg3 from "media/cgi-and-vfx-page/grid/3.png"
import GridImg4 from "media/cgi-and-vfx-page/grid/4.png"
import GridImg5 from "media/cgi-and-vfx-page/grid/5.png"
import Process1 from "media/process/1.svg"
import Process2 from "media/process/2.svg"
import Process3 from "media/process/3.svg"
import Industry1 from "media/industries/1.png"
import Industry2 from "media/industries/2.png"
import Industry3 from "media/industries/3.png"
import Industry4 from "media/industries/4.png"
import TypesOfVideos1 from "media/types-of-videos/1.png"
import TypesOfVideos2 from "media/types-of-videos/2.png"
import TypesOfVideos3 from "media/types-of-videos/3.png"
import TypesOfVideos4 from "media/types-of-videos/4.png"
import TypesOfVideos5 from "media/types-of-videos/5.png"

export default function page() {
  return (
    <>
      <Hero
        src={process.env.NEXT_PUBLIC_CGI_AND_VFX}
        title="Rise Above with <br class='hidden md:block'/> CGI 3D Animation <br class='hidden md:block'/>Company"
        desc="Your ideas and visions are about to transform into a perfectly realistic CGI animation, with the expertise of our exceptional CGI artists. We offer you something that other CGI animation companies do not possess: the best collaborative CGI animation services where your imagination is our top priority. Experience the ultimate taste of VFX with our CGI animation studios."
        cta="Book a Free Call"
      />
      <SuccessClients
        title="Join us Today and Let Our Experts Create Engaging VFX and CGI Animation for You"
        desc=""
        numbers={[
          {
            num: "18000+",
            text: "Projects",
          },
          {
            num: "1400 +",
            text: "Reviews",
          },
          {
            num: "34+",
            text: "5 Star ratings  for animation service",
          },
          {
            num: "21",
            text: "International Awards",
          },
          {
            num: "$12M+",
            text: "Revenue generations for Clients",
          },
          {
            num: "200M+",
            text: "Views on our clients videos",
          },
        ]}
      />
      <WeAre
        desc="<p>A globally recognized, CGI animation company that leads in crafting VFX, CGI and animation among all CGI animation studios.</p> <p>From modeling to texturing, creation of marvelous animations to post production and quality control our CGI animation studio offers world class solutions for clients of all sectors. </p><p>Looking for CGI animation companies to create innovative concepts for building your brand’s character? Want virtual 3D environments with astonishing VFX editing? </p><p>Our team of professionals consists of the best visual arts presenters and award-winning 3D CGI animation experts.</p><p>By choosing us you can experience surreal art of CGI 3D animation that transcends live-action.</p>
"
      />
      <Grid
        titie="Why do you need VFX or 3D CGI Animation?"
        content="<p>Producing high quality CGI in animation with perfect VFX editing attracts audience’s attention and increases engagement, due to intriguing visual effects that create a realistic sensation. </p><p>Both CGI animation videos and detailed VFX editing help in creating futuristic and fantastic sci-fi worlds that beats people's imaginations and ideas. </p><p>These technologies are cost effective as they eliminate the need of location shoots, expensive props and objects for projecting high end scenes and shots.</p>"
        media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
      />
      <FullViewVideo
        subTitle="CGI & VFX"
        title="The Best Among all  the <br class='hidden md:block'/> CGI AnimationCompanies"
        desc="At video animation, we work with a dedicated team  that not only produces high quality animations  but engages in all elements of production and post production, from designing  models to providing complete attention to clients demands and objectives. That’s what makes us different from any other VFX company; where you do not need to drop  your ideas and dreams; they deserve to be shown to the audience."
      />
      <Partners
        title="Brands We Boosted with our <br class='hidden md:block'/> VFX Editing & CGI 3D Animation"
        desc="Our Experts of CGI in animation helped us maintain great relations with our valued brands, by delivering the best services to our clients."
      />
      {/* <Portfolio
        title="Animate your world with <br class='hidden md:block'/>  CGI Animation and VFX Animation"
        desc="With great expertise of our VFX Editor and CGI 3D animation artists, we offer different types of CGI animation services:"
        slides={[
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
            title: "Motion Capture CGI",
            desc: "This technique creates a realistic illusion of character movements, which makes your video games or films even more immersive.",
            link: "Create CGI & VFX",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
            title: "2D Animation CGI",
            desc: "Modern and traditional techniques for 2D and 3D CGI animation, from hand drawn sketches to creating models and backgrounds on Adobe software.",
            link: "Create CGI & VFX",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
            title: "3D Animation CGI ",
            desc: "Our team uses animation tools such as Cinema 4D and Autodesk for 3D characters in games and advertisements.",
            link: "Create CGI & VFX",
          },
          {
            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
            title: "Motion Capture CGI",
            desc: "This technique creates a realistic illusion of character movements, which makes your video games or films even more immersive.",
            link: "Create CGI & VFX",
          },
        ]}
      /> */}
      <Portfolio />
      <Industries
        title="Industries We’ve Conquered with <br class='hidden md:block'/> VFX Editors of Our CGI Animation Company "
        desc="CGI in animation makes videos become more realistic and attractive. We’ve served each industry with our best CGI 3D animation tools and resources. "
        industries={[
          {
            media: Industry1,
            title: "Video Games",
            desc: "Our VFX editor makes sure to deliver glamourous 3D characters and sci-fi worlds that gives a realistic experience to players. Each scene and sequence require detailed VFX editing and animation effects to enhance the visuals.",
          },
          {
            media: Industry2,
            title: "Movies and Series",
            desc: "From animated cartoon shows and films to sci-fi series, we’ve delivered the most exquisite CGI in animation to our clients. We thrive on seamlessly matching our CGI characters and worlds with the storyline.",
          },
          {
            media: Industry3,
            title: "Advertising",
            desc: "Worked with several advertising and marketing agencies, and satisfied them with eye catching visual outputs and stunning effects. To get audience captivated by your commercials and campaigns your ads require the best VFX",
          },
          {
            media: Industry4,
            title: "Automotive Sector",
            desc: "We’ve created a decent number of automotive 3D designs and videos for global car manufacturers, by including CGI in animation of cars for a 360 view of finished vehicles and prototypes.",
          },
          {
            media: Industry1,
            title: "Training and E-Learning",
            desc: "Delivered High end 3D animated videos to organizations and e-learning platforms. Nowadays students and interns are more interested in digital learning and training materials, because it's easy to access and understand.",
          },
          {
            media: Industry2,
            title: "Real Estate",
            desc: "Created virtual home tours and architecture model designs for some of the renowned real estate companies. At our CGI animation studios, we create prototype properties in 3D visual formats for boosting client’s business.",
          },
        ]}
      />
      <Process
        process={[
          {
            icon: Process1,
            title: "Realistic View",
            desc: "<p>Both CGI and VFX 3D animation make videos and movies more satisfying and realistic to watch and hence increase engagement. The realistic effects created by CGI and VFX are used in multiple sectors like healthcare, education and real estate.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process2,
            title: "Creativity at Its Best",
            desc: "<p>Our creative team of experts are able to reimagine extraterrestrial spaces and can also bring every small object to life no matter how impossible it looks. With the help of CGI, you get the creative freedom to transform your ideas.</p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
          {
            icon: Process3,
            title: "Audience Engagement",
            desc: "<p>Get the maximum audience attention towards your business, films or advertisements; by partnering with us you can increase audience engagement on your products. These technologies provide a fantastic experience to your audience. </p>",
            ctaText: "Get an Estimate",
            link: "javascript:;",
          },
        ]}
      />
      <TypesOfVideos
        title=" Use CGI and Animation <br class='hidden md:block'/> VFX in Your Videos and Content"
        desc="A CGI animation agency that stands alone among all the VFX companies; we’ve got a complete range of CGI and VFX video services which you may choose from"
        types={[
          {
            media: TypesOfVideos1,
            title: "Television Shows",
            desc: "Get the most remarkable VFX editing solutions with our VFX company",
            color: "bg-[#F0DCA9]",
          },
          {
            media: TypesOfVideos2,
            title: "Animated Films",
            desc: "Step aside and let us create a 3D CGI animated cartoon short video for you.",
            color: "bg-[#89CDDF]",
          },
          {
            media: TypesOfVideos3,
            title: "Feature Films",
            desc: "We transform your storylines by integrating CGI action sequences in your films",
            color: "bg-[#E098F9]",
          },
          {
            media: TypesOfVideos4,
            title: "Music Video",
            desc: "We integrate VFX in animation and enhance your music video to the next level",
            color: "bg-[#BCD1B1]",
          },
          {
            media: TypesOfVideos5,
            title: "Corporate Videos",
            desc: "Looking for 3D CGI effects to boost your product launches and make presentations, sign up with us",
            color: "bg-[#FEB13A]",
          },
          {
            media: TypesOfVideos1,
            title: "Documentaries",
            desc: "Change the landscape of your historical documentaries with our VFX Company",
            color: "bg-[#F0DCA9]",
          },
        ]}
      />
      <Reviews
        titie="Highly Regarded By Global Brands <br class='hidden md:block'/> Who Produce Top Quality Goods"
      />
      <FAQs
        items={[
          {
            title: "Why does VFX and CGI cost so much?",
            content:
              "<p>The cost is high due to the level of expertise that comes with the package, a team of professionals with years of experience in crafting CGI and VFX that attracts and engages the audience. It takes months to create minutes long video with perfect CGI integration.</p>",
          },
          {
            title: "How much does CGI actually cost?",
            content:
              "<p>The cost depends upon the clients’ requirements such as complex characters, designs and graphics with complete attention to detail. It would cost you around $1000 to $1500 per minute for a CGI video.</p>",
          },
          {
            title: "Is CGI more expensive than live-action?",
            content:
              "<p>CGI is more cost effective than live-action, because CGI does not require a lot of resources such as crew members, actors, shooting locations, props and costume etc. With the help of CGI, you can create all these characters and objects and create high quality 2D & 3D animations.</p>",
          },
          {
            title: "Which is better, VFX or CGI?",
            content:
              "<p>VFX is better due to its ability to allow integration in live action footage, practical effects and virtual enhancements, In production environments CGI is not flexible to make changes as it costs more and is highly time consuming.</p>",
          },
          {
            title: "What is the average VFX budget?",
            content:
              "<p>It would cost you around $1000-$2000/minute for basic package, and $2000-$5000/minute for Intermediate package.</p>",
          },
          {
            title: "Why CGI and VFX services?",
            content:
              "<p>VFX contains different techniques that integrate with acted scenes and footage, and it similarly has the ability to implement all that on CGI elements. <br/> Which helps filmmakers create action and sci-fi scenes that look impossible without a big budget but these technologies create wonders.</p>",
          }
        ]}
      />
      <Footer />
    </>
  )
}
