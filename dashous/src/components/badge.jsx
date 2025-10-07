import React from "react";

const Badge = ({text, icon: Icon}) => {
    return (
        <div className="p-5 flex gap-4 bg-blue-default hover:opacity-90 rounded-full items-center">
            {Icon && <Icon className="h-6 w-6 text-white stroke-[2]" />}
            <label className="text-white font-medium text-md">{text}</label>
        </div>
    )
}

export default Badge;