import React from 'react'
import Back from '../../../../assets/img/join/back.svg'

const Details = ({ setDetail }) => {
    return (
        <>
            <div className="header">
                <button className="back" onClick={() => { setDetail(false) }}><img src={Back} alt="back button" /></button>
                <h4>이용약관</h4>
            </div>
            <div className="main">
                <h4>개인정보 수집 이용 동의 약관</h4>
                <p className="text">
                    제 1 조 (목적)이 약관은「공유마당」(이하 “사이트”라 칭함)에서 제공하는 인터넷관련서비스(이하 "서비스"라 칭함)를 이용함에 있어 「공유마당」과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.제 2 조 (용어의 정의)이 약관에서 사용하는 주요한 용어의 정의는 다음과 같습니다.<br />
                    <div>
                        <p className='bull'>&bull;</p>
                        <p>① ‘회원’이라 함은 이 약관에 동의하고, 「공유마당」과 서비스 이용 계약을 체결하여 이용자 아이디(ID)를 부여 받은 개인 및 기관을 말합니다.<br /></p>
                    </div>
                    <div>
                        <p className='bull'>&bull;</p>
                        <p>② ‘회원 아이디’(이하 ‘ID’라 칭함)라 함은 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 신청함에 따라 「공유마당」에서 승인한 문자나 숫자 혹은 그 조합을 말합니다. 기관의 정보로 가입한 ID는 관련 법규가 인정하는 범위에서 개인정보와 같은 권리와 의무를 가지며 이하 개인과 개인정보로 언급되는 모든 약관은 기관과 기관정보를 포함합니다.<br /></p>
                    </div>
                    <div>
                        <p className='bull'>&bull;</p>
                        <p>③ ‘비밀번호’라 함은 회원ID로 식별되는 회원의 본인 여부를 검증하고, 회원 자신의 비밀을 보호하기 위하여 회원이 선정하여 사이트에 등록한 고유의 문자와 숫자의 조합을 말합니다.<br /></p>
                    </div>
                    <div>
                        <p className='bull'>&bull;</p>
                        <p>④ ‘이용중지’라 함은 사이트가 본 약관에 의거하여 회원의 서비스 이용을 제한하는 것을 말합니다.<br /></p>
                    </div>
                    <div>
                        <p className='bull'>&bull;</p>
                        <p>⑤ ‘해지’라 함은 사이트 또는 회원이 일방적으로 이용계약을 장래에 소멸시키는 것을 말합니다.<br /></p>
                    </div>
                    <div>
                        <p className='bull'>&bull;</p>
                        <p>⑥ “저작권”이란 인간의 사상 또는 감정을 표현한 창작물인 저작물에 대한 배타적·독점적 권리이며, 이러한 저작물에는 소설·시·논문·강연·연술(演述)·각본·음악·연극·무용·회화·서예·도안(圖案)·조각·공예·건축물·사진·영상(映像)·도형(圖形)·컴퓨터프로그램 등이 있다.<br /></p>
                    </div>
                </p>
            </div>
        </>
    )
}

export default Details