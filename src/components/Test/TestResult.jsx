import React from 'react'
import Back from '../../assets/img/Test/back.svg'
import Test01 from '../../assets/img/Test/test01.svg'

const TestResult = () => {
    return (
        <div className='TestResult_wrap'>
            <div className="header">
                <img className='back' src={Back} alt="back button" />
                <h4>테스트 결과</h4>
            </div>
            <div className="main">
                <div className="desc_box">
                    <img src={Test01} alt="" />
                    <div className="top">
                        <h1>언덕룡</h1>
                        <p className='desc'>언덕 오르는 수룡</p>
                        <p className='percent'>전체 사용자 중 10.7%가 이 유형이에요!</p>
                    </div>
                    <div className="bottom">
                        <h2>철저한 계획형 수룡이</h2>
                        <p>
                            안정성과 신뢰성을 중요하게 여겨요.<br />
                            하려고 한 것은 무조건 해야 해요.<br />
                            항상 기본적인 규칙을 지키려고 노력해요.
                        </p>
                    </div>
                </div>
                <div className="suggest">
                    <p>추천 활동</p>
                    <h3>푸드트럭 구경하기</h3>
                </div>
            </div>
            <div className="button_box">
                <button className="gomain">메인으로</button>
                <button className="reset">테스트 다시하기</button>
            </div>
        </div>
    )
}

export default TestResult