import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/img/login/back.svg'
import Logo from '../../assets/img/login/logo_main.svg'
import Eye from '../../assets/img/login/eyeicon.svg'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setTokens } from '../../store/authSlice'

const Login = () => {
    const URL = 'https://www.eternal-server.store'
    const [email, setEmain] = useState('')
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const joinClick = () => {
        navigate('/join');
    }

    /* 비밀번호 보기/숨기기 함수 */

    const [pwType, setpwType] = useState({
        type: "password",
        visible: false,
    })

    const handlePwState = () => {
        setpwType(() => {
            if (!pwType.visible) {
                return { type: "text", visible: true }
            } else {
                return { type: "password", visible: false }
            }
        })
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const isButtonActive = inputValue.length > 0;

    /* 슬라이드 */

    const [isSlideOut, setIsSlideOut] = useState(false);

    const handleSlideOut = () => {
        setIsSlideOut(true);
        setTimeout(() => {
            navigate('/');
        }, 400)
    }

    const onLogin = () => {
        axios.post(`${URL}/user/login`,
            {
                "email": `${email}@sungshin.ac.kr`,
                "password": inputValue
            }
        )
            .then((res) => {
                if(res.status ===200){
                    const accessToken = res.data.token;
                    const roles = res.data.roles;
                    dispatch(setTokens({ accessToken, roles }));
                    localStorage.setItem('jwtToken', res.data.token); //스탬프 연동을 위해 토큰 변경
                    console.log('저장된 JWT 토큰:', localStorage.getItem('jwtToken'));
                    navigate('/')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <div className='Login_wrap container'>

            <div className='header'>
                <button
                    className={`back ${isSlideOut ? 'slide-out-left' : ''}`}
                    onClick={handleSlideOut}
                >
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
                            value={email}
                            onChange={(e) => { setEmain(e.target.value) }}
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
                    onClick={() => { onLogin() }}
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