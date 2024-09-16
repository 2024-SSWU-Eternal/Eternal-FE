import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Back from '../../assets/img/program/back.svg';
import map1 from '../../assets/img/program/1.svg';
import map2 from '../../assets/img/program/2.svg';
import map3 from '../../assets/img/program/3.svg';
import map4 from '../../assets/img/program/4.svg';
import map5 from '../../assets/img/program/5.svg';
import map6 from '../../assets/img/program/6.svg';

const Program = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imgInfoVisible, setImgInfoVisible] = useState(true);
  const pages = [map1, map2, map3, map4, map5, map6];
  const navigate = useNavigate();

    const onBack = () => {
        navigate('/');
    };

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex + 1);
  };

  const handleImgInfoClick = () => {
    setImgInfoVisible(true);
    setTimeout(() => {
      setImgInfoVisible(false);
    }, 3000);
  };

  return (
    <div className="Program_wrap container">
      <div className="header">
        <button className="back" onClick={onBack}>
          <img src={Back} alt="back button" />
        </button>
        <h4>팜플렛</h4>
      </div>

      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={50}
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <img src={page} alt={`Page ${index + 1}`} className="pamphlet-page" />
            <div className="page-number">{currentPage}/6</div> 
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`img-info ${imgInfoVisible ? 'visible' : 'hidden'}`}
        onClick={handleImgInfoClick}
      >
        
      </div>
    </div>
  );
};

export default Program;