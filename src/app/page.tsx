import Image from 'next/image'
import DUYsvg from '@static/DUY.svg'
import myAvatar from '@static/avatar.png'
import zalobg from '@static/zalobg.png'
import zalotext from '@static/ZALO.png'
import dm2 from '@static/dm2.png'
import dm1 from '@static/dm1.png'
import dr_logo from '@static/logo.png'
import dr_logo_r from '@static/logo_r.png'
import { clsx } from 'clsx'
import gsap from "gsap";
import ImageTextPopOut from '@/components/ImageTextPopout'
import ProjectText from '@/components/ProjectText'

export default function Home() {
    return (
        <main
            className={clsx(
                "flex min-h-screen flex-col items-center justify-between"
            )}
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
                <div
                    id="test"
                    className="w-full h-full text-black flex justify-center items-center absolute"
                    style={{ background: "var(--color-accent)" }}
                >
                    <div className="flex flex-col w-3/4 gap-2">
                        <p className="text-xs">about me</p>
                        <p className="uppercase text-xl">
                            I&apos;m Duy, your go-to web developer. I create
                            websites so smooth, they make butter jealous.
                            Passionate about crafting awesome user experiences,
                            I&apos;m on a mission to make the internet a better
                            place. Let&apos;s build something cool together! 🚀
                        </p>
                    </div>
                </div>
                <div className="w-full h-full bg-black text-white flex justify-center items-center">
                    <div className="flex flex-col w-3/4 gap-2">
                        <p className="text-xs">about me</p>
                        <p className="uppercase text-xl">
                            I&apos;m Duy, your go-to web developer. I create
                            websites so smooth, they make butter jealous.
                            Passionate about crafting awesome user experiences,
                            I&apos;m on a mission to make the internet a better
                            place. Let&apos;s build something cool together! 🚀
                        </p>
                    </div>
                </div>
                <div></div>
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
                        <ProjectText extraHashTag={["#UI/UX #Feature building", "#Core SE logic"]} title="SWE at Zalo" subTitle='2022-2024'/>
                        {/* <div className="flex flex-col font-semibold">
                            <p className="text-xl">2022-2024</p>
                            <p className=" text-4xl">SWE at Zalo</p>
                        </div>
                        <div
                            className="flex flex-col font-extralight text-xs gap-2"
                            style={{ fontFamily: "MonumentLight" }}
                        >
                            <p>#UI/UX #Feature building</p>
                            <p>#Core SE logic</p>
                        </div>
                        <div className="text-3xl font-semibold">↗</div> */}
                    </div>
                    <div className="col-start-6 col-end-10 bg-white row-start-1 row-end-8 rounded-xl flex justify-center items-center relative overflow-clip">
                        <ImageTextPopOut image={zalobg} text='ZALO' textColor='#272121' textSize={220} showOnHover/>
                        {/* <div className="relative w-full">
                            <Image alt="Zalo" src={zalobg} />
                        </div>
                        <div
                            className="absolute h-full opacity-8 flex items-center"
                            style={{ zIndex: 1, width: "150%" }}
                        >
                            <Image alt="Zalo" src={zalotext} />
                        </div> */}
                    </div>
                </div>
                <div
                    className="grid grid-cols-10 grid-rows-11 w-full gap-5 text-black mt-4"
                    style={{ height: "110svh" }}
                >
                    <div className="col-start-2 col-end-7 row-start-1 row-end-6  rounded-xl overflow-hidden relative flex justify-center ">
                        <ImageTextPopOut image={dm2} text='DM' textColor='white' textSize={220} showOnHover/>
                        {/* <div
                            className={clsx(
                                "w-full",
                                "h-full",
                                `bg-[url('../static/dm2.png')]`,
                                "bg-no-repeat bg-center bg-cover"
                            )}
                        />
                        <div
                            className="absolute w-full h-full opacity-8 flex items-center"
                            style={{ zIndex: 1 }}
                        >
                            <Image alt="Zalo" src={dmText} />
                        </div> */}
                    </div>
                    <div className="col-start-7 col-end-10 row-start-1 row-end-6 rounded-xl flex justify-center items-center">
                        <p className="text-4xl text-white text-center">
                            Direct Message
                        </p>
                    </div>
                    <div className="col-start-2 col-end-10 row-start-6 row-end-12 rounded-xl relative bg-white flex items-end p-4">
                        <ProjectText extraHashTag={["#E2EE #FTS Search", "#IndexDB #Clean architect"]} title="Encrypted chat application" titleMaxWidth={320}/>
                        {/* <div className="flex flex-col gap-4 max-w-80">
                            <div className="flex flex-col font-semibold">
                                <p className=" text-4xl">
                                    Encrypted chat application
                                </p>
                            </div>
                            <div
                                className="flex flex-col font-extralight text-xs gap-2"
                                style={{ fontFamily: "MonumentLight" }}
                            >
                                <p>#E2EE #FTS Search</p>
                                <p>#IndexDB #Clean architect</p>
                            </div>
                            <div className="text-3xl font-semibold">↗</div>
                        </div> */}
                        {/* <div className='absolute w-full aspect-square opacity-8 right-0' style={{ zIndex: 1 }}>
              <Image
                alt='Zalo'
                src={dm1}
              />
            </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-10 grid-rows-10 w-full h-svh gap-5 text-black mt-4">
                    <div className="col-start-2 col-end-5 row-start-1 row-end-4 bg-white rounded-xl overflow-hidden relative flex justify-center ">
                        <div id="dl_logo" className="logo relative h-full w-full flex items-center justify-center zoom-out">
                            <Image alt="dl_logo_1" src={dr_logo} width={32} height={32} className='absolute' />
                            <Image alt="dl_logo" src={dr_logo_r} width={128} height={128} className='absolute spin' />
                        </div>
                        <div id="dl_logo-text"></div>
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
                            `bg-[url('../static/dreamlauncher1.png')]`,
                            "bg-no-repeat bg-center bg-cover",
                            "col-start-2 col-end-10 row-start-4 row-end-11 bg-white rounded-xl overflow-hidden relative flex justify-center "
                        )}
                    ></div>
                </div>
            </article>
            <article className="w-full h-svh flex items-center justify-center">
                <div className="w-full h-full bg-black text-white flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center text-center w-3/4 gap-2">
                        <p className="text-xs">MY MOTTO</p>
                        <p className="uppercase text-4xl">
                            Lorem Ipsum is simply dummy text of the <span style={{ color: "var(--color-accent)" }}>printing and</span> typesetting industry. Lorem Ipsum has been the industry's.
                        </p>
                    </div>
                </div>
                <div></div>
            </article>
        </main>
    );
}
