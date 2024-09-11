import React, { useState } from 'react'
import JoinForm from './JoinForm/JoinForm';
import TermsWrap from './Terms/TermsWrap';

const Join = () => {
    const [agree, setAgree] = useState(false);
    const [isSlideOut, setIsSlideOut] = useState(false)

    const handleSlideOut = () => { 
        setIsSlideOut(true)
        setTimeout(() => {
            setIsSlideOut(false)
        }, 400)
    }

    return (
        <div className={`Join_wrap container ${isSlideOut ? 'slide-out-left' : ''}`}>
            {agree ? (
                <JoinForm setAgree={setAgree}/>
            ) : (
                <TermsWrap setAgree={setAgree} handleSlideOut={handleSlideOut} />
            )}
        </div>
    )
}

export default Join