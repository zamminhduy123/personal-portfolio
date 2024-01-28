"use client"

import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';

type ProjectTextProps = {
    subTitle?: string;
    title: string;
    titleMaxWidth?: number;

    extraHashTag: string[]
    id?: number;
    isTrigger?:boolean;
    useExternalEvent?:boolean;
}

const ProjectText = (props : ProjectTextProps) => {
    const {
        title,
        subTitle,
        titleMaxWidth,
        extraHashTag,
        id = 0,
        isTrigger = false,
        useExternalEvent = false
    } = props;
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({scope: containerRef});
    const animationRef = React.useRef<gsap.core.Tween[]>([])

    const onMouseEnter = contextSafe(() => {
        if (!animationRef.current.length) {
            animationRef.current.push(gsap.to(`#pt-title-${id}`, {translateY: 0}))
            animationRef.current.push(gsap.to(`#pt-extra-${id}`, {translateY: 0, opacity: 1, delay: 0.05}))
            animationRef.current.push(gsap.to(`#pt-icon-${id}`, {rotate: 45}))
        } else {
            animationRef.current.forEach(anim => anim.restart())
        }
    })
    const onMouseLeave = contextSafe(() => {
        if (animationRef.current) {
            animationRef.current.forEach(anim => anim.reverse())
        }
    });

    useGSAP(() => {
        if (useExternalEvent) {
            if (isTrigger) {
                onMouseEnter();
            }
            else {
                onMouseLeave();
            }
        }
    }, {dependencies: [isTrigger, useExternalEvent], scope: containerRef})

    return (
        <div className='flex flex-col justify-end h-full w-full gap-4 cursor-default' ref={containerRef} onMouseEnter={useExternalEvent ? undefined : onMouseEnter} onMouseLeave={useExternalEvent ? undefined : onMouseLeave}>
            <div id={`pt-title-${id}`} className="flex flex-col font-semibold" style={{transform: `translateY(${extraHashTag.length * 24}px)`}}>
                {subTitle ? <p className="text-xl">{subTitle}</p> : null}
                <p className=" text-4xl" style={{maxWidth: titleMaxWidth}}>{title}</p>
            </div> 
            <div
                id={`pt-extra-${id}`}
                className="flex flex-col font-extralight text-sm gap-2 overflow-hidden"
                style={{ fontFamily: "MonumentLight", transform: `translateY(${extraHashTag.length * 12}px)`, opacity: 0}}
            >
                {extraHashTag.map((item, idx) => <p key={`project-text-${idx}`}>{item}</p>)}
            </div>
            <div id={`pt-icon-${id}`} className="text-3xl font-semibold w-fit rotate-0">↗</div>
        </div>
    )
}

export default ProjectText