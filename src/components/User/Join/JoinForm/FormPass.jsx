import React from 'react'
import { motion } from 'framer-motion';

const FormPass = ({ step, FadeIn, password, setPassword, click, setClick }) => {
    return (
        <>
            {step >= 4 && (
                <motion.div {...FadeIn} className="password">
                    <p>비밀번호</p>
                    <div
                        className={click === 'password' ? 'border' : ''}
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
                </motion.div>
            )}
        </>
    )
}

export default FormPass