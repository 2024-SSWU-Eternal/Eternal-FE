import React from 'react'
import { motion } from 'framer-motion';
import HourGlass from '../../assets/img/main/hourglass.png';
import Logo from '../../assets/img/main/Logo.png';
import Glow02 from '../../assets/img/main/glow02.png';
import Light from '../../assets/img/main/light02.png';
import Banner01 from '../../assets/img/main/banner01.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Nav = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4.8 }}
                className='Nav_wrap'>
                <Link to='/' className='login'>로그인</Link>
                <div className='img_box'>
                    <img className='hourclass' src={HourGlass} alt="hourglass" />
                    <img className='hourclassglow' src={Glow02} alt="hourglass glow" />
                    <img className='light01' src={Light} alt="light" />
                    <img className='Logo' src={Logo} alt="logo" />
                </div>
                <div className="nav_box">
                    <Link to='/announce/normal' className="announcement">공지사항</Link>
                    <div className="box">
                        <Link to='/timetable' className="time">타임테이블</Link>
                        <Link to='/program' className="program">프로그램 소개</Link>
                        <Link to='/map' className="map">축제 배치도</Link>
                        <Link to='/test' className="test">유형 테스트</Link>
                    </div>
                </div>
                <div className="banner">
                    <img src={Banner01} alt="" />
                </div>
            </motion.div>
            <Footer />
        </>

    )
}

export default Nav