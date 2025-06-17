// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/whiteboard-animation-page/grid/1.png"
import GridImg2 from "media/whiteboard-animation-page/grid/2.png"
import GridImg3 from "media/whiteboard-animation-page/grid/3.png"
import GridImg4 from "media/whiteboard-animation-page/grid/4.png"
import GridImg5 from "media/whiteboard-animation-page/grid/5.png"
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
                src={process.env.NEXT_PUBLIC_WHITEBOARD_ANIMATION}
                title="Whiteboard Animation <br class='hidden md:block' /> A canvas of  unlimited<br class='hidden md:block' />  ideas"
                desc="Now you can create whiteboard animations and take your brand stories to a whole new level with our whiteboard animation services. From elegant storytelling to beautifully drawn pictures and animations, we can craft a playground of limitless ideas for you and your company."
                overlay={true}
                cta="Book a Free Call"
            />
            <SuccessClients
                numbers={[
                    {
                        num: "15000+",
                        text: "Projects"
                    },
                    {
                        num: "1200+",
                        text: "Reviews"
                    },
                    {
                        num: "500M+",
                        text: "Views on our client videos"
                    },
                    {
                        num: "22+",
                        text: "International Awards"
                    },
                    {
                        num: "$25M+",
                        text: " revenue generations for Clients",
                    },
                    {
                        num: "46+",
                        text: "5 Star Ratings for Animation Service"
                    }
                ]}
                title="Whiteboard Animation <br class='hidden md:block' /> Video Services: <br class='hidden md:block' /> Your Road to Success"
                desc=" "
            />
            <WeAre
                desc="<p>A whiteboard animation company that bridges the gap between your thoughtful ideas and mind-blowing animations, with our expertise and your vision, we can create a magical world of whiteboard animation. Our company is fully equipped with designers and animators that can transform your concepts into exceptionally entertaining whiteboard animation videos. We help you grab the audience's attention by designing engaging visuals and exclusive narrations</p>"
            />
            <Grid
                titie="The Ultimate <br /> Whiteboard <br /> Animation"
                excerpt="Video Services  Provider"
                content="<p>We pride ourselves on our achievements in the world of whiteboard video animation, and we are recognized for our exceptional art by some of the giants in the TV- advertisement industry.</p><p>Whiteboard animation video services offered by Video Animation, have created videos that have generated over 500M+ views on social media platforms. By partnering with us you can create narratives that give value to your target audience.</p>"
                media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
            />
            <FullViewVideo
                title="What Makes Our Whiteboard <br class='hidden md:block' /> Animation Company The <br class='hidden md:block' /> Best Choice?"
                desc="Whiteboard video animation is one of the most detailed and difficult arts in the animation niche. To help you win, our team makes sure to always keep up with the market trends, so we bring in a team with impeccable expertise, who have years of experience at drawing marvelous illustrations, text, and characters resulting in masterpieces of whiteboard video animation."
            />
            <Partners
                title="Whiteboard Animation Company <br class='hidden sm:block' /> that Prioritizes Your Growth"
                desc="We partner with clients for not just providing whiteboard animation services; we offer <br class='hidden lg:block' /> a roadmap towards growth and prosperity. "
            />
            {/* <Portfolio
                title="Beyond The Limits of Whiteboard Animation"
                desc="Animations you might have seen on media that charms their way into audiences’ minds."
                slides={[
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Minimalistic Whiteboard Animation",
                        desc: "Perfect for reels on social media, suitable for making videos that contain a clear message, less colors and simple drawings.",
                        link: "Create Whiteboard Animation"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
                        title: "Cartoon-Sketchy Animation",
                        desc: "If you’re looking for a cartoonish and doodle animation with a little funny theme, this one serves the purpose.",
                        link: "Create Whiteboard Animation"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
                        title: "Mixed media Animations",
                        desc: "The most effective whiteboard animation video, where we include actual footage of people or places.",
                        link: "Create Whiteboard Animation"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Minimalistic Whiteboard Animation",
                        desc: "Perfect for reels on social media, suitable for making videos that contain a clear message, less colors and simple drawings.",
                        link: "Create Whiteboard Animation"
                    }
                ]}
            /> */}
            <Portfolio />
            <Industries
                title="Areas We Specialize In"
                desc="We’ve served multiple industries with our whiteboard animation service and helped them achieve their goals by making impactful animations."
                industries={[
                    {
                        media: Industry1,
                        title: "Education & eLearning",
                        desc: "Create compelling and attractive animations by simplifying difficult subjects and topics into easy and understandable videos for online schools, tutorials and academics."
                    },
                    {
                        media: Industry2,
                        title: "Marketing",
                        desc: "Whiteboard animation is high in demand for marketing and sales advertisement purposes. We’ve crafted hundreds of explainer videos and product demos in this domain."
                    },
                    {
                        media: Industry3,
                        title: "Technology",
                        desc: "Looking for whiteboard animation solutions for explaining the latest software features and functions to your company’s developers? Choosing Video Animation would be the best option."
                    },
                    {
                        media: Industry4,
                        title: "Government",
                        desc: "We’ve served the government agencies with our whiteboard animation service by creating animations on government policies and public awareness campaigns."
                    },
                    {
                        media: Industry1,
                        title: "Entertainment",
                        desc: "Our clients have generated over 100M+ views on TV shows explainer videos on social media platforms, which resulted in satisfactory revenue streams for them."
                    },
                    {
                        media: Industry2,
                        title: "Social Causes",
                        desc: "Helped NGO’s create social awareness on different campaigns by delivering whiteboard animation videos."
                    }
                ]}
            />
            <Process
                process={[
                    {
                        icon: Process1,
                        title: "Guaranteed Attention",
                        desc: "<p>Imagine a video starts with a hand drawing now the viewer would be fascinated by wondering what would be the final result of this painting or image?</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process2,
                        title: "Trending",
                        desc: "<p>Whiteboard animation video is a popular form of animation all around the world, as it helps in creating an everlasting impact in the minds of its audience.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process3,
                        title: "Visually Appealing",
                        desc: "<p>It appeals to people of all ages from kids to adults due to its nature of addressing the message in a visually communicative way.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    }
                ]}
            />
            <TypesOfVideos
                title="Your Goals, Our <br className='hidden md:block' /> Endeavors to <br className='hidden md:block' /> Prosperity"
                desc="<p>For you we’ll create the most exquisite whiteboard animation video, we guarantee long term effective results for your projects so you can achieve sustainable revenue streams.</p>"
                types={[
                    {
                        media: TypesOfVideos1,
                        title: "Marketing Videos",
                        desc: "We help you get maximum website traffic by putting static visuals and emotions in our video.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Training Videos",
                        desc: "With our whiteboard animation service, you can effectively train your company’s employees.",
                        color: "bg-[#89CDDF]"
                    },
                    {
                        media: TypesOfVideos3,
                        title: "Explainer Videos",
                        desc: "Create a product concept video and deliver a clear message that explains your objective.",
                        color: "bg-[#E098F9]"
                    },
                    {
                        media: TypesOfVideos4,
                        title: "SaaS Whiteboard Videos",
                        desc: "You can guide and train employees about your SaaS products with whiteboard videos.",
                        color: "bg-[#BCD1B1]"
                    },
                    {
                        media: TypesOfVideos5,
                        title: "Pitch Decks Videos",
                        desc: "Create extraordinary business proposals and pitch decks by partnering with us ",
                        color: "bg-[#FEB13A]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Promotion videos",
                        desc: "Whiteboard animation services that set the stage for your webinars and events",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Marketing Videos",
                        desc: "We help you get maximum website traffic by putting static visuals and emotions in our video.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Training Videos",
                        desc: "With our whiteboard animation service, you can effectively train your company’s employees.",
                        color: "bg-[#89CDDF]"
                    }
                ]}
            />
            <Reviews
                titie="From Startups to Industry Leaders, We <br class='hidden md:block' /> Boosted Revenues for Global Brands"
            />
            <FAQs items={[
                {
                    title: "How much does a whiteboard animation cost?",
                    content: "<p>The cost ranges from $2800- $35000 per minute for a whiteboard animation.</p>"
                },
                {
                    title: "Is whiteboard animation in demand?",
                    content: "<p>Nowadays whiteboard animation videos are taking over the explainer videos due to its helpful nature, at the same time providing useful information in an engaging manner to viewers.</p>"
                },
                {
                    title: "How long does it take to make a whiteboard animation video?",
                    content: "<p>It doesn’t take too long to make a whiteboard animation video. However, first the script and style frames are prepared for your animation video.</p><p>In the second step our experts and artists will create animations on the storyboard. It takes up to 30 days to deliver a masterpiece.</p>"
                },
                {
                    title: "What is the purpose of whiteboard animation?",
                    content: "<p>The main purpose of whiteboard animation videos is to deliver the actual message to the viewers. It is used to sell a product, creating awareness or describing a complex system. If you are looking to deliver complex information to your viewers effectively then this animation style can make it easy for you.</p>"
                },
                {
                    title: "What is the difference between animation and whiteboard animation?",
                    content: "<p>Whiteboard animation uses a hand or illustrator drawing objects and characters, while other animation styles like 2D take a series of movements, objects and visuals. More effort and expertise are used in making 2D and 3D animations, because they showcase a completely different style of animation.</p>"
                },
                {
                    title: "How whiteboard animation works in education",
                    content: "<p>The whiteboard animation is a combination of drawing animations, illustrations, characters and a voiceover, which makes it engaging and attractive. While using complex ideas and concepts, the illustrators and designers’ skills are showcased by changing these abstract topics into easily understandable animations.</p>"
                },
                {
                    title: "What are the elements for whiteboard animation?",
                    content: "<p>Elements of a High-end Whiteboard Animation Video:</p><ul class='list-disc list-inside'><li>Start with writing a script, you must write a script that captivates the audience and attracts their attention.</li><li>Build a strong narrative.</li><li>Include Appealing Illustrations and Colors.</li><li>Easy to understand concepts</li><li>Clear Call to Action</li><li>Short and Sweet</li></ul>"
                }
            ]} />
            <Footer />
        </>
    )
}