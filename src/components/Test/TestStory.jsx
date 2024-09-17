import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/Test/back.svg'
import { useNavigate } from 'react-router-dom'
import cute from '../../assets/img/Test/cute_02.png'
import testme from '../../assets/img/Test/testme.png'

const TestStory = ({ setStory }) => {
    const navigation = useNavigate();
    const [index, setIndex] = useState(0)

    const Text = [
        {
            desc: '',
            title: '어느 날 아침, \n여느 때처럼 일어나 거울을 본 나.',
            img: null
        }, 
        {
            desc: '',
            title: '평소와 다른, 낯선 모습... \n돋아난 뿔과 빵실해진 배, \n그리고... 꼬리?!!',
            img: <img src={cute} alt="cute" className="story-img" />
        },
        {
            desc: '',
            title: '수룡이가 되어버린 나\n 나는 어떤 수룡이일까?',
            img: null
        },
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

    const backgroundStyle = {
        position: 'absolute',  
        top: 0, 
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${testme})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: index === 2 ? 'block' : 'none',
    }

    return (
        <>
            <img src={Back} alt="back button" className='back' onClick={() => { onBack() }} />
                <div className="main">
                    <div className="title_box">
                        <h2>
                            {Text[index].title.split('\n').map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </h2>
                    </div>
                    {Text[index].img && Text[index].img}
                    </div>
                <div>
            </div>
            <div style={backgroundStyle}/>
        </>
    )
}

export default TestStory
