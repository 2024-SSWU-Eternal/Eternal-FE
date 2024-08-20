import React from 'react'
import { motion } from 'framer-motion';

const FormEmail = ({ step, FadeIn, email, setEmail, click, setClick }) => {
    return (
        <>
            {step >= 2 && (
                <motion.div {...FadeIn} className="email">
                    <p>이메일</p>
                    <div>
                        <input
                            value={email}
                            type="number" 
                            onChange={(e) => setEmail(e.target.value)}
                            className={click === 'email' ? 'border' : ''}
                            onClick={() => setClick('email')}
                        />
                        <p>@sungshin.ac.kr</p>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default FormEmail