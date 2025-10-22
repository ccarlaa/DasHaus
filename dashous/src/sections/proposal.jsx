import React from "react";
import Button from "../components/button";
import ProposalDetailLeft from "../components/proposal_detail_left";
import ProposalDetailRight from "../components/proposal_detail_right";

const Proposal = () => {
    return (
        <section className="w-full bg-white flex justify-center relative px-6 lg:px-0">
            <div className="w-full max-w-[1024px] flex justify-center flex-col gap-10">
                <div className="w-full bg-gray-100 rounded-[20px] lg:rounded-[40px] p-6 lg:p-14 flex flex-col gap-12 lg:gap-20">

                    <div className="flex justify-end">
                        <div className="w-full lg:w-[640px] flex justify-center flex-col gap-6 lg:gap-10">
                            <h2 className="text-gray-200 font-bold text-lg lg:text-xl tracking-wide lg:tracking-wider text-left">Você chegou até aqui por um motivo.</h2>
                            <p className="font-medium text-gray-200 text-base lg:text-lg text-left">
                                Conflitos entre vizinhos, taxas mal explicadas, obras que nunca terminam, dinheiro sumindo do caixa, falta de transparecias, baixa participação ou uma administração sobrecarregada?
                            </p>
                            <p className="font-medium text-gray-200 text-base lg:text-lg text-left">
                                Esses são sintomas de uma gestão ineficiente que gera desgaste, desvalorização do imóvel e perda de qualidade de vida.
                                <span className="font-bold text-red-default"> Mas você não precisa mais conviver com isso.</span>
                            </p>
                            <div className="w-full lg:w-80">
                                <Button text="Resolva agora!" onClick={() => ""} />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-start">
                        <div className="w-full lg:w-[640px] flex justify-center flex-col gap-6 lg:gap-10">
                            <h2 className="text-gray-200 font-bold text-lg lg:text-xl tracking-wide lg:tracking-wider text-left">Enfrenta uma situação difícil no seu condomínio?</h2>
                            <p className="font-medium text-gray-200 text-base lg:text-lg text-left">
                                Sabemos que conviver com problemas no condomínio é desgastante. Se você está passando por isso, podemos te ajudar.                            </p>
                            <p className="font-medium text-gray-200 text-base lg:text-lg text-left">
                                A Das Haus oferece um atendimento gratuito de assessoria, analisando sua situação atual e orientando sobre os melhores caminhos para lidar com os desafios, mesmo que você ainda não seja nosso cliente.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute left-0 top-14 w-full hidden lg:block">
                <ProposalDetailLeft />
            </div>
            <div className="absolute right-0 bottom-10 hidden lg:block w-full flex justify-end lg:flex">
                <ProposalDetailRight />
            </div>
        </section>
    )
}

export default Proposal;
