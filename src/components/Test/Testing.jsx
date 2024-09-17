import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/Test/back.avif'
import AllText from './js/text'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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

    const onEnding = async () => {
        const Number = ['언덕룡', '여유룡', '투어룡', '실속룡', '타투룡', '독서룡', '가수룡', '게임룡']
        const mostFrequentResult = findMostFrequent();
        const resultType = Number[mostFrequentResult - 1];

        const response = await axios.post('https://www.eternal-server.store/test', {
                result: {
                    type: resultType,
                    score: mostFrequentResult
                }
            });
            console.log('API Response:', response.data);

            navigation(`/testresult/${resultType}`);
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

    const onBack = () => {
        if (questionindex === 0) {
            navigation(-1);
        } else {
            setQuestionindex(questionindex - 1);
            setHear('')
        }
    }

    return (
        <div className='Testing_wrap container'>
            <div>
                <div className="header">
                    <img className='back' src={Back} alt="back button" onClick={() => { onBack() }} />
                    <progress max="100" value={(questionindex / 13) * 100} className="bar"></progress>
                    
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