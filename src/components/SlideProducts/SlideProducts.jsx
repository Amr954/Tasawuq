import React, { useRef, useState } from 'react';
import Products from './Products'
import './SlideProducts.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function SlideProducts({ data, title }) {

  return (
    <div className='slide-products slide'>
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, commodi!</p>
        </div>

        <Swiper navigation={true}
          loop={true}
          slidesPerView={5}
          spaceBetween={90}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,

          }}
          breakpoints={{
            1600: {
              slidesPerView: 5,
              spaceBetween:30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper">
          {data.map((item) => {
            return (
              <SwiperSlide> <Products item={item} /> </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SlideProducts