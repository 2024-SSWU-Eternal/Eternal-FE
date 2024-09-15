import React, { useEffect, useState } from 'react'
import Terms from './Terms'
import Details from './Details'

const TermsWrap = ({ setAgree, handleSlideOut }) => {
    const [all, setAll] = useState(false)
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [detail, setDetail] = useState(false)

    useEffect(() => {
        if (first && second && third) {
            setAll(true)
        } else {
            setAll(false)
        }

    }, [first, second, third, all])

    const onAll = () => {
        if (all) {
            setFirst(false);
            setSecond(false);
            setThird(false);
            setAll(false);
        } else {
            setFirst(true);
            setSecond(true);
            setThird(true);
            setAll(true);
        }
    }

    const onNext = () => {
        if (all) {
            setAgree(true);
        } else {
            alert('약관에 모두 동의해주세요!')
        }
    }

    return (
        <div className='Terms_wrap'>
            {detail ? (
                <Details setDetail={setDetail} />
            ) : (
                <Terms first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird}
                    all={all} setDetail={setDetail} onNext={onNext} onAll={onAll} />
            )}
        </div>
    )
}

export default TermsWrap