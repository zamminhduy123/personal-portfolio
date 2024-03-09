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

    showButton?: boolean;
}

const DoubleText = (props: DoubleTextProps) => {
    const {
        title,
        titleHideText,
        mainHideText,
        mainText,
        textCenter = false,
        id = 0,
        textSize = 24,

        showButton = false
    } = props;
    const absoluteRef = React.useRef<HTMLDivElement | null>(null), containerRef = React.useRef<HTMLDivElement | null>(null),
        mainTextRef =  React.useRef<HTMLDivElement | null>(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const [posState, setPosState] = React.useState({left: 0, top:0});
    const [isMouseOn, setIsMouseOn] = React.useState(false);

    const onMouseMove = React.useCallback((e : MouseEvent) => {
        let left =  e.clientX, top =  e.clientY;
        const heightGap = window.scrollY - (containerRef.current?.offsetTop || 0);
        if (absoluteRef.current) {  
            setPosState({left,top: top+heightGap})
        }
        if (mainTextRef.current) {
            const rect = mainTextRef.current.getBoundingClientRect();
            // console.log(e.clientY, window.scrollY, containerRef.current?.offsetTop, rect.top);
            if (inside(top+heightGap, rect.top + heightGap, rect.top+rect.height + heightGap) && 
                inside(left, rect.left, rect.left+rect.width)) {
                setIsMouseOn(true);
            } else {
                setIsMouseOn(false);
            }
        }
    }, []);

    useGSAP(() => {
        if (!showButton) {
            gsap.to(`#double-text-orange-${id}`, {clipPath: `circle(${isMouseOn ? "20%" : "1%"} at ${posState.left}px ${posState.top}px`, delay: 0.02})
        }
    }, {dependencies: [posState, showButton], scope: containerRef}) 
    useGSAP(() => {
        if (!showButton) {
            gsap.to(`#double-text-orange-${id}`, {clipPath: `circle(${isMouseOn ? "20%" : "1%"} at ${posState.left}px ${posState.top}px`, delay: 0.02})
        }
    }, {dependencies: [showButton], scope: containerRef}) 

    const onMouseDownOnButton = contextSafe(() => {
        gsap.to(`#double-text-orange-${id}`, {clipPath: `circle(100% at 50% 50%)`})
        gsap.to(`#double-text-btn-${id}`, {backgroundColor: "white", color: "black"})
    })
    const onMouseUpOnButton = contextSafe(() => {
        gsap.to(`#double-text-orange-${id}`, {clipPath: `circle(0% at 0px 0px)`})
        gsap.to(`#double-text-btn-${id}`, {backgroundColor: "var(--color-accent)", color: "white"})
    })

    return (
        <div className={clsx('flex flex-col items-center justify-center relative w-full h-full cursor-default', textCenter && "text-center")} ref={containerRef} 
            onMouseEnter={() =>  containerRef.current?.addEventListener('mousemove', onMouseMove)}
            onMouseLeave={() =>  containerRef.current?.removeEventListener("mousemove", onMouseMove)}>
            <div
                id={`double-text-orange-${id}`}
                className={"w-full h-full text-black grid grid-cols-10 items-center absolute"}
                style={{ background: "var(--color-accent)", zIndex: 1, clipPath: `circle(${isMouseOn ? "20%" : "1%"} at ${posState.left}px ${posState.top}px`}}
                ref={absoluteRef}
                key={`double-text-orange-${id}`}    
            >
                <div className="w-full col-start-2 col-end-10 gap-2">
                    <p className="text-xs">{titleHideText || title}</p>
                    <p className="uppercase" style={{fontSize: textSize}}>
                        {mainHideText}
                    </p>
                </div>
            </div>
            <div className="w-full h-full bg-black text-white grid grid-cols-10 items-center" >
                <div className="h-fit flex flex-col w-full col-start-2 col-end-10 gap-2" ref={mainTextRef}>
                    <p className="text-xs">{title}</p>
                    <p className="uppercase" style={{fontSize: textSize}}>
                        {mainText}
                    </p>
                </div>
            </div>

            {showButton &&
                <button className={clsx(
                    "rounded-xl",
                    "p-2",
                    "absolute",
                    "text-sm",
                )}
                    id={`double-text-btn-${id}`}
                    style={{
                        backgroundColor: "var(--color-accent)",
                        color: "white",
                        bottom: "10%",
                        zIndex: 4
                    }}
                    onMouseDown={onMouseDownOnButton}
                    onMouseUp={onMouseUpOnButton}
                    onTouchStart={onMouseDownOnButton}
                    onTouchEnd={onMouseUpOnButton}
                >
                    See the truth
                </button>}
        </div>
    )
}

export default DoubleText