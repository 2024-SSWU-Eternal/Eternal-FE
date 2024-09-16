import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../assets/img/Test/back.svg'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }
    
    return (
        <div className='Reservation_wrap container'>
            <div>
                <div className="header">
                    <img className='back' src={Back} alt="back button" onClick={() => { onBack() }} />
                    <h4>굿즈 예약</h4>
                </div>
                <div className="main">
                    <h3>굿즈 예약 방법</h3>
                    <p>아래 링크에 접속해 폼을 작성해 주세요</p>
                </div>
            </div>
            <Link to='/'>굿즈 예약 링크 바로가기</Link>
        </div>
    )
}

export default Reservation