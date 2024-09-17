import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FormPass = ({ step, FadeIn, password, setPassword, click, setClick }) => {
    const [isValid, setIsValid] = useState(false);

    const validatePassword = (password) => {
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        return password.length >= 8 && hasLetter && hasNumber;
    };

    useEffect(() => {
        setIsValid(validatePassword(password));
    }, [password]);

    return (
        <>
            {step >= 4 && (
                <motion.div {...FadeIn} className="password">
                    <p>비밀번호</p>
                    <div
                        className={`${click === 'password' ? 'border' : ''} ${!isValid && password ? 'invalid' : ''}`}
                        onClick={() => setClick('password')}
                    >
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='영문, 숫자 포함 8자 이상'
                        />
                        <img src="" alt="" />
                    </div>
                    {!isValid && password && (
                        <p style={{ color: 'red' }}>비밀번호는 영문과 숫자를 포함한 8자 이상이어야 합니다.</p>
                    )}
                </motion.div>
            )}
        </>
    );
}

export default FormPass;
