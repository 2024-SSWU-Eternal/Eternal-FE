import React from 'react';
import { useNavigate } from 'react-router-dom';




const BoothList = ({ selectedDates, selectedTimes, selectedBoothTypes, keyword }) => {
    const booths = [
        {
            id: 1,
            name: 'OCOT',
            date: [3, 6],
            image: require('../../assets/img/booth/OCOT.avif'),
            location: 'F-2',
            filter:'학생 부스',
        },
        {
            id: 2,
            name: '뜨개 만물상',
            date: [3, 6],
            image: require('../../assets/img/booth/뜨개만물상.avif'),
            location: 'F-3',
            filter:'학생 부스',
        },
        {
            id: 3,
            name: 'S’angle 사진관',
            date: [3, 6],
            image: require('../../assets/img/booth/S_angle 사진관.avif'),
            location: 'E-2',
            filter:'학생 부스',
        },
        {
            id: 4,
            name: '성신 최고 上여자 올림픽',
            date: [3, 6],
            image: require('../../assets/img/booth/성신최고上여자올림픽.avif'),
            location: 'E-1',
            filter:'학생 부스',
        },
        {
            id: 5,
            name: '전력★메탈연구소!!~  모두가 메탈의 사랑스러움을 알 때까지~',
            date: [3, 6],
            image: require('../../assets/img/booth/메탈연구소.avif'),
            location: 'E-6',
            filter:'학생 부스',
        },
        {
            id: 6,
            name: '단아의 이면',
            date: [3, 6],
            image: require('../../assets/img/booth/단아의 이면.avif'),
            location: 'E-9',
            filter:'학생 부스',
        },
        {
            id: 7,
            name: 'OMR (Oh My Ribbon)',
            date: [3, 6],
            image: require('../../assets/img/booth/OMR.avif'),
            location: 'F-4',
            filter:'학생 부스',
        },
        {
            id: 8,
            name: 'tomorrow is__',
            date: [1, 6],
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
            location: 'E-7',
            filter:'학생 부스',
        },
        {
            id: 12,
            name: '랟스보스와 함께 ReSET! 디지털 성범죄 없는 세상',
            date: [2, 5],
            image: require('../../assets/img/booth/boothimage.png'),
            location: 'E-7',
            filter:'학생 부스',
        },
        {
            id: 13,
            name: '모루모루',
            date: [1, 4],
            image: require('../../assets/img/booth/모루모루.avif'),
            location: 'F-7',
            filter:'학생 부스',
        },
        {
            id: 14,
            name: '돌팔이',
            date: [2, 5],
            image: require('../../assets/img/booth/돌팔이.avif'),
            location: 'F-7',
            filter:'학생 부스',
        },
        {
            id: 15,
            name: '수정이네 과일가게',
            date: [1, 4],
            image: require('../../assets/img/booth/수정이네 과일가게.avif'),
            location: 'E-5',
            filter:'학생 부스',
        },
        {
            id: 16,
            name: '융보공(融保工)',
            date: [2, 5],
            image: require('../../assets/img/booth/융보공.avif'),
            location: 'E-5',
            filter:'학생 부스',
        },
        {
            id: 17,
            name: '위시노바',
            date: [3],
            image: require('../../assets/img/booth/위시노바.avif'),
            location: 'E-10',
            filter:'학생 부스',
        },
        {
            id: 18,
            name: '돌잔!치 (Rock Glass Festival)',
            date: [6],
            image: require('../../assets/img/booth/돌잔치.avif'),
            location: 'E-10',
            filter:'학생 부스',
        },
        {
            id: 19,
            name: '잊혀진 현상소',
            date: [3],
            image: require('../../assets/img/booth/잊혀진-현상소.avif'),
            location: 'E-4',
            filter:'학생 부스',
        },
        {
            id: 20,
            name: '뜨개팔자 상팔자',
            date: [2, 5],
            image: require('../../assets/img/booth/뜨개팔자 상팔자.avif'),
            location: 'E-4 F-6',
            filter:'학생 부스',
        },
        {
            id: 21,
            name: '蠑光:영원한 빛',
            date: [1],
            image: require('../../assets/img/booth/영원한-빛.avif'),
            location: 'E-3',
            filter:'학생 부스',
        },
        {
            id: 22,
            name: '딱따구리 잡화점',
            date: [1],
            image: require('../../assets/img/booth/딱따구리 잡화점.avif'),
            location: 'E-8',
            filter:'학생 부스',
        },
        {
            id: 23,
            name: '파프리카 잡화점',
            date: [2, 5],
            image: require('../../assets/img/booth/파프리카-잡화점.avif'),
            location: 'E-8 F-8',
            filter:'학생 부스',
        },
        {
            id: 24,
            name: '테소로',
            date: [3, 6],
            image: require('../../assets/img/booth/테소로.avif'),
            location: 'F-5',
            filter:'학생 부스',
        },
        {
            id: 25,
            name: '찬빛',
            date: [2, 4],
            image: require('../../assets/img/booth/찬빛.avif'),
            location: 'F-8',
            filter:'학생 부스',
        },
        {
            id: 26,
            name: '솜망치',
            date: [3, 6],
            image: require('../../assets/img/booth/솜망치.avif'),
            location: 'A-3',
            filter:'학생 부스',
        },
        {
            id: 27,
            name: '연공방',
            date: [6],
            image: require('../../assets/img/booth/연공방.avif'),
            location: 'E-4',
            filter:'학생 부스',
        },
        {
            id: 28,
            name: '<작전명 : GPS>',
            date: [3, 6],
            image: require('../../assets/img/booth/작전명-GPS.avif'),
            location: 'A-5',
            filter:'학생 부스',
        },
        {
            id: 29,
            name: '세화들',
            date: [3, 6],
            image: require('../../assets/img/booth/세화들.avif'),
            location: 'A-6',
            filter:'학생 부스',
        },
        {
            id: 30,
            name: '라일락',
            date: [3, 6],
            image: require('../../assets/img/booth/라일락.avif'),
            location: 'A-4',
            filter:'학생 부스',
        },
        {
            id: 31,
            name: 'convey one’s journey',
            date: [1],
            image: require('../../assets/img/booth/convey one’s journey.avif'),
            location: 'A-2',
            filter:'학생 부스',
        },
        {
            id: 32,
            name: '음아정',
            date: [1],
            image: require('../../assets/img/booth/음아정.avif'),
            location: 'A-1',
            filter:'학생 부스',
        },
        {
            id: 33,
            name: "제4대 지식서비스 공과대학 학생회 \n'영원'",
            date: [2, 5],
            image: require('../../assets/img/booth/영원.avif'),
            location: 'A-2 A-1',
            filter:'학생 부스',
        },
        {
            id: 34,
            name: "페이스페인팅 \n'신비로움 \n나눠드립니다'",
            date: [2, 5],
            image: require('../../assets/img/booth/페이스페인팅.avif'),
            location: 'A-1 A-2',
            filter:'학생 부스',
        },
        {
            id: 35,
            name: "세피아(Sepia)",
            date: [6],
            image: require('../../assets/img/booth/세피아.avif'),
            location: 'E-3',
            filter:'학생 부스',
        },
        {
            id: 36,
            name: "우리는 모두 연결되어 \n있다",
            date: [6],
            image: require('../../assets/img/booth/우리는 모두 연결되어 있다.avif'),
            location: 'E-8',
            filter:'학생 부스',
        }
    
    
    ];
    const dateMap = {
        '9월 25일': [1, 2, 3],
        '9월 26일': [4, 5, 6]
    };
    
    const timeMap = {
        '종일': [ 3, 6],
        '오전': [1, 4],
        '오후': [2, 5]
    };

    
    const navigate = useNavigate();
    const boothDetail = (boothId) => {
        navigate(`/booth/${boothId}`);
    }


    const filteredBooths = booths.filter(booth =>
        (selectedDates.length === 0 || selectedDates.some(date => dateMap[date]?.some(d => booth.date.includes(d)))) &&
        (selectedTimes.length === 0 || selectedTimes.some(time => timeMap[time]?.some(t => booth.date.includes(t)))) &&
        (selectedBoothTypes.length === 0 || selectedBoothTypes.includes(booth.filter)) &&
        (keyword === '' ||
            booth.name.toLowerCase().includes(keyword.toLowerCase()) ||
            (booth.description && booth.description.toLowerCase().includes(keyword.toLowerCase())))
    );

    return (
        <div className="booth-list">
            {filteredBooths.map((booth) => (
                <div key={booth.id} className="booth-item">
                    <img src={booth.image} alt={`${booth.name}`} className="booth-image" />

                    <div className="booth-info">
                        <div className="booth-name-location">
                            <h3 className={`booth-name`}>
                                {booth.name}
                            </h3>

                            <p className="booth-location">{booth.location}</p>
                        </div>

                        <div className="booth-details">

                            <span className="booth-date">
                                {booth.date.map((date, index) => {
                                    let result = '';
                                    switch (date) {
                                        case 1:
                                            result = '수요일 오전';
                                            break;
                                        case 2:
                                            result = '수요일 오후';
                                            break;
                                        case 3:
                                            result = '수요일 종일';
                                            break;
                                        case 4:
                                            result = '목요일 오전';
                                            break;
                                        case 5:
                                            result = '목요일 오후';
                                            break;
                                        case 6:
                                            result = '목요일 종일';
                                            break;
                                        default:
                                            result = '';
                                    }

                                    return index === 0 ? result : ` / ${result}`;
                                })}
                            </span>
                            <button className="booth-button" onClick={() => boothDetail(booth.id)}>상세정보 보기</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default BoothList;
