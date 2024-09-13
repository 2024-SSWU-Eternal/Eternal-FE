import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
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
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(''); 

  const navigate = useNavigate(); 

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
        console.log('API 응답 데이터:', data); 
        setStamps(data);
        if (data.length > 0) {
          setUsername(data[0].userName);
        }
      } else if (response.status === 401) {
        setError('유효하지 않은 JWT 토큰입니다.');
      } else if (response.status === 404) {
        setError('사용자를 찾을 수 없습니다.');
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
    } catch (err) {
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
        const contentType = response.headers.get('content-type');
        let data;

        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          data = await response.text();  
        }

        fetchStamps();
      } else if (response.status === 401) {
        setError('유효하지 않은 JWT 토큰입니다.');
      } else if (response.status === 404) {
        setError('사용자를 찾을 수 없거나 해당 스탬프를 찾을 수 없습니다.');
      } else if (response.status === 403) {
        setError('해당 스탬프는 이 사용자에게 할당되지 않았습니다.');
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
    } catch (err) {
      console.error('오류 발생:', err);
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  const extractUsernameFromToken = () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const base64Url = token.split('.')[1]; 
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      const decodedToken = JSON.parse(jsonPayload);
      console.log('토큰값:', decodedToken); 
  
      return decodedToken.sub || '사용자'; 
    }
    return '사용자';
  };
  
  useEffect(() => {
    setUsername(extractUsernameFromToken()); 
    simulateStampRegistration(); 
    fetchStamps(); 
  }, []);

  const simulateStampRegistration = async () => {
    console.log("Simulating stamp registration...");
    await registerStamp(1);
  };

  const stampedCount = stamps.filter(stamp => stamp.status).length;
  const totalStamps = stamps.length;

  const handleLocationClick = () => {
    navigate('/map'); 
  };

  return (
    <div className='Stamp_wrap container'>
      <div className='top'>
        <div className="back"><img src={Back} alt="뒤로가기" /></div>
        <div className="title">내 빙고판</div>
      </div>
      <div className='stamp_info'>
        <div className="name">{username}의 빙고판</div>
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

      <div className='location_info'>
        <div className='location'>QR코드 위치 확인하기</div>
        <div className="go" onClick={handleLocationClick}><img src={Go} alt="qr위치 확인하기" /></div> {/* 클릭 시 페이지 이동 */}
      </div>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="stamps-list">
        {stamps.map(stamp => (
          <div key={stamp.stampId} className={`stamp stamp-${stamp.stampId} ${stamp.status ? 'set' : 'not-set'}`}>
            {stamp.status ? (
              <>
                <img 
                  src={stamp.stampImg} 
                  alt={`스탬프 ${stamp.stampId}`} 
                  className={`stamp stamp-${stamp.stampId}`} 
                />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stamp;
