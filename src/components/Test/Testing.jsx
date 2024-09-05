import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/Test/back.svg'
import AllText from './js/text'
import Suryong from './js/result'
import { useNavigate } from 'react-router-dom'

const Testing = () => {
    const [get, setGet] = useState([]);
    const [click, setClick] = useState([]);
    const [questionindex, setQuestionindex] = useState(0);
    const [hear, setHear] = useState('');
    const [ending, setEnding] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        if (questionindex === 13) {
            setEnding(true);
        }
    }, [questionindex])

    const onSet = () => {
        if (hear === '') {
            alert('선택지를 골라주세요!');
            return;
        }

        if (questionindex < 13) {
            setGet(prevGet => [...prevGet, ...click]);
            setQuestionindex(questionindex + 1);
            setHear('');
        }
    }

    const onEnding = () => {
        const Number = ['언덕룡', '여유룡', '투어룡', '실속룡', '타투룡','독서룡','가수룡','게임룡']

        navigation(`/testresult/${Number[findMostFrequent() - 1]}`)
    }

    const findMostFrequent = () => {
        const frequencyMap = {};
        get.forEach(item => {
            if (frequencyMap[item]) {
                frequencyMap[item] += 1;
            } else {
                frequencyMap[item] = 1;
            }
        });

        let mostFrequent = get[0];
        let maxCount = 0;

        for (let key in frequencyMap) {
            if (frequencyMap[key] > maxCount) {
                mostFrequent = key;
                maxCount = frequencyMap[key];
            }
        }

        return mostFrequent;
    };

    return (
        <div className='Testing_wrap container'>
            <div>
                <div className="header">
                    <img className='back' src={Back} alt="back button" />
                    <div className="bar"></div>
                </div>
                <div className="main">
                    <h2>Q{questionindex + 1}.</h2>
                    <h3>{AllText[questionindex].question}</h3>
                    <p>
                        {AllText[questionindex].desc}
                    </p>
                    <div className="choice_box">
                        {AllText[questionindex].choice.map((choice, key) => (
                            <button className={hear === key ? "choice full" : 'choice'} key={key} onClick={() => { setClick(choice.score); setHear(key) }}>{choice.text}</button>
                        ))}
                    </div>
                </div>
            </div>
            {ending ? (
                <button className="next full" onClick={() => { onEnding() }}>다음으로</button>
            ) : (
                <button className="next full" onClick={() => { onSet() }}>다음으로</button>
            )}
        </div>
    )
}

export default Testing