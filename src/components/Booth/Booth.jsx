import React, { useState } from 'react';
import back from '../../assets/img/booth/back.png';
import filter from '../../assets/img/booth/filter.png';
import searchbg from '../../assets/img/booth/searchbg.png';
import search from '../../assets/img/booth/search.svg';
import BoothList from './BoothList';
import { useNavigate } from 'react-router-dom';
import Banner from '../ETC/Banner';

const booths = [
    {
        id: 1,
        name: 'OCOT',
        date: [3, 6],
        image: require('../../assets/img/booth/OCOT.avif'),
        location: 'F-2'
    },
    {
        id: 2,
        name: '뜨개 만물상',
        date: [3, 6],
        image: require('../../assets/img/booth/뜨개만물상.avif'),
        location: 'F-3'
    },
    {
        id: 3,
        name: 'S’angle 사진관',
        date: [3, 6],
        image: require('../../assets/img/booth/S_angle 사진관.avif'),
        location: 'E-2'
    },
    {
        id: 4,
        name: '성신 최고 上여자 올림픽',
        date: [3, 6],
        image: require('../../assets/img/booth/성신최고上여자올림픽.avif'),
        location: 'E-1'
    },
    {
        id: 5,
        name: '전력★메탈연구소!!~  모두가 메탈의 사랑스러움을 알 때까지~',
        date: [3, 6],
        image: require('../../assets/img/booth/메탈연구소.avif'),
        location: 'E-6'
    },
    {
        id: 6,
        name: '단아의 이면',
        date: [3, 6],
        image: require('../../assets/img/booth/단아의 이면.avif'),
        location: 'E-9'
    },
    {
        id: 7,
        name: 'OMR (Oh My Ribbon)',
        date: [3, 6],
        image: require('../../assets/img/booth/OMR.avif'),
        location: 'F-4'
    },
    {
        id: 8,
        name: 'tomorrow is__',
        date: [3, 6],
        image: require('../../assets/img/booth/tomorrow is.avif'),
        location: 'F-6',
        filter:'학생 부스',
    },
    {
        id: 9,
        name: '물만난 물고기',
        date: [1, 4],
        image: require('../../assets/img/booth/물만난 물고기.avif'),
        location: 'F-1'
    },
    {
        id: 10,
        name: 'Thirsty soul',
        date: [2, 5],
        image: require('../../assets/img/booth/Thirsty Soul.avif'),
        location: 'F-1',
        filter:'학생 부스',
    },
    {
        id: 11,
        name: '몽키스패너',
        date: [1, 4],
        image: require('../../assets/img/booth/몽키스패너.avif'),
        location: 'E-7'
    },
    {
        id: 12,
        name: '랟스보스와 함께 ReSET! 디지털 성범죄 없는 세상',
        date: [2, 5],
        image: require('../../assets/img/booth/boothimage.png'),
        location: 'E-7'
    },
    {
        id: 13,
        name: '모루모루',
        date: [1, 4],
        image: require('../../assets/img/booth/모루모루.avif'),
        location: 'F-7'
    },
    {
        id: 14,
        name: '돌팔이',
        date: [2, 5],
        image: require('../../assets/img/booth/돌팔이.avif'),
        location: 'F-7'
    },
    {
        id: 15,
        name: '수정이네 과일가게',
        date: [1, 4],
        image: require('../../assets/img/booth/수정이네 과일가게.avif'),
        location: 'E-5'
    },
    {
        id: 16,
        name: '융보공(融保工)',
        date: [2, 5],
        image: require('../../assets/img/booth/융보공.avif'),
        location: 'E-5'
    },
    {
        id: 17,
        name: '위시노바',
        date: [3],
        image: require('../../assets/img/booth/위시노바.avif'),
        location: 'E-10'
    },
    {
        id: 18,
        name: '돌잔!치 (Rock Glass Festival)',
        date: [6],
        image: require('../../assets/img/booth/돌잔치.avif'),
        location: 'E-10'
    },
    {
        id: 19,
        name: '잊혀진 현상소',
        date: [3],
        image: require('../../assets/img/booth/잊혀진-현상소.avif'),
        location: 'E-4'
    },
    {
        id: 20,
        name: '뜨개팔자 상팔자',
        date: [2, 5],
        image: require('../../assets/img/booth/뜨개팔자 상팔자.avif'),
        location: 'E-4 F-6'
    },
    {
        id: 21,
        name: '蠑光:영원한 빛',
        date: [1],
        image: require('../../assets/img/booth/영원한-빛.avif'),
        location: 'E-3'
    },
    {
        id: 22,
        name: '딱따구리 잡화점',
        date: [1],
        image: require('../../assets/img/booth/딱따구리 잡화점.avif'),
        location: 'E-8'
    },
    {
        id: 23,
        name: '파프리카 잡화점',
        date: [2, 5],
        image: require('../../assets/img/booth/파프리카-잡화점.avif'),
        location: 'E-8 F-8'
    },
    {
        id: 24,
        name: '테소로',
        date: [3, 6],
        image: require('../../assets/img/booth/테소로.avif'),
        location: 'F-5'
    },
    {
        id: 25,
        name: '찬빛',
        date: [2, 4],
        image: require('../../assets/img/booth/찬빛.avif'),
        location: 'F-8'
    },
    {
        id: 26,
        name: '솜망치',
        date: [3, 6],
        image: require('../../assets/img/booth/솜망치.avif'),
        location: 'A-3'
    },
    {
        id: 27,
        name: '연공방',
        date: [6],
        image: require('../../assets/img/booth/연공방.avif'),
        location: 'E-4'
    },
    {
        id: 28,
        name: '<작전명 : GPS>',
        date: [3, 6],
        image: require('../../assets/img/booth/작전명-GPS.avif'),
        location: 'A-5'
    },
    {
        id: 29,
        name: '세화들',
        date: [3, 6],
        image: require('../../assets/img/booth/세화들.avif'),
        location: 'A-6'
    },
    {
        id: 30,
        name: '라일락',
        date: [3, 6],
        image: require('../../assets/img/booth/라일락.avif'),
        location: 'A-4'
    },
    {
        id: 31,
        name: 'convey one’s journey',
        date: [1],
        image: require('../../assets/img/booth/convey one’s journey.avif'),
        location: 'A-2'
    },
    {
        id: 32,
        name: '음아정',
        date: [1],
        image: require('../../assets/img/booth/음아정.avif'),
        location: 'A-1'
    },
    {
        id: 33,
        name: "제4대 지식서비스공과대학 학생회 '영원'",
        date: [2, 4],
        image: require('../../assets/img/booth/영원.avif'),
        location: 'A-2 A-1'
    },
    {
        id: 34,
        name: "페이스페인팅 '신비로움 나눠드립니다'",
        date: [2, 4],
        image: require('../../assets/img/booth/페이스페인팅.avif'),
        location: 'A-1 A-2'
    },
    {
        id: 35,
        name: "세피아(Sepia)",
        date: [6],
        image: require('../../assets/img/booth/세피아.avif'),
        location: 'E-3'
    },
    {
        id: 36,
        name: "우리는 모두 연결되어 있다",
        date: [6],
        image: require('../../assets/img/booth/우리는 모두 연결되어 있다.avif'),
        location: 'E-8'
    }


];

const Booth = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [selectedBoothTypes, setSelectedBoothTypes] = useState([]);
    const [keyword, setKeyword] = useState('');

    const [filters, setFilters] = useState({
        dates: [],
        times: [],
        boothTypes: [],
    });

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleToggleSelection = (value, setSelected, selected) => {
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    const applyFilters = () => {
        setFilters({
            dates: selectedDates,
            times: selectedTimes,
            boothTypes: selectedBoothTypes,
        });
        toggleFilter();
    };

    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
    };

    
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();
    const GoBack = () => {
        setIsExiting(true);
        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    return (
        <>
        <div className='Booth_wrap container'>
            <div className='Booth top'>
                <img src={back} alt="Back" className="back-icon" onClick={GoBack}/>
                <h1 className="Booth-title">부스 정보</h1>
                <img src={filter} alt="Filter" className="filter-icon" onClick={toggleFilter} />
            </div>

            <div className="banner">
               <Banner />
            </div>

            <div className="booth-search">
                <h2 className="booth-search-title">2024 수정대동제 부스 톺아보기</h2>
                <div className="booth-search-bar">
                    <img src={searchbg} alt="Search" className="booth-search-bg" />
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="키워드로 부스 찾기" 
                        value={keyword}
                        onChange={handleSearchChange}
                    />
                    <img src={search} alt="Search" className="booth-search-icon" />
                </div>
            </div>

            <div className="booth-list-container">
                <BoothList 
                    selectedDates={filters.dates} 
                    selectedTimes={filters.times} 
                    selectedBoothTypes={filters.boothTypes} 
                    keyword={keyword}
                />
            </div>
          
            {isFilterOpen && (
                <div className="filter-modal">
                    <div className="filter-content">
                        <h3 className="filter-title">날짜</h3>
                        <div className="filter-options">
                            <button
                                className={selectedDates.includes('9월 25일') ? 'active' : ''}
                                onClick={() => handleToggleSelection('9월 25일', setSelectedDates, selectedDates)}
                            >
                                9월 25일
                            </button>
                            <button
                                className={selectedDates.includes('9월 26일') ? 'active' : ''}
                                onClick={() => handleToggleSelection('9월 26일', setSelectedDates, selectedDates)}
                            >
                                9월 26일
                            </button>
                        </div>

                        <h3 className="filter-title">시간</h3>
                        <div className="filter-options">
                            <button
                                className={selectedTimes.includes('종일') ? 'active' : ''}
                                onClick={() => handleToggleSelection('종일', setSelectedTimes, selectedTimes)}
                            >
                                종일
                            </button>
                            <button
                                className={selectedTimes.includes('오전') ? 'active' : ''}
                                onClick={() => handleToggleSelection('오전', setSelectedTimes, selectedTimes)}
                            >
                                오전
                            </button>
                            <button
                                className={selectedTimes.includes('오후') ? 'active' : ''}
                                onClick={() => handleToggleSelection('오후', setSelectedTimes, selectedTimes)}
                            >
                                오후
                            </button>
                        </div>

                        <h3 className="filter-title">부스 종류</h3>
                        <div className="filter-options">
                            <button
                                className={selectedBoothTypes.includes('학생 부스') ? 'active' : ''}
                                onClick={() => handleToggleSelection('학생 부스', setSelectedBoothTypes, selectedBoothTypes)}
                            >
                                학생 부스
                            </button>
                            <button
                                className={selectedBoothTypes.includes('총학 부스') ? 'active' : ''}
                                onClick={() => handleToggleSelection('총학 부스', setSelectedBoothTypes, selectedBoothTypes)}
                            >
                                총학 부스
                            </button>
                            <button
                                className={selectedBoothTypes.includes('제휴 부스') ? 'active' : ''}
                                onClick={() => handleToggleSelection('제휴 부스', setSelectedBoothTypes, selectedBoothTypes)}
                            >
                                제휴 부스
                            </button>
                            <button
                                className={selectedBoothTypes.includes('행정부서 부스') ? 'active' : ''}
                                onClick={() => handleToggleSelection('행정부서 부스', setSelectedBoothTypes, selectedBoothTypes)}
                            >
                                행정부서 부스
                            </button>
                        </div>

                        <div className="filter-buttons">
                            <button className="cancel-button" onClick={toggleFilter}>닫기</button>
                            <button className="apply-button" onClick={applyFilters}>적용</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Booth;