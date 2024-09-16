import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/announce/back.svg'
import See from '../../assets/img/join/password_see.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Manger = () => {
    const URL = 'https://www.eternal-server.store';

    const [click, setClick] = useState('')
    const [userId, setUserId] = useState('')
    const [pass, setPass] = useState('')
    const [all, setAll] = useState(false)
    const navigation = useNavigate();

    const onBack = () => {
        navigation('/')
    }

    useEffect(() => {
        if (userId && pass) {
            setAll(true)
        } else {
            setAll(false)
        }
    }, [userId, pass])

    const onLogin = () => {
        if (!(userId && pass)) {
            alert('빈칸을 모두 채워주세요!')
            return;
        }

        //   "username": "sswulion",
        //   "password": "lion@!! "

        axios.post(`${URL}/manager/login`, {
            "username": userId,
            "password": pass
        })
            .then((res) => {
                if (res.status === 200) {
                    alert('로그인이 완료되었습니다.');
                    navigation('/announce/manager');
                }
            })
            .catch((err) => {
                alert('로그인 정보를 다시 확인해주세요.');
                console.log(err);
            })
    }

    return (
        <div className='Manger_wrap container'>
            <div className="header">
                <button className="back" onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
                <h4>관리자 모드</h4>
            </div>
            <div className="main">
                <div className="userId">
                    <p>아이디</p>
                    <input value={userId} onChange={(e) => { setUserId(e.target.value) }} className={click === 'userId' ? 'border' : ''} type="text" onClick={() => { setClick('userId') }} />
                </div>
                <div className="password_box">
                    <p>비밀번호</p>
                    <div className={click === 'password' ? 'border' : ''} onClick={() => { setClick('password') }}>
                        <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" placeholder='영문, 숫자 포함 8자 이상' />
                        <img src={See} alt="password see" />
                    </div>
                </div>
                <button className={all ? 'full' : ''} onClick={() => { onLogin() }}>로그인</button>
            </div>
        </div>
    )
}

export default Manger