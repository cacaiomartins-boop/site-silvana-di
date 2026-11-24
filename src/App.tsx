import { useEffect } from "react";
import { startMotion } from "./motion/motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Faixa from "./components/Faixa";
import Manifesto from "./components/Manifesto";
import Sobre from "./components/Sobre";
import Temas from "./components/Temas";
import Passos from "./components/Passos";
import Atendimento from "./components/Atendimento";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ZapFloat from "./components/ZapFloat";

export default function App() {
  useEffect(() => startMotion(), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Faixa />
        <Manifesto />
        <Sobre />
        <Temas />
        <Passos />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
      <ZapFloat />
    </>
  );
}
