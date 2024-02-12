"use client"
import { clsx } from 'clsx'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother' 
import MainScreen from '@/screen/MainScreen'
import TextReviewOnScroll from '@/components/TextReviewOnScroll'
import SelectedWorkScreen from '@/screen/SelectedWorkScreen'
import AboutMeScreen from '@/screen/AboutMeScreen'
import { isMobileDevice } from '@/utils/common-utils'
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // const [isOnDM1, setIsOnDM1] = React.useState(false);

    React.useLayoutEffect(() => {
        if (containerRef.current) containerRef.current.scrollTop = 0;
    }, [])

    const isMobileDev = React.useMemo(() => isMobileDevice(), []);

    return <main
        className={clsx(
            "flex min-h-screen flex-col items-center justify-between relative bg-black",
        )}
        ref={containerRef}
        id="smooth-content"
    >
        <MainScreen contextSafe={contextSafe}/>
        <AboutMeScreen/>
        <SelectedWorkScreen contextSafe={contextSafe}/>
        <article className="w-full flex items-center justify-center px-4 bg-white" style={{height: isMobileDev ? "100svh" : "120svh"}}>
            <TextReviewOnScroll title='MY MOTTO' textSize={isMobileDev ? "2rem" : "4rem"} titleColor='var(--color-accent)' text={<span>If you can spend 8 hours building<br/>someone else&apos;s dream,<br/>you can spend 1 hour building<br/>your own.</span>}/>
        </article>
    </main>

}
