import { useState } from 'react';
import Commas from "../assets/commas.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonialsData = [
  {
    text: "Antes mesmo de conhecê-la pessoalmente, a Silvia já era referência. Sua reputação como síndica do edifício chegou até mim por meio de amigas que elogiavam sua competência e dedicação. Quando surgiu a oportunidade a indiquei sem hesitar e foi a melhor escolha! Hoje, no Real Bourbon, vemos de perto sua atuação firme, humana e pacificadora. A recondução ao cargo só confirma a confiança no trabalho dela.",
    author: "Rosiane Silva Amaral",
    title: "Jornalista e estrategista de imagem"
  },
  {
    text:
    `A dona Silvia é uma ótima síndica e trata todos os funcionários com carinho e atenção,
    sempre se preocupando conosco e com as necessidades do condomínio.`,
    author: "Raimundo",
    title: "Zelador"
  },
  {
    text:
        `A gestão da Silvia é feita com empatia, respeito e
        equilíbrio. Mesmo nos momentos mais difíceis, ela
        mantém a calma e busca soluções justas para
        todos. Moro há mais de 30 anos no edifício e
        posso afirmar: nosso prédio sempre melhora sob
        seus cuidados, tanto na estrutura quanto na
        convivência. Ela promove união entre os
        moradores, cuida da manutenção com rigor e nos
        faz sentir parte de algo maior. Silvia não é só
        síndica. Ela transforma o condomínio em um
        verdadeiro lar coletivo.`,
    author: "Teresa Cristina",
    title: "Moradora e proprietária"
  },
  {
    text:
        `Atuar como conselheiro é muito mais eficaz quando
         temos uma síndica como a Silvia Perez. Líder preparada
          e acolhedora, ela conduz o condomínio com firmeza,
           elegância e respeito. Está sempre aberta ao diálogo
            e faz questão de incluir o conselho nas decisões
             importantes. Sua forma de administrar inspira confiança
              e fortalece a união da gestão.`,
    author: "Isabela Cristina",
    title: "Conselho"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  const handleTransition = (newIndex, dir) => {
    setIsTransitioning(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    handleTransition(newIndex, 'prev');
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex, 'next');
  };

  const goToIndex = (index) => {
    const dir = index > currentIndex ? 'next' : 'prev';
    handleTransition(index, dir);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className=" px-5 bg-white text-center">
      <h2 className="text-3xl lg:text-4xl font-light tracking-[0.2rem] lg:tracking-[0.5rem] mb-14 text-gray-800">
        DEPOIMENTOS
      </h2>

      <div className="flex flex-row items-center justify-center gap-4 lg:gap-10 max-w-6xl mx-auto relative">
        <button
          className="bg-blue-default rounded-full w-10 md:w-14 h-10 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#08304d] hover:scale-110 flex-shrink-0"
          onClick={goToPrevious}
          aria-label="Depoimento anterior"
        >
          <ChevronLeftIcon className="size-8 stroke-[2] text-white" />
        </button>

        <div className={`bg-white rounded-3xl px-8 lg:px-20 py-12 lg:py-16 max-w-3xl relative shadow-lg transition-all duration-500 ease-in-out ${
          isTransitioning
            ? `opacity-0 ${direction === 'next' ? 'translate-x-10' : '-translate-x-10'} scale-95`
            : 'opacity-100 translate-x-0 scale-100'
        }`}>
          <img
            src={Commas}
            alt='commas'
            className={`absolute -left-12 top-0 hidden lg:block transition-all duration-500 ease-in-out ${
              isTransitioning
                ? 'opacity-0 -translate-x-4 scale-90'
                : 'opacity-100 translate-x-0 scale-100'
            }`}
          />

          <p className="text-base lg:text-lg leading-relaxed text-gray-800 my-5 text-center">
            {currentTestimonial.text}
          </p>

          <div className="text-base text-gray-800 mt-5 text-center">
            <strong className="font-semibold">{currentTestimonial.author}</strong>, {currentTestimonial.title}
          </div>

          <img
            src={Commas}
            alt='commas'
            className={`absolute -right-12 -bottom-4 rotate-180 hidden lg:block transition-all duration-500 ease-in-out ${
              isTransitioning
                ? 'opacity-0 translate-x-4 scale-90'
                : 'opacity-100 translate-x-0 scale-100'
            }`}
          />
        </div>

        <button
          className="bg-blue-default rounded-full w-10 md:w-14 h-10 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#08304d] hover:scale-110 flex-shrink-0"
          onClick={goToNext}
          aria-label="Próximo depoimento"
        >
          <ChevronRightIcon className="md:size-8 size-6 stroke-[2] text-white" />

        </button>
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full border-0 cursor-pointer transition-all duration-300 p-0 hover:bg-gray-400 ${
              index === currentIndex
                ? 'bg-blue-default w-10 rounded-md'
                : 'bg-gray-300 w-3'
            }`}
            onClick={() => goToIndex(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
