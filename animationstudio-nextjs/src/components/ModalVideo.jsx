"use client"
// React
import { useState } from "react"
// Next
import Image from "next/image";
// Media
import PlayIcon from "media/lightPlayIcon.svg"
// CN
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./index";

const ModalVideo = ({
    thumbnailImage,
    videoSource
}) => {
    const [isLoading, setIsLoading] = useState(true)
    const handleLoadedData = () => {
        setIsLoading(false)
    }
    return (
        <Dialog>
            <DialogTrigger>
                {thumbnailImage &&
                    <div className="relative">
                        <Image src={thumbnailImage} blurDataURL={thumbnailImage.blurDataURL} alt="thumbnail12D" className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover object-center rounded-3xl" />
                        <Image tabIndex={0} src={PlayIcon} alt="PlayIcon" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%] md:-translate-y-1/2 z-10 cursor-pointer" />
                        <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-30 rounded-3xl"></div>
                    </div>
                }
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="hidden">Video Player</DialogTitle>
                    <DialogDescription className="relative">
                        {thumbnailImage && isLoading && (
                            <Image src={thumbnailImage} blurDataURL={thumbnailImage.blurDataURL} alt="thumbnail" />
                        )}
                        {videoSource &&
                            <video
                                tabIndex={0}
                                loop
                                autoPlay
                                muted
                                playsInline
                                aria-label="Video Modal"
                                className={isLoading ? 'hidden' : ''}
                                onLoadedData={handleLoadedData}>
                                <source src={videoSource} type="video/mp4" />
                            </video>
                        }
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default ModalVideo;