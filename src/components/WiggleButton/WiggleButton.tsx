import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';

type WiggleButtonProps = {
    id : number;
    children: string | React.ReactNode | JSX.Element;
}

function inside(value : number, min : number, max: number) {
    return value >= min && value <= max;
}


const WiggleButton = (props : WiggleButtonProps) => {
    const {
        id,
    } = props; 

    const absoluteRef = React.useRef<HTMLDivElement | null>(null), containerRef = React.useRef<HTMLDivElement | null>(null),
    mainTextRef =  React.useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    const [posState, setPosState] = React.useState({left: 0, top:0});
    const [isMouseOn, setIsMouseOn] = React.useState(false);

    const onMouseMove = React.useCallback((e : MouseEvent) => {
        let left =  e.clientX, top =  e.clientY;
        const heightGap = window.scrollY - (containerRef.current?.offsetTop || 0);
        if (absoluteRef.current) {  
            setPosState({left,top: top+heightGap})
        }
        if (mainTextRef.current) {
            const rect = mainTextRef.current.getBoundingClientRect();
            if (inside(top+heightGap, rect.top + heightGap, rect.top+rect.height + heightGap) && 
                inside(left, rect.left, rect.left+rect.width)) {
                setIsMouseOn(true);
            } else {
                setIsMouseOn(false);
            }
        }
    }, []);

    useGSAP(() => {
        if (containerRef.current) {
            const {x,y} = containerRef.current?.getBoundingClientRect();
            gsap.to(containerRef, {translateX: x+0.3*posState.left, translateY: y+0.3*posState.top})
        }
    }, {dependencies: [posState], scope: containerRef}) 

    return (
        <div ref={containerRef}
            onMouseEnter={() =>  containerRef.current?.addEventListener('mousemove', onMouseMove)}
            onMouseLeave={() =>  containerRef.current?.removeEventListener("mousemove", onMouseMove)}
        >
            {props.children}
        </div>
    )
}

export default WiggleButton