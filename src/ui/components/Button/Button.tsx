import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
    variant?: "contained" | "outlined",
    type?: "accent" | "secondary" | "error",
    className?: string;

    size?: "sm" | "m" | "l";

    children?: React.ReactNode | string | JSX.Element
}

const Button = (props: ButtonProps) => {
    const {
        variant = "contained",
        className = "",
        type = "accent",
        size = "m",
        fullWidth = false
    } = props;

    let sizeClass = "px-4 py-2 text-sm";
    if (size == "sm") {
        sizeClass = "px-4 py-2 text-xs"
    }
    let style = {
        backgroundColor: variant == "contained" ? `var(--color-${type})` : undefined,
        // padding: "12px 16px"
    }
    
    return (
        <div className={clsx(sizeClass, className, "text-center", "rounded")} style={style}>
            {props.children}
        </div>
    )
}

export default Button