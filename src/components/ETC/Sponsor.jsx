import React from 'react'
import Back from '../../assets/img/Test/back.svg'
import { useNavigate } from 'react-router-dom'

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
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                    <div className="list">
                        <div className="top">
                            <p className="desc">후원사 한줄 소개</p>
                            <p className="title">후원사 이름</p>
                            <p className="desc">후원 내용</p>
                        </div>
                        <p className="bottom">후원사 로고</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor