"use client"
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import clsx from 'clsx'

function inside(value : number, min : number, max: number) {
    return value >= min && value <= max;
}

type DoubleTextProps = {
    title?:string;
    titleHideText?:string;
    mainText: string | JSX.Element;
    mainHideText: string | JSX.Element;
    textCenter?: boolean;
    id?: number;
    textSize?: number;
}

const DoubleText = (props: DoubleTextProps) => {
    const {
        title,
        titleHideText,
        mainHideText,
        mainText,
        textCenter = false,
        id = 0,
        textSize = 24
    } = props;
    const absoluteRef = React.useRef<HTMLDivElement | null>(null), containerRef = React.useRef<HTMLDivElement | null>(null),
        mainTextRef =  React.useRef<HTMLDivElement | null>(null);

    const [posState, setPosState] = React.useState({left: 0, top:0});
    const [isMouseOn, setIsMouseOn] = React.useState(false);

    const onMouseMove = React.useCallback((e : MouseEvent) => {
        let left =  e.clientX;
        let top =  e.clientY + window.scrollY - (containerRef.current?.offsetTop || 0);
        if (absoluteRef.current) {  
            setPosState({left,top})
        }
        if (mainTextRef.current) {
            const rect = mainTextRef.current.getBoundingClientRect();
            // console.log(top,  rect.top + window.scrollY - (containerRef.current?.scrollHeight || 0), rect.top+rect.height + window.scrollY - (containerRef.current?.scrollHeight || 0))
            if (inside(top, rect.top + window.scrollY - (containerRef.current?.offsetTop || 0), rect.top+rect.height + window.scrollY - (containerRef.current?.offsetTop || 0)) && 
                inside(left, rect.left, rect.left+rect.width)) {
                setIsMouseOn(true);
            } else {
                setIsMouseOn(false);
            }
        }
    }, []);

    useGSAP(() => {
        gsap.to(`#double-text-orange-${id}`, {clipPath: `circle(${isMouseOn ? "20%" : "1%"} at ${posState.left}px ${posState.top}px`, delay: 0.02})
    }, {dependencies: [posState], scope: containerRef}) 
    useGSAP(() => {
        gsap.to(`#double-text-orange-${id}`, {clipPath: `circle(${isMouseOn ? "20%" : "1%"} at ${posState.left}px ${posState.top}px`, delay: 0.02})
    }, {dependencies: [], scope: containerRef}) 

    return (
        <div className={clsx('flex items-center justify-center relative w-full h-full cursor-default', textCenter && "text-center")} ref={containerRef} 
            onMouseEnter={() =>  containerRef.current?.addEventListener('mousemove', onMouseMove)}
            onMouseLeave={() =>  containerRef.current?.removeEventListener("mousemove", onMouseMove)}>
            <div
                id={`double-text-orange-${id}`}
                className={"w-full h-full text-black flex justify-center items-center absolute"}
                style={{ background: "var(--color-accent)", zIndex: 1, clipPath: `circle(${isMouseOn ? "20%" : "1%"} at ${posState.left}px ${posState.top}px`}}
                ref={absoluteRef}
                key={`double-text-orange-${id}`}    
            >
                <div className="flex flex-col w-3/4 gap-2">
                    <p className="text-xs">{titleHideText || title}</p>
                    <p className="uppercase" style={{fontSize: textSize}}>
                        {mainHideText}
                    </p>
                </div>
            </div>
            <div className="w-full h-full bg-black text-white flex justify-center items-center" >
                <div className="h-fit flex flex-col w-3/4 gap-2" ref={mainTextRef}>
                    <p className="text-xs">{title}</p>
                    <p className="uppercase" style={{fontSize: textSize}}>
                        {mainText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DoubleText