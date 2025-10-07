import React, { useEffect, useRef, useState } from "react";
import Button from "../components/button";
import HeroImage from "../assets/hero_image.svg";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full min-h-[500px] md:min-h-[753px] bg-white flex justify-center relative px-6 md:px-0">
            <div className="w-full max-w-[1024px] flex justify-center flex-col gap-6 md:gap-10 py-10 md:py-0">
                <h1 className={`font-bold text-gray-200 text-xl md:text-2xl w-full md:w-[540px] tracking-wider md:tracking-widest transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                    Valorizando seu imóvel e melhorando sua qualidade de vida!
                </h1>
                <p className={`font-medium text-gray-200 text-base md:text-lg transition-all duration-700 ease-out delay-150 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    Está pronto para essa mudança?
                </p>
                <div className={`w-full md:w-80 transition-all duration-700 ease-out delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    <Button text="Fale conosco!" onClick={() => ""} />
                </div>
            </div>
            <img
                src={HeroImage}
                alt="people_working"
                className={`absolute right-0 bottom-0 h-48 md:h-auto hidden md:block transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
            />
        </section>
    )
}

export default Hero;