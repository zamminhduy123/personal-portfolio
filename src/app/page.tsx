"use client"
import Image from 'next/image'
import DUYsvg from '@static/DUY.svg'
import myAvatar from '@static/avatar.png'
import zalobg from '@static/zalobg.png'
import zalotext from '@static/ZALO.png'
import dm2 from '@static/dm2.png'
import dm1 from '@static/dm1.png'
import dr_logo from '@static/logo.png'
import dr_logo_r from '@static/logo_r.png'
import dr_bg from '@static/dreamlauncher1.png'
import { clsx } from 'clsx'
import ImageTextPopOut from '@/components/ImageTextPopout'
import ProjectText from '@/components/ProjectText'
import DoubleText from '@/components/DoubleText'
import DreamLauncherLogo from '@/components/DreamLauncherLogo'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import LoadingScreen from '@/screen/LoadingScreen'

export default function Home() {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({scope: containerRef});

    const [isOnDM1, setIsOnDM1] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            // setIsLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return isLoading ? (
        <LoadingScreen />
    ) : (
        <main
            className={clsx(
                "flex min-h-screen flex-col items-center justify-between"
            )}
            ref={containerRef}
        >
            <article
                className={clsx(
                    "w-full h-svh flex items-center justify-center gap-32",
                    `bg-[url('../static/background.png')]`,
                    "bg-no-repeat bg-center bg-cover"
                )}
            >
                <div className="h-full flex flex-row gap-24 px-8 w-fit flex-1">
                    <div className="flex items-end">
                        <Image alt="DUY" src={DUYsvg} width={120} />
                    </div>
                    <div className="flex items-start">
                        <Image
                            alt="DUY"
                            src={DUYsvg}
                            width={120}
                            style={{
                                transform: "scaleY(-1)",
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-start items-start flex-1">
                    <div className="flex flex-col items-end text-white text-xl gap-2">
                        <Image
                            src={myAvatar}
                            alt="my-avatar"
                            width={240}
                            height={240}
                        />
                        <div>
                            HEY, I&apos;M{" "}
                            <span style={{ color: "var(--color-accent)" }}>
                                DUY
                            </span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="w-full h-svh flex items-center justify-center">
                <DoubleText
                    title="about me"
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
                            I&apos;m Duy, i don't even know how to{" "}
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
                />
            </article>
            <article className="w-full h-fit flex flex-col items-center justify-center bg-black">
                <div
                    className={clsx(
                        "grid grid-cols-10 grid-rows-7 w-full gap-5 text-black"
                    )}
                    style={{ height: "70svh" }}
                >
                    <div className="col-start-2 col-end-6 bg-white row-start-1 row-end-3 rounded-xl flex items-center justify-center text-3xl text-[#006AF5]">
                        <Image
                            src="https://stc-zaloprofile.zdn.vn/pc/v1/images/logo.svg"
                            alt="Zalo logo"
                            width={150}
                            height={100}
                        />
                    </div>
                    <div className="col-start-2 col-end-6 bg-white row-start-3 row-end-8 rounded-xl flex flex-col justify-end p-4 gap-4">
                        <ProjectText
                            extraHashTag={[
                                "#UI/UX #Feature building",
                                "#Core SE logic",
                            ]}
                            title="SWE at Zalo"
                            subTitle="2022-2024"
                        />
                    </div>
                    <div className="col-start-6 col-end-10 bg-white row-start-1 row-end-8 rounded-xl flex justify-center items-center relative overflow-clip">
                        <ImageTextPopOut
                            image={zalobg}
                            text="ZALO"
                            textColor="#272121"
                            textSize={220}
                            showOnHover
                        />
                    </div>
                </div>
                <div
                    className="grid grid-cols-10 grid-rows-11 w-full gap-5 text-black mt-4"
                    style={{ height: "110svh" }}
                >
                    <div className="col-start-2 col-end-7 row-start-1 row-end-6  rounded-xl overflow-hidden relative flex justify-center ">
                        <ImageTextPopOut
                            image={dm2}
                            text="DM"
                            textColor="white"
                            textSize={220}
                            showOnHover
                        />
                    </div>
                    <div className="col-start-7 col-end-10 row-start-1 row-end-6 rounded-xl flex justify-center items-center">
                        <p className="text-4xl text-white text-center">
                            Direct
                            <br />
                            Message
                        </p>
                    </div>
                    <div
                        className="col-start-2 col-end-10 row-start-6 row-end-12 rounded-xl relative bg-white flex items-end p-4 overflow-clip"
                        onMouseEnter={contextSafe(() => {
                            if (containerRef.current) {
                                gsap.to("#dm1", { scale: 1.2 });
                                setIsOnDM1(true);
                            }
                        })}
                        onMouseLeave={contextSafe(() => {
                            if (containerRef.current) {
                                gsap.to("#dm1", { scale: 1 });
                                setIsOnDM1(false);
                            }
                        })}
                    >
                        <div
                            className="absolute -bottom-10 right-0"
                            style={{ width: "60%", right: "5%" }}
                        >
                            <Image
                                id={"dm1"}
                                className={clsx("object-contain")}
                                src={dm1}
                                alt="dm-chat-app"
                            />
                        </div>
                        <ProjectText
                            id={1}
                            useExternalEvent
                            isTrigger={isOnDM1}
                            extraHashTag={[
                                "#E2EE #FTS Search",
                                "#IndexDB #Clean architect",
                            ]}
                            title="Encrypted chat application"
                            titleMaxWidth={320}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-10 grid-rows-10 w-full h-svh gap-5 text-black mt-4">
                    <div className="col-start-2 col-end-5 row-start-1 row-end-4 bg-white rounded-xl overflow-hidden relative flex justify-center ">
                        <DreamLauncherLogo />
                    </div>
                    <div className="col-start-5 col-end-10 row-start-1 row-end-4 bg-white rounded-xl overflow-hidden relative flex justify-center">
                        <div className="flex flex-col text-4xl justify-center font-semibold text-[#3AA7DE]">
                            <p>#IDO Platform</p>
                            <p>#Blockchain</p>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "w-full",
                            "h-full",
                            "col-start-2 col-end-10 row-start-4 row-end-11 bg-white rounded-xl overflow-hidden relative flex justify-center "
                        )}
                    >
                        <ImageTextPopOut
                            image={dr_bg}
                            text="DREAM LAUNCHER"
                            showOnHover
                            textColor="#3AA7DE"
                            textSize={150}
                        />
                    </div>
                </div>
            </article>
            <article className="w-full h-svh flex items-center justify-center">
                <DoubleText
                    title="MY MOTTO"
                    mainText={
                        <span>
                            <span style={{ color: "var(--color-accent)" }}>
                                Front-End Developer
                            </span>
                        </span>
                    }
                    mainHideText={
                        <span>
                            <span className="text-white">
                                Front-End Developer
                            </span>
                        </span>
                    }
                    textCenter
                    id={1}
                    textSize={32}
                />
            </article>
        </main>
    );
    
}
