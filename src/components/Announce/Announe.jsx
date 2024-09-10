import React, { useEffect, useState } from 'react';
import Back from '../../assets/img/announce/back.svg';
import Temporary from '../../assets/img/announce/temporary.png';
import Write from '../../assets/img/announce/write_btn.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Announe = () => {
    const params = useParams();
    const [manage, setManage] = useState(false)
    const navigation = useNavigate();

    useEffect(() => {
        if (params.manager === 'manager') {
            setManage(true);
        } else {
            setManage(false)
        }
    }, [params])

    const announceData = [
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다.안녕하세요 멋쟁이사자처럼 12기 성신여대입니다.안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다.안녕하세요 멋쟁이사자처럼 12기 성신여대입니다.안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
        {
            title: "수정대동제 웹사이트 오픈",
            date: "2024년 08월 16일",
            content: "안녕하세요 멋쟁이사자처럼 12기 성신여대입니다.안녕하세요 멋쟁이사자처럼 12기 성신여대입니다.안녕하세요 멋쟁이사자처럼 12기 성신여대입니다. 2024 수정대동제를 맞아 웹사이트를 오픈하게 되었습니다. 많은",
            imgSrc: Temporary
        },
    ];


    const onDetail = () => {
        if (params.manager === 'manager') {
            navigation('/announce/detail/manager');
        } else {
            navigation('/announce/detail/normal');
        }
    };

    const onBack = () => {
        navigation('/');
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // 각 자식 요소의 애니메이션 간격
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="Announe_wrap container">
            <div className="header">
                <button className="back" onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
                <h4>공지사항</h4>
            </div>
            <div className="main">
                <div className="banner">배너</div>
                <motion.div
                    className="announce_list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {announceData.map((item, index) => (
                        <motion.div
                            className="list"
                            key={index}
                            variants={itemVariants}
                            onClick={() => { onDetail(); }}
                        >
                            <img src={item.imgSrc} alt="temporary img" />
                            <div>
                                <div className="top">
                                    <h4>{item.title}</h4>
                                    <p className="date">{item.date}</p>
                                </div>
                                <p className="bottom">{item.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {manage ? (
                <Link to='/announce/write'><img src={Write} alt="" /></Link>
            ) : (<></>)}
        </div>
    );
}

export default Announe;
