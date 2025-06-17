// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/hybrid-&-cel-animations-page/grid/1.png"
import GridImg2 from "media/hybrid-&-cel-animations-page/grid/2.png"
import GridImg3 from "media/hybrid-&-cel-animations-page/grid/3.png"
import GridImg4 from "media/hybrid-&-cel-animations-page/grid/4.png"
import GridImg5 from "media/hybrid-&-cel-animations-page/grid/5.png"
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
                src={process.env.NEXT_PUBLIC_HYBRID_AND_CEL}
                title="Connect With Your <br class='hidden md:block' /> Audience with Best <br class='hidden md:block' /> Hybrid Animation"
                desc="Looking for ways to increase traffic on your website and capture audience attention? We’ve got just the right thing for you, our attractive hand-drawn cel animation and hybrid animation services that will make your videos exceptionally engaging, win more attention and trust in your brand."
            />
            <SuccessClients
                title="Get 100M+ Views on Videos <br class='hidden lg:block' /> with Hybrid Animation Studio"
                desc="We let you transform your ideas into realistic videos that connect you with your audience."
                numbers={[
                    {
                        num: "15000+",
                        text: "Projects",
                        link: ""
                    },
                    {
                        num: "15",
                        text: "International Awards",
                        link: ""
                    },
                    {
                        num: "$17M+",
                        text: "revenue generations for Clients",
                        link: ""
                    },
                    {
                        num: "1300 +",
                        text: "Reviews",
                        link: ""
                    },
                    {
                        num: "35+ ",
                        text: "5 Star ratings for animation service ",
                        link: ""
                    },
                    {
                        num: "100M +",
                        text: "Views on our clients videos",
                        link: ""
                    }
                ]}
            />
            <WeAre
                desc="We’re a renowned Cel and hybrid animation studio, producing high end videos by combining the best of both worlds. Our team of designers has years of experience in crafting both 2D and 3D cel shaded animation videos that deliver exactly what the audience is looking for which is compelling and relatable content."
            />
            <Grid
                titie="Why Hybrid Animation <br class='md:block hidden'/> & Cel Animation"
                content="<p>With the combination of traditional and cel animation, you can produce live action hybrid animated videos.  These add depth to storytelling and enrich character development. They would make your brand compelling and stand out in an overcrowded market. Offering phenomenal visuals, cel animation and hybrid animation appeal to a broader audience. </p>"
                excerpt="is Important for <br class='md:block hidden'/> Your Videos?"
                media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
            />
            <FullViewVideo
                subTitle="Hybrid Animation"
                title="Focus Driven Hybrid Animation Studio"
                desc="At Video Animation we propose different solutions to every client. We believe that each client has unique aspirations. Therefore, we focus on delivering stunning traditional cel animation with the essence of 2D and 3D hybrid animation. <span class='h-3 block'></span> Even though the cel animation process is lengthy and time consuming, we make sure that the final video aligns with the client requirements and hence increases overall brand worth."
            />
            <Partners
                title="Satisfied Clients with our Cel Animation Services"
                desc="Let us give you some cel animation examples that we crafted for our clients; from Cartoons and animes to music videos and artistic films, we pride ourselves on providing the best Cel animation"
            />
            {/* <Portfolio
                title=" Hybrid and Cel Animation Examples and Types"
                desc="We’ve got all types of animations in our store for achieving attractive and the most remarkable results for our customers."
                slides={
                    [
                        {
                            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                            title: "Rotoscoping ",
                            desc: "A type of animation where we use live action footage as a source of story and then customize it by creating effective cel animation to style objects and characters with the help of our highly skilled animators and artists.",
                            link: "Create Hybid & Cel Animation"
                        },
                        {
                            video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
                            title: "Hybrid Animation Stop Motion:",
                            desc: "Crafting perfectly hand-drawn characters and puppets, then placing objects with the flavor of stop motion for creating detailed background. And finally with the help of Cel animation we add life to our characters.",
                            link: "Create Hybid & Cel Animation"
                        },
                        {
                            video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
                            title: "3D Elements",
                            desc: "Combining 3D models and objects such as hair, dresses, props and with cel animation for a realistic view, and integrating 3D effects like weather, and magical colors to create a world full of animation.",
                            link: "Create Hybid & Cel Animation"
                        },
                        {
                            video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                            title: "Rotoscoping ",
                            desc: "A type of animation where we use live action footage as a source of story and then customize it by creating effective cel animation to style objects and characters with the help of our highly skilled animators and artists.",
                            link: "Create Hybid & Cel Animation"
                        }
                    ]
                }
            /> */}
            <Portfolio />
            <Industries
                title="Making our Mark on Industries with Hybrid and Cel Animation Services"
                desc="We pride on ourselves on transforming various industries with our expertise in traditional animation."
                industries={
                    [
                        {
                            media: Industry1,
                            title: "Television & Film",
                            desc: "We offer a versatile approach to building storytelling, visual arts and character designing, whether it is animated feature videos or films, our team’s continued hard work has contributed in the making of successful animes."
                        },
                        {
                            media: Industry2,
                            title: "Marketing",
                            desc: "Created compelling Hybrid Gifs with engaging characters and visual effects for advertising agencies and contributed in drawing more eyeballs on Facebook, TikTok and Pinterest etc."
                        },
                        {
                            media: Industry3,
                            title: "Gaming",
                            desc: "Our 3D and 2D professional animators have worked with well-known game developers and crafted captivating cinematics and environments that enhanced the game characters’ visibility and attributes."
                        },
                        {
                            media: Industry4,
                            title: "Fashion",
                            desc: "One of our main sectors due to immense competition and worldwide brands, where we craft videos for product launches and multiple campaigns, with animations that relate with the audience."
                        },
                        {
                            media: Industry1,
                            title: "Music Videos",
                            desc: "From animated music videos to artistic and innovative visuals, we have produced dozens of high-quality music videos with attention to detail towards all elements that make the videos colorful and attractive to watch."
                        },
                        {
                            media: Industry2,
                            title: "Corporate",
                            desc: "Communicating corporate vision and tasks in a compelling way is essential for uniting an organization towards the same goals; we offer video presentations with proper cel animation layers to increase attention."
                        }
                    ]
                }
            />
            <Process
                process={
                    [
                        {
                            icon: Process1,
                            title: "Appealing Visuals",
                            desc: "<p>From Hand drawn characters, and digital 3D modeling of environments, to stop motion effects and perfect lights, all these elements produce visual richness and create an appealing and attractive visual experience that engages the audience</p>",
                            ctaText: "Get an Estimate",
                            link: "javascript:;"
                        },
                        {
                            icon: Process2,
                            title: "Emotional Connection",
                            desc: "<p>The audience stops at videos and content that is relatable to their experiences; when you combine cel animation with thought provoking storytelling it forms a deep connection with your audience and creates a genuine impact on them</p>",
                            ctaText: "Get an Estimate",
                            link: "javascript:;"
                        },
                        {
                            icon: Process3,
                            title: "Versatility",
                            desc: "<p>No matter what your target audience is, by using Hybrid and Cel animation, you have the power to communicate to a wider audience, engaging and catering the older audience with hand drawn at the same time capturing younger audience with 3D and digital animation </p>",
                            ctaText: "Get an Estimate",
                            link: "javascript:;"
                        }
                    ]
                }
            />
            <TypesOfVideos
                title="Choose Your Style of Video with Our Hybrid Animation Studio"
                types={
                    [
                        {
                            media: TypesOfVideos1,
                            title: "Animated Documentaries",
                            desc: "Looking to create a historical documentary? Join us and create your masterpiece",
                            color: "bg-[#F0DCA9]"
                        },
                        {
                            media: TypesOfVideos2,
                            title: "E-Learning",
                            desc: "Generate the best e-learning videos with attractive animation for your channel.",
                            color: "bg-[#89CDDF]"
                        },
                        {
                            media: TypesOfVideos3,
                            title: "Short films",
                            desc: "Get your 2D animated short films at best rates with us.",
                            color: "bg-[#E098F9]"
                        },
                        {
                            media: TypesOfVideos4,
                            title: "Music Video",
                            desc: "Amaze your audience by creating a glamorous 3D music video.",
                            color: "bg-[#BCD1B1]"
                        },
                        {
                            media: TypesOfVideos5,
                            title: "Products video",
                            desc: "Start now and get a stunning promotional video for your beauty products.",
                            color: "bg-[#FEB13A]"
                        },
                        {
                            media: TypesOfVideos1,
                            title: "HealthCare",
                            desc: "Create an animated fitness routine video and educate your audience. ",
                            color: "bg-[#F0DCA9]"
                        },
                        {
                            media: TypesOfVideos1,
                            title: "Animated Documentaries",
                            desc: "Looking to create a historical documentary? Join us and create your masterpiece",
                            color: "bg-[#F0DCA9]"
                        },
                        {
                            media: TypesOfVideos2,
                            title: "E-Learning",
                            desc: "Generate the best e-learning videos with attractive animation for your channel.",
                            color: "bg-[#89CDDF]"
                        }
                    ]
                }
            />
            <Reviews
                titie="Trusted by International Brands That <br/> Creates Value for You"
            />
            <FAQs items={[
                {
                    title: "What is the cost of Cel animation?",
                    content: "It depends on the scale of the project and complex nature; the cost may range from $3000 to $10000. However, for longer animated videos the cost could get higher, the higher the length the more detailed video."
                },
                {
                    title: "How much time does it take to create a cel animation video?",
                    content: "The process is highly time consuming, starting from hand drawn art and then transforming into digital interactive video, it requires a great level of expertise. It may take from weeks to a few months depending on video length."
                },
                {
                    title: "Is cel animation video good for advertising?",
                    content: "Yes, it is highly recommended for advertising because it enhances audience interaction and creates a genuine connection, which ultimately increases your sales."
                },
                {
                    title: "How much does it cost to produce a hybrid animation video?",
                    content: "It would cost you around $7000-$15000, depending on factors such as project length, complexity, revisions etc."
                },
                {
                    title: "What is the lead time to create a hybrid animation video?",
                    content: "It would take around 5 to 8 weeks to create an exceptional hybrid animation video, with all attractive and engaging elements included."
                }
            ]} />
            <Footer />
        </>
    )
}