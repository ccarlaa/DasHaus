import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Button = ({text, onClick, withIcon = false, isWhatsApp = true}) => {
    const handleClick = () => {
        window.open('https://wa.me/556198206665', '_blank');
        if (onClick) {
            onClick();
        }
    };

    const buttonClasses = `h-14 rounded-full w-full flex gap-4 items-center justify-center cursor-pointer transition-all bg-blue-default hover:opacity-90`;

    return (
        <div onClick={handleClick} className={buttonClasses}>
            <label className="text-white font-bold text-md cursor-pointer">{text}</label>
            {withIcon && <ArrowRightIcon className="h-6 w-6 text-white stroke-[3]" />}
        </div>
    )
}

export default Button