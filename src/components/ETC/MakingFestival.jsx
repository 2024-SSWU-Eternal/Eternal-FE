import React from 'react'

const MakingFestival = ({ title, data }) => {
    return (
        <div>
            <h5>{title}</h5>
            <div className='festival_wrap'>
                {Array.isArray(data) ? (
                    data.map((list, key) => (
                        <div className="festiver" key={key}>
                            <p className="organization">{list.organization}</p>
                            <p className="name">{list.name}</p>
                            <p className="department">{list.department}</p>
                        </div>
                    ))
                ) : (
                    <div className="festiver">
                        <p className="organization">{data.organization}</p>
                        <p className="name">{data.name}</p>
                        <p className="department">{data.department}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MakingFestival