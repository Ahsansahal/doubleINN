import { Banner, BookSlider, LogoSlider, Audience } from "@/component/new"
import React from "react"
import img2 from "media/images/banner/img2.png"
import bannerImg from "media/images/banner/amazonbanner.png"


const AmazonPublishingNew = () => {
    const bannertext = {
        title: 'Amazon Publishing <br /> Services Company To Make <br /> Your Book Available To <br /> Millions Of Readers!',
        discuss: `LET'S DISCUSS`,
        homebannernum: '(800)781-9093',
        bannercounter: 'counter',
        imageban: bannerImg,
        img2: img2,
    }
    return (
        <main>
            <Banner title={bannertext.title}
                discuss={bannertext.discuss}
                homebannernum={bannertext.homebannernum}
                bannercounter={bannertext.bannercounter}
                imageban={bannertext.imageban}
                img2={bannertext.img2}
            />
            <LogoSlider/>
            <BookSlider
                subtitle=""
                title="Tradition Publishing House"
                desc="Our Publishing Experts Can Help You"
                discuss={bannertext.discuss}
                homebannernum={bannertext.homebannernum}
            />
            <Audience/>

        </main>
    )
}

export default AmazonPublishingNew