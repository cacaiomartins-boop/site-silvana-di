import { clinic } from "../data/clinic";
import { Aneis, Ramo } from "./Icons";
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
        <ol className="tgrid tdesc">
          {t.lista.map((tema, i) => (
            <li className={`tcard rv t${i + 1}`} data-d={(i % 3) * 90} key={tema.titulo}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              <b>{tema.titulo}</b>
              <p>{tema.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
