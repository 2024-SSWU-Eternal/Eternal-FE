import React from 'react'
import HourGlass from '../../assets/img/main/hourglass.png';
import Logo from '../../assets/img/main/Logo.png';
import Glow02 from '../../assets/img/main/glow02.png';
import Light from '../../assets/img/main/light02.png';
import { Link } from 'react-router-dom';
import Banner from '../ETC/Banner';

const NavContent = ({ onLogout, loginbtn }) => {
    return (
        <>
            <div className='Nav_wrap'>
                {loginbtn ? (
                    <div className='yes_login'>
                        <Link to='/stamp/1'>내 빙고판</Link>
                        <div className='logout' onClick={() => { onLogout(); }}>로그아웃</div>
                    </div>
                ) : (
                    <Link to='/login' className='login'>로그인</Link>
                )}
                <div className='img_box'>
                    <img className='hourclass' src={HourGlass} alt="hourglass" />
                    <img className='hourclassglow' src={Glow02} alt="hourglass glow" />
                    <img className='light01' src={Light} alt="light" />
                    <img className='Logo' src={Logo} alt="logo" />
                </div>
                <div className="nav_box">
                    <div className="top">
                        <Link to='/timetable' className="time">타임테이블</Link>
                        <Link to='/stamp' className="map">축제 배치도</Link>
                        <Link to='/booth' className="test">부스/푸드트럭 정보</Link>
                    </div>
                    <div className="bottom">
                        <Link to='/announce/normal' className="announce">공지사항</Link>
                        <Link to='/program' className="program">팜플렛</Link>
                        <Link to='/reservation' className="goods">굿즈 예약</Link>
                        <Link to='/test' className="test">유형 테스트</Link>
                    </div>
                </div>
                <div className="banner">
                    <Banner />
                </div>
            </div>
        </>
    )
}

export default NavContent