import { clinic } from "../data/clinic";
import { Aneis, Ondas } from "./Icons";
import { Eyebrow, Ornamento, Titulo } from "./Parts";

export default function Sobre() {
  const s = clinic.sobre;
  return (
    <section className="sobre n2" id="sobre">
      <div className="deco ds">
        <Aneis size={380} />
      </div>
      <div className="deco ds2">
        <Ondas w={240} h={110} />
      </div>
      <div className="wrap duas inv">
        <div className="foto-lado rv">
          <div className="arco-wrap">
            <div className="halo"></div>
            <div className="halo h2"></div>
            <div className="frame">
              <img src={s.foto} alt={clinic.fotoSobreAlt} width={400} height={400} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <div className="txt">
          <Eyebrow n="01" label={s.rotulo} />
          <Titulo antes={s.tituloAntes} destaque={s.tituloDestaque} depois={s.tituloDepois} />
          <Ornamento />
          {s.paragrafos.map((p) => (
            <p className="rv" data-d={0} key={p}>
              {p}
            </p>
          ))}
          <dl className="ficha rv" data-d={200}>
            {s.ficha.map((f) => (
              <div key={f.rotulo}>
                <dt>{f.rotulo}</dt>
                <dd>{f.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
