import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom'
import banner1 from '../../assets/img/etc/banner1.png'
import banner2 from '../../assets/img/etc/banner2.png'
import banner3 from '../../assets/img/etc/banner3.png'
import banner4 from '../../assets/img/etc/banner4.png'

const Banner = () => {
    return (
        <div className='banner_wrap'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='swipe'
            >
                <SwiperSlide ><Link to='/booth'> <img src={banner1} alt="Banner 1" /></Link></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="Banner 2" /></SwiperSlide>
                <SwiperSlide ><Link to='/map'> <img src={banner3} alt="Banner 3" /></Link></SwiperSlide>
                <SwiperSlide > <Link to='/booth'><img src={banner4} alt="Banner 4" /> </Link></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
