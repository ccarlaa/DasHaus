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
        <section ref={sectionRef} className="w-full md:min-h-[500px] lg:min-h-[780px] items-center  bg-white flex justify-center relative px-6 ">
            <div className="w-full lg:max-w-[1024px] mb-20 md:max-w-[500px] flex flex-col gap-6 lg:gap-10 py-10 lg:py-0">
                <h1 className={`font-bold text-gray-200  lg:text-left text-center text-lg  md:text-2xl lg:text-5xl w-full lg:w-[680px] tracking-wider lg:tracking-widest transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                    Valorizando seu imóvel e melhorando sua qualidade de vida!
                </h1>
                <p className={`font-medium text-gray-200 text-base text-center lg:text-left lg:text-lg transition-all duration-700 ease-out delay-150 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    Está pronto para essa mudança?
                </p>
                <div className={`w-full lg:w-80 transition-all duration-700 ease-out delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    <Button text="Fale conosco!" onClick={() => ""} />
                </div>
            </div>
            <img
                src={HeroImage}
                alt="people_working"
                className={`absolute right-0 top-10 hidden lg:block h-auto lg:w-[400px] xl:w-[550px] 2xl:w-auto transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
            />
        </section>
    )
}

export default Hero;