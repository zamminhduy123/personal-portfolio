"use client"
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import React from 'react'

type Props = {
    text: string | React.ReactNode;
    isHighlighted?: boolean

    highlightColor?: string;
    className?: string;
    
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const TurnText = ({ text, className, isHighlighted = false, highlightColor = "var(--color-accent)", onClick }: Props) => {

    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({scope: containerRef});
    const animationRef = React.useRef<gsap.core.Tween[]>([]);

    const onMouseEnter = contextSafe(() => {
        if (!animationRef.current.length) {
            animationRef.current.push(gsap.fromTo("div", {translateY: "0"}, {translateY: "-50%", duration: 0.2}))
            // animationRef.current.push(gsap.(".text-animation-appear"))
        } else {
            animationRef.current.forEach(anim => anim.restart())
        }
    })
    const onMouseLeave = contextSafe(() => {
        if (animationRef.current) {
            animationRef.current.forEach(anim => anim.reverse())
        }
    });
    
    return (
        <div className={clsx('w-fit h-fit relative text-animation-appear text-white', className)} ref={containerRef}
            onMouseEnter={isHighlighted ? undefined : onMouseEnter} onMouseLeave={isHighlighted ? undefined : onMouseLeave} onClick={onClick}>
            <p style={{visibility: "hidden"}}>{text}</p>
            <div className='absolute flex flex-col top-0'>
                <p className='cursor-pointer'>{text}</p>
                <p id="turn-text-highlight" className='cursor-pointer' style={{ color: highlightColor }}>{text}</p>
            </div>
        </div>
    );
}

export default TurnText