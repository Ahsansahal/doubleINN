import React from "react";
import {AutoScrollSlider} from "@/components";

// Media
import partner1 from 'media/clients/partner.png'
import partner2 from 'media/clients/partner2.png'
import partner3 from 'media/clients/partner3.png'
import partner4 from 'media/clients/partner4.png'
import partner5 from 'media/clients/partner5.png'
import partner6 from 'media/clients/partner6.png'
import partner7 from 'media/clients/partner7.png'
import partner8 from 'media/clients/partner8.png'
import Image from "next/image";

export default function EnlistedLogo() {
  return (
    <section>
      <div className="container">
        <div>
          <AutoScrollSlider wrapperClasses="my-5" direction="forward">
            {[partner1,partner2,partner3,partner4,partner5,partner6,partner7,partner8].map((img, i) => (
              <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-8">
                <div className="relative">
                  <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-0 rounded-[10px] group-hover:opacity-0 transition-opacity"></div>
                  <Image tabIndex={0} key={i} src={img} alt="SEO company" className="rounded-[10px]" width={200} height={100} />

                </div>
              </div>
            ))}
          </AutoScrollSlider>
        </div>
      </div>
    </section>
  );
}
