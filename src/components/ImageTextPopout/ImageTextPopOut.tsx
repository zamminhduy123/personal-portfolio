"use client"

import clsx from 'clsx';
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { debounce } from 'lodash'

type ImageTextPopOutProps = {
    textColor?: string;
    textSize?: number;
    text: string;

    image: string | StaticImageData;
    showOnHover?: boolean;
}

const ImageTextPopOut = (props: ImageTextPopOutProps) => {
    const {
        text,
        textColor = "white",
        textSize = 32,

        image,
        showOnHover = false
    } = props;
    
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({scope: containerRef});
    const timeline = React.useRef<gsap.core.Tween | null>(null)

    const onMouseEnter = showOnHover ? contextSafe(() => {
        if (containerRef.current) {
            gsap.to("p", { opacity: 1, left: '-10%' });
            // timeline.current = gsap.to("p", { left: "-100%", duration: 5 });
            gsap.to("img", { scale: 1.2 })
        }
    }) : undefined;
    const onMouseLeave = showOnHover ? contextSafe(() => {
        // timeline.current?.kill()
        gsap.to("p", { opacity: 0, left: "10%" })
        gsap.to("img", { scale: 1 })
    }) : undefined;

    useGSAP(() => {
        if (!showOnHover) {
            gsap.set("p",{ left: "-50%", opacity: 1 })
        } else {
            gsap.set("p",{ left: 0, opacity: 0 })
        }
    }, {dependencies: [showOnHover], scope: containerRef})

    return (
        <div className='flex items-center justify-center relative w-full h-full' ref={containerRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <p className={clsx("absolute", "font-semibold", "cursor-default", "marquee", `text-${textColor?.startsWith("#") ? `[${textColor}]` : textColor}`)} 
                style={{zIndex: 1, fontSize: textSize, letterSpacing: "2.5rem"}}>
                    <span>{text}</span>
                    <span>{text}</span>
                    <span>{text}</span>
                    <span>{text}</span>
                    <span>{text}</span>
                    <span>{text}</span>
            </p>
            <Image className={clsx("absolute", 'w-full', "object-contain")} src={image} alt="image"/>
        </div>
    )
}

export default ImageTextPopOut