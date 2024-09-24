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
            name: '성신 최고 上여자 \n올림픽',
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
            image: require('../../assets/img/booth/랟스보스.avif'),
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
        },
        {
            id: 37,
            name: "성신교육방송국 SEBS",
            date: [3, 6],
            image: require('../../assets/img/booth/성신교육방송국 SEBS.avif'),
            location: 'E-8',
            filter: '학생 부스',
            description: ["- 순간을 영원으로, SEBS -",
                "‘방송’이란 순간을 영원히 간직한다는 특성을 가지고 있습니다.",
                "저희 SEBS가 수정대동제에서의 순간을 영원히 간직할 수 있도록 특별한 프로그램을 준비했습니다.",
                "최신 밈에 탁월한 국원들과 함께하는 밈 스피드 퀴즈부터 SEBS 앵커와 함께하는 발음 테스트,",
                "내가 신청한 노래가 학교에 울려퍼질 기회에, 방송제 초대권 응모 기회까지?",
                "SEBS, 어디까지 준비한거야? 모두 SEBS 부스에서 색다른 체험 하시고, 상품도 받아가세요! "],
            item: [" "],
        },
        {
            id: 38,
            name: "Crystal zone",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-1',
            filter: '총학 부스',
        },
        {
            id: 39,
            name: "안내부스",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-1',
            filter: '총학 부스',
        },
        {
            id: 40,
            name: "화(和)-여일",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-2',
            filter: '총학 부스',
        },
        {
            id: 41,
            name: "수익 사업 부스",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-2',
            filter: '총학 부스',
        },
        {
            id: 42,
            name: "프로모션 부스",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-3,4',
            filter: '총학 부스',
        },
        {
            id: 43,
            name: "인권상담소",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-1,2',
            filter: '행정부서 부스',
        },
        {
            id: 44,
            name: "학생생활상담소",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-3',
            filter: '행정부서 부스',
        },
        {
            id: 45,
            name: "학생복지위원회",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-4,5',
            filter: '행정부서 부스',
        },
        {
            id: 46,
            name: "학군단",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-6,7',
            filter: '행정부서 부스',
        },
        {
            id: 47,
            name: "중앙도서관",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-8',
            filter: '행정부서 부스',
        },
        {
            id: 48,
            name: "창업지원센터",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-9',
            filter: '행정부서 부스',
        },
        {
            id: 49,
            name: "현장실습운영팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-10',
            filter: '행정부서 부스',
        },
        {
            id: 50,
            name: "대외협력홍보팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-11',
            filter: '행정부서 부스',
        },
        {
            id: 51,
            name: "국제교류지원팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-12',
            filter: '행정부서 부스',
        },
        {
            id: 52,
            name: "국제교육원",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-13,14',
            filter: '행정부서 부스',
        },
        {
            id: 53,
            name: "교양교학팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-15',
            filter: '행정부서 부스',
        },
        {
            id: 54,
            name: "교수학지원팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-16,17',
            filter: '행정부서 부스',
        },
        {
            id: 55,
            name: "박물관",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-19,20',
            filter: '행정부서 부스',
        },
        {
            id: 56,
            name: "밝은성모안과",
            date: [3, 6],
            image: require('../../assets/img/booth/밝은성모안과.avif'),
            location: 'D-1',
            filter: '제휴 부스',
            description: ["수정이들의 밝은 눈을 위한 게임과 포토 이벤트가 준비되어 있어요!",
                "라식/라섹에 관한 자세한 설명을 들을 수 있으니 부스 방문하셔서 선물까지 받아가세요"],
            item: " ",
        },
        {
            id: 57,
            name: "시원스쿨LAB",
            date: [3, 6],
            image: require('../../assets/img/booth/시원스쿨lab.avif'),
            location: 'D-2',
            filter: '제휴 부스',
            description: ["수정이들의 스펙준비를 위해 상담과 추첨을 통한 프로그램 특별 지원이 마련되어 있습니다!",
                "간단한 게임을 통한 이벤트 상품을 지급할 예정이오니 많은 참여 바랍니다!"],
            item: " ",
        },
        {
            id: 58,
            name: "강북온아치과",
            date: [3, 6],
            image: require('../../assets/img/booth/온아치과.avif'),
            location: 'D-3',
            filter: '제휴 부스',
            description: ["수정이들의 구강건강을 위해! 치과제휴 부스에서는 건강한 미소를 위한 다양한 정보를 제공하고, ",
                "구강 건강 체크와 상담을 무료로 진행합니다. 여러분의 치아 건강을 지키는 소중한 기회, 놓치지 마세요! 🦷✨"],
            item: " ",
        },
        {
            id: 59,
            name: "서울베스트의료의원",
            date: [3, 6],
            image: require('../../assets/img/booth/서울베스트의료의원.avif'),
            location: 'D-4',
            filter: '제휴 부스',
            description: ["건강검진에 관심과 궁금증을 가진 분이라면 국가 무료검진과 제휴 혜택이 제공되는 대학 검진에 대한 정보를 얻어가기!",
                "뽑기 이벤트를 통해 스타벅스 커피 쿠폰 등 꽝 없는 상품을 받아가세요!"],
            item: " ",
        },
        {
            id: 60,
            name: "대자연",
            date: [3, 6],
            image: require('../../assets/img/booth/대자연.avif'),
            location: 'D-5',
            filter: '제휴 부스',
            description: ["지구를 생각하는 미니멀 웨이스트 축제! 지구 환경을 위해, 지구에서 살아가는 우리를 위해 일회용기 대신 다회용기를 사용하는 것은 어떨까요?"],
            item: " ",
        },
        {
            id: 61,
            name: "체레미미카",
            date: [3, 6],
            image: require('../../assets/img/booth/체레미마카.avif'),
            location: 'D-6',
            filter: '제휴 부스',
            description: ["지속가능한 섹슈얼 헬스케어 브랜드, 체레미마카",
                "중요한 성지식을 나눌 수 있는 부스 체험까지 해 볼 수 있습니다.",
                "콘돔 또는 여성청결제 증정 이벤트까지 있으니 놓치지 마세요 !"],
            item: " ",
        },
        {
            id: 62,
            name: "몬스터 에너지",
            date: [3],
            image: require('../../assets/img/booth/몬스터에너지.avif'),
            location: 'D-7',
            filter: '제휴 부스',
            description: ["어느새 대학 생활의 필수템이 되어버린 몬스터 에너지! ",
                "지구상에서 가장 쿨한 에너지 음료, ",
                "몬스터 에너지가 수정이들에게 넘치는 에너지를 선사합니다!"],
            item: " ",
        },
        {
            id: 63,
            name: "씨드비",
            date: [6],
            image: require('../../assets/img/booth/씨드비.avif'),
            location: 'D-7',
            filter: '제휴 부스',
            description: ["지난 여름 힘들었던 피부를 위해 ",
                "진정 및 보습 효과가 뛰어난 씨드비의 제품과",
                "함께 다가오는 가을 준비를 2024 수정대동제에서 시작해보세요.",
                "100% 당첨 이슬 뽑기 이벤트도 놓치지 마세요!"],
            item: " ",
        },

    
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
