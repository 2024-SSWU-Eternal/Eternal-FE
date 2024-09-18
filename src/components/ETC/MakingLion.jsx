import React, { useState } from 'react';

const MakingLion = ({ title, data }) => {
    const [click, setClick] = useState([]);

    const clickLion = (index) => {
        setClick((clickIndex) => {
            if (clickIndex.includes(index)) {
                return clickIndex.filter((i) => i !== index);
            } else {
                return [...clickIndex, index];
            }
        });
    };


    return (
        <div>
            <h5>{title}</h5>
            <div className='lion_wrap'>
                {Array.isArray(data) ? (
                    data.map((list, index) => (
                        <div
                            className={`lion ${click.includes(index) ? 'active' : ''}`}
                            key={index}
                            onClick={() => clickLion(index)}
                        >
                            <div className="text">
                                <p className="organization">{list.organization}</p>
                                <p className="name">{list.name}</p>
                                <p className="department">{list.department}</p>
                            </div>
                            <img src={list.img} alt="" />
                            <div className='role'>
                                <p>담당 파트</p>
                                <p className="desc">{list.desc}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div
                        className={`lion ${click.includes(0) ? 'active' : ''}`}
                        onClick={() => clickLion(0)}
                    >
                        <div className="text">
                            <p className="organization">{data.organization}</p>
                            <p className="name">{data.name}</p>
                            <p className="department">{data.department}</p>
                        </div>
                        <img src={data.img} alt="" />
                        <div className='role'>
                            <p>담당 파트</p>
                            <p className="desc">{data.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MakingLion