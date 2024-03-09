import React from 'react'
import gsap, { Back, Power4 } from 'gsap'


type WiggleButtonProps = {
    id : number
    children: React.ReactNode
}

const WiggleButton = (props : WiggleButtonProps) => {

    const containerRef = React.useRef<HTMLDivElement>(null), wiggleRef = React.useRef<HTMLDivElement>(null);
    const id = React.useMemo(() => `wiggle-${props.id}`, [props.id]);

    React.useEffect(() => {
        goCenter();
    }, [])

    const goCenter = () => {
        const rect = containerRef.current!.getBoundingClientRect()
        const center = {
            w: Math.round(rect.width * 0.5),
            h: Math.round(rect.height * 0.5)
        }

        const wiggleRect = wiggleRef.current?.getBoundingClientRect() || {
            width : 0,
            height: 0
        }
        gsap.to(`#${id}`,{
            x: center.w - wiggleRect?.width/2,
            y: center.h - wiggleRect?.height/2,
            backgroundColor: "transparent",
            color: "white",
            ease: Back.easeInOut
        })
    }
    
    const onMouseLeave = ( e : any ) => {
        goCenter();
        containerRef.current?.removeEventListener("mousemove", onMouseMove)
    }

    const onMouseEnter = () => {
        gsap.fromTo(`#${id}`,{
            backgroundColor: "transparent",
            color: "white",
        }, {
            background: "var(--color-accent)",
            color: "black",
            ease: Back.easeInOut
        })
        containerRef.current?.addEventListener("mousemove", onMouseMove)
    }

    const onMouseMove= ( e : any ) => {        
        const wiggleRect = wiggleRef.current?.getBoundingClientRect() || {
            width : 0,
            height: 0
        }
        gsap.to(`#${id}`,{
            x: e.offsetX - wiggleRect?.width/2,
            y: e.offsetY - wiggleRect?.height/2,
            ease: Power4.easeOut
        })
    }
    
    return (
        <div className="w-full h-full relative" 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={containerRef}    
        >
            <div id={id} ref={wiggleRef} className="w-3/4 h-3/4 rounded-full flex items-center justify-center overflow-hidden absolute inset-0 pointer-events-none">
                {props.children}
            </div>
        </div>
    )
}

export default WiggleButton