import React, { useState } from 'react'
import JoinForm from './JoinForm/JoinForm';
import TermsWrap from './Terms/TermsWrap';

const Join = () => {
    const [agree, setAgree] = useState(false);

    return (
        <div className='Join_wrap container'>
            {agree ? (
                <JoinForm setAgree={setAgree}/>
            ) : (
                <TermsWrap setAgree={setAgree} />
            )}
        </div>
    )
}

export default Join