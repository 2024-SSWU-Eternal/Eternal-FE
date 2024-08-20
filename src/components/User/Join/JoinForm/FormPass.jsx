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
                        />
                        <img src="" alt="" />
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default FormPass