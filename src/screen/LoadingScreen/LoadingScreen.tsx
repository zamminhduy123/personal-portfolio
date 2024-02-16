"use client"
import clsx from 'clsx'
import React, { useEffect } from 'react'
import loadingbg from '@static/loadingbg.png'
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type LoadingScreenProps = {
}

const LoadingScreen = (props : LoadingScreenProps) => {
    const containerRef = React.useRef<HTMLDivElement|null>(null);

    const click = () => {
        gsap.to("#loading-name > span", {y: 0, stagger: 0.05, delay: 0.1, duration: 0.1});
        gsap.to("#loading-bg", {opacity: 1});
    }

    React.useEffect(() => {
        document.querySelector("body")!.scrollTo({top: 0, behavior: "instant"})
        let clicked = false;
        const loadDone = () => {
            if (!clicked) {
                clicked = true;
                click();
            }
        }
        let timeout = setTimeout(() => {
            loadDone();
        }, 5000)
        const images = Array.from(window.document.querySelectorAll("img"));

        const proms = images.map(im => new Promise(res => {
            if (im) {
                im.onload = () => { res(true) };
                im.onerror = () => { res(true) };
                if (im.complete) {
                    res(true)
                }
            }
            res(true)
        }))

        // list all image widths and heights _after_ the images have loaded:
        Promise.all(proms).then(data=>{
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                loadDone();
            }, 200);
        })

        return () => {
            timeout && clearTimeout(timeout);
        }
    }, []);

    
    return (
        <div 
            id="loading-screen"
            className={clsx(
                "w-full flex min-h-screen flex-col items-center justify-center",
                "fixed",
            )}  
            style={{zIndex: 1000}}
            onClick={click}
            ref={containerRef}
        >
            <div className="w-full h-full absolute flex items-center justify-center bg-black">
                <Image
                    src={loadingbg}
                    className='h-full w-full object-cover'
                    style={{opacity: 0}}
                    id="loading-bg"
                    alt="BG"
                />
            </div>
            <p id="loading-name" className='text-white text-animation-appear' style={{zIndex: 21, fontSize: '2rem'}}>
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