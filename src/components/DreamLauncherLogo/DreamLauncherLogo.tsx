"use client"
import React from 'react'
import dr_logo from '@static/logo.png'
import dr_logo_r from '@static/logo_r.png'
import dl_text from '@static/dl-text.svg'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const DreamLauncherLogo = () => {

    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const animationRef = React.useRef<gsap.core.Tween[]>([]);
    const { contextSafe } = useGSAP({scope: containerRef});

    const onMouseEnter = contextSafe(() => {
        if (!animationRef.current.length) {
            animationRef.current.push(gsap.to("#dl-logo", {translateX: "-100%", scale: 0.5, duration: 0.6}))
            animationRef.current.push(gsap.to("#dl-white", {width: "25%", duration: 0.4}))
            animationRef.current.push(gsap.fromTo("#dl-logo-text", {translateX: "-50%", duration: 0.6},  {translateX: "40%", duration: 0.6}))
            animationRef.current.push(gsap.to("#dl-logo-ring", {rotate: 270, duration: 0.6}))
        } else {
            animationRef.current.forEach(anim => anim.restart())
        }
    })
    const onMouseLeave = contextSafe(() => {
        if (animationRef.current.length) {
            animationRef.current.forEach(anim => anim.reverse())
        }
    });


    return (
        <div className='w-full h-full flex items-center justify-center relative' ref={containerRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div id="dl-logo" className="relative flex items-center justify-center h-1/2 aspect-square" style={{zIndex: 2}}>
                <Image id='dl-logo-inside' alt="dl_logo_1" src={dr_logo} className='absolute aspect-square' style={{height: '30%', width: "30%", paddingLeft: "0.2rem"}}/>
                <Image id='dl-logo-ring' alt="dl_logo" src={dr_logo_r} className='absolute' />
            </div>
            <div id="dl-white" className='absolute bg-white h-full w-1/2' style={{zIndex: 1, left: 0}}/>
            <div id="dl-logo-text" className='absolute' style={{transform: "translateX(-50%)"}}>
                <Image id='dl-logo-text' alt="dl_text" src={dl_text} style={{width: "80%"}}/>
            </div>
        </div>
    )
}

export default DreamLauncherLogo