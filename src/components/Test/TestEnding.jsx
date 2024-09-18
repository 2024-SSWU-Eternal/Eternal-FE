import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/Test/back.avif'
import Clack from '../../assets/img/Test/clack.avif'
import { useParams } from 'react-router-dom'
import Suryong from './js/result'
import TestResult from './TestResult'

const TestEnding = () => {
    const params = useParams();
    const [index, setIndex] = useState(0);
    const [story, setStory] = useState(false);
    const [ending, setEnding] = useState(false);
    const [content, setContent] = useState([])

    useEffect(() => {
        setContent(Suryong[params.ending])
    }, [params.ending])

    const Text = [
        {
            desc: '침대에 누워 하루를 되돌아본다',
            title: '"너무 행복하고 완벽한 하루였어~"',
            img: null
        }, {
            desc: '',
            title: '“어랏 세상이 빙글빙글 도네...”',
            img: null
        },
        {
            desc: '',
            title: '',
            img: <img src={Clack} alt="clack" />
        },
        {
            desc: '띠리리리- 띠리리리-🎵',
            title: `\n\n뭐야 꿈이었잖아! \n\n어쩐지 내가 수룡인 걸 \n아무도 신경 쓰지 않더라~`,
            img: null
        },
    ]

    useEffect(() => {
        if (index < Text.length - 1) {
            const timeout = setTimeout(() => {
                setIndex(index + 1)
            }, 2000)
            return () => clearTimeout(timeout)
        } else {
            setStory(true)
        }
    }, [index, Text.length])

    return (
        <>
            {ending ? (
                <TestResult content={content} params={params} />
            ) : (
                <div className='TestEnding_wrap container'>
                    <div className="header">
                        <img className='back' src={Back} alt="back button" />
                    </div>
                    <div className="main">
                        {story ? (
                            <div className="text">
                                <h2>
                                    수정대동제는<br />
                                    이제 진짜로 시작이야!
                                </h2>
                            </div>
                        ) : (
                            <div className="text">
                                {Text[index].img && Text[index].img}
                                <p>{Text[index].desc}</p>
                                <h2>
                                    {Text[index].title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </h2>
                            </div>
                        )}
                    </div>
                    {story ? (
                        <button className='full' onClick={() => { setEnding(true) }}>결과 보러 가기</button>
                    ) : (
                        <button></button>
                    )}
                </div>
            )}
        </>
    )
}

export default TestEnding