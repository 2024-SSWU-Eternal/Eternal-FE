import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { clearTokens } from '../../store/authSlice';
import NavContent from './NavContent';

const Nav = () => {
    const [loginbtn, setLoginbtn] = useState(false);
    const token = localStorage.getItem('jwtToken')
    const isLoad = localStorage.getItem('loading');

    useEffect(() => {
        if (token) {
            setLoginbtn(true);
        } else {
            setLoginbtn(false)
        }
    });

    const onLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            {isLoad ? (
                <NavContent onLogout={onLogout} loginbtn={loginbtn} />
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0, zIndex: 0 }}
                        animate={{ opacity: 1, zIndex: 10 }}
                        transition={{ duration: 1, delay: 4.8 }}
                        className='Nav_wrap'>
                        <NavContent onLogout={onLogout} loginbtn={loginbtn} />
                    </motion.div>
                </>
            )}
            <Footer />
        </>

    )
}

export default Nav