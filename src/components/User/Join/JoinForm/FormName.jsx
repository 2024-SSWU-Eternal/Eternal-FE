import React from 'react'
import { motion } from 'framer-motion';

const FormName = ({ step, FadeIn, name, setName, click, setClick }) => {
    return (
        <>
            {step >= 1 && (
                <motion.div {...FadeIn} className="name">
                    <p>이름</p>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className={click === 'name' ? 'border' : ''}
                        onClick={() => setClick('name')}
                    />
                </motion.div>
            )}
        </>
    )
}

export default FormName