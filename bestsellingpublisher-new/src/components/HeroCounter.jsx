import icon1 from "media/icons/align.png";
import icon2 from "media/icons/author.png";
import icon3 from "media/icons/cup.png";
import Image from "next/image";

const counterArr = [
  [icon1, "400", "Million Words"],
  [icon2, "100", "Authors"],
  [icon3, "870", "Cups Of Coffee"],
];

const HeroCounter = () => {
  return (
    <div className="hidden sm:flex gap-10 !my-5">
      {counterArr?.map(([icon, num, text]) => (
        <div key={num} className="flex items-center gap-2 xl:gap-3">
          <Image src={icon} alt="bestsellingpublisher" priority />
          <div className="text-center">
            <h3 className="text-[30px] xl:text-[35px] font-sans font-extrabold leading-none text-secondary-100">{num}</h3>
            <span className="hidden lg:inline-block text-[12px] xl:text-[16px] 2xl:text-[16px] font-sans font-semibold text-primary-100 leading-normal uppercase">{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCounter;
