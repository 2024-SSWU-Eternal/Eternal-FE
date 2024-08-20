import React, { useState } from 'react'
import JoinForm from './JoinForm/JoinForm';
import TermsWrap from './Terms/TermsWrap';

const Join = () => {
    const [agree, setAgree] = useState(true);

    return (
        <div className='Join_wrap container'>
            {agree ? (
                <JoinForm />
            ) : (
                <TermsWrap setAgree={setAgree} />
            )}
        </div>
    )
}

export default Join