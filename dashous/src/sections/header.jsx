import React, { useState } from "react";
import Logo from "../assets/logo_header.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Sobre Nós", href: "#sobre-nos" },
        { label: "Serviços", href: "#servicos" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Dúvidas", href: "#duvidas" },
        { label: "Contato", href: "#contato" }
    ];

    return (
        <header className="w-full bg-white h-20 flex justify-center px-6 lg:px-0">
            <div className="w-full max-w-[1024px] h-full flex justify-between items-center">
                <img src={Logo} alt="logo" className="h-12 lg:h-auto" />

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-10 items-center">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="cursor-pointer hover:-translate-y-0.5 duration-300 ease-in-out">
                            <span className="text-gray-200 hover:text-red-default font-semibold text-md ">
                                {item.label}
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-200 hover:text-red-default"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <XMarkIcon className="h-8 w-8" />
                    ) : (
                        <Bars3Icon className="h-8 w-8" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
                    <nav className="flex flex-col py-4">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="px-6 py-3 cursor-pointer hover:bg-gray-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-gray-200 hover:text-red-default font-semibold text-md">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;