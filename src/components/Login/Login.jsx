import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/img/login/back.svg'
import Logo from '../../assets/img/login/logo_main.svg'
import Eye from '../../assets/img/login/eyeicon.svg'

const Login = () => {

    const navigate = useNavigate();

    const goToBack = () => {
        navigate ('/');
    }

    const joinClick = () => {
        navigate ('/join');
    }

    // 비밀번호 보기/숨기기 함수

    const [pwType, setpwType] = useState({
        type: "password",
        visible: false,
    })

    const handlePwState = (e) => {
        setpwType(() => {
            if (!pwType.visible) {
                return {type: "text", visible: true}
            } else {
                return {type: "password", visible: false}
            }
        })
    }

    // 버튼 활성화 함수 

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const isButtonActive = inputValue.length > 0;
    
  return (
     <div className='Login_wrap container'>

            <div className='header'>
                <button className='back' onClick={goToBack}>
                    <img src={Back} alt="back button" />
                </button>
                <p>로그인</p>
            </div>

            <div className='main'>
                <img src={Logo} alt='로고' />
                <div className='email'>
                    <p>이메일</p>
                    <div>
                        <input 
                        type='text' 
                        className='id' />
                        <p>@sungshin.ac.kr</p>
                    </div>
                </div>
                <div className='password'>
                    <p>비밀번호</p>
                    <div>
                        <input 
                        type={pwType.type} 
                        className='pw'
                        placeholder='영문, 숫자 포함 8자 이상'
                        value={inputValue}
                        onChange={handleInputChange}
                        />
                        <span onClick={handlePwState}> 
                            <img src={Eye} alt='비밀번호 숨김' /> 
                        </span>
                    </div>
                </div>

            <button
            className={`submit-button ${isButtonActive ? 'active' : ''}`}
            disabled={!isButtonActive}
            >
            로그인
            </button>

            <div className='option'>
                <p>아직 회원이 아니신가요?</p>
                <p className='join' onClick={joinClick}>회원가입하러 가기</p>
            </div>
        </div>
    </div>
  )
}

export default Login