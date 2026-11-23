import { clinic } from "../data/clinic";
import { Aneis, Icone, Ondas } from "./Icons";
import { CabSec, Titulo } from "./Parts";

export default function Passos() {
  const p = clinic.passos;
  return (
    <section className="passos n3" id="como-funciona">
      <div className="deco dp">
        <Ondas w={320} h={147} />
      </div>
      <div className="deco dp2">
        <Aneis size={220} />
      </div>
      <div className="wrap">
        <CabSec n="03" label={p.rotulo}>
          <Titulo antes={p.tituloAntes} destaque={p.tituloDestaque} />
        </CabSec>
        <ol className="pgrid">
          {p.lista.map((passo, i) => (
            <li className="passo rv" data-d={i * 120} key={passo.titulo}>
              <span className="pnum">{String(i + 1).padStart(2, "0")}</span>
              <span className="pic">
                <Icone nome={passo.icone} size={26} />
              </span>
              <h3>{passo.titulo}</h3>
              <p>{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
