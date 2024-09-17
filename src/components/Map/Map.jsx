import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import Btn from '../../assets/img/map/icon_back.png';
import StampIcon from '../../assets/img/map/stamp-icon.svg';
import MapImg from '../../assets/img/map/mapimg.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const Map = () => {
    const navigation = useNavigate();
    const [isExiting, setIsExiting] = useState(false);

    const [showTost, setShowTost] = useState(false);
    const back = () => {
        setIsExiting(true);
        setTimeout(() => {
            navigation(-1);
        }, 400);
    };

    useEffect(() => {
        setShowTost(true);
        const timer = setTimeout(() => {
            setShowTost(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='Map_wrap container'>
            <header>
                <div className="back_btn" onClick={back}><img src={Btn} alt="뒤로가기" /></div>
                <div className="title">축제 지도</div>
            </header>
            <div className="wrap">
                <div className="stamp-icon">
                    <img src={StampIcon} alt="아이콘" />
                    <p>스탬프 위치</p>
                </div>
                <div className='mapImg'>
                    <TransformWrapper
                        initialScale={1}
                        minScale={1}
                        maxScale={10}
                        centerContent={true}
                    >
                        <TransformComponent>
                            <div>
                                <img src={MapImg} />
                            </div>

                        </TransformComponent>
                    </TransformWrapper>
                </div>


                <AnimatePresence>
                    {showTost && (
                        <motion.div
                            className="tost"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            두 손가락으로 드래그하여 확대/축소를 할 수 있어요!
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>





        </div>
    )
}

export default Map