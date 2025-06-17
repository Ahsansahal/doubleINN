// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/motion-graphics/grid/1.png"
import GridImg2 from "media/motion-graphics/grid/2.png"
import GridImg3 from "media/motion-graphics/grid/3.png"
import GridImg4 from "media/motion-graphics/grid/4.png"
import GridImg5 from "media/motion-graphics/grid/5.png"
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
                src={process.env.NEXT_PUBLIC_VIDEO_EDIIING}
                title="Smooth & Highly Engaging <br class='hidden md:block' /> Motion Graphics Design!"
                desc="Are you looking for exquisite motion graphics animation for your website, promotional videos and social media content? We are specialists at creating the most eye-catching, smooth and informative animated motion graphics.With the help of our experts, you can transform your ideas into attractive animated motion graphics."
            />
            <SuccessClients
                title="Expert Motion Graphic Design Agency: Art to Tell Your Story"
                desc="We’ve Consistently Delivered Stellar Motion Graphics Projects."
                numbers={[
                    {
                        num: "18000+",
                        text: "Projects"
                    },
                    {
                        num: "23+",
                        text: "International Awards"
                    },
                    {
                        num: "1000+",
                        text: "Reviews"
                    },
                    {
                        num: "$21M+",
                        text: "revenue generations for Clients",
                        link: "See Reviews →"
                    },
                    {
                        num: "500M+",
                        text: "Views on our client videos",
                        link: "See Reviews →"
                    },
                    {
                        num: "56+",
                        text: "Star ratings for animation service"
                    }
                ]}
            />
            <WeAre
                desc="<p>As a motion graphics animation company, we use the latest and hi-tech animation techniques and software to bring your ideas to life and transform them into your brand’s identity. We’ve served many renowned brands and received recognition as the best motion graphics animator in the US.</p><p>Our team is a score of motion graphic animators, who are passionate about turning static frames into stories that move the viewer. </p>"
            />
            <Grid
                titie="Motion Graphics "
                excerpt="Design Company That <br /> Creates Magic for You"
                content="<p>We’re a company of visual storytellers, Our motion graphics animators are able to bring your brand’s identity to life.  Whether you are looking to create a dynamic explainer video or a stunning and unique story about your brand, we are the best choice for you.</p><p>Our animators are merely magicians; they have done hundreds of projects and won awards as a team and it's what we do best. Let's work together and boost your brand’s image with our motion graphic videos.</p>"
                media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
            />
            <FullViewVideo
                title="Choose our Motion <br class='hidden md:block' /> Graphics Service and <br class='hidden md:block' /> Win Viewers"
                desc="So, what sets us apart? We are not just about aesthetics; we design motion graphics to help you achieve your business goals. Our team of enthusiastic motion graphics animators work closely with each client to understand their ideas, vision and target audience. <br class='hidden md:block' /> We create each graphic with complete attention to detail to provide you the best experience, resulting in improved brand awareness, high-quality lead generation and more profits."
                video={process.env.NEXT_PUBLIC_GRID_VIDEO_2}
                subTitle="Motion Graphics"
                overlay={true}
            />
            <Partners
                title=" Recognition Worthy of a Motion <br class='hidden sm:block' /> Graphic Designer"
                desc="Courtesy of our prowess in crafting top notch motion graphic animations, we have developed a prestigious clientele of top-rated brands."
            />
            {/* <Portfolio
                title="Our 3 types of Creative Motion <br class='hidden sm:block' /> Graphics Services"
                desc="Discover what’s new and exciting in the world of motion art and design."
                slides={[
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "2D Motion Graphics",
                        desc: "Using incredible visuals and animations, our experts breathe life into typography and effects, giving stellar 2D motion graphics design. ",
                        link: "Create Motion Graphics"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
                        title: "3D Motion Graphics",
                        desc: "3D motion graphics are perfect for dynamic visual experience and attracting a greater audience, but it requires more time and expertise.",
                        link: "Create Motion Graphics"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
                        title: "Stop Motion Graphics",
                        desc: "We are capable of handling your existing motion graphics video or we can start from scratch with Stop Motion Graphics.",
                        link: "Create Motion Graphics"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "2D Motion Graphics",
                        desc: "Using incredible visuals and animations, our experts breathe life into typography and effects, giving stellar 2D motion graphics design. ",
                        link: "Create Motion Graphics"
                    }
                ]}
            /> */}
            <Portfolio />
            <Industries
                title="Use of Motion Graphics in  <br /> Different Businesses"
                desc="We have the best motion graphic artist that you’re looking for. We have worked with multiple industries and helped them enhance their brand image, engage audiences and generate sales."
                industries={[
                    {
                        media: Industry1,
                        title: "Broadcast Media",
                        desc: "Recognized by one of the leading news programs in the U.S for delivering the best animated transitions, title sequences and color effects. Our team can boost your audience's attention with high end motion graphics."
                    },
                    {
                        media: Industry2,
                        title: "Entertainment",
                        desc: "Short films & TV shows require special effects and animated visuals. We create marvelous viewer experience by adding storytelling and some intrigue in our projects."
                    },
                    {
                        media: Industry3,
                        title: "Banking",
                        desc: "We’ve provided animation motion graphics services in finance by animating complex information and creating easy to understand explainer videos."
                    },
                    {
                        media: Industry4,
                        title: "Education",
                        desc: "Nowadays E-learning is one of the top areas that demand animation motion graphics. Our motion artists have created hundreds of animated lectures and engaging learning modules which enhanced the learning experience of students."
                    },
                    {
                        media: Industry1,
                        title: "Businesses",
                        desc: "We excel at creating animated and visually appealing presentations for corporate sector. From 3D animations to animated motion graphics, we focus on delivering the company's vision and message clearly to employees."
                    },
                    {
                        media: Industry2,
                        title: "Advertising ",
                        desc: "Want to enhance visual appeal of your ads? Our motion graphics services provide best solutions for engaging content on social media and TV spots. Make your campaigns more visually satisfying with us."
                    }
                ]}
            />
            <Process process={[
                {
                    icon: Process1,
                    title: "Short and Impactful",
                    desc: "<p>Most motion graphics videos are only 1 minute long, which is good enough for growing viewers with engaging visual movements. The shorter the message, more impactful and easier its recall.</p>",
                    ctaText: "Discover How",
                    link: "javascript:;"
                },
                {
                    icon: Process2,
                    title: "Cost Effective.",
                    desc: "<p>It is one of the most cost-effective options while opting for animation design. By spending less money, you can get stunning motion graphic pictures.</p>",
                    ctaText: "Get an Estimate",
                    link: "javascript:;"
                },
                {
                    icon: Process3,
                    title: "Emotional Attention",
                    desc: "<p>With Motion graphics you can tell your brand story in a more effective way as it is, from music to voiceover and mind-blowing visuals, the audience can create an emotional connection with you.</p>",
                    ctaText: "Book a FREE Call",
                    link: "javascript:;"
                }
            ]} />
            <TypesOfVideos
                title="What do we Create <br className='hidden md:block' /> with Motion Graphics <br className='hidden md:block' /> Animation?"
                desc="Video Animation is a motion graphic company with a decent clientele in the global market of video animation and graphic design. We create all types of motion graphic videos that deliver on audience engagement, brand awareness and better ROI."
                types={[
                    {
                        media: TypesOfVideos1,
                        title: "Animated Typography",
                        desc: "Create your brand’s create rhythm with animated motion graphics.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Advanced Animated titles",
                        desc: "Let’s do mind-blowing logo animations to showcase a unique personality. ",
                        color: "bg-[#89CDDF]"
                    },
                    {
                        media: TypesOfVideos3,
                        title: "Animated Ads",
                        desc: "Motion graphic design that uses sound and visuals for impression.",
                        color: "bg-[#E098F9]"
                    },
                    {
                        media: TypesOfVideos4,
                        title: "Template Editing",
                        desc: "Create hundreds of themes, styles and formats for your brand. ",
                        color: "bg-[#BCD1B1]"
                    },
                    {
                        media: TypesOfVideos5,
                        title: "Explainer Videos",
                        desc: "Your complex messages transformed into educational and explainer videos.",
                        color: "bg-[#FEB13A]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "GIFs",
                        desc: "Funny, expressive and entertaining animation in a series of images.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Animated Typography",
                        desc: "Create your brand’s create rhythm with animated motion graphics.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Advanced Animated titles",
                        desc: "Let’s do mind-blowing logo animations to showcase a unique personality. ",
                        color: "bg-[#89CDDF]"
                    }
                ]}
            />
            <Reviews
                titie="Recognized by Multinational Corporations <br class='hidden md:block' /> Your Interact with Everyday"
            />
            <FAQs items={[
                {
                    title: "How much does motion graphics animation cost?",
                    content: "<p>The price of motion graphics depends on its sophistication. A short 1-minute video can range from $100 to $5,000, but it could increase more due to special effects.</p>"
                },
                {
                    title: "How is motion graphics different from animation?",
                    content: "<p>Motion graphics are text logo images which use movement to create better visuals while animation is a series of moving images. You can compare both styles by viewing them side-by-side.</p>"
                },
                {
                    title: "Are motion graphics cheaper than animation?",
                    content: "<p>Motion graphics offer a low-cost solution to businesses due to their easy production designs. Animation requires more time because each project requires different techniques like CGI, Hand-drawn art and more technical resources.</p>"
                },
                {
                    title: "What is the difference between graphic design and motion graphics",
                    content: "<p>Motion graphics is said to be an upgrade to static designs. Graphic design uses static visuals like posters to showcase information while the later adds movement to existing visuals like text and logos, it brings them to life.</p>"
                },
                {
                    title: "Can motion graphics increase my sales?",
                    content: "<p>These days motion graphics is essential for branding and marketing. By capturing attention and effectively conveying messages, motion graphics can lead to increased customer engagement and profits.</p>"
                }
            ]} />
            <Footer />
        </>
    )
}