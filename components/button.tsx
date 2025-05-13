import React from "react";

type ButtonProps = {
    onClick: () => void;
    className?: string;
    label: string;
    type?: "button" | "submit" | "reset";
};
const Button=({className,label,type}:ButtonProps) => {
    return (
        <>
            <button className={className} type={type}>
                {label}
            </button>
    </>
    )
    ;
}
export default Button;