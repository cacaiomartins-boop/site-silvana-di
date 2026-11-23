import { clinic, linkWhatsapp } from "../data/clinic";
import { Hex } from "./Icons";

export default function Header() {
  return (
    <header className="top" id="top">
      <div className="wrap">
        <a className="marca" href="#topo">
          <Hex size={52} sw={1.3} />
          <span>
            <b style={{ fontSize: 28 }}>{clinic.nome}</b>
            <small>{clinic.profissao}</small>
          </span>
        </a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#temas">Temas</a>
          <a href="#atendimento">Atendimento</a>
        </nav>
        <a className="btn pri peq" href={linkWhatsapp()}>
          <span>
            Agendar<span className="so-pc"> conversa</span>
          </span>
        </a>
      </div>
    </header>
  );
}
