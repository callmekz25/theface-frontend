import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

interface Props {
  space?: number;
  slidesPerView?: number;
  autoplay?: boolean;
  pagination?: boolean;
  defaultPositionButton?: boolean;
  children: React.ReactNode;
}
export default function BaseSlider({
  autoplay,
  defaultPositionButton,
  pagination,
  space = 10,
  slidesPerView = 5,
  children,
}: Props) {
  return (
    <div className="relative">
      <button
        className={`swiper-button-prev-custom absolute hover:cursor-pointer ${defaultPositionButton ? 'left-0' : '-left-5'} top-1/2 -translate-y-1/2 z-10 bg-white p-3 shadow-xl rounded-full`}
      >
        <ChevronLeft size={30} />
      </button>

      <button
        className={`swiper-button-prev-custom absolute hover:cursor-pointer ${defaultPositionButton ? 'right-0' : '-right-5'} top-1/2 -translate-y-1/2 z-10 bg-white p-3 shadow-xl rounded-full`}
      >
        <ChevronRight size={30} />
      </button>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        speed={1000}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={space}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        autoplay={
          autoplay
            ? {
                delay: 4000,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={pagination ? { clickable: true } : false}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
