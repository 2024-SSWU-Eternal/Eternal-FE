import React from 'react'

const Test = () => {
    const [story, setStory] = useState(false)
    const [isSlideOut, setIsSlideOut] = useState(false)

    const handleSlideOut = () => { 
        setIsSlideOut(true)
        setTimeout(() => {
            setStory(false)
            setIsSlideOut(false)
        }, 400)
    }

    return (
        <div className={`Test_wrap container ${isSlideOut ? 'slide-out-left' : ''}`}>
                <>
                    {story ? (
                        <TestStory setStory={setStory} />
                    ) : (
                        <TestMain setStory={setStory} handleSlideOut={handleSlideOut} />
                    )}
                </>
        </div>
    )
}

export default Test