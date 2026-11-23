import { clinic, linkWhatsapp } from "../data/clinic";
import { Aneis, Icone, Ondas } from "./Icons";
import { CabSec, Titulo } from "./Parts";

export default function Atendimento() {
  const a = clinic.atendimento;
  return (
    <section className="atend n2" id="atendimento">
      <div className="deco da">
        <Aneis size={320} />
      </div>
      <div className="deco da2">
        <Ondas w={220} h={101} />
      </div>
      <div className="wrap">
        <CabSec n="04" label={a.rotulo}>
          <Titulo antes={a.tituloAntes} destaque={a.tituloDestaque} />
        </CabSec>
        <div className="agrid">
          <div className="acards">
            {a.cartoes.map((c, i) => (
              <div className="acard rv" data-d={i * 110} key={c.rotulo}>
                <span className="ico">
                  <Icone nome={c.icone} size={22} />
                </span>
                <small>{c.rotulo}</small>
                <h3>{c.titulo}</h3>
                <ul>
                  {c.itens.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a className="btn out" href={linkWhatsapp()}>
                  {a.botaoCartao}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="convite rv" data-d={300}>
          <span>{a.convite}</span>
          <a className="btn pri" href={linkWhatsapp()}>
            {a.botaoConvite}
          </a>
        </div>
      </div>
    </section>
  );
}
