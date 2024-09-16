import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer_wrap'>
            <div className="top">
                <h5>2024 수정대동제 [Eternal] 웹사이트</h5>
                <p>Copyright 2024. 수정대동제 축제기획단 X likelion SSWU 12th</p>
                <p>All rights reserved</p>
            </div>
            <div className="bottom">
                <Link to='/making' className='left'>만든 이들</Link>
                <Link to='/sponsor'>후원사</Link>
                <Link to='/manager' className='right'>관리자모드</Link>
            </div>
        </div>
    )
}

export default Footer