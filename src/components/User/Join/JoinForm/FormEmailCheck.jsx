import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FormEmailCheck = ({ step, FadeIn, emailCheck, setEmailCheck, click, setClick }) => {
    const [seconds, setSeconds] = useState(300);
    const [isActive, setIsActive] = useState(false);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        if (step === 3) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [step]);

    useEffect(() => {
        let interval = null;

        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(interval);
            setIsExpired(true);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleResend = () => {
        setSeconds(300);
        setIsExpired(false);
    };

    return (
        <>
            {step >= 3 && (
                <motion.div {...FadeIn} className="email_check">
                    <p>인증번호</p>
                    <div>
                        <div
                            className={click === 'email_check' ? 'border' : ''}
                            onClick={() => setClick('email_check')}
                        >
                            <input
                                value={emailCheck}
                                onChange={(e) => setEmailCheck(e.target.value)}
                                type="text"
                            />
                            <p>{isExpired ? '만료' : formatTime(seconds)}</p>
                        </div>
                        <button onClick={handleResend} disabled={isExpired}>재전송</button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default FormEmailCheck;
