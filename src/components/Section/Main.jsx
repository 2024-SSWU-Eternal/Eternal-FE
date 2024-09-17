import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HourGlass from '../../assets/img/main/hourglass.png';
import Glow01 from '../../assets/img/main/glow01.png';
import Glow02 from '../../assets/img/main/glow02.png';
import Light from '../../assets/img/main/light02.png';
import Logo from '../../assets/img/main/Logo.png';
import Text01 from '../../assets/img/main/text01.svg';
import Text02 from '../../assets/img/main/text02.svg';
import Nav from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import { yesLoad } from '../../store/loadSlice';

const Main = () => {
    const isLoad = useSelector((state => state.load.isLoading));
    const dispatch = useDispatch();

    const glowAnimation = (maskImages, delay) => ({
        initial: { opacity: 0, WebkitMaskImage: 'linear-gradient(transparent, transparent)' },
        animate: {
            opacity: [0, 0.5, 1],
            WebkitMaskImage: maskImages,
        },
        transition: { duration: 0.8, times: [0, 0.5, 1], delay }
    });

    const fadeIn = (delay) => ({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, delay }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(yesLoad());
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='Main_wrap container'>
            <Nav />
            {isLoad ? (
                <></>
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.8, delay: 5 }}
                        className='fade_out_wrapper'
                    >
                        <div className="hourclass_wrap">
                            <img className='hourclass' src={HourGlass} alt="hourglass" />
                            <motion.img {...glowAnimation(['linear-gradient(black, transparent)', 'linear-gradient(black, black)'], 0.8)} className='hourclassglow' src={Glow01} alt="hourglass glow" />
                            <motion.img {...glowAnimation(['linear-gradient(transparent, transparent)', 'linear-gradient(black, black)'], 1.8)} className='hourclassglow' src={Glow02} alt="hourglass glow" />
                            <motion.img {...fadeIn(2.6)} className='light01' src={Light} alt="light" />
                            <motion.img {...fadeIn(2.6)} className='Logo' src={Logo} alt="logo" />
                        </div>
                        <motion.div {...fadeIn(3.4)} className="text_wrap">
                            <img className='text01' src={Text01} alt="성신여자대학교 2024 수정대동제 Sep 25-26 돈암수정캠퍼스" />
                            <img className='text02' src={Text02} alt="시간의 경계를 넘어 환상적인 세계로 초대합니다." />
                            <div className="box">
                                <p>자주성신 제36대 총학생회 '여일하게<br />2024 대동제 축제기획단</p>
                                <p>X</p>
                                <p>멋쟁이사자처럼 성신여대 12기</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </div>
    );
}

export default Main;
