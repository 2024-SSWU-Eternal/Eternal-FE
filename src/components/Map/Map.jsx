import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import Btn from '../../assets/img/map/icon_back.png';
import BoothMap from './BoothMap';
import StampMap from './StampMap';

const Map = () => {
    const navigation = useNavigate();
    const [isExiting, setIsExiting] = useState(false);
    const [isBooth, setIsBooth] = useState(true);

    const back = () => {
        setIsExiting(true);
        setTimeout(() => {
            navigation('/');
        }, 400);
    };

    const category = () => {
        setIsBooth(!isBooth);
    }

    return (
        <div className='Map_wrap container'>
            <header>
                <div className="back_btn" onClick={back}><img src={Btn} alt="뒤로가기" /></div>
                <div className="title">부스 정보</div>
            </header>
            <div className="cate">
                <div className="booth">
                    <div className={isBooth ? 'onToggle' : 'toggle'} onClick={category}>부스 지도</div>
                </div>
                <div className="stamp">
                    <div className={isBooth ? 'toggle' : 'onToggle'} onClick={category}>스탬프 지도</div>
                </div>
            </div>

            {isBooth ? (<BoothMap />) : (<StampMap />)}


        </div>
    )
}

export default Map