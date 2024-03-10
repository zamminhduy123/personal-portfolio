import React from 'react'
import gsap, { Back, Power4 } from 'gsap'


type WiggleButtonProps = {
    id : number,
    onClick: Function,
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
            backgroundSize: "0% 0%",
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
            backgroundSize: "0% 0%",
            color: "white",
        }, {
            ease: Back.easeInOut,
            backgroundSize: "100% 100%",
            color: "black",
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
            <div id={id} onClick={() => props.onClick()} ref={wiggleRef} className="w-3/4 h-3/4 text-white rounded-full flex items-center justify-center overflow-hidden absolute inset-0 cursor-pointer"
                style={{
                    backgroundImage: "linear-gradient(var(--color-accent), var(--color-accent))",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "0% 0%",
                    backgroundPosition: "center center"
                }}
            >
                {props.children}
            </div>
        </div>
    )
}

export default WiggleButton