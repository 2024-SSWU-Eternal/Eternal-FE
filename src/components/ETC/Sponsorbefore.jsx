import React from 'react'
import Back from '../../assets/img/Test/back.svg'
import { useNavigate } from 'react-router-dom'

const Sponsorbefore = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Sponsorbefore_wrap container'>
            <div className="header">
                <img className='back' src={Back} alt="back button" onClick={() => { onBack() }} />
                <h4>후원사</h4>
            </div>
            <div className="main">
                <h3>추후 공개됩니다.</h3>
            </div>
        </div>
    )
}

export default Sponsorbefore