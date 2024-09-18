import React, { useState } from 'react';
import back from '../../assets/img/booth/icon_back.png';
import filter from '../../assets/img/booth/filter.svg';
import searchbg from '../../assets/img/booth/searchbg.png';
import search from '../../assets/img/booth/search.svg';
import BoothList from './BoothList';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../ETC/Banner';



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

                <header>
                    <div className="back_btn" onClick={GoBack}><img src={back} alt="뒤로가기" /></div>
                    <div className="title">부스 정보</div>
                    <img src={filter} alt="Filter" className="filter-icon" onClick={toggleFilter} />
                </header>


                <div className="wrap">

                    <div className="banner">
                        <Banner />
                    </div>

                    <div className="booth-search">
                        <div className="booth-search-title">
                            <h2>2024 수정대동제 부스 톺아보기</h2>
                            <Link to='/foodinfo' className='Gofood'>푸드 트럭 영양 정보 확인</Link>
                        </div>
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