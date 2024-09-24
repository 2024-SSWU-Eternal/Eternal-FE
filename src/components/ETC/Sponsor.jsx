import React from 'react'
import Back from '../../assets/img/Test/back.svg'
import { useNavigate } from 'react-router-dom'
import seedbee from '../../assets/img/etc/seedbee.avif'
import beplain from '../../assets/img/etc/beplain.avif'
import cheremimaka from '../../assets/img/etc/cheremimaka.avif'


const Sponsor = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Sponsor_wrap container'>
            <div className="header">
                <img className='back' src={Back} alt="back button" onClick={() => { onBack() }} />
                <h4>후원사</h4>
            </div>
            <div className="main">
                <h3>
                    2024 수정대동제 Eternal과<br />
                    함께하는 후원사
                </h3>
                <div className="list_wrap">
                    <div className="list">
                        <div className="top">
                            <p className="desc">사람을 아름답게, 세상을 건강하게</p>
                            <p className="title">씨드비</p>
                        </div>
                        <div className="bottom">
                            <img src={seedbee} alt="" />
                        </div>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">즐거운 피부 자신감</p>
                            <p className="title">비플레인</p>
                        </div>
                        <div className="bottom">
                            <img src={beplain} alt="" />
                        </div>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">지속가능한 사랑을 연구하는 섹슈얼 웰니스 브랜드</p>
                            <p className="title">체레미 마카</p>
                        </div>
                        <div className="bottom">
                            <img src={cheremimaka} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor