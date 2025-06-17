// Next
import dynamic from "next/dynamic"
import Image from "next/image"
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components"
const ModalVideo = dynamic(() => import("./ModalVideo"))
// Media
// 2D

// Images For Grid 
// import GridImg12D from "media/2d-animation-page/grid/1.png"
// import GridImg22D from "media/2d-animation-page/grid/2.png"
// import GridImg32D from "media/2d-animation-page/grid/3.png"
// import GridImg42D from "media/2d-animation-page/grid/4.png"
// import GridImg52D from "media/2d-animation-page/grid/5.png"

// Images For Thumbnail 
import ThumbnailImg12D from "media/2d-animation-page/thumbnail/1.png"
import ThumbnailImg22D from "media/2d-animation-page/thumbnail/2.png"
import ThumbnailImg32D from "media/2d-animation-page/thumbnail/3.png"
import ThumbnailImg42D from "media/2d-animation-page/thumbnail/4.png"
import ThumbnailImg52D from "media/2d-animation-page/thumbnail/5.png"

// 3D

// Images For Grid 
// import GridImg13D from "media/3d-animation-page/grid/1.png"
// import GridImg23D from "media/3d-animation-page/grid/2.png"
// import GridImg33D from "media/3d-animation-page/grid/3.png"
// import GridImg43D from "media/3d-animation-page/grid/4.png"
// import GridImg53D from "media/3d-animation-page/grid/5.png"

// Images For Thumbnail 
import ThumbnailImg13D from "media/3d-animation-page/thumbnail/1.jpg"
import ThumbnailImg23D from "media/3d-animation-page/thumbnail/2.jpg"
import ThumbnailImg33D from "media/3d-animation-page/thumbnail/3.jpg"
import ThumbnailImg43D from "media/3d-animation-page/thumbnail/4.jpg"
import ThumbnailImg53D from "media/3d-animation-page/thumbnail/5.jpg"

// AV

// Images For Grid 
import GridImg1AV from "media/architectural-visualization-page/grid/1.png"
import GridImg2AV from "media/architectural-visualization-page/grid/2.png"
import GridImg3AV from "media/architectural-visualization-page/grid/3.png"
import GridImg4AV from "media/architectural-visualization-page/grid/4.png"
import GridImg5AV from "media/architectural-visualization-page/grid/5.png"

// Images For Thumbnail 
// import ThumbnailImg1AV from "media/architectural-visualization-page/thumbnail/1.jpg"
// import ThumbnailImg2AV from "media/architectural-visualization-page/thumbnail/2.jpg"
// import ThumbnailImg3AV from "media/architectural-visualization-page/thumbnail/3.jpg"
// import ThumbnailImg4AV from "media/architectural-visualization-page/thumbnail/4.jpg"
// import ThumbnailImg5AV from "media/architectural-visualization-page/thumbnail/5.jpg"

// CGI

// Images For Grid 
import GridImg1CGI from "media/cgi-and-vfx-page/grid/1.png"
import GridImg2CGI from "media/cgi-and-vfx-page/grid/2.png"
import GridImg3CGI from "media/cgi-and-vfx-page/grid/3.png"
import GridImg4CGI from "media/cgi-and-vfx-page/grid/4.png"
import GridImg5CGI from "media/cgi-and-vfx-page/grid/5.png"

// Images For Thumbnail 
// import ThumbnailImg1CGI from "media/cgi-and-vfx-page/thumbnail/1.jpg"
// import ThumbnailImg2CGI from "media/cgi-and-vfx-page/thumbnail/2.jpg"
// import ThumbnailImg3CGI from "media/cgi-and-vfx-page/thumbnail/3.jpg"
// import ThumbnailImg4CGI from "media/cgi-and-vfx-page/thumbnail/4.jpg"
// import ThumbnailImg5CGI from "media/cgi-and-vfx-page/thumbnail/5.jpg"

// HC

// Images For Grid 
// import GridImg1HC from "media/hybrid-&-cel-animations-page/grid/1.png"
// import GridImg2HC from "media/hybrid-&-cel-animations-page/grid/2.png"
// import GridImg3HC from "media/hybrid-&-cel-animations-page/grid/3.png"
// import GridImg4HC from "media/hybrid-&-cel-animations-page/grid/4.png"
// import GridImg5HC from "media/hybrid-&-cel-animations-page/grid/5.png"

// Images For Thumbnail 
import ThumbnailImg1HC from "media/hybrid-&-cel-animations-page/thumbnail/1.jpg"
import ThumbnailImg2HC from "media/hybrid-&-cel-animations-page/thumbnail/2.jpg"
import ThumbnailImg3HC from "media/hybrid-&-cel-animations-page/thumbnail/3.jpg"
import ThumbnailImg4HC from "media/hybrid-&-cel-animations-page/thumbnail/4.jpg"
import ThumbnailImg5HC from "media/hybrid-&-cel-animations-page/thumbnail/5.jpg"

// Info

// Images For Grid 
import GridImg1Info from "media/infographics/grid/1.png"
import GridImg2Info from "media/infographics/grid/2.png"
import GridImg3Info from "media/infographics/grid/3.png"
import GridImg4Info from "media/infographics/grid/4.png"
import GridImg5Info from "media/infographics/grid/5.png"

// Images For Thumbnail 
// import ThumbnailImg1Info from "media/infographics/thumbnail/1.jpg"
// import ThumbnailImg2Info from "media/infographics/thumbnail/2.jpg"
// import ThumbnailImg3Info from "media/infographics/thumbnail/3.jpg"
// import ThumbnailImg4Info from "media/infographics/thumbnail/4.jpg"
// import ThumbnailImg5Info from "media/infographics/thumbnail/5.jpg"

// Logo

// Images For Grid 
import GridImg1Logo from "media/logo-animation-page/grid/1.png"
import GridImg2Logo from "media/logo-animation-page/grid/2.png"
import GridImg3Logo from "media/logo-animation-page/grid/3.png"
import GridImg4Logo from "media/logo-animation-page/grid/4.png"
import GridImg5Logo from "media/logo-animation-page/grid/5.png"

// Images For Thumbnail 
// import ThumbnailImg1Logo from "media/logo-animation-page/thumbnail/1.jpg"
// import ThumbnailImg2Logo from "media/logo-animation-page/thumbnail/2.jpg"
// import ThumbnailImg3Logo from "media/logo-animation-page/thumbnail/3.jpg"
// import ThumbnailImg4Logo from "media/logo-animation-page/thumbnail/4.jpg"
// import ThumbnailImg5Logo from "media/logo-animation-page/thumbnail/5.jpg"

// Motion

// Images For Grid 
// import GridImg1Motion from "media/motion-graphics/grid/1.png"
// import GridImg2Motion from "media/motion-graphics/grid/2.png"
// import GridImg3Motion from "media/motion-graphics/grid/3.png"
// import GridImg4Motion from "media/motion-graphics/grid/4.png"
// import GridImg5Motion from "media/motion-graphics/grid/5.png"

// Images For Thumbnail 
import ThumbnailImg1Motion from "media/motion-graphics/thumbnail/1.jpg"
import ThumbnailImg2Motion from "media/motion-graphics/thumbnail/2.jpg"
import ThumbnailImg3Motion from "media/motion-graphics/thumbnail/3.jpg"
import ThumbnailImg4Motion from "media/motion-graphics/thumbnail/4.jpg"
import ThumbnailImg5Motion from "media/motion-graphics/thumbnail/5.jpg"

// Video

// Images For Grid 
import GridImg1Video from "media/video-editing-page/grid/1.png"
import GridImg2Video from "media/video-editing-page/grid/2.png"
import GridImg3Video from "media/video-editing-page/grid/3.png"
import GridImg4Video from "media/video-editing-page/grid/4.png"
import GridImg5Video from "media/video-editing-page/grid/5.png"

// Images For Thumbnail 
// import ThumbnailImg1Video from "media/video-editing-page/thumbnail/1.jpg"
// import ThumbnailImg2Video from "media/video-editing-page/thumbnail/2.jpg"
// import ThumbnailImg3Video from "media/video-editing-page/thumbnail/3.jpg"
// import ThumbnailImg4Video from "media/video-editing-page/thumbnail/4.jpg"
// import ThumbnailImg5Video from "media/video-editing-page/thumbnail/5.jpg"

// Whiteboard

// Images For Grid 
// import GridImg1Whiteboard from "media/whiteboard-animation-page/grid/1.png"
// import GridImg2Whiteboard from "media/whiteboard-animation-page/grid/2.png"
// import GridImg3Whiteboard from "media/whiteboard-animation-page/grid/3.png"
// import GridImg4Whiteboard from "media/whiteboard-animation-page/grid/4.png"
// import GridImg5Whiteboard from "media/whiteboard-animation-page/grid/5.png"

// Images For Thumbnail 
import ThumbnailImg1Whiteboard from "media/whiteboard-animation-page/thumbnail/1.jpg"
import ThumbnailImg2Whiteboard from "media/whiteboard-animation-page/thumbnail/2.jpg"
import ThumbnailImg3Whiteboard from "media/whiteboard-animation-page/thumbnail/3.jpg"
import ThumbnailImg4Whiteboard from "media/whiteboard-animation-page/thumbnail/4.jpg"
import ThumbnailImg5Whiteboard from "media/whiteboard-animation-page/thumbnail/5.jpg"

const data = [
    {
        name: "2D Animation",
        grids: [
            {
                thumbnail: ThumbnailImg12D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998828845/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6b9aeb2f2f26d05a12f81a29f6295c90e98f290d2e7d4cfd19a7b2b02508693c"
            },
            {
                thumbnail: ThumbnailImg22D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998829034/rendition/1080p/file.mp4?loc=external&log_user=0&signature=41a7686926bdda1ececdf7a2d2401f462502052e23b30eefbc708b2fa9e2e96f"
            },
            {
                thumbnail: ThumbnailImg32D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998828996/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0cd43f8b119dfad45c10c90323981fab67c20eca9199fc75f08e7386b2f21d59"
            },
            {
                thumbnail: ThumbnailImg42D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998828871/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8840e48347111485705a88a414b392b9c403f3bcd838ced38eb54068d02fd9ae"
            },
            {
                thumbnail: ThumbnailImg52D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998828894/rendition/1080p/file.mp4?loc=external&log_user=0&signature=7ec5d99aa6d62ec0cb97beb6011cc64f120224fa2c0796d2f1f3f6f4736044ef"
            },
        ]
    },
    {
        name: "3D Animation",
        grids: [
            {
                thumbnail: ThumbnailImg13D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998913293/rendition/1080p/file.mp4?loc=external&log_user=0&signature=fd9ab23ef5f9078e4d7872ff9553fdbb515545b05b0b64dd2c8b1077ce75c219"
            },
            {
                thumbnail: ThumbnailImg23D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998913379/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9dee0f3e2610bcbdffcd5fffce89edbce4ba7fd2be2110bc80a9e381afedd9af"
            },
            {
                thumbnail: ThumbnailImg33D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998913432/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8aee35d184242431da8418e4af6ccfc3dcc92511e5483395824cef3da8346409"
            },
            {
                thumbnail: ThumbnailImg43D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998913424/rendition/720p/file.mp4?loc=external&log_user=0&signature=8794502c273c31068c18f0f2e57ae301b2a5004792536fce3963f505ccfb3e11"
            },
            {
                thumbnail: ThumbnailImg53D,
                video: "https://player.vimeo.com/progressive_redirect/playback/998913345/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e9232c8861c3f12306d1ee9c698ef5c2c33709ca2155f159d58dcd04bff3ad44"
            },
        ]
    },
    {
        name: "Architectural Visualization",
        type: "image",
        grids: [GridImg1AV, GridImg2AV, GridImg3AV, GridImg4AV, GridImg5AV]
    },
    {
        name: "CGI-VFX",
        type: "image",
        grids: [GridImg1CGI, GridImg2CGI, GridImg3CGI, GridImg4CGI, GridImg5CGI]
    },
    {
        name: "Hybrid & Cel",
        grids: [
            {
                thumbnail: ThumbnailImg1HC,
                video: "https://player.vimeo.com/progressive_redirect/playback/998924200/rendition/720p/file.mp4?loc=external&log_user=0&signature=d49d0320bf2fcd33209ddf00f09903b4e08c432f417924146780837e89ecb9d6"
            },
            {
                thumbnail: ThumbnailImg2HC,
                video: "https://player.vimeo.com/progressive_redirect/playback/998924586/rendition/1080p/file.mp4?loc=external&log_user=0&signature=ecacbeb0de6f3cba3b83c3e629bc8f401c5d29c1ef57b0c23da056a7d85669c2"
            },
            {
                thumbnail: ThumbnailImg3HC,
                video: "https://player.vimeo.com/progressive_redirect/playback/998924280/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6cd7a0a54c06ce646b66d50f781b477b816fcbc10aa0c0da2a51f4253ba3aeec"
            },
            {
                thumbnail: ThumbnailImg4HC,
                video: "https://player.vimeo.com/progressive_redirect/playback/998924537/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8a9e074a1440c6e5dc3832c201b6936e5b220af3baa26f8c2212c2a27e7d49b0"
            },
            {
                thumbnail: ThumbnailImg5HC,
                video: "https://player.vimeo.com/progressive_redirect/playback/998924333/rendition/1080p/file.mp4?loc=external&log_user=0&signature=cf4e2d4c1085ebf3e4f05d6bd86a8dd6efa2e909e506c947beac6f04d643a414"
            },
        ]
    },
    {
        name: "Infographics",
        type: "image",
        grids: [GridImg1Info, GridImg2Info, GridImg3Info, GridImg4Info, GridImg5Info]
    },
    {
        name: "Logo Animation",
        type: "image",
        grids: [GridImg1Logo, GridImg2Logo, GridImg3Logo, GridImg4Logo, GridImg5Logo]
    },
    {
        name: "Motion Graphics",
        grids: [
            {
                thumbnail: ThumbnailImg1Motion,
                video: "https://player.vimeo.com/progressive_redirect/playback/998929590/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9360f0bea71df09a13a6c88c5740aa248d9f68f0b8507efd44b05cb17ac817f4"
            },
            {
                thumbnail: ThumbnailImg2Motion,
                video: "https://player.vimeo.com/progressive_redirect/playback/998929702/rendition/1080p/file.mp4?loc=external&log_user=0&signature=ffc8163f10b06acdd471af7b3fa6ad682a57d1ab8faccc34a6670768962a3a91"
            },
            {
                thumbnail: ThumbnailImg3Motion,
                video: "https://player.vimeo.com/progressive_redirect/playback/998929685/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6fed6792cbc549bfa14aa8f069adafd02c77bb2d1fc8f16aae85881474705a37"
            },
            {
                thumbnail: ThumbnailImg4Motion,
                video: "https://player.vimeo.com/progressive_redirect/playback/998929662/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3af4b78240ef81b73027eb28d079831619ad4830b6e9c656f896998762cadd0e"
            },
            {
                thumbnail: ThumbnailImg5Motion,
                video: "https://player.vimeo.com/progressive_redirect/playback/998929636/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a9ae8a99a8bdb7676522a17c9e6a581dbe4a0d71087e6e8c6eecf01b4e9b7031"
            },
        ]
    },
    {
        name: "Video Editing",
        type: "image",
        grids: [GridImg1Video, GridImg2Video, GridImg3Video, GridImg4Video, GridImg5Video]
    },
    {
        name: "Whiteboard Animation",
        grids: [
            {
                thumbnail: ThumbnailImg1Whiteboard,
                video: "https://player.vimeo.com/progressive_redirect/playback/999183863/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e93cfdc1ad3ba7d663509d74df3ba7c2dd2fa4e9515e463507bb9606be0974dc"
            },
            {
                thumbnail: ThumbnailImg2Whiteboard,
                video: "https://player.vimeo.com/progressive_redirect/playback/999184076/rendition/1080p/file.mp4?loc=external&log_user=0&signature=fb26c24dda6554e1354da851f716ca730e4446ac73ebc2babeecc7161d81c2bb"
            },
            {
                thumbnail: ThumbnailImg3Whiteboard,
                video: "https://player.vimeo.com/progressive_redirect/playback/999184030/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e33ca5ab561b35d010636057ed96f417935b05083da350c28ffd421cb0a1e6f4"
            },
            {
                thumbnail: ThumbnailImg4Whiteboard,
                video: "https://player.vimeo.com/progressive_redirect/playback/999183975/rendition/720p/file.mp4?loc=external&log_user=0&signature=f03e153d0e7bf06c5be13ade89a7c4f98e71550a08e5ce71ae043c26ebed1f2d"
            },
            {
                thumbnail: ThumbnailImg5Whiteboard,
                video: "https://player.vimeo.com/progressive_redirect/playback/999184175/rendition/720p/file.mp4?loc=external&log_user=0&signature=2acdd7dd6aafd5acbe3ad296e2b259abd526db740c5d1fb6021ff99ed0b130fd"
            },
        ]
    }
]


export default function PortfolioTabs() {
    return (
        <section>
            <div className="container">
                <div>
                    <Tabs defaultValue={data[0].name}>
                        <TabsList>
                            {data.map(({ name }) => (
                                <TabsTrigger key={name} value={name} className="snap-center shrink-0">{name}</TabsTrigger>
                            ))}
                        </TabsList>
                        {data.map(({ name, type, grids }) => (
                            <TabsContent value={name} key={name}>
                                <div className="grid grid-cols-12 gap-5 mt-[50px] mb-[100px]">
                                    <div className="relative col-span-6 md:col-span-4">
                                        {
                                            type === "image" ? <Image src={grids[0]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" /> : <ModalVideo thumbnailImage={grids[0].thumbnail} videoSource={grids[0].video} />
                                        }
                                    </div>
                                    <div className="relative col-span-6 md:col-span-8">
                                        {
                                            type === "image" ? <Image src={grids[1]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" /> : <ModalVideo thumbnailImage={grids[1].thumbnail} videoSource={grids[1].video} />
                                        }
                                    </div>
                                    <div className="relative col-span-12">
                                        {
                                            type === "image" ? <Image src={grids[2]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" /> : <ModalVideo thumbnailImage={grids[2].thumbnail} videoSource={grids[2].video} />
                                        }
                                    </div>
                                    <div className="relative col-span-6 md:col-span-6">
                                        {
                                            type === "image" ? <Image src={grids[3]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" /> : <ModalVideo thumbnailImage={grids[3].thumbnail} videoSource={grids[3].video} />
                                        }
                                    </div>
                                    <div className="relative col-span-6 md:col-span-6">
                                        {
                                            type === "image" ? <Image src={grids[4]} alt="grid" className="h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center" /> : <ModalVideo thumbnailImage={grids[4].thumbnail} videoSource={grids[4].video} />
                                        }
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </section>
    )
}