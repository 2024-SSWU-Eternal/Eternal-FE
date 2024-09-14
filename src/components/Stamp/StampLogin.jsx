import React from 'react'
import Back from '../../assets/img/stamp/back.svg'


const Stamp = () => {
    
  return (
    <div className='StampLogin_wrap container'>
      <div className='top'>
        <div className="back"><img src={Back} alt="뒤로가기" /></div>
        <div className="title">로그인</div>
      </div>

      <div className='stamplogin'>
      <div className="title">로그인이 필요한 서비스입니다.</div>
    
      </div>
    </div>
  )
}

export default Stamp