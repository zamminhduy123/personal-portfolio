"use client"
import { clsx } from 'clsx'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MainScreen from '@/screen/MainScreen'
import TextReviewOnScroll from '@/components/TextReviewOnScroll'
import SelectedWorkScreen from '@/screen/SelectedWorkScreen'
import AboutMeScreen from '@/screen/AboutMeScreen'
import useIsMobile from '@/hooks/useIsMobile'
import LoadingScreen from '@/screen/LoadingScreen'
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    React.useLayoutEffect(() => {
        if (containerRef.current) containerRef.current.scrollTop = 0;
    }, [])

    const isMobileDev = useIsMobile();

    return <main
        className={clsx(
            "flex min-h-screen flex-col items-center justify-between relative bg-black z-0",
        )}
        ref={containerRef}
        id="smooth-content"
    >
        <LoadingScreen/>
        <MainScreen contextSafe={contextSafe}/>
        <AboutMeScreen/>
        <SelectedWorkScreen contextSafe={contextSafe}/>

        <article className="w-full h-svh" 
        >
            <div className='w-full h-fit flex items-center justify-center py-16'>
                <TextReviewOnScroll 
                        title={"⁋"} 
                        titleSize='4rem'
                        textAlign='left'
                        textSize={isMobileDev ? "1rem" : "1.5rem"} dimColor='gray' titleColor='var(--color-accent)' color='white' 
                        text={<span className='font-light'>We are what we <strong>repeatedly do.</strong><br/>Excellence, then, is<br/><strong>not an act, but a habit.</strong></span>}/>
            </div>
        </article>
    </main>

}
