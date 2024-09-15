import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import Back from '../../assets/img/stamp/back.svg';
import Bingo from "../../assets/img/stamp/bingo.svg";
import Go from "../../assets/img/stamp/go.svg";
import X from "../../assets/img/stamp/x.svg";
import I from "../../assets/img/stamp/i.svg";
import Bingo_Info from "../../assets/img/stamp/Bingo_Info.svg";

const Stamp = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [stamps, setStamps] = useState([]);
  const [error, setError] = useState(null);
  const [studentNum, setStudentNum] = useState('');
  const [userName, setUserName] = useState(''); 
  const [isSlidingOut, setIsSlidingOut] = useState(false); 

  const navigate = useNavigate(); 
  const { stampNum } = useParams(); 

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const fetchStamps = async () => {
    try {
      const response = await fetch('https://www.eternal-server.store/user/stamps', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setStamps(data);
      } else {
        setError('스탬프 데이터를 불러올 수 없습니다.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  const registerStamp = async (stampNum) => {
    try {
      const response = await fetch(`https://www.eternal-server.store/user/stamp/${stampNum}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        fetchStamps();
      } else {
        setError('스탬프 등록에 실패했습니다.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await fetch('https://www.eternal-server.store/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUserName(data.name); 
      } else {
        setError('사용자 이름을 불러올 수 없습니다.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const decodedToken = JSON.parse(jsonPayload);

      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp && decodedToken.exp >= currentTime) {
        setStudentNum(decodedToken.student_num); 
        fetchStamps(); 
        fetchProfile();
        if (stampNum) {
          registerStamp(stampNum); 
        }
      } else {
        setError('토큰이 만료되었습니다.');
      }
    } else {
      setError('JWT 토큰이 존재하지 않습니다.');
      navigate('/login'); 
    }
  }, [navigate, stampNum]);

  const stampedCount = stamps.filter(stamp => stamp.status).length;
  const totalStamps = stamps.length;

  const handleBackClick = () => {
    setIsSlidingOut(true); 
    setTimeout(() => {
      navigate('/'); 
    }, 400); 
  };

  const handleLocationClick = () => {
    navigate('/map'); 
  };

  return (
    <div className={`Stamp_wrap container ${isSlidingOut ? 'SlideOut' : ''}`}>
      <div className='top'>
        <div className="back" onClick={handleBackClick}><img src={Back} alt="뒤로가기" /></div>
        <div className="title">내 빙고판</div>
      </div>
      <div className='stamp_info'>
      <div className="name-wrapper">
        <div className="name">{userName}</div> 
        <span>의 빙고판</span>
      </div>
        <div className="number">{stampedCount}/{totalStamps}</div> 
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

      <div className='location_info' onClick={handleLocationClick}>
        <div className='location'>QR코드 위치 확인하기</div>
        <div className="go"><img src={Go} alt="qr위치 확인하기" /></div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="stamps-list">
        {stamps.map(stamp => (
          <div key={stamp.stampId} className={`stamp stamp-${stamp.stampId} ${stamp.status ? 'set' : 'not-set'}`}>
            {stamp.status && (
              <img 
                src={stamp.stampImg} 
                alt={`스탬프 ${stamp.stampId}`} 
                className={`stamp stamp-${stamp.stampId}`} 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stamp;
