import { CTA } from ".";

const Questioners = ({subTitle, title, desc, data}) => {
  return (
    <section>
      <div className="relative py-[40px] lg:py-[70px]">
        <div className="container">
          <div className="text-center mb-5">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && <h2 className="text-[26px] md:text-[30px] lg:text-[40px] block leading-tight font-bold font-sans text-[#000000] mb-2" dangerouslySetInnerHTML={{__html: title}} />}
            {desc && <p className="text-[14px] lg:text-[16px] lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans text-[#000000]" dangerouslySetInnerHTML={{__html: desc}} />}
          </div>
          <div className="lg:w-[70%] mx-auto">
            <div className="grid grid-cols-1 gap-y-2">
              <span className="block w-full h-[1px] bg-[#40BEE2]"></span>
              <span className="block w-full h-[1px] bg-[#40BEE2]"></span>
            </div>
            <div className="grid grid-cols-12 gap-x-2">
              {data &&
                data?.map((e, i) => (
                  <>
                    <div className="col-span-2 border-r-[1px] border-[#40BEE2] py-4">
                      <div className="block text-end pr-3 lg:pr-5">
                        <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#000000]">{i + 1}.</span>
                      </div>
                    </div>
                    <div className="col-span-10 border-l-[1px] border-[#40BEE2] py-4">
                      <div className="pl-3 lg:pl-5">
                        <h3 className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#000000] mb-2">{e.title}</h3>
                        <p className="text-[14px] block leading-[24px] font-normal font-sans text-[#000000]">{e.desc}</p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-y-2">
              <span className="block w-full h-[1px] bg-[#40BEE2]"></span>
              <span className="block w-full h-[1px] bg-[#40BEE2]"></span>
            </div>
          </div>
          <div className="flex gap-2 mt-8 justify-center">
            <CTA
              text={"Get Started"}
              className="w-max lg:h-[50px] h-[40px] bg-[#40bee2] text-white rounded-md flex items-center md:!px-16 !px-10 font-sans font-semibold justify-center border-2 transition-all border-transparent  hover:bg-secondary-100"
            />
            <CTA
              text={"Call Us Now"}
              className={`w-max lg:h-[50px] h-[40px] bg-transparent text-[#40bee2] rounded-md flex items-center md:!px-16 !px-10 font-sans font-semibold justify-center border-2 transition-all border-[#40bee2]  hover:bg-secondary-100`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questioners;
