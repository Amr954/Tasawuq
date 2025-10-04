import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import hero1 from '../assets/img/banner_Hero1.jpg';
import hero2 from '../assets/img/banner_Hero2.jpg';
import hero3 from '../assets/img/banner_Hero3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

import { Autoplay, Pagination } from 'swiper/modules';

function HeroSlider() {
    return (


        <>

            <div className="hero">
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, TV Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={hero1} alt="hero1" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, TV Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={hero2} alt="hero2" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, TV Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src={hero3} alt="hero3" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>





        </>
    )
}

export default HeroSlider