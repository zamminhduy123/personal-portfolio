"use client"
import DoubleText from '@/components/DoubleText'
import { isMobileDevice } from '@/utils/common-utils'
import clsx from 'clsx'
import React from 'react'

const AboutMeScreen = () => {
    console.log("window.navigator.userAgent",window.navigator.userAgent)
    return (
        <article className={clsx("w-full h-svh flex items-center justify-center")}>
            <DoubleText
                title="about me"
                textSize={window.innerWidth <= 650 ? 16 : 24}
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
                showButton={isMobileDevice()}
            />
        </article>
    )
}

export default AboutMeScreen