import { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Fac = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Por que contratar um síndico profissional pode ser a melhor escolha para meu condomínio?",
      answer: 
        `Um síndico profissional traz experiência,
        organização e imparcialidade. Ao contrário
        de síndicos moradores, ele não está
        envolvido em conflitos internos, facilitando
        decisões técnicas, econômicas e legais.
        Com a Das Haus, você conta com uma
        gestão comprometida com resultados, foco
        em economia, transparência nas contas e
        valorização do seu patrimônio.`
    },
    {
      question: "Como a Das Haus garante que o dinheiro do condomínio está sendo bem utilizado?",
      answer: 
        `A prestação de contas é feita mensalmente,
        com relatórios claros, acessíveis a todos os
        condôminos. Utilizamos plataformas
        digitais e reuniões periódicas para explicar
        cada gasto, planejar investimentos e
        mostrar onde cada centavo está sendo
        aplicado.`
    },
    {
      question: "O síndico profissional é caro? Isso cabe no orçamento do meu condomínio?",
      answer:
        `O custo de um síndico profissional varia
        conforme o tamanho e complexidade do
        condomínio, mas ele não é um gasto, é um
        investimento. Com gestão eficiente,
        evitamos desperdícios, corrigimos falhas
        que geraram prejuízos e otimizamos os
        contratos com fornecedores.`
    },
    {
      question: "Meu condomínio é pequeno. A Das Haus atende esse perfil também?",
      answer: 
       `Sim! Atendemos desde pequenos edifícios
        com poucos apartamentos até grandes
        complexos residenciais. Acreditamos que
        todo condomínio merece uma gestão
        profissional, independente do porte.`
    },
    {
      question: "Mesmo com problemas sérios, ainda dá tempo de trocar a gestão do condomínio?",
      answer: 
        `Sim! Muitos clientes nos procuraram após
        enfrentarem situações críticas, como
        fraudes, abandono ou desorganização. A
        Das Haus pode ajudar desde o diagnóstico
        até o processo de transição, com
        orientação detalhada do que ser feito.`
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Decorative line */}

        {/* Title */}
        <h2 className="text-3xl font-light text-center mb-12 tracking-widest lg:tracking-wider">
          DÚVIDAS COMUNS
        </h2>

        {/* FAQ Items */}
        <div className="">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Divider */}
              {index > 0 && <div className="border-t border-gray-200"></div>}

              {/* FAQ Item */}
              <div className="py-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-start text-left gap-4 group"
                >
                  <span className="text-md font-semibold tracking-wider">
                    {faq.question}
                  </span>
                  <ChevronDownIcon className={`size-6 text-gray-200 stroke-[2] ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-md text-gray-200 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom divider */}
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Fac;
