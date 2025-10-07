import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Button = ({text, onClick, withIcon = false}) => {
    return (
        <button onClick={onClick} className="bg-blue-default hover:opacity-90 h-14 rounded-full w-full flex gap-4 items-center justify-center">
            <label className="text-white font-bold text-md cursor-pointer">{text}</label>
            {withIcon && <ArrowRightIcon className="h-6 w-6 text-white stroke-[3]" />}
        </button>
    )
}

export default Button