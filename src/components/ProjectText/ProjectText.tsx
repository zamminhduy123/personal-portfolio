"use client"

import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';

type ProjectTextProps = {
    subTitle?: string;
    title: string;
    titleMaxWidth?: number;

    extraHashTag: string[]
}

const ProjectText = (props : ProjectTextProps) => {
    const {
        title,
        subTitle,
        titleMaxWidth,
        extraHashTag
    } = props;
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({scope: containerRef});

    const onMouseEnter = contextSafe(() => {
        if (containerRef.current) {
            // gsap.to("#extra", {height: "fit-content"})
            gsap.to("#title", {translateY: 0})
            gsap.to("#extra", {translateY: 0, opacity: 1, delay: 0.05})
            gsap.to("#icon", {rotate: 45})
        }
    })
    const onMouseLeave = contextSafe(() => {
        // gsap.to("#extra", {height: 0})
        gsap.to("#title", {translateY: extraHashTag.length * 24, delay: 0.05})
        gsap.to("#extra", {translateY: extraHashTag.length * 12, opacity: 0})
        gsap.to("#icon", {rotate: 0})
    });

    React.useLayoutEffect(() => {
        gsap.set("#title", {translateY: extraHashTag.length * 24, delay: 0.05})
        gsap.set("#extra", {translateY: extraHashTag.length * 12, opacity: 0})
        gsap.set("#icon", {rotate: 0})
    }, [])

    return (
        <div className='flex flex-col justify-end h-full w-full gap-4 cursor-default' ref={containerRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div id="title" className="flex flex-col font-semibold">
                {subTitle ? <p className="text-xl">{subTitle}</p> : null}
                <p className=" text-4xl" style={{maxWidth: titleMaxWidth}}>{title}</p>
            </div> 
            <div
                id="extra"
                className="flex flex-col font-extralight text-sm gap-2 overflow-hidden"
                style={{ fontFamily: "MonumentLight"}}
            >
                {extraHashTag.map(item => <p>{item}</p>)}
            </div>
            <div id="icon" className="text-3xl font-semibold w-fit">↗</div>
        </div>
    )
}

export default ProjectText