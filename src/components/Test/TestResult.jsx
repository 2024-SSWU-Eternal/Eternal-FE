import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/Test/back.svg'
import Test01 from '../../assets/img/Test/test01.svg'
import Test02 from '../../assets/img/Test/test02.svg'
import Test03 from '../../assets/img/Test/test03.svg'
import Test04 from '../../assets/img/Test/test04.png'
import Test05 from '../../assets/img/Test/test05.png'
import Test06 from '../../assets/img/Test/test06.svg'
import Test07 from '../../assets/img/Test/test07.png'
import Test08 from '../../assets/img/Test/test08.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading';

const TestResult = ({ content, params }) => {
    const [Img, setImg] = useState(Test01);
    const navigation = useNavigate()
    const [percentage, setPercentage] = useState(null)
    const [loading,setLoading] = useState(false);

    const onBack = () => {
        navigation(-1);
    }

    useEffect(() => {
        switch (params.ending) {
            case '언덕룡':
                setImg(Test01)
                return;
            case '여유룡':
                setImg(Test02)
                return;
            case '투어룡':
                setImg(Test03)
                return;
            case '실속룡':
                setImg(Test04)
                return;
            case '타투룡':
                setImg(Test05)
                return;
            case '독서룡':
                setImg(Test06)
                return;
            case '가수룡':
                setImg(Test07)
                return;
            case '게임룡':
                setImg(Test08)
                return;
            default:
                setImg(Test01)
        }
    }, [content, params])


    useEffect(() => {
        const fetchPercentageData = async () => {
            setLoading(true);
            const response = await axios.get('https://www.eternal-server.store/test');
            const { results } = response.data;
            const result = results.find((item) => item.type === params.ending);
            if (result) {
                setPercentage(result.percentage);
                setLoading(false);
            }
        };

        fetchPercentageData();
    }, [params.ending]);

    return (
        <div className='TestResult_wrap container'>
            {loading && <Loading />}
            <div className="header">
                <img className='back' src={Back} alt="back button" onClick={() => { onBack() }} />
                <h4>테스트 결과</h4>
            </div>
            <div className="main">
                <div className="desc_box">
                    <img src={Img} alt="" />
                    <div className="top">
                        <h1>{content.title}</h1>
                        <p className='desc'>{content.subtitle}</p>
                        <p className='percent'>전체 사용자 중 {percentage}%가 이 유형이에요!</p>
                    </div>
                    <div className="bottom">
                        <h2>{content.desctitle}</h2>
                        <p>
                            {content.desc.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
                <div className="suggest">
                    <p>추천 활동</p>
                    <h3>{content.suggestion}</h3>
                </div>

            </div>
            <div className="gostamp">
                <Link to='/stampbefore'>유형테스트 스탬프 받기</Link>
            </div>
            <div className="button_box">
                <button className="gomain"><Link to='/'>메인으로</Link></button>
                <button className="reset" onClick={() => { onBack() }}>테스트 다시하기</button>
            </div>
        </div>
    )
}

export default TestResult