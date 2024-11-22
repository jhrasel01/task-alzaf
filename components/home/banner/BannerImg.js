"use client";

import { CustomImage } from "@/components/UI";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import bannerImg from "@/public/images/banner.png";

export const BannerImg = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <CustomImage
            src={bannerImg}
            width="2000"
            height="450"
            alt="banner"
            className="w-full h-[420px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CustomImage
            src={bannerImg}
            width="2000"
            height="450"
            alt="banner"
            className="w-full h-[420px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
