import { clinic, linkWhatsapp } from "../data/clinic";
import { Hex } from "./Icons";

export default function Footer() {
  const r = clinic.rodape;
  return (
    <footer className="rodape dk grain">
      <div className="wrap">
        <div className="rtop">
          <div className="rl">
            <Hex size={46} sw={1.2} />
            <span>
              <b>{clinic.nome}</b>
              <small>
                {clinic.profissao} · {clinic.registro}
              </small>
            </span>
          </div>
          <a className="btn luz peq" href={linkWhatsapp()}>
            {r.botao}
          </a>
        </div>
        <div className="rcols">
          <div className="rc">
            <h3>Navegação</h3>
            <ul>
              {r.navegacao.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.rotulo}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rc">
            <h3>Temas</h3>
            <ul>
              {r.temas.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rc">
            <h3>Contato</h3>
            <ul>
              {r.contato.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="urg">{r.emergencia}</p>
        <div className="rbase">
          <p>
            © {new Date().getFullYear()} · {clinic.nome} · {clinic.registro}
          </p>
          {clinic.emPrevia && <p className="previa">{r.avisoPrevia}</p>}
        </div>
      </div>
    </footer>
  );
}
