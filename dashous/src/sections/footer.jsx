import logoSrc from "../assets/logo2.svg";
import bgSrc from "../assets/bg.svg";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-gray-100 relative overflow-hidden flex items-center justify-center flex-col" style={{ backgroundImage: `url(${bgSrc})`, backgroundRepeat: 'repeat' }}>
            <div className="w-full max-w-[1024px] flex flex-col lg:flex-row justify-between items-center p-6 lg:p-14 gap-10 lg:gap-0">
                <div className="w-28 lg:w-36">
                    <img src={logoSrc} alt="DasHaus Negócios" className="w-full h-auto" />
                </div>
                <div className="flex flex-col items-center lg:items-end gap-4">
                    <a
                    href="tel:+556198206665"
                    className="text-lg lg:text-3xl font-semibold text-gray-800 hover:text-primary transition-colors"
                    >
                    +55 61 9820-6665
                    </a>
                    <div className="flex gap-4">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-[#0077B5] text-white rounded hover:opacity-90 transition-opacity"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded hover:opacity-90 transition-opacity"
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </div>
        <div className="bg-gray-900 text-gray-400 text-center py-4 text-sm w-full">
            <p>&copy; {new Date().getFullYear()} DasHaus Negócios. Todos os direitos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;
