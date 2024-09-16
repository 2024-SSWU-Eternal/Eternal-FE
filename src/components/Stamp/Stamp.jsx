import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import Back from '../../assets/img/stamp/back.svg';
import Bingo from "../../assets/img/stamp/stampbingo.svg";
import Go from "../../assets/img/stamp/go.svg";
import X from "../../assets/img/stamp/x.svg";
import I from "../../assets/img/stamp/i.svg";
import Bingo_Info from "../../assets/img/stamp/Bingo_Info.svg";
import Alert from "../../assets/img/stamp/Alert.svg";
import Check from "../../assets/img/stamp/check.svg";
import Locate from "../../assets/img/stamp/Locate.svg";
import Button from "../../assets/img/stamp/Button.svg";

const Stamp = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false); 
  const [isLocationPopupVisible, setIsLocationPopupVisible] = useState(false);
  const [stamps, setStamps] = useState([]);
  const [error, setError] = useState(null);
  const [studentNum, setStudentNum] = useState('');
  const [userName, setUserName] = useState(''); 
  const [isSlidingOut, setIsSlidingOut] = useState(false); 
  const [alertMessage, setAlertMessage] = useState('');
  
  const previousStamps = useRef([]); 
  
  const navigate = useNavigate(); 
  const { stampNum } = useParams(); 

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleLocationPopup = () => {
    setIsLocationPopupVisible(!isLocationPopupVisible); 
  };

  const stampMessages = {
    1: '"수정대동제 인스타그램 팔로우하기"',
    2: '"행정부스 방문하기"',
    3: '"에어수룡이와 사진 찍기"',
    4: '"공공마켓 즐기기"',
    5: '"공식 홈페이지 접속하기"',
    6: '"수정대동제 굿즈 구매하기"',
    7: '"운정뜰 포토존 즐기기"',
    8: '"플리마켓 구경하기"',
    9: '"유형테스트 참여하기"'
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
        checkForNewStamp(data);
        
        previousStamps.current = data;
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

  const showAlert = (stampNum) => {
    setAlertMessage(stampMessages[stampNum] || ''); 
    setIsAlertVisible(true);
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  const checkForNewStamp = (currentStamps) => {
    currentStamps.forEach((currentStamp) => {
      const previousStamp = previousStamps.current.find(stamp => stamp.stampId === currentStamp.stampId);

      if (previousStamp && !previousStamp.status && currentStamp.status) {
        showAlert(currentStamp.stampId);
      }
    });
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

      {isAlertVisible && (
        <div className="alert-popup">
          <div className="alert-content">
            <img src={Alert} alt="스탬프 알림" className="alert-img" />
            <div className="alert-message">{alertMessage}</div>
            <div className="alert-check" onClick={closeAlert}>
              <img src={Check} alt="확인" className="alert-check-img" />
            </div>
          </div>
        </div>
      )}

      <div className='bingo'>
        <div className="bingo_info"><img src={Bingo} alt="빙고판" /></div>
      </div>

      <div className='location_info' onClick={toggleLocationPopup}> 
        <div className='location'>QR코드 위치 확인하기</div>
        <div className="go"><img src={Go} alt="qr위치 확인하기" /></div>
      </div>

      {isLocationPopupVisible && ( 
        <div className="popup">
          <div className="popup-content">
            <div className="popup-close" onClick={toggleLocationPopup}>
              <img src={X} alt="닫기" />
            </div>
            <img src={Locate} alt="QR 코드 위치" className="popup-image" />
            <img src={Button} alt="버튼" className="popup-button" onClick={() => navigate('/map')} />
          </div>
        </div>
      )}

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
