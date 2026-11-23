import { clinic, linkWhatsapp } from "../data/clinic";
import { Aneis, Hex } from "./Icons";
import { Eyebrow, Ornamento, Titulo } from "./Parts";

export default function Contato() {
  const c = clinic.contato;
  return (
    <section className="contato n1" id="contato">
      <div className="painel-contato grain dk">
        <div className="wrap duas">
          <div className="txt">
            <Eyebrow n="06" label={c.rotulo} />
            <Titulo antes={c.tituloAntes} destaque={c.tituloDestaque} />
            <Ornamento />
            <p className="rv" data-d={200}>
              {c.texto}
            </p>
            <div className="bts rv" data-d={300}>
              <a className="btn luz" href={linkWhatsapp()}>
                {c.botao}
              </a>
            </div>
          </div>
          <div className="infos">
            <div className="mapa-card sel-online rv" data-d={250}>
              <Aneis size={380} />
              <span className="pin-centro">
                <Hex size={72} sw={1.2} />
              </span>
              <div className="mtag">
                <b>{c.selo.titulo}</b>
                <span>{c.selo.legenda}</span>
              </div>
            </div>
            {c.infos.map((i) => (
              <div className="info" key={i.rotulo}>
                <small>{i.rotulo}</small>
                <b>{i.valor}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
