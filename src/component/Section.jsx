import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
import img from '../../src/assets/image/banner/1.jpg'
import img2 from '../../src/assets/image/banner/2.jpg'
import img3 from '../../src/assets/image/banner/3.jpg'
import img4 from '../../src/assets/image/banner/4.jpg'
import img5 from '../../src/assets/image/banner/5.jpg'
import img6 from '../../src/assets/image/banner/6.jpg'
import img7 from '../../src/assets/image/banner/img-2.jpg'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Section = () => {
    return (
        <div>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 5,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Section;