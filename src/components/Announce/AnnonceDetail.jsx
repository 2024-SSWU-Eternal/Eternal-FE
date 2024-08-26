import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/announce/back.svg';
import { useNavigate, useParams } from 'react-router-dom';

const AnnonceDetail = () => {
    const navigation = useNavigate();
    const [manage, setManage] = useState(false);
    const params = useParams()

    useEffect(() => {
        if (params.manager === 'manager') {
            setManage(true);
        } else {
            setManage(false)
        }
    }, [params])

    const onBack = () => {
        if (params.manager === 'manager') {
            navigation('/announce/manager')
        } else {
            navigation(-1)
        }
    }

    const onModify = () => {
        navigation('/announce/write/modify')
    }

    const onDelete = () => {
        alert('정말 삭제하시겠습니까?')
    }

    return (
        <div className='AnnonceDetail_wrap container'>
            <div className="header">
                <button className="back" onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
                <h4>공지사항</h4>
            </div>
            <div className="main">
                <div className="img_box">

                </div>
                <div className="text_box">
                    <h3>수정대동제 Eternal 사이트 오픈</h3>
                    <p>
                        GROWL TO WORLD🔥 <br /> <br />

                        💡 멋쟁이사자처럼이란? <br />
                        멋쟁이사자처럼은 현재는 국내외 121개 대학, 4천여 명이 활동하는 국내 최대 규모의 IT 창업 동아리입니다. <br /> <br />

                        💡 활동 기간 <br />
                        2024.03 ~ 2024.12  <br /> <br />

                        💡 주요 행사 및 활동 <br />
                        - 1학기 : 파트별 스터디 (상시 진행), 아이디어톤 (5월) <br />
                        -방학 : 전체 파트 토이 프로젝트 (6월), 서울권 여대 연합 해커톤 (7월), 중앙 해커톤 (8월) <br />
                        -2학기 : 각종 연합 해커톤 (추후 안내 예정)  <br /> <br />

                        많은 관심과 참여 부탁드립니다🧡 <br />
                    </p>
                </div>
            </div>
            {manage ? (
                <div className="btnbox">
                    <button className="delete" onClick={() => { onDelete() }}>삭제</button>
                    <button className="modify" onClick={() => { onModify() }}>수정</button>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default AnnonceDetail