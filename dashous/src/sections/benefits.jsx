import React, { useEffect, useRef, useState } from "react";
import BenefitsImage from "../assets/benefits_image.svg";
import Badge from "../components/badge";
import {
    CurrencyDollarIcon,
    HandRaisedIcon,
    ChartBarIcon,
    BuildingOfficeIcon,
    DocumentIcon,
    ShieldExclamationIcon,
    UsersIcon
} from "@heroicons/react/24/outline";
import Button from "../components/button";

const Benefits = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const badges = [
        { icon: CurrencyDollarIcon, text: "Administração financeira precisa e acessível." },
        { icon: HandRaisedIcon, text: "Auxílio na mediação de conflitos com isenção." },
        { icon: ChartBarIcon, text: "Prestação de contas clara e recorrente." },
        { icon: BuildingOfficeIcon, text: "Planejamento de melhorias estruturais." },
        { icon: DocumentIcon, text: "Representação legal e institucional do condomínio." },
        { icon: ShieldExclamationIcon, text: "Plano de ação sobre as prioridades." },
        { icon: UsersIcon, text: "Atendimento direto e proativo aos condôminos." }
    ];

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
        <section ref={sectionRef} className="w-full h-fit bg-white flex gap-20 md:gap-40 flex-col justify-center items-center relative px-6 md:px-0 py-10 md:py-0">
            <div className="w-full max-w-[1024px] flex justify-center flex-col gap-6 md:gap-10">
                <h1 className={`font-bold text-gray-200 text-xl md:text-2xl w-full md:w-[700px] tracking-wider md:tracking-widest transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                    O que a Das Haus entrega como síndico profissional?
                </h1>
                <p className={`font-medium text-gray-200 text-base md:text-lg w-full md:w-[700px] transition-all duration-700 ease-out delay-150 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    Desde 1996, oferecemos uma gestão profissional completa e transparente, com um síndico certificado com o
                    <span className="text-red-default font-bold"> Selo 5 Estrelas, </span>
                    o mais alto reconhecimento da categoria.
                </p>
                <div className="w-full md:w-fit flex flex-col gap-2">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ease-out ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            <Badge icon={badge.icon} text={badge.text} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={`w-full md:w-80 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '900ms' }}>
                <Button text="Entre em contato!" onClick={() => ""} />
            </div>
            <img
                src={BenefitsImage}
                alt="people_working"
                className={`absolute right-0 bottom-0 h-48 md:h-auto hidden md:block transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
            />
        </section>
    )
}

export default Benefits;
