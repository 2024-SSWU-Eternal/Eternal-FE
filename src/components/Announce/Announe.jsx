import React, { useEffect, useState } from 'react';
import Back from '../../assets/img/announce/back.svg';
import Temporary from '../../assets/img/announce/temporary.png';
import Write from '../../assets/img/announce/write_btn.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Announe = () => {
    const URL = 'https://www.eternal-server.store';

    const params = useParams();
    const [manage, setManage] = useState(false);
    const [data, setData] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        if (params.manager === 'manager') {
            setManage(true);
        } else {
            setManage(false)
        }
    }, [params]);

    useEffect(() => {
        axios.get(`${URL}/notices`)
            .then((res) => {
                if(res.status === 200){
                    setData(res.data);
                    console.log(res.data)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const onDetail = (index) => {
        if (params.manager === 'manager') {
            navigation(`/announce/${index}/manager`);
        } else {
            navigation(`/announce/${index}/normal`);
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
                    {data.map((data, index) => (
                        <motion.div
                            className="list"
                            key={index}
                            variants={itemVariants}
                            onClick={() => { onDetail(data.noticeId); }}
                        >
                            <img src={data.images} alt="temporary img" />
                            <div>
                                <div className="top">
                                    <h4>{data.title}</h4>
                                    <p className="date">{data.createdAt}</p>
                                </div>
                                <p className="bottom">{data.content}</p>
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
