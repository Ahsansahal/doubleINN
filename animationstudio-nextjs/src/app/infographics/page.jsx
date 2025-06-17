// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/infographics/grid/1.png"
import GridImg2 from "media/infographics/grid/2.png"
import GridImg3 from "media/infographics/grid/3.png"
import GridImg4 from "media/infographics/grid/4.png"
import GridImg5 from "media/infographics/grid/5.png"
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
                title="Interactive Infographics <br class='hidden lg:block' /> Designs for Your <br class='hidden lg:block' /> Website"
                desc="<p>Are you looking for infographics designs that tell an exciting story about your product and get your audience’s attention instantly?</p><p>Then don’t look further, we’ve got the most magnificent and interactive infographics design ideas for you!</p>"
                cta="Book a Free Call"
            />
            <SuccessClients
                numbers={[
                    {
                        num: "16000+",
                        text: "Projects"
                    },
                    {
                        num: "1200+",
                        text: "Reviews"
                    },
                    {
                        num: "39+",
                        text: "5 Star ratings for animation service"
                    },
                    {
                        num: "22",
                        text: "International Awards"
                    },
                    {
                        num: "$10M+",
                        text: "revenue generations for Clients",
                    },
                    {
                        num: "100M+",
                        text: "Views on our client videos"
                    }
                ]}
                title="Partner with the Experts of <br class='hidden lg:block' /> Infographics Design"
                desc="Become visible and increase engagement"
            />
            <WeAre
                desc="<p>An animation design company specializing in producing appealing and creative content, that includes chart infographics, interactive infographics, marketing infographics, statistical infographics and infographics video scripts. We take pride in our creative team, which has generated over 1000’s of flawless and engaging infographic designs for our clients.</p><p>Our data infographics designers have received several awards, and have gained international recognition due to their expert skills and SEO friendly designs that helped our clients in boosting their website traffic.</p>"
            />
            <Grid
                titie="Why do you need <br class='hidden lg:block' /> Infographics?"
                excerpt="Curate spellbinding <br /> animations!"
                content="<p>With the help of infographics, you can showcase complex and important information more effectively because visual content like infographics lists and simple infographic designs are easy to recall and processed faster by the brain.</p><p>Nowadays people are surrounded by multiple platforms with huge amounts of information and data. Lengthy written text that provides complete information about your brand doesn't always work for the audience.</p>"
                media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
            />
            <FullViewVideo
                video={process.env.NEXT_PUBLIC_GRID_VIDEO_2}
                subTitle="Infographics"
                overlay={true}
                title="Capture more Audience with Video <br class='hidden md:block' /> Infographics Solutions."
                desc="Doesn’t matter which industry you are from, when the target audience visits your business website, social media pages, blogs etc., you need something more attractive to provide them with necessary information quickly. This is where video infographics come into play, a powerful  marketing infographics tool that captures attention with use of  motion visuals, perfect visualization of your data, graphics and sound. The most effective technique  for businesses to easily communicate and connect with the audience."
            />
            <Partners
                title="Clients We Served With Our  Stunning <br class='hidden lg:block' /> Infographics"
                desc="We’ve catered clients, with our diverse types of Infographics and videos, from Statistical infographics to Chart Infographics and  Infographics list, as per their requirements."
            />
            {/* <Portfolio
                title="Highly Customizable Infographics For your Business"
                desc="Our team of instructional designers specialize in delivering various types of infographics for your data"
                slides={[
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Statistical Infographics",
                        desc: "Showcase your survey analysis and results and present your logic, argument, and insights for greater traction.",
                        link: "Create Infographics"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
                        title: "Chart Infographics",
                        desc: "use chart infographics to explain complex and high-end information streams. Mostly used by marketers to promote goods.",
                        link: "Create Infographics"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
                        title: "List Infographics",
                        desc: "Widely used on blogs and social due to its interactive nature Ideal to engage the audience. "
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Statistical Infographics",
                        desc: "Showcase your survey analysis and results and present your logic, argument, and insights for greater traction.",
                        link: "Create Infographics"
                    }
                ]}
            /> */}
            <Portfolio />
            <Industries
                title="Industries We’ve Served"
                desc="Various industries require data infographics to connect with their audience, we served each industry <br class='hidden lg:block' /> diligently with a motive for mutual growth. "
                industries={[
                    {
                        media: Industry1,
                        title: "Social Media",
                        desc: "Helped social media influencers and marketers increase their views on posts by offering dynamic and simple infographics designs."
                    },
                    {
                        media: Industry2,
                        title: "Ad Agencies",
                        desc: "Created video infographics for Ad Agencies, who run advertisements on behalf of global brands and businesses. "
                    },
                    {
                        media: Industry3,
                        title: "Ecommerce",
                        desc: "Looking for statistical infographics for your Ecommerce site? Get our best offers with premium quality interactive infographics that attract your customers."
                    },
                    {
                        media: Industry4,
                        title: "Media",
                        desc: "Delivered compelling and clever story infographics to media production houses and signed collaboration contracts with them."
                    },
                    {
                        media: Industry1,
                        title: "Healthcare",
                        desc: "We worked with various hospitals and created 1000’s of infographics on educating the public regarding alarming medical conditions."
                    },
                    {
                        media: Industry2,
                        title: "Technology IT",
                        desc: "We help you create the best marketing infographics; with SEO expertise, enhanced visual elements, versatility and perfect data explanation."
                    }
                ]}
            />
            <Process
                process={[
                    {
                        icon: Process1,
                        title: "SEO Optimization",
                        desc: "<p>Search engine rankings are highly crucial for businesses to become visible on Google and other search engines. Infographics can help increase your website’s ranking and boost traffic.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process2,
                        title: "Engagement",
                        desc: "<p>Infographics are being widely used on social media platforms such as Facebook, Instagram, Pinterest and Twitter. It is best for boosting engagement on your page and websites.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process3,
                        title: "Cost Effective",
                        desc: "<p>Several marketing materials are expensive and require bigger budgets. Infographics are a far more cost-effective than other marketing media like videos, blogs, live conferences, seminars etc.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    }
                ]}
            />
            <TypesOfVideos
                title="Get the Best Infographics <br class='hidden lg:block' /> Content for your Business"
                desc="<p>Looking to optimize your SEO ranking and increase your brand awareness, we’ve got all types of Infographics for you:</p>"
                types={[
                    {
                        media: TypesOfVideos1,
                        title: "Timeline Infographic",
                        desc: "Create a timeline infographic for your company’s future goals and target",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Resume Infographic",
                        desc: "Get your desired job by using our creative resume infographic service",
                        color: "bg-[#89CDDF]"
                    },
                    {
                        media: TypesOfVideos3,
                        title: "Process Infographic",
                        desc: "Create a step-by-step instruction infographic for your audience.",
                        color: "bg-[#E098F9]"
                    },
                    {
                        media: TypesOfVideos4,
                        title: "Map Infographic",
                        desc: "Help them navigate at a glance with best map infographics.",
                        color: "bg-[#BCD1B1]"
                    },
                    {
                        media: TypesOfVideos5,
                        title: "Data-Visuals Infographic",
                        desc: "Simplify complex data and information into easy charts and graphs",
                        color: "bg-[#FEB13A]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Comparison Infographic",
                        desc: "Create a comparative study infographic of your products with us",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Timeline Infographic",
                        desc: "Create a timeline infographic for your company’s future goals and target",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Resume Infographic",
                        desc: "Get your desired job by using our creative resume infographic service",
                        color: "bg-[#89CDDF]"
                    },
                ]}
            />
            <Reviews
                titie="Recognized by Leading Brands whose Products <br class='hidden md:block' /> You Use Every Day."
            />
            <FAQs items={[
                {
                    title: "What are infographic design services?",
                    content: "<p>When information and graphics are combined together, it becomes visually appealing and is called infographic design. It is a widely used marketing tool that helps in simplifying huge amounts of data into a single image for viewers' understanding.</p>"
                },
                {
                    title: "What are the 8 types of infographics?",
                    content: "<p>Following are the 8 types of infographics</p><ul class='list-decimal list-inside'><li>Comparison Infographics</li><li>Flowchart Infographics</li><li>How- Infographics</li><li>List Infographics</li><li>Map Infographics</li><li>Process Infographics</li><li>Statistical Infographics</li><li>Timeline Infographics</li></ul>"
                },
                {
                    title: "How much does it cost to make an infographic?",
                    content: "<p>It would cost you around $100 to $2000, depending on your project’s complexity and customized requirements.</p>"
                },
                {
                    title: "How many hours does it take to make an infographic?",
                    content: "<p>Due to its technical nature and detailed characteristics, it can take from 3 to 4 weeks to create an infographic</p>"
                },
                {
                    title: "What's included in your infographics design services?",
                    content: "<p>Our infographic asset include, interactive infographics strategy, niche-specific research, assignment to dedicated project manager, wireframe and prototype development, providing source file for changes and marketing, web page customizations, and promotion across social media platforms.</p>"
                }
            ]} />
            <Footer />
        </>
    )
}