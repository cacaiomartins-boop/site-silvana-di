import { clinic } from "../data/clinic";
import { Aneis, Hex, Ramo } from "./Icons";
import { CabSec, Titulo } from "./Parts";

export default function Temas() {
  const t = clinic.temas;
  return (
    <section className="temas n1" id="temas">
      <div className="deco dt">
        <Ramo w={260} h={468} />
      </div>
      <div className="deco dt2">
        <Aneis size={240} />
      </div>
      <div className="wrap">
        <CabSec n="02" label={t.rotulo}>
          <Titulo antes={t.tituloAntes} destaque={t.tituloDestaque} depois={t.tituloDepois} />
        </CabSec>
        <ol className="tgrid" style={{ ["--tch" as string]: "185px" }}>
          {t.lista.map((nome, i) => (
            <li className="tcard rv" data-d={(i % 4) * 90} key={nome}>
              <span className="tsim">
                <Hex size={54} sw={1.1} />
              </span>
              <i>{String(i + 1).padStart(2, "0")}</i>
              <b>{nome}</b>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
