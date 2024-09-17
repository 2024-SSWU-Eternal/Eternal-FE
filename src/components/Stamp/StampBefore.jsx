import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Back from '../../assets/img/stamp/back.svg';

const Stampbefore = () => {
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    setIsSlidingOut(true);
    setTimeout(() => {
      navigate('/'); 
    }, 400);
  };

  return (
    <div className={`Stampbefore_wrap container`}>
      <div className='top'>
        <div className="back" onClick={handleBackClick}>
          <img src={Back} alt="뒤로가기" />
        </div>
      </div>

      <div className='stampbefore'>
        <div className="title">스탬프 투어 및 빙고판은</div>
        <div className="title">축제 당일인 25,26일에</div>
        <div className="title">공개됩니다</div>
      </div>
    </div>
  );
};

export default Stampbefore;
