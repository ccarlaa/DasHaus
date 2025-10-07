import React, { useEffect, useRef, useState } from "react";

const ProposalDetailLeft = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col h-[160px] lg:w-[32%] md:w-[26%] sm:w-[20%] relative">
            <div
                className={`rounded-r-full w-full h-full bg-blue-default opacity-50 absolute transition-all duration-700 ease-out ${
                    isVisible ? 'translate-x-0 opacity-50' : '-translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: '0ms' }}
            />
            <div
                className={`rounded-r-full w-full h-full bg-blue-default opacity-50 absolute right-10 transition-all duration-700 ease-out ${
                    isVisible ? 'translate-x-0 opacity-50' : '-translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: '150ms' }}
            />
            <div
                className={`rounded-r-full w-full h-full bg-blue-default opacity-50 absolute right-20 transition-all duration-700 ease-out ${
                    isVisible ? 'translate-x-0 opacity-50' : '-translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
            />
            <div
                className={`rounded-r-full w-full h-full bg-blue-default opacity-50 absolute right-32 transition-all duration-700 ease-out ${
                    isVisible ? 'translate-x-0 opacity-50' : '-translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: '450ms' }}
            />
        </div>
    )
}

export default ProposalDetailLeft;