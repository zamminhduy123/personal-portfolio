"use client"
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import avatar from '@static/avatar.jpg'
import avatarNoBg from '@static/avatar-no-bg.png'
import { ContextSafeFunc } from '@gsap/react'
import gsap from 'gsap'

//utils
import { disableScroll, enableScroll } from "@utils/scroll-utils"
import LoadingScreen from '../LoadingScreen'
import loadingBg from '@static/loadingbg.png'

type Props = {
  contextSafe: ContextSafeFunc
}

const defaultAnimConfig = {
  duration: 1.2,
  ease: "power2.in",
}

const MainScreen = ({ contextSafe }: Props) => {
  const [imageLoadDone, setImageLoadDone] = React.useState(0);
  const startRef = React.useRef(performance.now());
  
  const offLoadingPage = contextSafe(() => {
    gsap.to("#loading-screen", { translateY: "-100%", ...defaultAnimConfig })
    gsap.to("#loading-name > span", { y: "100%", stagger: 0.05, delay: 0, duration: 0.5 });
    gsap.fromTo("#hero-duy", { translateX: 0 }, { translateX: "-20%", duration: 1.5, delay: 0.9 })
    gsap.to("#hero-hi > span",  {y: 0, stagger: 0.1, delay: 0.3, duration: 0.5, ease: "power2.in"});
    gsap.from("#hero-img",  { translateY: "20%", opacity: 0, delay: 0.6, duration: 0.5 });
  });

  React.useLayoutEffect(() => {
    disableScroll();
  }, [])
  React.useEffect(() => {
    const closeLoading = () => {
      offLoadingPage();
      setTimeout(() => {
        enableScroll();
      }, 1500)
    }
    if (imageLoadDone == 2) {
      if (performance.now() - startRef.current < 1500) {
        setTimeout(() => {
          closeLoading();
        }, 1000)
      } else {
        closeLoading();
      }
    }
    return () => {
      enableScroll();
    }
  }, [offLoadingPage, imageLoadDone])


  React.useEffect(() => {
    gsap.to(
      "#hero-duy",
      {
        translateX: "-30%",
        scrollTrigger: {
          trigger: "#hero-duy",
          start: "center center",
          end: "bottom top",
          scrub: true,
          // markers: true,
          id: "hero-duy"
        }
      }
    );

    gsap.to(
      "#hero-duy",
      {
        translateX: "-30%",
        scrollTrigger: {
          trigger: "#hero-duy",
          start: "center center",
          end: "bottom top",
          scrub: true,
          // markers: true,
          id: "hero-duy"
        }
      }
    );
  }, []);

  const countImageLoadDone = () => {
    setImageLoadDone(prev => prev+1);
  }


  return (
    <article
      id="hero"
      className={clsx(
        "w-full h-svh flex items-center justify-center gap-32",
        "bg-black",
        "bg-no-repeat bg-center bg-cover",
        "overflow-clip",
        "p-4"
      )}
      style={{
        background: `url(/static/loadingbg.png)`,
      }}
    >
      <div className='w-full h-full flex items-center justify-between' style={{ maxWidth: 640, gap: 32 }}>
        <div className='w-full h-full flex-1'>
          <div className='w-full h-full relative flex items-center justify-center text-white'>
            <div className='w-full absolute' style={{ zIndex: 2 }}>
              <Image src={avatarNoBg} alt='me' className='rounded-xl' id="hero-img" onLoad={() => countImageLoadDone()}/>
            </div>
            <div className='absolute rotate-90' style={{ zIndex: 1 }}>
              <p id="hero-duy" 
                className={clsx("w-fit", "main-screen-big-text", "font-semibold", "cursor-default", "origin-center", "text-white"
                )}>
                <span>DUY</span>
                <span>DUY</span>
                <span>DUY</span>
                <span>DUY</span>
                <span>DUY</span>
                <span>DUY</span>
                <span>DUY</span>
                <span>DUY</span>
                <span>DUY</span>
              </p>
            </div>
            <div className='w-full absolute rounded'>
              <Image src={avatar} alt='me' className='rounded-xl' id="hero-img" onLoad={() => countImageLoadDone()}/>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col text-2xl sm:text-5xl'>
          <p id='hero-hi' className='font-black text-white text-animation-appear' 
            style={{ letterSpacing: "5px", lineHeight: 1.5, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <span>안</span>
            <span>녕</span>
            <span>하</span>
            <span>세</span>
            <span>요</span>
            <span>{","}</span>
            </p>
            <p id='hero-hi' className='font-black text-white text-animation-appear' 
            style={{ letterSpacing: "5px", lineHeight: 1.5, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <span className='mr-1'>I&apos;M</span>
            <span style={{ color: "var(--color-accent)" }}>
              D
            </span>
            <span style={{ color: "var(--color-accent)" }}>
              U
            </span>
            <span style={{ color: "var(--color-accent)" }}>
              Y
            </span>
          </p>
        </div>
        
      </div>
    </article>
  )
}

export default MainScreen