import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/Test/back.svg'
import { useNavigate } from 'react-router-dom'

const TestStory = ({ setStory }) => {
    const navigation = useNavigate();
    const [index, setIndex] = useState(0)

    const Text = [
        `어느 날 아침, \n여느 때처럼 일어나 거울을 본 나.`,
        "평소와 다른, 낯선 모습... \n돋아난 뿔과 빵실해진 배, \n그리고... 꼬리?!!",
        "수룡이가 되어버린 나\n 나는 어떤 수룡이일까?",
    ]

    const onBack = () => {
        setStory(false)
    }

    useEffect(() => {
        if (index < Text.length - 1) {
            const timeout = setTimeout(() => {
                setIndex(index + 1)
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [index, Text.length]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (index === Text.length - 1) {
            setTimeout(() => {
                navigation('/testing')
            }, 2000)
        }
    }, [index, Text.length, navigation]);

    return (
        <>
            <img src={Back} alt="back button" onClick={() => { onBack() }} />
            <div className="main">
                <div className="title_box">
                    <h2>
                        {Text[index].split('\n').map((line, idx) => (
                            <React.Fragment key={idx}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h2>
                </div>
            </div>
            <div></div>
        </>
    )
}

export default TestStory
