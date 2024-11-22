import { CustomContainer } from "@/components/UI";

import { BannerImg } from "./BannerImg";
import { Category } from "./Category";

export default function Banner() {
  return (
    <section className="relative">
      <BannerImg />

      {/* content */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <CustomContainer>
          <div className="bg-white w-[230px]">
            <Category />
          </div>
        </CustomContainer>
      </div>
    </section>
  );
}
