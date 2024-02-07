"use client"
import Image from 'next/image'
import zalobg from '@static/zalobg.png'
import dm2 from '@static/dm2.png'
import dm1 from '@static/dm1.png'
import dr_logo from '@static/logo.png'
import dr_logo_r from '@static/logo_r.png'
import dr_bg from '@static/dreamlauncher1.png'
import { clsx } from 'clsx'
import ImageTextPopOut from '@/components/ImageTextPopout'
import ProjectText from '@/components/ProjectText'
import DoubleText from '@/components/DoubleText'
import DreamLauncherLogo from '@/components/DreamLauncherLogo'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother' 
import MainScreen from '@/screen/MainScreen'
import TextReviewOnScroll from '@/components/TextReviewOnScroll'
import SelectedWorkScreen from '@/screen/SelectedWorkScreen'
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // const [isOnDM1, setIsOnDM1] = React.useState(false);

    React.useLayoutEffect(() => {
        if (containerRef.current) containerRef.current.scrollTop = 0;
    }, [])

    return <main
        className={clsx(
            "flex min-h-screen flex-col items-center justify-between relative bg-black",
        )}
        ref={containerRef}
        id="smooth-content"
    >
        <MainScreen contextSafe={contextSafe}/>
        <article className="w-full h-svh flex items-center justify-center">
            <DoubleText
                title="about me"
                mainText={
                    <span>
                        I&apos;m Duy, a{" "}
                        <span style={{ color: "var(--color-accent)" }}>
                            Front-End Developer
                        </span>
                        . I create websites so smooth, they make butter
                        jealous. Passionate about crafting awesome user
                        experiences, I&apos;m on a mission to make the
                        internet a better place. Let&apos;s build something
                        cool together! 🚀
                    </span>
                }
                mainHideText={
                    <span>
                        I&apos;m Duy, i don&apos;t even know how to{" "}
                        <span className="text-white">
                            center a div sometimes
                        </span>
                        . I create websites alright 🤡. Passionate about
                        crafting dope animation, making people{" "}
                        <span className="text-white">WOW</span> is my love
                        in this game. I&apos;m on a mission to make{" "}
                        <span className="text-white">a lot of money</span>.
                        I need friends! 🥲
                    </span>
                }
            />
        </article>
        <SelectedWorkScreen contextSafe={contextSafe}/>
        <article className="w-full flex items-center justify-center px-4 bg-white" style={{height: "120svh"}}>
            <TextReviewOnScroll title='MY MOTTO' titleColor='var(--color-accent)' text={<span>If you can spend 8 hours building<br/>someone else's dream,<br/>you can spend 1 hour building<br/>your own.</span>}/>
        </article>
    </main>

}
