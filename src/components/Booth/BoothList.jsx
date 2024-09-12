import React from 'react';

const booths = [
    {
        id: 1,
        name: 'tomorrow is ___',
        location: 'A01',
        description: '저희는 멋쟁이사자처럼 부스로, 개발과 관련된 다양한 스티커를 판매합니다! 쿠쿠루 삥뽕빵뽕 ',
        date: '수요일 종일',
        filter1: '9월 25일',
        filter2:'종일',
        filter:'학생 부스',
        image: require('../../assets/img/booth/1.jpg')
    },
    {
        id: 2,
        name: 'Thirsty Soul',
        location: 'A01',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '수요일 오전',
        filter1: '9월 25일',
        filter2:'오전',
        filter:'학생 부스',
        image: require('../../assets/img/booth/2.png')
    },
    {
        id: 3,
        name: "S'angle 사진관",
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'오후',
        filter:'총학 부스',
        image: require('../../assets/img/booth/38.png')
    },
    {
        id: 4,
        name: 'OMG (Oh My Ribbon)',
        location: 'A01',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 종일',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'총학 부스',
        image: require('../../assets/img/booth/4.jpg')
    },
    {
        id: 5,
        name: "OCOT",
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/5.jpg')
    },
    {
        id: 6,
        name: "convey one's journey",
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/6.jpg')
    },
    {
        id: 7,
        name: "페이스페인팅 '신비로움 \n나눠드립니다'",
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/7.jpg')
    },
    {
        id: 8,
        name: '파프리카 잡화점',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/8.png')
    },
    {
        id: 9,
        name: '테로소',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/9.jpg')
    },
    {
        id: 10,
        name: '찬빛',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/10.png')
    },
    {
        id: 11,
        name: '전력★메탈연구소!!',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/11.jpg')
    },
    {
        id: 12,
        name: '작전명 GPS',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/12.png')
    },
    {
        id: 13,
        name: '잊혀진 현상소',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/13.png')
    },
    {
        id: 14,
        name: '음아정',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/14.jpg')
    },
    {
        id: 15,
        name: '융보공(融保工)',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/15.png')
    },
    {
        id: 16,
        name: '위시노바',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/16.png')
    },
    {
        id: 17,
        name: '우리는 모두 연결되어 있다',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/17.jpg')
    },
    {
        id: 18,
        name: '영원',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/18.jpg')
    },
    {
        id: 19,
        name: '蠑光_영원한 빛',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/37.png')
    },
    {
        id: 20,
        name: '연공방',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/19.jpg')
    },
    {
        id: 21,
        name: '어디로든 레즈고',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/20.jpg')
    },
    {
        id: 22,
        name: '수정이네 과일가게',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/21.jpg')
    },
    {
        id: 23,
        name: '솜망치',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/22.jpg')
    },
    {
        id: 24,
        name: '세화들',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/23.jpg')
    },
    {
        id: 25,
        name: '세피아',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/24.png')
    },
    {
        id: 26,
        name: '성신교육방송국 SEBS',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/25.png')
    },
    {
        id: 27,
        name: '성신 최고 上여자 올림픽',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/26.png')
    },
    {
        id: 28,
        name: '물만난 물고기',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/27.png')
    },
    {
        id: 29,
        name: '몽키스패너',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/28.jpg')
    },
    {
        id: 30,
        name: '모루모루',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/29.png')
    },
    {
        id: 31,
        name: '라일락',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/30.jpg')
    },
    {
        id: 32,
        name: '뜨개팔자 상팔자',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/31.jpg')
    },
    {
        id: 33,
        name: '뜨개만물상',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/32.jpg')
    },
    {
        id: 34,
        name: '딱따구리 잡화점',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/33.png')
    },
    {
        id: 35,
        name: '돌팔이',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/34.jpg')
    },
    {
        id: 36,
        name: '돌!잔치',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/35.png')
    },
    {
        id: 37,
        name: '단아의 이면',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스',
        image: require('../../assets/img/booth/36.png')
    },
];

const BoothList = ({ selectedDates, selectedTimes, selectedBoothTypes, keyword }) => {
    const filteredBooths = booths.filter(booth => 
        (selectedDates.length === 0 || selectedDates.includes(booth.filter1)) &&
        (selectedTimes.length === 0 || selectedTimes.includes(booth.filter2)) &&
        (selectedBoothTypes.length === 0 || selectedBoothTypes.includes(booth.filter)) &&
        (keyword === '' || 
         booth.name.toLowerCase().includes(keyword.toLowerCase()) || 
         booth.description.toLowerCase().includes(keyword.toLowerCase()))
    );

    return (
        <div className="booth-list">
            {filteredBooths.map((booth) => (
        <div key={booth.id} className="booth-item">
            <img src={booth.image} alt={`${booth.name}`} className="booth-image" />

            <div className="booth-info">
                <div className="booth-name-location">
                <h3 className={`booth-name ${(booth.id === 4 || booth.id === 6 || booth.id === 7 || booth.id === 17 || booth.id === 26 || booth.id === 27) ? 'special-name' : ''}`}>
                    {booth.name}
                </h3>

                    <p className="booth-location">{booth.location}</p>
                </div>
                <p className="booth-description">{booth.description}</p>
                <div className="booth-details">
                    <button className="booth-button">위치 확인하기</button>
                    <span className="booth-date">{booth.date}</span>
                </div>
            </div>
        </div>
    ))}
</div>

    );
};

export default BoothList;
