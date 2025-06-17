// Components
import { FAQs, Footer, Grid, Hero, Industries, Partners, Portfolio, Process, Reviews, FullViewVideo, SuccessClients, TypesOfVideos, WeAre } from "@/components"
// Media
import GridImg1 from "media/3d-animation-page/grid/1.png"
import GridImg2 from "media/3d-animation-page/grid/2.png"
import GridImg3 from "media/3d-animation-page/grid/3.png"
import GridImg4 from "media/3d-animation-page/grid/4.png"
import GridImg5 from "media/3d-animation-page/grid/5.png"
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
                src={process.env.NEXT_PUBLIC_GRID_VIDEO_1}
                title="3D Animation Agency <br class='hidden md:block' /> Transforming Vision <br class='hidden md:block' /> Into Reality"
                desc="Video Animation is a well-recognized 3D animation company with a team consisting of expert animators that are experienced in crafting remarkable 3D visuals. Our areas of expertise include the entertainment industry, gaming, E- learning, Hi-tech businesses and more. No matter how complex your desired 3D animation is, our team of certified animators is highly skilled at transforming your vision into a stunning reality."
                cta="Book a Free Call"
            />
            <SuccessClients
                numbers={[
                    {
                        num: "1400+",
                        text: "Projects"
                    },
                    {
                        num: "11+",
                        text: "International Awards"
                    },
                    {
                        num: "1000+",
                        text: "Reviews"
                    },
                    {
                        num: "$9M+",
                        text: "Revenue Generations for Clients"
                    },
                    {
                        num: "500M+",
                        text: "Views on Our Clients Videos",
                    },
                    {
                        num: "60+",
                        text: "5 Star Ratings for Animation Service"
                    }
                ]}
                title="A company that has helped small startups and global brands."
                desc="As a 3D animation company, we’ve consistently delivered stellar projects."
            />
            <WeAre
                desc="<p>An award-winning 3D animation Company that promises exponential growth and results for its clients. With experience of over 12 years in 3d animation services, we ensure our consistent commitment to each project. We carry a team of top-notch animators who are skilled at crafting remarkable digital 3D animation. Our excellence in crafting original and stunning 3D animated visuals defines our accuracy in all departments.  Contact Video Animation today and bring your vision to life.</p>"
            />
            <Grid
                titie="3D Animations"
                excerpt="Experience beyond <br /> the ordinary"
                content="<p>Our 3D animation Company focuses on delivering the best 3D animation experience. You may wonder how we can turn your ideas into reality? We assure you no matter how complex your vision is, our studio is capable of producing realistic 3d Models with exquisite detail.</p><p>From creating excellent storylines to realistic animation, and styling to editing, our animators can create remarkable 3D worlds and environments, including cartoons and realistic videos that exceed your expectations. When you choose our 3D animation Services, you can relax while we handle your project from start to finish.</p>"
                media={[GridImg1, GridImg2, GridImg3, GridImg4, GridImg5]}
            />
            <FullViewVideo
                video={process.env.NEXT_PUBLIC_GRID_VIDEO_2}
                subTitle="Jumbo Junior"
                overlay={true}
                title="Video Animation, <br class='hidden md:block' /> where 3D animation <br class='hidden md:block' /> meets Passion"
                desc="Creating high end realistic 3d animations requires passion and love for the art of animation. Our team members have years of experience in the industry and we always choose the perfect talent for each project. We take each job seriously, whether our client is a small startup project or a multinational company. 3D digital animation is a long process, and we have specialists with different responsibilities at each step of this great process, so we can put our maximum focus to every small aspect. We don’t just offer typical 3D animation services; we thrive on providing the best animation experience to the viewers and our clients because our animators are skilled artists who bring compassion to their work."
            />
            <Partners
                title="3D Animation Service Depends <br class='hidden sm:block' /> on Satisfaction"
                desc="We’ve helped businesses grow, boost their brand image and generate an audience by providing the best 3D animation product models, visuals, prototypes and virtual environments."
            />
            {/* <Portfolio
                title="Let Us Generate Astonishing 3D Visuals for You!"
                desc="A place where you can create gorgeous 3D animations with different forms of animations"
                slides={[
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Digital 3D",
                        desc: "Looking for 3D models for marketing, digital art or prototypes? we can help you achieve your desired Digital 3D results. We ensure accuracy and quality by increasing the project’s impact.",
                        link: "Create 3D Explainers"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_2,
                        title: "Interactive 3D",
                        desc: "Our Interactive 3D animation service offers engagement and ensures the best user experience. Now you can create your products’ interactive demonstrations, educational material, brand decks, and much more.",
                        link: "Create 3D Explainers"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_3,
                        title: "Virtual Reality 3D",
                        desc: "We build structures and realistic environments, our Virtual reality 3D services deliver high end VR Experiences that are ideal for gaming visuals, educating employees, painting cartoon animation and even entertainment. ",
                        link: "Create 3D Explainers"
                    },
                    {
                        video: process.env.NEXT_PUBLIC_GRID_VIDEO_1,
                        title: "Digital 3D",
                        desc: "Looking for 3D models for marketing, digital art or prototypes? we can help you achieve your desired Digital 3D results. We ensure accuracy and quality by increasing the project’s impact.",
                        link: "Create 3D Explainers"
                    }
                ]}
            /> */}
            <Portfolio />
            <Industries
                title="Industries We’ve Mastered with <br /> 3D Animation"
                desc="We offer an exciting array of 3D animated videos, ideal for the most demanding industries. Our clients have been able to communicate clear value with our 3D animated services."
                industries={[
                    {
                        media: Industry1,
                        title: "Gaming",
                        desc: "Helping Game developers produce phenomenal visuals and digital animations, by enforcing our high-skilled animators to create detailed animations and elevate the gaming experience, enhancing storytelling and gameplay."
                    },
                    {
                        media: Industry2,
                        title: "Film & Television",
                        desc: "We specialize in creating outstanding visual effects and CGI animations for TV shows and movies, whether you are looking for creating attractive creatures or realistic animated environments we got you covered."
                    },
                    {
                        media: Industry3,
                        title: "Advertising",
                        desc: "From promotional ads to product demos, we’ve done it all. We’ve excelled in creating 3D animations for TV commercials and marketing campaigns that make their place in the minds of viewers."
                    },
                    {
                        media: Industry4,
                        title: "3D Architecture",
                        desc: "Our animations bring architectural models to life, helping architects improve their designs. We create detailed and realistic 3Dmodels that are developed in latest professional software tools."
                    },
                    {
                        media: Industry1,
                        title: "Product Design",
                        desc: "Whether you want product design for consumer electronics, or automotive parts, we create all types of realistic products 3D models, ideal for showcasing and marketing purposes."
                    },
                    {
                        media: Industry2,
                        title: "Medical & Healthcare",
                        desc: "We create detailed animations that are used in medical training of staff, and marketing for healthcare products. We’ve simplified complex materials into understandable animations for users."
                    }
                ]}
            />
            <Process
                process={[
                    {
                        icon: Process1,
                        title: "Accuracy at its best",
                        desc: "<p>At Video Animation, we thrive on creating detailed and realistic 3D animations that precisely represent your products and design. Ensuring accurate results without the need of revisions that makes the client spend more.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process2,
                        title: "Experienced Animators",
                        desc: "<p>Our 3D animation company works with highly skilled animators and developers, who have years of experience in visual design, character detailing, and development of 3D environments.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    },
                    {
                        icon: Process3,
                        title: "Increased your Sales & Value",
                        desc: "<p>We’ve helped organizations and brands in increasing their product sales by creating engaging animations that give life to their products. We created compelling stories and Interactive 3D elements demonstrating the products’ capability, and problem-solving abilities.</p>",
                        ctaText: "Get an Estimate",
                        link: "javascript:;"
                    }
                ]}
            />
            <TypesOfVideos
                title="A 3D Animation Agency <br className='hidden md:block' /> with All Creative <br className='hidden md:block' /> Experts"
                desc="<p>Video Animation studio prides on catering all types of clients’ requirements. We work with specialists in crafting your desired animations and visuals.</p>"
                types={[
                    {
                        media: TypesOfVideos1,
                        title: "Advertising",
                        desc: "3D animations showcase your product’s features, brand’s message in a visually attractive manner",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Training",
                        desc: "Train your employees or students by creating 3D educational videos and Training materials.",
                        color: "bg-[#89CDDF]"
                    },
                    {
                        media: TypesOfVideos3,
                        title: "Entertainment",
                        desc: "Sell your tech products with minimalist, yet engaging presentations with our animation services.",
                        color: "bg-[#E098F9]"
                    },
                    {
                        media: TypesOfVideos4,
                        title: "Architectural Visualization",
                        desc: "Turn architectural concepts into realistic 3D models, and more",
                        color: "bg-[#BCD1B1]"
                    },
                    {
                        media: TypesOfVideos5,
                        title: "Product Design & Prototyping",
                        desc: "Create prototypes and have a lasting impression on your investors.",
                        color: "bg-[#FEB13A]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Medical & Healthcare",
                        desc: "You can turn complex surgical procedures into visually attractive 3D animations.",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos1,
                        title: "Advertising",
                        desc: "3D animations showcase your product’s features, brand’s message in a visually attractive manner",
                        color: "bg-[#F0DCA9]"
                    },
                    {
                        media: TypesOfVideos2,
                        title: "Training",
                        desc: "Train your employees or students by creating 3D educational videos and Training materials.",
                        color: "bg-[#89CDDF]"
                    },
                ]}
            />
            <Reviews
                titie="Entrusted by Your Favorite Global Brands."
            />
            <FAQs items={[
                {
                    title: "What are the three common stages of 3D animation?",
                    content: "<p>The creation of 3D animation involves 3 Steps: Pre-Production, Production and Post Production. According to client’s needs and desires, the storyline and animation is produced.</p>"
                },
                {
                    title: "How much does it cost to make a 3D animated video?",
                    content: "<p>It would cost you around $10000 considering the complex and artistic nature of the video. It can even cost you around $5000-$10000 per minute for a video for a project with minimum characters and detail.</p>"
                },
                {
                    title: "How much does a 30 second 3D animation cost?",
                    content: "<p>Depending on factors like number of revisions, style of animation and high-end visuals, It would cost you around $2000-$4500 for a 30-second 3D animated video.</p>"
                },
                {
                    title: "How much does 3D animation cost per second?",
                    content: "<p>The cost is $500-$2500 per second for a 3D animation video with good quality of characters and visuals.</p>"
                },
                {
                    title: "Is 3d animation cheaper than 2d?",
                    content: "<p>3D animation is more expensive than 2D because it requires more skillful animators, realistic visuals, and the use of the latest technology and software.</p>"
                }
            ]} />
            <Footer />
        </>
    )
}