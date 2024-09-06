import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/img/timetable/icon_back.png';
import nowOnImage from '../../assets/img/timetable/nowon.png';
import ongoingImage from '../../assets/img/timetable/icon_ongoingprogram.png';


const Timetable = () => {
    const [currentTab, setCurrentTab] = useState('09-25');
    const [programs, setPrograms] = useState([]);
    const [nowOnProgram, setNowOnProgram] = useState(null);

    useEffect(() => {
        const fetchedPrograms = currentTab === '09-25'
            ? [
                { id: 1, name: '푸드트럭', location: '수정캠퍼스', time: '11:00 - 22:59' },
                { id: 2, name: '수정네컷', location: '난향관 앞', time: '11:00 - 22:00' },
                { id: 3, name: '총학생회 부스', location: '성신관 앞', time: '11:00 - 22:00' },
                { id: 4, name: '포토존', location: '수정캠퍼스 잔디밭', time: '11:00 - 22:00' },
                { id: 5, name: '학생/체험형/제휴부스', location: '수정캠퍼스 잔디밭', time: '11:00 - 20:00' },
                { id: 6, name: '미니 이벤트', location: '수정캠퍼스 잔디밭', time: '16:00 - 17:00' },
                { id: 7, name: '운정가요제', location: '성신관 옆', time: '17:00 - 18:00' },
                { id: 8, name: '연예인 공연', location: '수정캠퍼스 잔디밭', time: '02:30 - 21:30' },
                { id: 9, name: '애프터 파티', location: '수정캠퍼스 잔디밭', time: '22:00 - 23:59' },
            ]
            : currentTab === '09-26'
                ? [
                    { id: 10, name: '푸드트럭', location: '수정캠퍼스', time: '11:00 - 22:59' },
                    { id: 12, name: '수정네컷', location: '난향관 앞', time: '11:00 - 22:00' },
                    { id: 13, name: '총학생회 부스', location: '성신관 앞', time: '11:00 - 22:00' },
                    { id: 14, name: '포토존', location: '수정캠퍼스 잔디밭', time: '11:00 - 22:00' },
                    { id: 15, name: '학생/체험형/제휴부스', location: '수정캠퍼스 잔디밭', time: '11:00 - 20:00' },
                    { id: 16, name: '미니 이벤트', location: '수정캠퍼스 잔디밭', time: '16:00 - 17:00' },
                    { id: 17, name: '운정가요제', location: '성신관 옆', time: '17:00 - 18:00' },
                    { id: 18, name: '연예인 공연', location: '수정캠퍼스 잔디밭', time: '20:30 - 21:30' },
                    { id: 19, name: '애프터 파티', location: '수정캠퍼스 잔디밭', time: '22:00 - 23:59' },
                ]
                : [];

        setPrograms(fetchedPrograms);
    }, [currentTab]);

    useEffect(() => {
        const updateNowOnProgram = () => {
            const now = new Date(); // 현재 시간
            console.log('현재 시간:', now); // 현재 시간 디버깅 출력

            const currentProgram = programs.find(program => {
                const [start, end] = program.time.split(' - ').map(time => {
                    const [hours, minutes] = time.split(':');
                    const programDate = new Date(now); // 현재 날짜로 Date 객체 생성

                    // 프로그램 시작 시간 또는 종료 시간 설정
                    programDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
                    return programDate;
                });

                const startTime = start;
                const endTime = end;

                // 프로그램의 시작 시간과 종료 시간 디버깅
                console.log('프로그램:', program.name, '시작 시간:', startTime, '종료 시간:', endTime);

                // 현재 시간이 시작 시간과 종료 시간 사이에 있는지 확인
                return now >= startTime && now <= endTime;
            });

            if (currentProgram) {
                console.log('현재 진행 중인 프로그램:', currentProgram.name);
            } else {
                console.log('현재 진행 중인 프로그램이 없습니다.');
            }

            setNowOnProgram(currentProgram || null);
        };

        updateNowOnProgram();
        const intervalId = setInterval(updateNowOnProgram, 60000); // 1분마다 업데이트

        return () => clearInterval(intervalId);
    }, [programs, currentTab]);


    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/'); // This should match the route you defined in App.js
    };

    return (
        <div className='Timetable_wrap container'>
            <button className="icon_back" onClick={handleNavigation}>
                <img src={backIcon} alt="Back" />
            </button>

            <div className="tabs">
                <button
                    onClick={() => setCurrentTab('09-25')}
                    className={currentTab === '09-25' ? 'active' : ''}
                >
                    9월 25일 (수)
                </button>
                <button
                    onClick={() => setCurrentTab('09-26')}
                    className={currentTab === '09-26' ? 'active' : ''}
                >
                    9월 26일 (목)
                </button>
            </div>

            <motion.div
                className="now-on"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <img src={nowOnImage} alt="Now On" className="now-on-image" />
                {nowOnProgram ? (
                    <div className="now-on-details">
                        <p className="now-on-time">
                            <p>~{nowOnProgram.time.split(' ')[2] || ''}</p> {/* 끝나는 시간 */}
                        </p>
                        <p className="now-on-name">{nowOnProgram.name}</p>
                        <p className="now-on-location">{nowOnProgram.location}</p>
                    </div>
                ) : (
                    <p className='now-on-none'>현재 진행 중인 프로그램이 없습니다.</p>
                )}
            </motion.div>

            <motion.div
                className="timetable"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                {programs.map(program => (
                    <div key={program.id} className="program-item">
                        <div className="program-time">
                            <p>{program.time.split(' ')[0]}</p>
                            {/* 끝나는 시간 */}
                            {/* <p>{program.time.split(' ')[2] || ''}</p> */}
                        </div>
                        <div className="program-details">
                            <img src={ongoingImage} alt='ongoingImg' />
                            <div className='event-info'>
                                <p className="program-name">{program.name}</p>
                                <p className="program-location">{program.location}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Timetable;
