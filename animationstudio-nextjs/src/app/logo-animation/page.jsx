// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/logo-animation-page/grid/1.png"
import GridImg2 from "media/logo-animation-page/grid/2.png"
import GridImg3 from "media/logo-animation-page/grid/3.png"
import GridImg4 from "media/logo-animation-page/grid/4.png"
import GridImg5 from "media/logo-animation-page/grid/5.png"
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
                src={process.env.NEXT_PUBLIC_LOGO_ANIMATION}
                title="Animate Your Logo With <br class='hidden md:block' /> The Best Animation <br class='hidden md:block' /> Agency"
                desc="Your company logo is something that enhances your brand's personality, a visually appealing logo creates a lasting impression on the audience and helps in showcasing the right identity of your business. With the help of our logo animation services your business gets a new makeover that would create an unforgettable image of your brand."
                cta="Book a Free Call"
            />
            <SuccessClients
                numbers={[
                    {
                        num: "30+",
                        text: "5 Star ratings for animation service"
                    },
                    {
                        num: "1200+",
                        text: "Reviews"
                    },
                    {
                        num: "17000+",
                        text: "Projects"
                    },
                    {
                        num: "16+",
                        text: "International Awards"
                    },
                    {
                        num: "$18M+",
                        text: "revenue generations for Clients",
                    },
                    {
                        num: "100M+",
                        text: "Views on our clients videos"
                    }
                ]}
                title="Hire a Logo Animator Who Ensures Growth"
                desc="Get 100m+ views on your social media pages, videos and website by partnering with us"
            />
            <WeAre
                desc="<p>We offer logo animation service to help you grow your business to new heights and become more visible and memorable for your audience. We do custom logo animation, 3D logo animation and simple logo animation depending on your requirements. You can also use our online logo animation service, where you’ll find all the necessary tools with a list of objects, styles, symbols etc. to create the most exceptional company logo.</p>"
            />
            <Grid
                titie="Why Does <br /> Logo Animation"
                excerpt="Make Your <br /> Brand Memorable?"
                content="<p>What logo animation really does is it shows professionalism, that your company is fully polished and dynamic. With classy and attractive animation of your logo you can attract the viewers and tell your brand's identity in the best manner. A perfect 3D logo animation increases brand recognition and makes it stand out by helping audiences in recognizing the brand easily.</p>"
                media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
            />
            <FullViewVideo
                video={process.env.NEXT_PUBLIC_GRID_VIDEO_2}
                subTitle="Logo Animation"
                title="A Logo Animation Service <br class='hidden md:block' /> That Enables Your Brand’s <br class='hidden md:block' /> Professionalism"
                desc="Partner with us and stand out among your competitors. We guarantee to bring more attention to your website, social channels and overall business. We promise to deliver a logo that moves viewers and attracts them towards your business. For each project we hire the best animator, who can perform the job with diligence and up to your expectations. Whether you are looking for a simple logo animation solution or high-definition 3D logo animation, our team of animators are excellent to work with and are capable of producing animations that create buzz for your business."
            />
            <Partners
                title="We Drive Success for our Clients"
                desc="We pride ourselves on our animation services as our team has catered to a decent number of clients and aced their projects by crafting high quality animation company logos."
            />
            {/* <Portfolio
                title="Logo Animation Services <br class='hidden sm:block' /> for Your Business"
                desc="Here are our top three logo animation services that would make your brand reach the heights of innovation and public admiration."
                slides={[
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Rotating Logos",
                        desc: "Create a visually appealing 3D logo animation that attracts your audience and creates a lasting impression.",
                        link: "Create Logo Animation"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
                        title: "Morphing Logos",
                        desc: "An attractive and engaging animation type that is complex in nature but promises amazing results.",
                        link: "Create Logo Animation"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
                        title: "Reveal Design Logos",
                        desc: "This animation reveals the logo bit by bit using effects such as falling off layers and zooming in to build intrigue.",
                        link: "Create Logo Animation"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Rotating Logos",
                        desc: "Create a visually appealing 3D logo animation that attracts your audience and creates a lasting impression.",
                        link: "Create Logo Animation"
                    }
                ]}
            /> */}
            <Portfolio />
            <Industries
                title="Industries We Conquered with  our <br /> Custom Logo Animations "
                desc="Video animation is a company that not only provides logo animation service, but ensures to reshape the personality of our client’s brand."
                industries={[
                    {
                        media: Industry1,
                        title: "Information Technology",
                        desc: "The IT industry requires dynamic logo animations, our team of artists deliver exceptional innovative and futuristic custom logo animations to this sector."
                    },
                    {
                        media: Industry2,
                        title: "Healthcare",
                        desc: "We served multiple hospital and healthcare institutes with sophistication and elegant logo designs that convey compassion and calming effect."
                    },
                    {
                        media: Industry3,
                        title: "Learning",
                        desc: "We crafted simple logo animations for schools, online virtual education centers and NGOs to showcase their brand image and improve engagement."
                    },
                    {
                        media: Industry4,
                        title: "Entertainment",
                        desc: "We pride on our company for receiving satisfying reviews and recommendations from TV production and music production studios in the United States."
                    },
                    {
                        media: Industry1,
                        title: "Finance",
                        desc: "Offering compelling stories to inspire and support with the custom logo animation as well as providing online logo animation service on our website."
                    },
                    {
                        media: Industry2,
                        title: "Food",
                        desc: "Created 100’s of logo animations for restaurants, food companies, beverage startups and renowned brands to reflect their authentic personality. "
                    }
                ]}
            />
            <Process process={[
                {
                    icon: Process1,
                    title: "Dynamic Image",
                    desc: "<p>Your brand needs a sense of modern style and innovation. With the help of animated logos, you can easily convey that your organization uses a futuristic and modern approach to cater the clients with professionalism.</p>",
                    ctaText: "Get an Estimate",
                    link: "javascript:;"
                },
                {
                    icon: Process2,
                    title: "Increased Engagement",
                    desc: "<p>It enables you to get maximum attention and makes the audience internalize the message about your products and services, which may result in increased engagement and sales.</p>",
                    ctaText: "Get an Estimate",
                    link: "javascript:;"
                },
                {
                    icon: Process3,
                    title: "Brand Recognition",
                    desc: "<p>The audience always easily recalls the brands that amaze them with their lifelike visuals. So when they see an animated attractive logo it stays in their minds forever.</p>",
                    ctaText: "Get an Estimate",
                    link: "javascript:;"
                }
            ]} />
            <TypesOfVideos
                title="The Best Short Logo <br className='hidden md:block' /> Animation Videos for <br className='hidden md:block' /> Your Business"
                desc="Choose the best suitable logo animation video for your business and consult our team for creating the most iconic logo animation for your brand."
                types={[
                    {
                        media: TypesOfVideos1,
                        title: "Flash Logo Animation",
                        desc: "Create a futuristic flash logo animation GIF for your Brand.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "2D Animation Logo",
                        desc: "Get the best 2D animation logos for social media business profiles.",
                        color: "bg-[#89CDDF]"
                    },
                    {
                        media: TypesOfVideos3,
                        title: "3D Animation Logo",
                        desc: "We create both dynamic and modern 3D animation logos for you.",
                        color: "bg-[#E098F9]"
                    },
                    {
                        media: TypesOfVideos4,
                        title: "Kinetic Typography Logo",
                        desc: "Order your captivating text driven logo that moves the audience.",
                        color: "bg-[#BCD1B1]"
                    },
                    {
                        media: TypesOfVideos5,
                        title: "Looping Animation Logo",
                        desc: "Grab your animation logo with high end looping effects.",
                        color: "bg-[#FEB13A]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Animated Icon Logo",
                        desc: "Showcase your brand’s story and elements with an animated icon logo.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Flash Logo Animation",
                        desc: "Create a futuristic flash logo animation GIF for your Brand.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "2D Animation Logo",
                        desc: "Get the best 2D animation logos for social media business profiles.",
                        color: "bg-[#89CDDF]"
                    }
                ]}
            />
            <Reviews
                titie="Boosted Growth and Success for Global <br class='hidden md:block' /> Brands you consume Everyday"
            />
            <FAQs items={[
                {
                    title: "Can Logo animation help boost my brand identity?",
                    content: "<p>According to research, organizations who tried animated logos experienced 75% growth in their brand recognition.</p>"
                },
                {
                    title: "What is the average cost of a logo animation?",
                    content: "<p>It would cost you around $200 - $10000 depending on your specific requirements and budget.</p>"
                },
                {
                    title: "How long does it take to create an animated logo?",
                    content: "<p>The time duration depends on two factors, the number of key frames and complex nature of the logo content. For a simple logo animation, it would just take a few hours, while in the case of a complex logo, it would take at least a week for amazing results.</p>"
                },
                {
                    title: "How much does a 3D logo animation cost?",
                    content: "<p>It would cost you around $500 - $5000, on an average the price may differ due to 3D models and styles.</p>"
                },
                {
                    title: "How much does a 2D logo animation cost?",
                    content: "<p>It would cost you around $200 - $3000 on an average depending on factors such as styles and animations</p>"
                }
            ]} />
            <Footer />
        </>
    )
}