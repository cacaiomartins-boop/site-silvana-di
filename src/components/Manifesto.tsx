import { Fragment } from "react";
import { clinic } from "../data/clinic";
import { Hex, Ondas } from "./Icons";

export default function Manifesto() {
  const m = clinic.manifesto;
  return (
    <section className="manifesto dk grain" id="manifesto">
      <div className="deco dm">
        <Hex size={520} sw={1.0} />
      </div>
      <div className="deco dm2">
        <Ondas w={300} h={138} />
      </div>
      <div className="wrap">
        <div className="mtopo rv">
          <span>{m.rotulo}</span>
          <i></i>
          <span>{clinic.nome.toUpperCase()}</span>
        </div>
        <p className="mfrase rv" data-d={150}>
          {m.antes}
          <em>{m.destaque}</em>
          {m.depois}
        </p>
        <p className="msub rv" data-d={300}>
          {m.sub}
        </p>
        <p className="mvalores rv" data-d={450}>
          {m.valores.map((v, i) => (
            <Fragment key={v}>
              {i > 0 && <b>◆</b>}
              {v}
              {i < m.valores.length - 1 && " "}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
