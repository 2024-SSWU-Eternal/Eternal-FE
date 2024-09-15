import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import HourGlass from '../../assets/img/main/hourglass.png';
import Logo from '../../assets/img/main/Logo.png';
import Glow02 from '../../assets/img/main/glow02.png';
import Light from '../../assets/img/main/light02.png';
import Banner01 from '../../assets/img/main/banner01.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { clearTokens } from '../../store/authSlice';

const Nav = () => {
    const [loginbtn, setLoginbtn] = useState(false);
    const token = localStorage.getItem('token')
    const isLoad = localStorage.getItem('loading');
    const accessToken = useSelector((state) => state.auth.accessToken);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(token)
        if (token) {
            setLoginbtn(true);
        } else {
            setLoginbtn(false)
        }
    });

    const onLogout = () => {
        dispatch(clearTokens);
        localStorage.removeItem('token');
    }

    return (
        <>
            {isLoad ? (
                <>
                    <div className='Nav_wrap'>
                        {loginbtn ? (
                            <div className='login' onClick={() => { onLogout(); }}>로그아웃</div>
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
                            <div className="box">
                                <Link to='/announce/normal' className="announce">공지사항</Link>
                                <Link to='/timetable' className="time">타임테이블</Link>
                                <Link to='/program' className="program">프로그램 소개</Link>
                                <Link to='/reservation' className="goods">굿즈 예약</Link>
                                <Link to='/stamp' className="map">축제 배치도</Link>
                                <Link to='/test' className="test">유형 테스트</Link>
                            </div>
                        </div>
                        <div className="banner">
                            <Link to='/booth'><img src={Banner01} alt="" /></Link>
                        </div>
                    </div>
                    <Footer />
                </>
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0, zIndex: 0 }}
                        animate={{ opacity: 1, zIndex: 10 }}
                        transition={{ duration: 1, delay: 4.8 }}
                        className='Nav_wrap'>
                        {loginbtn ? (
                            <div className='login' onClick={() => { onLogout(); }}>로그아웃</div>
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
                            <div className="box">
                                <Link to='/announce/normal' className="announce">공지사항</Link>
                                <Link to='/timetable' className="time">타임테이블</Link>
                                <Link to='/timetable' className="program">프로그램 소개</Link>
                                <Link to='/program' className="goods">굿즈 예약</Link>
                                <Link to='/stamp' className="map">축제 배치도</Link>
                                <Link to='/test' className="test">유형 테스트</Link>
                            </div>
                        </div>
                        <div className="banner">
                            <Link to='/booth'><img src={Banner01} alt="" /></Link>
                        </div>
                    </motion.div>
                    <Footer />
                </>
            )}
        </>

    )
}

export default Nav