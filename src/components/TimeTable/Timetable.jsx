import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Back from '../../assets/img/timetable/back.svg';
import nowOnImage from '../../assets/img/timetable/nowon.svg';
import ongoingImage from '../../assets/img/timetable/icon_ongoingprogram.svg';

const Timetable = () => {
    const [currentTab, setCurrentTab] = useState('09-25');
    const [programs, setPrograms] = useState([]);
    const [nowOnPrograms, setNowOnPrograms] = useState([]); // Updated to handle multiple programs
    const [currentProgramIndex, setCurrentProgramIndex] = useState(0); // Index for rotating through programs

    useEffect(() => {
        const fetchedPrograms = currentTab === '09-25'
            ? [
                { id: 1, name: '푸드트럭', location: '수정캠퍼스 잔디밭', time: '11:00 - 22:00' },
                { id: 2, name: '총학생회 부스', location: '난향관 앞', time: '11:00 - 22:00' },
                { id: 3, name: '수정네컷', location: '성신관 앞', time: '11:00 - 22:00' },
                { id: 4, name: '힐링 앤 포토존', location: '수정캠퍼스 잔디밭', time: '11:00 - 22:00' },
                { id: 5, name: '학생/체험형 부스', location: '잔디밭 광장', time: '11:00 - 20:00' },
                { id: 6, name: '프로모션 부스', location: '잔디밭 광장', time: '11:00 - 18:00' },
                { id: 7, name: '수정플래닛 999', location: '잔디밭 광장', time: '19:00 - 20:59' },
                { id: 8, name: '연예인 공연', location: '잔디밭 광장', time: '21:00 - 21:59' },
                { id: 9, name: '애프터 파티', location: '잔디밭 광장', time: '22:00 - 23:00' },
            ]
            : currentTab === '09-26'
                ? [
                    { id: 1, name: '푸드트럭', location: '수정캠퍼스 잔디밭', time: '11:00 - 22:00' },
                    { id: 2, name: '총학생회 부스', location: '난향관 앞', time: '11:00 - 22:00' },
                    { id: 3, name: '수정네컷', location: '성신관 앞', time: '11:00 - 22:00' },
                    { id: 4, name: '힐링 앤 포토존', location: '수정캠퍼스 잔디밭', time: '11:00 - 22:00' },
                    { id: 5, name: '학생/체험형 부스', location: '잔디밭 광장', time: '11:00 - 20:00' },
                    { id: 6, name: '프로모션 부스', location: '잔디밭 광장', time: '11:00 - 18:00' },
                    { id: 7, name: '학생 공연', location: '잔디밭 광장', time: '19:00 - 20:59' },
                    { id: 8, name: '연예인 공연', location: '잔디밭 광장', time: '21:00 - 21:59' },
                    { id: 9, name: '애프터 파티', location: '잔디밭 광장', time: '22:00 - 23:00' },
                ]
                : [];

        setPrograms(fetchedPrograms);
    }, [currentTab]);
     // Group programs by start time
     const groupProgramsByStartTime = (programs) => {
        const grouped = {};
        programs.forEach(program => {
            const startTime = program.time.split(' ')[0]; // Extract the start time
            if (!grouped[startTime]) {
                grouped[startTime] = [];
            }
            grouped[startTime].push(program);
        });
        return Object.entries(grouped); // Convert object to array for easier mapping
    };

    // Correctly define `groupedPrograms` using the `groupProgramsByStartTime` function
    const groupedPrograms = groupProgramsByStartTime(programs);
    // Function to rotate through programs with the same time
    useEffect(() => {
        if (nowOnPrograms.length > 0) {
            const interval = setInterval(() => {
                setCurrentProgramIndex((prevIndex) => (prevIndex + 1) % nowOnPrograms.length);
            }, 3000); // Change every 3 seconds

            return () => clearInterval(interval); // Clear interval on unmount
        }
    }, [nowOnPrograms]);

    useEffect(() => {
        const updateNowOnPrograms = () => {
            const now = new Date();

            // Filter programs that are currently ongoing
            const ongoingPrograms = programs.filter(program => {
                const [start, end] = program.time.split(' - ').map(time => {
                    const [hours, minutes] = time.split(':');
                    const programDate = new Date(now);
                    programDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
                    return programDate;
                });
                return now >= start && now <= end;
            });

            setNowOnPrograms(ongoingPrograms);
        };

        updateNowOnPrograms();
        const intervalId = setInterval(updateNowOnPrograms, 60000);

        return () => clearInterval(intervalId);
    }, [programs, currentTab]);

    const navigate = useNavigate();

    const onBack = () => {
        navigate('/');
    };

    return (
        <div className='Timetable_wrap container'>
            <div className="header">
                <button className="back" onClick={onBack}><img src={Back} alt="back button" /></button>
                <h4>타임테이블</h4>
            </div>

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
                <line></line>
            </div>

            <motion.div
                className="now-on"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <img src={nowOnImage} alt="Now On" className="now-on-image" />
                {nowOnPrograms.length > 0 ? (
                    <div className="now-on-details">
                        <p className="now-on-time">
                            <p>~{nowOnPrograms[currentProgramIndex].time.split(' - ')[1]}</p> {/* Show end time */}
                        </p>
                        <p className="now-on-name">{nowOnPrograms[currentProgramIndex].name}</p>
                        <p className="now-on-location">{nowOnPrograms[currentProgramIndex].location}</p>
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
                {/* Same program rendering logic as before */}
                {groupedPrograms.map(([startTime, group], index) => (
                    <div key={index} className="grouped-programs">
                        <div className="program-group">
                            {group.map((program, programIndex) => (
                                <div
                                    key={program.id}
                                    className={`program-item ${
                                        ['총학생회 부스', '수정네컷', '힐링 앤 포토존'].includes(program.name)
                                            ? 'shifted-program'
                                            : ''
                                    }`}
                                >
                                    {/* Show start and formatted end times for all programs that need both */}
                                    {program.name === '푸드트럭' ? (
                                        <div className="program-time">
                                            <p>{program.time.split(' - ')[0]}</p> {/* Start time */}
                                            <p>~{program.time.split(' - ')[1]}</p> {/* End time */}
                                        </div>
                                    ) : (
                                        ['학생/체험형 부스', '프로모션 부스'].includes(program.name) ? (
                                            <div className="program-time">
                                                <p>~{program.time.split(' - ')[1]}</p> {/* Only end time */}
                                            </div>
                                        ) : (
                                            programIndex === 0 && (
                                                <div className="program-time">
                                                    <p>{startTime}</p>
                                                </div>
                                            )
                                        )
                                    )}
                                    <div className="program-details">
                                        {/* Display ongoingImg if necessary */}
                                        {(program.name === '푸드트럭' || program.name === '학생/체험형 부스' || program.name === '프로모션 부스' || programIndex === 0) && (
                                            <img src={ongoingImage} alt="ongoingImg" className="ongoing-image" />
                                        )}
                                        <div className="event-info">
                                            <p className="program-name">{program.name}</p>
                                            <p className="program-location">{program.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Timetable;