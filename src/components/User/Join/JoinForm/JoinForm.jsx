import React, { useEffect, useState } from 'react';
import Back from '../../../../assets/img/join/back.svg';
import { motion } from 'framer-motion';
import FormName from './FormName';
import FormEmail from './FormEmail';
import FormEmailCheck from './FormEmailCheck';
import FormPass from './FormPass';

const JoinForm = ({ setAgree }) => {
    const [click, setClick] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('이름을 입력해주세요');
    const [all, setAll] = useState(false);

    const [step, setStep] = useState(1);

    const FadeIn = {
        initial: { y: -40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: 0.8 }
    };

    const handleNextStep = () => {
        if (step === 1 && name === '') {
            alert('이름을 채워주세요!')
            return;
        } else if (step === 2 && email === '') {
            alert('이메일을 채워주세요!')
            return;
        } else if (step === 3 && emailCheck === '') {
            alert('인증번호를 채워주세요!')
            return;
        } else if (step === 4 && password === '') {
            alert('비밀번호를 채워주세요!')
            return;
        }
        setStep((prevStep) => prevStep + 1);
    };

    useEffect(() => {
        if (step === 1) {
            setTitle(<span>이름을 입력해주세요</span>);
        } else if (step === 2) {
            setTitle(<><span>가입을 위한 성신 메일을</span><br /><span>입력해주세요</span></>);
        } else if (step === 3) {
            setTitle(<><span>메일로 전송된</span><br /><span>인증번호를 입력해주세요</span></>);
        } else {
            setTitle(<span>비밀번호를 입력해주세요</span>);
        }
    }, [step]);


    useEffect(() => {
        if (name && email && emailCheck && password) {
            setAll(true);
        } else {
            setAll(false);
        }
    }, [name, email, emailCheck, password])

    const onBack = () => {
        if (step === 1) {
            setAgree(false);
        } else {
            setStep(step - 1)
        }
    }

    return (
        <div className='JoinForm_wrap'>
            <div className="header">
                <button className="back" onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
                <h4>회원가입</h4>
            </div>
            <div className="main">
                <motion.h2
                    key={step}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>
                <FormName step={step} FadeIn={FadeIn} name={name} setName={setName} click={click} setClick={setClick} />
                <FormEmail step={step} FadeIn={FadeIn} email={email} setEmail={setEmail} click={click} setClick={setClick} />
                <FormEmailCheck step={step} FadeIn={FadeIn} emailCheck={emailCheck} setEmailCheck={setEmailCheck} click={click} setClick={setClick} />
                <FormPass step={step} FadeIn={FadeIn} password={password} setPassword={setPassword} click={click} setClick={setClick} />
            </div>
            {step >= 4 ? (
                <button className={all ? 'full' : ''}>회원가입</button>
            ) : (
                <button onClick={handleNextStep}>확인</button>
            )}
        </div>
    );
};

export default JoinForm;
