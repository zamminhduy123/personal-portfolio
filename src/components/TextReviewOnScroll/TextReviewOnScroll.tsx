"use client"
import React from 'react'
import gsap from 'gsap'
import clsx from 'clsx'
import { useGSAP } from '@gsap/react'
import { IncrementalID } from '@/utils/common-utils'

type Props = {
    title?: string
    text: string,

    textSize?: string,
    dimColor?: string,
    color?: string
}
const idIncremental = new IncrementalID();

const TextReviewOnScroll = ({ text, title, dimColor = "#999999", color = "#000000", textSize = "3rem" }: Props) => {
    const ref = React.useRef<HTMLSpanElement | null>(null);
    const id = React.useRef(idIncremental.getId())

    React.useEffect(() => {
        gsap.to(
            `#txt-reveal-on-scroll-${id.current} > h2 > span`,
            {
                backgroundSize: "100% 100%",
                scrollTrigger: {
                    trigger: `#txt-reveal-on-scroll-${id.current}`,
                    start: "top center",
                    end: "+=100",
                    scrub: true,
                    // markers: true,
                }
            }
        )
        gsap.to(
            `#txt-reveal-on-scroll-${id.current} > p > span`,
            {
                backgroundSize: "100% 100%",
                delay: 0.2,
                scrollTrigger: {
                    trigger: `#txt-reveal-on-scroll-${id.current}`,
                    start: "+=100 center",
                    end: "center center",
                    scrub: true,
                    // markers: true,
                }
            }
        )
    }, [])

    return (
        <div id={"txt-reveal-on-scroll-" + id.current} className='w-full h-full flex flex-col items-center justify-center  text-center font-semibold' style={{ fontSize: textSize }}>
            {title && <h2 className='text-sm'><span
                className={clsx("bg-no-repeat")}
                style={{
                    color: "hsl(0 0% 0% / 0.2)",
                    backgroundImage: `linear-gradient(90deg, ${color}, ${color})`,
                    zIndex: 1,
                    backgroundSize: "0% 100%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text"
                }}
            >{title}</span></h2>}
            <p>
                <span
                    className={clsx("bg-no-repeat")}
                    style={{
                        color: "hsl(0 0% 0% / 0.2)",
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