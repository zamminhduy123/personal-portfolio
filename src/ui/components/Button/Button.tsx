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
    } = props;

    let variantClass = "px-4 text-base rounded-xl";
    let style = {
        backgroundColor: variant == "contained" ? `var(--color-${type})` : undefined
    }
    
    return (
        <div className={clsx(variantClass, className)} style={style}>
            {props.children}
        </div>
    )
}

export default Button