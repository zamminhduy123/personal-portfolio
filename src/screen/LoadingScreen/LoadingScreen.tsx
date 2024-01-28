"use client"
import clsx from 'clsx'
import React from 'react'
import loadingbg from '@static/loadingbg.png'
import Image from 'next/image'

import gsap from 'gsap'

const LoadingScreen = () => {
    const click = () => gsap.to("#loading-name > span", {y: 0, stagger: 0.05, delay: 0.1, duration: 0.1});
    React.useEffect(() => {
        click();
    }, [])
    return (
        <div className={clsx(
            "flex min-h-screen flex-col items-center justify-center"
        )}
            onClick={click}
        >
            <div className="w-full h-full absolute flex items-center justify-center bg-black">
                <Image
                    src={loadingbg}
                    className='h-full w-full object-cover'
                    alt="BG"
                />
            </div>
            <p id="loading-name" className='text-white' style={{zIndex: 1, fontSize: '2rem'}}>
                <span>D</span>
                <span>U</span>
                <span>Y</span>
                <span>.</span>
                <span>N</span>
                <span>G</span>
                <span>U</span>
                <span>Y</span>
                <span>E</span>
                <span>N</span>
            </p>
        </div>
    )
}

export default LoadingScreen