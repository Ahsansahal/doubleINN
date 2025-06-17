// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/video-editing-page/grid/1.png"
import GridImg2 from "media/video-editing-page/grid/2.png"
import GridImg3 from "media/video-editing-page/grid/3.png"
import GridImg4 from "media/video-editing-page/grid/4.png"
import GridImg5 from "media/video-editing-page/grid/5.png"
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
                title="The Finest Video <br class='hidden md:block' /> Editing Services"
                desc="Are you struggling with video editing for your content? Let us help you! We’re a video editing service provider, with experience of helping thousands of Content Creators in achieving millions of views on their videos. Partner with the best video editing team!"
                cta="Book a Free Call"
            />
            <SuccessClients
                title="Get 500M+ Views by Partnering with the Leading Video Editing Company"
                numbers={[
                    {
                        num: "14000+",
                        text: "Projects"
                    },
                    {
                        num: "1300+",
                        text: "Reviews"
                    },
                    {
                        num: "500M+",
                        text: "Views on our client videos"
                    },
                    {
                        num: "20+",
                        text: "International Awards",
                        link: "See Reviews →"
                    },
                    {
                        num: "$10M+",
                        text: "revenue generations for Clients",
                        link: "See Reviews →"
                    },
                    {
                        num: "38+",
                        text: "5 Star ratings for animation service"
                    }
                ]}
            />
            <WeAre desc="<p>A video editing company that takes full responsibility for your video’s editing and lets you focus on what you do best; shoot exciting content.</p><p>We understand how crucial it is to edit a video that suits the creator’s personality and at the same time entertains and keeps the audience fascinated. With our expertise and your addictive content, we can create the most amazingly exquisite videos that make you a worldwide trending creator.</p>" />
            <Grid
                titie="The Most Reliable <br class='hidden lg:block 2xl:hidden' /> Video Editing <br class='hidden lg:block 2xl:hidden' /> Service Provider"
                content="<p>Every creator is unique in his own way, and cannot be treated with the same typical editing approach.</p><p>We’ve got multiple editing services and options for you in store. With reasonable video editing costs, we deliver you the best performing videos that enhance your popularity. Whether it's an animation video, a documentary or humorous content, our team blends various styles and effects that suit your ideas.</p>"
                media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
            />
            <FullViewVideo
                subTitle="Video Editing"
                title="Why is Video Animation the Best Video <br class='hidden lg:block' /> Editing Company?"
                desc="<p>We’ve served various production companies with regards to video editing needs and services. Our expert team leaders are award winning Vfx editing artists, with a combined experience of over 14 years.</p><p>The video production market is booming which has a huge impact on video editing cost and effectiveness of video editing companies, but with us you’re guaranteed to work with best editing professionals at flat hourly & monthly packages. Partner with us today!</p>"
            />
            <Partners
                title="Satisfied Clientele with Exclusive Video <br class='hidden lg:block' /> Editing Solutions"
                desc="At our video editing studios, we’ve served our clients with everything from. smooth, fast online video editing to more complex and detailed edits"
            />
            {/* <Portfolio
                title="Get Stellar Video Editing for Your Brand"
                desc="Choose what’s best for your business and get started today"
                slides={[
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Music Video Editing",
                        desc: "Collaborate with our specialists for your music videos, to add sizzling effects, and motion graphics with electrifying visuals",
                        link: "Edit Your Video"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
                        title: "Social Media Video Editing",
                        desc: "Grow across all socials with informative videos, shorts and reels with advanced effects and VFX, visual enhancements and more.",
                        link: "Edit Your Video"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
                        title: "Immersive 3D Video Animation",
                        desc: "For showcasing business pitch to investors, we offer varieties of styles like visualization of data, and custom product demos.",
                        link: "Edit Your Video"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Music Video Editing",
                        desc: "Collaborate with our specialists for your music videos, to add sizzling effects, and motion graphics with electrifying visuals",
                        link: "Edit Your Video"
                    }
                ]}
            /> */}
            <Portfolio />
            <Industries
                title="Industries We Are Actively Involved With"
                desc="Each industry demands unique and exquisite video editing service, and we pride on delivering the satisfaction and commitment that they deserve."
                industries={[
                    {
                        media: Industry1,
                        title: "Real Estate",
                        desc: "Served multiple construction real estate companies by delivering easy and quick video editing solutions for selling apartments and properties."
                    },
                    {
                        media: Industry2,
                        title: "Event Planning",
                        desc: "From weddings to concerts, seminars and conferences, we’ve completed each project with passion and diligence to provide the best experience."
                    },
                    {
                        media: Industry3,
                        title: "Film & Television",
                        desc: "As editors, our numerous projects come from Media production houses, where artists deal with transitions, speed motion, special visual effects, cutting and more."
                    },
                    {
                        media: Industry4,
                        title: "Music",
                        desc: "Our leading experts in video special effects have worked with award winning music studios and boosted their video’s impact."
                    },
                    {
                        media: Industry1,
                        title: "Advertising",
                        desc: "We helped a decent number of advertising agencies generate millions of views on social media by offering creative video editing services."
                    },
                    {
                        media: Industry2,
                        title: "Education",
                        desc: "Partner with us today and make your online lecture videos more engaging and attractive for your students, and get remarkable solutions for educational videos."
                    }
                ]}
            />
            <Process
                process={[
                    {
                        icon: Process1,
                        title: "Cost Effective",
                        desc: "<p>Video editing is crucial for everlasting content, and we provide these services at best rates to our clients because their satisfaction is the greatest reward for us.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process2,
                        title: "Studio of Innovation",
                        desc: "<p>The process of video editing requires brainstorming, innovative scriptwriting, appealing visual elements and special effects which deliver the best result to the viewers and create value.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process3,
                        title: "Audience Attention",
                        desc: "<p>Viewers are addicted to watching video content regularly and they may not appreciate watching videos that are poorly edited. What gets their attention are visuals, transitions and voiceovers.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    }
                ]}
            />
            <TypesOfVideos
                title="Offering you Limitless options for Video Editing"
                desc="Get your first edited masterpiece today, choose the best video editing style and receive high quality video editing service."
                types={[
                    {
                        media: TypesOfVideos1,
                        title: "Product Video",
                        desc: "Showcase your product in the best possible manner.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Wedding Video",
                        desc: "Make your wedding video more glamorous and memorable.",
                        color: "bg-[#89CDDF]"
                    },
                    {
                        media: TypesOfVideos3,
                        title: "Vlogging Video",
                        desc: "Get advanced editing video solutions for daily vlogging.",
                        color: "bg-[#E098F9]"
                    },
                    {
                        media: TypesOfVideos4,
                        title: "Vacation Video",
                        desc: "Get a creative guide from our specialists for your vacation video.",
                        color: "bg-[#BCD1B1]"
                    },
                    {
                        media: TypesOfVideos5,
                        title: "Short Films",
                        desc: "Get fast edits with premium quality effects for Short Films.",
                        color: "bg-[#FEB13A]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "360 Video",
                        desc: "Create a comparative study infographic of your products with us",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Product Video",
                        desc: "Showcase your product in the best possible manner.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Wedding Video",
                        desc: "Make your wedding video more glamorous and memorable.",
                        color: "bg-[#89CDDF]"
                    },

                ]}
            />
            <Reviews
                titie="Partnered with Global Brands that are <br class='hidden md:block' /> Trusted by You"
            />
            <FAQs items={[
                {
                    title: "What is included in video editing services?",
                    content: "<p>Following stages are implemented in video editing</p><ul class='list-decimal list-inside'><li>Selection of footage or clips</li><li>Cutting and trimming of clips</li><li>Placement of clips with right sequence</li><li>Color effects and mixing</li><li>Motion movements, transitions etc.</li><li>Responding to client’s requests and feedback</li></ul>"
                },
                {
                    title: "How much does video editing cost?",
                    content: "<p>It starts at a reasonable price of $1.25 per minute and could go to $10 or more. If your content is lengthy, the hourly rate for video is around $75, with best editing footage and clips.</p>"
                },
                {
                    title: "How much does a video editor cost?",
                    content: "<p>It would cost you $75 to $150 per hour, which is quite reasonable for hiring a highly skilled video editing professional for your project.</p>"
                },
                {
                    title: "How long does video editing take?",
                    content: "<p>For best and high-end results, it takes up to 30 minutes to 1.5 hours to professionally edit a minute of a video.</p>"
                }
            ]} />
            <Footer />
        </>
    )
}