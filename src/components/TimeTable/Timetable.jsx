import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/img/timetable/icon_back.png';
import nowOnImage from '../../assets/img/timetable/nowon.png';

const Timetable = () => {
    const [currentTab, setCurrentTab] = useState('09-25');
    const [programs, setPrograms] = useState([]);
    const [nowOnProgram, setNowOnProgram] = useState(null);

    useEffect(() => {
        const fetchedPrograms = currentTab === '09-25' 
            ? [
                { id: 1, name: 'Food Truck', location: 'Sujeong Campus', time: '11:00 - 22:00' },
                { id: 2, name: 'SujeongNet', location: 'In front of Nanhyang Hall', time: '11:00 - 22:00' },
                { id: 3, name: 'Alumni Booth', location: 'In front of Seongsin Hall', time: '11:00 - 22:00' },
                { id: 4, name: 'Photo Zone', location: 'Sujeong Campus', time: '11:00 - 22:00' },
                { id: 5, name: 'Student/Experience/Rest Booth', location: 'Sujeong Campus', time: '~20:00' },
                { id: 6, name: 'Mini Event', location: 'Sujeong Campus', time: '16:00' },
                { id: 7, name: 'Talent Show', location: 'Next to Seongsin Hall', time: '17:00' },
                { id: 8, name: 'Celebrity Performance', location: 'Sujeong Campus', time: '20:30' },
                { id: 9, name: 'After Party', location: 'Sujeong Campus', time: '22:00' },
              ]
            : currentTab === '09-26'
            ? [
                { id: 10, name: 'Lecture', location: 'Main Hall', time: '09:00 - 10:00' },
                { id: 11, name: 'Workshop', location: 'Conference Room', time: '11:00 - 12:30' },
                { id: 12, name: 'Panel Discussion', location: 'Auditorium', time: '14:00 - 15:30' },
                { id: 13, name: 'Networking Event', location: 'Lobby', time: '16:00 - 18:00' },
              ]
            : [];

        setPrograms(fetchedPrograms);
        setNowOnProgram(fetchedPrograms[0]); 
    }, [currentTab]);

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
                    Sep 25
                </button>
                <button 
                    onClick={() => setCurrentTab('09-26')} 
                    className={currentTab === '09-26' ? 'active' : ''}
                >
                    Sep 26
                </button>
            </div>

            <motion.div 
                className="now-on" 
                initial={{ y: -50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <img src={nowOnImage} alt="Now On" className="now-on-image" />
                {nowOnProgram && (
                    <div className="now-on-details">
                        <p className="now-on-time">{nowOnProgram.time}</p>
                        <p className="now-on-name">{nowOnProgram.name}</p>
                        <p className="now-on-location">{nowOnProgram.location}</p>
                    </div>
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
                            <p>{program.time.split(' ')[2] || ''}</p>
                        </div>
                        <div className="program-details">
                            <p className="program-name">{program.name}</p>
                            <p className="program-location">{program.location}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Timetable;
