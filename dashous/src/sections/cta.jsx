import React, { useEffect, useRef, useState } from "react";
import Button from "../components/button";
import CtaImage from '../assets/cta_image.svg'

const Cta = () => {
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
        <section ref={sectionRef} className="w-full bg-white flex justify-center relative">
            <div className="w-full max-w-[1024px] flex justify-center flex-col gap-10 px-6 lg:px-0">
                <div className="w-full h-auto bg-gray-100 rounded-[20px] lg:rounded-[40px] p-6 lg:p-14 flex flex-col lg:flex-row gap-10 lg:gap-20 relative overflow-hidden">

                    <div className="flex justify-start">
                        <div className="w-full lg:max-w-[640px] flex justify-center flex-col gap-10">
                            <h2 className={`text-gray-200 font-bold text-xl tracking-wider text-left transition-all duration-700 ease-out ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}>
                                Entre em contato agora!
                            </h2>
                            <p className={`font-medium text-gray-200 text-lg text-left transition-all duration-700 ease-out delay-150 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                            }`}>
                                Sem compromisso. <br />
                                Sem custo. <br />
                                Somente a vontade de ajudar.
                            </p>
                            <div className={`w-full lg:w-80 transition-all duration-700 ease-out delay-300 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}>
                                <Button text="Entre em contato" withIcon={true} onClick={() => ""} />
                            </div>
                        </div>
                    </div>
                    <img
                        src={CtaImage}
                        alt="circles"
                        className={`absolute right-0 top-0 h-full hidden lg:block lg:w-[300px] xl:w-[400px] 2xl:w-auto transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
                        }`}
                    />
                </div>
            </div>
        </section>
    )
}

export default Cta;