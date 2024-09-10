import React, { useState } from 'react'
import TestMain from './TestMain'
import TestStory from './TestStory'

const Test = () => {
    const [story, setStory] = useState(false);

    return (
        <div className='Test_wrap container'>
                <>
                    {story ? (
                        <TestStory setStory={setStory} />
                    ) : (
                        <TestMain setStory={setStory} />
                    )}
                </>
        </div>
    )
}

export default Test