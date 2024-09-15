import React, { useState } from 'react'
import Back from '../../../../assets/img/join/back.svg'
import CheckFalse from '../../../../assets/img/join/check_false.svg'
import CheckTrue from '../../../../assets/img/join/check_true.svg'
import Detail_Img from '../../../../assets/img/join/detail.svg'
import { useNavigate } from 'react-router-dom'

const Terms = ({ first, setFirst, second, setSecond, third, setThird, all, onAll, onNext, setDetail, handleSlideOut }) => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation ('/login')
    }

    return (
        <>
            <div className="header">
                <button className="back" onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
                <h4>회원가입</h4>
            </div>
            <div className="main">
                <h2>
                    서비스를 이용하기 위한<br />
                    이용약관 동의가 필요해요
                </h2>
                <div className="all">
                    <button className='check' onClick={() => { onAll() }}><img src={all ? CheckTrue : CheckFalse} alt="checkbox" /></button>
                    <h5>약관 전체 동의</h5>
                </div>
                <div className="box">
                    <div>
                        <button className='check' onClick={() => { setFirst(!first) }}><img src={first ? CheckTrue : CheckFalse} alt="checkbox" /></button>
                        <p>만 14세 이상 확인(필수)</p>
                    </div>
                    <button className='detail' onClick={() => { setDetail(true) }}><img src={Detail_Img} alt="checkbox" /></button>
                </div>
                <div className="box">
                    <div>
                        <button className='check' onClick={() => { setSecond(!second) }}><img src={second ? CheckTrue : CheckFalse} alt="checkbox" /></button>
                        <p>개인정보 수집 이용 동의(필수)</p>
                    </div>
                    <button className='detail' onClick={() => { setDetail(true) }}><img src={Detail_Img} alt="checkbox" /></button>
                </div>
                <div className="box">
                    <div>
                        <button className='check' onClick={() => { setThird(!third) }}><img src={third ? CheckTrue : CheckFalse} alt="checkbox" /></button>
                        <p>위치기반 서비스 이용약관 동의(필수)</p>
                    </div>
                    <button className='detail' onClick={() => { setDetail(true) }}><img src={Detail_Img} alt="checkbox" /></button>
                </div>
            </div>
            <button onClick={() => { onNext() }} className={all ? "full" : ""}>동의</button>
        </>
    )
}

export default Terms