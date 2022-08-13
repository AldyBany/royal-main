import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, {useRef} from 'react'

export default () => {
  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
    <Swiper
    modules={[Navigation]}
      navigation= {{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      slidesPerView={3}
      loop
      speed={600}
      onInit={(swiper)=>{
        swiper.params.navigation.prevEl= swiperNavPrevRef.current
        swiper.params.navigation.nextEl= swiperNavNextRef.current
        swiper.navigation.init()
        swiper.navigation.update()

      }}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        968: {
          width: 968,
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <div ref={swiperNavPrevRef}>Prev</div>
      <div ref={swiperNavNextRef}>Next</div>
    </Swiper>
  );
};