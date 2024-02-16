"use client"
import React from 'react'
import gsap from 'gsap'
import clsx from 'clsx'
import { useGSAP } from '@gsap/react'
import { IncrementalID } from '@/utils/common-utils'

type Props = {
    title?: string | React.ReactNode,
    text: string | React.ReactNode,

    textSize?: string,
    titleSize?: string,
    dimColor?: string,
    titleColor?: string,
    color?: string;

    textAlign?: "left" | "center" | "right";
}
const idIncremental = new IncrementalID();

const TextReviewOnScroll = ({ text, textAlign = "center", title, dimColor = "#999999", color = "#000000", textSize = "3rem", titleSize="1rem", titleColor = "#000000" }: Props) => {
    const ref = React.useRef<HTMLSpanElement | null>(null);
    const id = React.useRef(idIncremental.getId())

    React.useEffect(() => {
        gsap.to(
            `#txt-reveal-on-scroll-${id.current} > h2 > span`,
            {
                backgroundSize: "100% 100%",
                scrollTrigger: {
                    trigger: `#txt-reveal-on-scroll-${id.current}`,
                    start: "55% bottom",
                    end: "75% bottom",
                    scrub: true,
                    // pin: true,
                    // markers: true,
                }
            }
        )
        gsap.to(
            `#txt-reveal-on-scroll-${id.current} > p > span`,
            {
                backgroundSize: "100% 100%",
                scrollTrigger: {
                    trigger: `#txt-reveal-on-scroll-${id.current}`,
                    start: "0% 60%",
                    end: "bottom center",
                    scrub: true,
                    // markers: true,
                    // pin: true,
                }
            }
        )
    }, [])

    return (
        <div id={"txt-reveal-on-scroll-" + id.current} 
            className={clsx('w-full h-full grid grid-cols-10 items-center justify-center font-semibold', `text-${textAlign}`)} 
            style={{ fontSize: textSize }}
        >
            {title && <h2 className='col-start-2 col-end-10' style={{fontSize: titleSize}}><span
                className={clsx("bg-no-repeat")}
                style={{
                    color: `hsl(0 0 100% / 0.2)`,
                    backgroundImage: `linear-gradient(90deg, ${titleColor}, ${titleColor})`,
                    zIndex: 1,
                    backgroundSize: "0% 100%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text"
                }}
            >{title}</span></h2>}
            <p className=' col-start-2 col-end-10'>
                <span
                    className={clsx("bg-no-repeat")}
                    style={{
                        color: "hsl(0 0 100% / 0.2)",
                        backgroundImage: `linear-gradient(90deg, ${color}, ${color})`,
                        zIndex: 1,
                        backgroundSize: "0% 100%",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text"
                    }}
                >
                    {text}
                </span>
            </p>

            {/* <span className={clsx("absolute")} style={{ color: dimColor }}>{text}</span> */}
        </div>
    )
}

export default TextReviewOnScroll