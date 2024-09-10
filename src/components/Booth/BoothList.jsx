import React from 'react';
import bannerImage from '../../assets/img/booth/boothimage.png'; 

const booths = [
    {
        id: 1,
        name: 'Booth Name 1',
        location: 'A01',
        description: '저희는 멋쟁이사자처럼 부스로, 개발과 관련된 다양한 스티커를 판매합니다! ',
        date: '수요일 종일',
        filter1: '9월 25일',
        filter2:'종일',
        filter:'학생 부스'
    },
    {
        id: 2,
        name: 'Booth Name 2',
        location: 'A02',
        description: '저희는 AI융합학부 부스로, 코딩과 관련된 다양한 물건을 판매합니다! ',
        date: '수요일 오후',
        filter1: '9월 25일',
        filter2:'오후',
        filter:'학생 부스'
    },
    {
        id: 3,
        name: 'Booth Name 3',
        location: 'A01',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '수요일 오전',
        filter1: '9월 25일',
        filter2:'오전',
        filter:'학생 부스'
    },
    {
        id: 4,
        name: 'Booth Name 4',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'오후',
        filter:'총학 부스'
    },
    {
        id: 5,
        name: 'Booth Name 5',
        location: 'A01',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 종일',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'총학 부스'
    },
    {
        id: 6,
        name: 'Booth Name 6',
        location: 'A02',
        description: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
        date: '목요일 오후',
        filter1: '9월 26일',
        filter2:'종일',
        filter:'제휴 부스'
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
                    <img src={bannerImage} alt={`${booth.name}`} className="booth-image" />

                    <div className="booth-info">
                        <div className="booth-name-location"> 
                        <h3 className="booth-name">{booth.name}</h3>
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
