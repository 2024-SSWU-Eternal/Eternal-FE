import React from 'react'
import Lion01 from '../../assets/img/etc/lion01.png'

const MakingLion = ({ title, data }) => {
    return (
        <div>
            <h5>{title}</h5>
            <div className='lion_wrap'>
                {Array.isArray(data) ? (
                    data.map((list, key) => (
                        <div className="lion" key={key}>
                            <div className="text">
                                <p className="organization">{list.organization}</p>
                                <p className="name">{list.name}</p>
                                <p className="department">{list.department}</p>
                                <p className="desc">{list.desc}</p>
                            </div>
                            <img src={Lion01} alt="" />
                        </div>
                    ))
                ) : (
                    <div className="lion">
                        <div className="text">
                            <p className="organization">{data.organization}</p>
                            <p className="name">{data.name}</p>
                            <p className="department">{data.department}</p>
                            <p className="desc">{data.desc}</p>
                        </div>
                        <img src={Lion01} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default MakingLion