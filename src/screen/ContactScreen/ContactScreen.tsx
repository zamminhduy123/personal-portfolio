import TurnText from '@/components/TurnText';
import useWindowDimensions from '@/hooks/useDimension';
import useIsMobile from '@/hooks/useIsMobile';
import React from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import WiggleButton from '@/components/WiggleButton/WiggleButton-v2';
import DoubleText from '@/components/DoubleText';


import github from '@static/github.svg'
import insta from '@static/instagram.svg'
import linkedin from '@static/linkedin.svg'
import Image from 'next/image';

type SectionProps = {
    title: string,
    content: string,
    className?: string;
}

const Section = (props : SectionProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return <div className={'flex flex-col gap-3 h-fit cursor-default' + props.className} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        <TurnText text={props.title} onClick={() => {}} useExternalHover isHover={isHovered}/>
        <p className='light-font cursor-default' style={{ color: "rgb(178 178 178)"}}>{props.content}</p>
    </div>  
}

const ChangeColorIcon = () => {
    const iconRef = React.useRef<HTMLDivElement>(null);
    const onMouseEnter = () => {
        gsap.to(iconRef, {
            background: "var(--color-accent)",
            color: "black"
        });
    }
    const onMouseLeave = () => {
        gsap.to(iconRef, {
            background: "transparent",
            color: "white"
        });
    }
    return <div ref={iconRef} className='w-full h-full flex items-center justify-center bg-transparent text-white' 
        onMouseOver={onMouseEnter}
        onMouseOut={onMouseLeave}
    >
        X
    </div>
}

const ContactScreen = () => {
    const {width, height} = useWindowDimensions();
    const isMobile = width <= 600;

    const containerRef = React.useRef<HTMLElement>(null);
    const colorAnim = React.useRef<gsap.core.Tween>()

    const { contextSafe } = useGSAP({ scope: containerRef });

    const onMouseEnterEmail = contextSafe(() => {
        if (!colorAnim.current) {
            colorAnim.current = gsap.fromTo("#contact-email",{color: "white"}, {color: "#EB5939", reversed: true})
        } else {
            colorAnim.current.restart();
        }
        gsap.fromTo("#contact-email > div", {translateX: "-100%"}, {translateX: "0"})
    })
    const onMouseLeaveEmail = contextSafe(() => {
        if (colorAnim.current){
            colorAnim.current.reverse();
        }
        gsap.fromTo("#contact-email > div", {translateX: "0"}, {translateX: "100%"})
    });
    useGSAP(() => {
        colorAnim.current = gsap.fromTo("#contact-email",{color: "white"}, {color: "#EB5939", reversed: true})
    }, {dependencies: []})

    return (
        <article className="w-full min-h-svh grid grid-cols-10 pt-24 xl:pt-72" ref={containerRef}>
            <div className="col-start-2 col-end-10 flex-col xl:flex-row gap-y-16 xl:gap-0 flex justify-center text-white">
                <div className='flex flex-col flex-1 h-full gap-6'>
                    <div className='text-5xl opacity-50 cursor-default'>Coffee?</div>
                    <div className='text-5xl mb-8 cursor-default'>Let’s Connect.</div>    
                    <div id="contact-email" className='text-base mb-8 cursor-pointer w-fit overflow-x-hidden' 
                        onMouseEnter={onMouseEnterEmail} 
                        onMouseLeave={onMouseLeaveEmail}
                        onClick={() => window.open("mailto:ntminhduy123@gmail.com")}
                    >
                        ntminhduy123@gmail.com
                        <div className='w-full my-4 rounded-full -translate-x-full' style={{height: "0.2rem", background: "var(--color-accent)"}}></div>
                    </div>    
                    <div className='flex gap-8 relative'>
                    <div className='w-16 h-16 flex justify-center items-center'>
                            <WiggleButton id={0} onClick={() => {window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}}>
                                <Image id='insta' alt="insta" src={insta}/>
                            </WiggleButton>
                        </div>
                        <div className='w-16 h-16 flex justify-center items-center'>
                            <WiggleButton id={1} onClick={() => window.open("https://www.linkedin.com/in/duy-nguy%E1%BB%85n/")}>
                                <Image id='linkedin' alt="linkedin" src={linkedin}/>
                            </WiggleButton>
                        </div>
                        <div className='w-16 h-16 flex justify-center items-center'>
                            <WiggleButton id={2} onClick={() => window.open("https://twitter.com/rzy148")}>
                                <Image id='github' alt="github" src={github}/>
                            </WiggleButton>
                        </div>
                    </div>
                </div>     
                <div className='flex-1 h-full flex items-start justify-center pb-16 xl:pb-0'>
                    <div className='grid grid-cols-2 h-fit auto-rows-min gap-x-12 gap-y-12'>
                        <Section title='Skill' content="Here's a curated selection showcasing my expertise and the achieved results." 
                            className='col-start-1 row-start-1 row-end-2 col-span-2 xl:col-span-1'
                        />
                        <Section title='Experience' content="2 years working as a front-end developer" 
                            className='col-start-1 col-end-2 row-start-2 row-end-3'/>
                        <Section title='Hobbies' content="Billiard, cooking and experencing new things." 
                            className='col-start-1 row-start-3 row-end-4  col-span-2 xl:col-span-1'/>
                        <Section title='Works' content="Check out my work and discover about my result." 
                            className='col-start-2 col-end-3 row-start-2 row-end-3 '/>
                    </div>
                </div>    
            </div>   
        </article>
    )
}

export default ContactScreen