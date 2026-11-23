import { clinic, linkWhatsapp } from "../data/clinic";
import { Hex, Icone, Ramo } from "./Icons";

export default function Hero() {
  const h = clinic.hero;
  const seloTexto = `${clinic.profissao.toUpperCase()} · ${clinic.registro} · ${clinic.cidade.toUpperCase()} · `;

  return (
    <section className="hero" id="topo">
      <div className="glow3"></div>
      <div className="gr"></div>
      <div className="ghost">
        <Hex size={640} sw={1.0} />
      </div>
      <div className="deco dh">
        <Ramo w={250} h={450} />
      </div>

      <div className="wrap hero-in">
        <div className="hero-txt">
          <span className="eb rv" data-d={120}>
            <b></b>
            <span>{h.rotulo}</span>
          </span>
          <h1 className="rv" data-d={260}>
            {h.tituloAntes}
            <em>{h.tituloDestaque}</em>
          </h1>
          <p className="sub rv" data-d={420}>
            {h.subtitulo}
          </p>
          <div className="bts rv" data-d={560}>
            <a className="btn pri" href={linkWhatsapp()}>
              {h.botaoPrincipal}
            </a>
            <a className="gl" href="#sobre">
              {h.linkSecundario}
            </a>
          </div>
          <p className="cred rv" data-d={700}>
            <b>
              {clinic.nome} · {clinic.registro}
            </b>
            <span>{h.atendimento}</span>
          </p>
          <div className="cue rv" data-d={1000}>
            <span className="seta">↓</span>
            <span>{h.dica}</span>
          </div>
        </div>

        <div className="hero-lado">
          <div className="stage rv" data-d={250}>
            <div className="dots"></div>
            <div className="arco-wrap">
              <div className="halo"></div>
              <div className="halo h2"></div>
              <div className="frame">
                <img src={clinic.foto} alt={clinic.fotoAlt} />
              </div>
              <div className="selo rv" data-d={900}>
                <svg viewBox="0 0 120 120" className="gira" aria-hidden="true">
                  <defs>
                    <path id="cselo" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1 -90 0" />
                  </defs>
                  <text>
                    <textPath href="#cselo" textLength="272" lengthAdjust="spacing">
                      {seloTexto}
                    </textPath>
                  </text>
                </svg>
                <span className="selo-c">
                  <Hex size={30} sw={1.3} />
                </span>
              </div>
            </div>
            <ul className="stack">
              {clinic.destaques.map((d, i) => (
                <li className="rv" data-d={700 + i * 130} key={d.titulo}>
                  <span className="ic">
                    <Icone nome={d.icone} size={18} />
                  </span>
                  <div>
                    <b>{d.titulo}</b>
                    <small>{d.legenda}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
