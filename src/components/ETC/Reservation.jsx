import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Back from '../../assets/img/Test/back.svg';
import img1 from '../../assets/img/etc/1.avif';
import img2 from '../../assets/img/etc/2.avif';
import img3 from '../../assets/img/etc/3.avif';
import img4 from '../../assets/img/etc/4.avif';
import img5 from '../../assets/img/etc/5.avif';

const Reservation = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const pageElement = document.querySelector('.Reservation_wrap');
    if (pageElement) {
      pageElement.classList.add('slide-in');
    }
  }, []);
  return (
    <div className='Reservation_wrap container'>
      <div className="header">
        <img className='back' src={Back} alt="back button" onClick={() => onBack()} />
        <h4>굿즈 예약</h4>
      </div>
      <div className='main'>
        <div className="swiper-container">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img src={img1} alt="image1" className="full-width-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="image2" className="full-width-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="image3" className="full-width-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="image4" className="full-width-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="image5" className="full-width-image" />
            </SwiperSlide>
          </Swiper>
        </div>
        <><br></br><h3>수정대동제 Eternal 굿즈 사전 예약 안내</h3></>

        <div className="reservation-info-box">

          <p>
            2024 수정대동제 Eternal 굿즈를 공개합니다! 🎉<br />
            신비로운 느낌의 반다나와 슬로건, 아크릴 키링부터<br />
            축제 분위기를 한껏 느낄 수 있는 타투 스티커와 응원봉까지!<br />
            오직 Eternal만을 위해 준비된 굿즈를 사전예약을 통해 미리 만나보세요! 🔮<br />
            <br />
            *유의사항을 확인하지 않아 발생하는 문제에 대해선 책임지지 않습니다.<br />
            <br />
            여기 성신, 하나 되는 수정<br />
            *문의: 카카오톡 채널 sswu_chonghak
          </p>
        </div>
      </div>

      <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLScCZAaShy3DEfAq07ODubfoyJ1YSvDEwAyjYchK2cxmAvHfvQ/viewform"
        className="floating-button"
      >
        굿즈 사전예약 링크 바로가기
      </Link>
    </div>
  );
};

export default Reservation;