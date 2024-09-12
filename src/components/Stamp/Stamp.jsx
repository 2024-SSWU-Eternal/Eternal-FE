import React, { useState } from 'react'
import Back from '../../assets/img/stamp/back.svg'
import Bingo from "../../assets/img/stamp/bingo.svg"
import Go from "../../assets/img/stamp/go.svg"
import X from "../../assets/img/stamp/x.svg"
import I from "../../assets/img/stamp/i.svg"
import Bingo_Info from "../../assets/img/stamp/Bingo_Info.svg"

const Stamp = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className='Stamp_wrap container'>
      <div className='top'>
        <div className="back"><img src={Back} alt="뒤로가기" /></div>
        <div className="title">내 빙고판</div>
      </div>
      <div className='stamp_info'>
        <div className="name">000의 빙고판</div>
        <div className="number">1/9</div>
      </div>

      <div className="info-wrapper">
        <div className="info-text">
          <div className="info">스탬프 투어를 통해 빙고판을 완성하고</div>
          <div className="info">상품을 받아보세요!</div>
        </div>
        <div className="I" onClick={togglePopup}>
          <img src={I} alt="정보" />
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-close" onClick={togglePopup}>
              <img src={X} alt="닫기" />
            </div>
            <img src={Bingo_Info} alt="빙고 정보" className="popup-image" />
          </div>
        </div>
      )}

      <div className='bingo'>
        <div className="bingo_info"><img src={Bingo} alt="빙고판" /></div>
      </div>

      <div className='location_info'>
        <div className='location'>QR코드 위치 확인하기</div>
        <div className="go"><img src={Go} alt="qr위치 확인하기" /></div>
      </div>
    </div>
  );
}

export default Stamp;
