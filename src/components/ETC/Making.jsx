import React from 'react'
import Back from '../../assets/img/Test/back.svg'
import { useNavigate } from 'react-router-dom'
import { lionLeader, design, frontEnd, backEnd, sswuleader, festivalleader, festivalmemeber } from './member';
import MakingLion from './MakingLion';
import MakingFestival from './MakingFestival';
import { motion } from 'framer-motion';

const Making = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Making_wrap container'>
            <div className="header">
                <img className='back' src={Back} alt="back button" onClick={() => { onBack() }} />
                <h4>만든이들</h4>
            </div>
            <div className="main">
                <div>
                    <h3>2024 수정대동제 Eternal 웹사이트</h3>
                    <div className="list_wrap">
                        <motion.div
                            initial={{ opacity :0, y:50}}
                            animate={{ opacity:1, y: 0}}
                            transition={{ delay:0.001, duration: 0.4, ease: "easeInOut"}}
                        >
                            <MakingLion title="Lead" data={lionLeader} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity :0, y:50}}
                            animate={{ opacity:1, y: 0}}
                            transition={{ delay:0.1, duration: 0.4, ease: "easeInOut"}}
                        >
                            <MakingLion title="Design" data={design} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity :0, y:50}}
                            animate={{ opacity:1, y: 0}}
                            transition={{ delay:0.2, duration: 0.4, ease: "easeOut"}}
                        >
                            <MakingLion title="Front-End" data={frontEnd} />
                        </motion.div>                        
                        <motion.div
                            initial={{ opacity :0, y:50}}
                            animate={{ opacity:1, y: 0}}
                            transition={{ delay:0.3, duration: 0.4, ease: "easeInOut"}}
                        >
                            <MakingLion title="Back-End" data={backEnd} />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity :0, y:50}}
                    animate={{ opacity:1, y: 0}}
                    transition={{ delay:0.4, duration: 0.4, ease: "easeInOut"}}
                >
                    <div>
                        <h3>2024 수정대동제 Eternal 축제기획단</h3>
                        <div className='list_wrap'>
                            <MakingFestival title='총학생회장단' data={sswuleader} />
                            <MakingFestival title='축제기획단장' data={festivalleader} />
                            <MakingFestival title='축제기획단' data={festivalmemeber} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Making