import zalobg from '@static/zalobg.png'
import dm2 from '@static/dm2.png'
import dm1 from '@static/dm1.png'
import dr_bg from '@static/dreamlauncher1.png'

import gsap from 'gsap'

import ImageTextPopOut from '@/components/ImageTextPopout';
import ProjectText from '@/components/ProjectText';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react'
import { ContextSafeFunc } from '@gsap/react';
import DreamLauncherLogo from '@/components/DreamLauncherLogo';

type Props = {
    contextSafe: ContextSafeFunc
}

const SelectedWorkScreen = ({contextSafe} : Props) => {
    const [isOnDM1, setIsOnDM1] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        gsap.to(
            containerRef.current,
            {
                backgroundColor: "white",
                scrollTrigger: {
                    trigger: "#dr-container",
                    start: "center center",
                    end: "bottom center",
                    scrub: true,
                    // markers: true,
                    id: "dr-container"
                }
            }
        );
      }, []);

    return (
        <article className={clsx("w-full h-fit flex flex-col items-center justify-center pb-8 bg-black")} ref={containerRef}>
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
                    <p className="text-4xl text-white text-center" style={{
                        backgroundClip: "text",
                        background: "linear-gradient(45deg, #fd267a, #ff6036)",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                    }}>
                        Direct
                        <br />
                        Message
                    </p>
                </div>
                <div
                    className="col-start-2 col-end-10 row-start-6 row-end-12 rounded-xl relative bg-white flex items-end p-4 overflow-clip"
                    onMouseEnter={contextSafe(() => {
                        gsap.to("#dm1", { scale: 1.2 });
                        setIsOnDM1(true);
                    })}
                    onMouseLeave={contextSafe(() => {
                        gsap.to("#dm1", { scale: 1 });
                        setIsOnDM1(false);
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
            <div id="dr-container" className="grid grid-cols-10 grid-rows-10 w-full h-svh gap-5 text-black mt-4">
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
    )
}

export default SelectedWorkScreen