export default function WeAre({
    desc = "<p>At Video Animation, we're a passionate team of animators, designers, and storytellers dedicated to crafting immersive animations that propel you towards success. From complex product demonstrations to captivating logos, we translate your vision into beautiful visuals that trigger users to take action. Whether you are looking for 2D animation or high-end 3D visuals, we possess the skills and prowess to convert your ideas into a beautiful digital reality.</p>"
}) {
    return (
        <section>
            <div className="bg-black text-background py-[40px]">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-y-5  gap-x-4">
                        <div className="col-span-12 lg:col-span-5">
                            <video tabIndex={0} preload="none" loop autoPlay muted playsInline aria-label="Video Player" className="max-w-full w-full h-full object-cover object-center">
                                <source src={process.env.NEXT_PUBLIC_WE_ARE} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <div tabIndex={0} className="text-[14px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 2xl:max-w-[95%] leading-[24px] xl:leading-[26px] text-justify lg:text-left [&>*:not(:last-child)]:mb-5" dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
