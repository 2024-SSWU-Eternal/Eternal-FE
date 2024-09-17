import React, { useState, useEffect } from 'react';
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
  const [pageNumberVisible, setPageNumberVisible] = useState(true); // 페이지 넘버 표시 상태 초기화
  const pages = [map1, map2, map3, map4, map5, map6];
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/');
  };

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex + 1);
    setPageNumberVisible(true); // 슬라이드 변경 시 페이지 번호 다시 보이게 설정
    setTimeout(() => {
      setPageNumberVisible(false); // 2초 후 페이지 번호 숨기기
    }, 2000);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 2초 후에 페이지 번호 숨기기
    const timer = setTimeout(() => {
      setPageNumberVisible(false);
    }, 2000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

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
            {pageNumberVisible && ( // 페이지 넘버 표시 상태에 따라 보여줌
              <div className="page-number">{currentPage}/6</div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Program;
