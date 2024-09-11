import React from 'react'
import Back from '../../assets/img/Test/back.svg'
import Cute01 from '../../assets/img/Test/cute_01.svg'
import { useNavigate } from 'react-router-dom';

const TestMain = ({ setStory, handleSlideOut }) => {
    const navigation = useNavigate();

    const onBack = () => {
        handleSlideOut()
        setTimeout(() => {
            navigation(-1)
        }, 400)
    }

    return (
        <>
            <img src={Back} alt="back button" onClick={() => { onBack ()}} />
            <div className="main">
                <div className="title_box">
                    <p>나는 어떤 수룡이일까?</p>
                    <h1>수룡 유형 테스트</h1>
                </div>
                <img src={Cute01} alt="sueryong" />
            </div>
            <button className='full' onClick={() => { setStory(true) }}>다음으로</button>
        </>
    )
}

export default TestMain