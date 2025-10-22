import Benefits from "./sections/benefits";
import Cta from "./sections/cta";
import Fac from "./sections/fac";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Proposal from "./sections/proposal";
import Testimonials from "./sections/testimonials";
import WhatsApp from "./assets/whatsapp.svg"

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <main className="flex flex-col gap-20 pt-20">
        <Hero />
        <div id="sobre-nos">
          <Proposal />
        </div>
        <div id="servicos">
          <Benefits />
        </div>
        <div id="depoimentos">
          <Testimonials />
        </div>
        <div id="duvidas">
          <Fac />
        </div>
        <div id="contato">
          <Cta />
        </div>
        <Footer />
      </main>
      <img src={WhatsApp} alt="whatsapp_button" className="size-16 cursor-pointer fixed bottom-8 right-8 hover:opacity-90" />
    </div>
  )
}

export default App