import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/announce/back.svg';
import Del from '../../assets/img/announce/delete.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AnnonceDetail = () => {
    const URL = 'https://www.eternal-server.store';

    const navigation = useNavigate();
    const [manage, setManage] = useState(false);
    const [data, setData] = useState([])
    const [pop, setPop] = useState(false)
    const params = useParams();

    useEffect(() => {
        if (params.manager === 'manager') {
            setManage(true);
        } else {
            setManage(false)
        }
    }, [params]);

    useEffect(() => {
        axios.get(`${URL}/notices/${params.detail}`)
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data);
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const onBack = () => {
        if (params.manager === 'manager') {
            navigation('/announce/manager')
        } else {
            navigation(-1);
        }
    }

    const onModify = () => {
        navigation('/announce/write/modify')
    }

    const onDelete = () => {
        axios.delete(`${URL}/notices/${params.detail}`)
            .then((res) => {
                console.log(res.status)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='AnnonceDetail_wrap container'>
            {pop ? (
                <div className='popup_wrap'>
                    <div className="popup">
                        <img src={Del} alt="delete button" />
                        <h3>정말 삭제하시겠어요?</h3>
                        <div className="btn_box">
                            <button onClick={() => { setPop(false) }}>취소</button>
                            <button onClick={() => { onDelete() }} className='del_btn'>삭제</button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className="header">
                <button className="back" onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
                <h4>공지사항</h4>
            </div>
            <div className="main">
                <div className="img_box">
                    <img src={data.images} alt="" />
                </div>
                <div className="text_box">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                </div>
            </div>
            {manage ? (
                <div className="btnbox">
                    <button className="delete" onClick={() => { setPop(true) }}>삭제</button>
                    <button className="modify" onClick={() => { onModify() }}>수정</button>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default AnnonceDetail