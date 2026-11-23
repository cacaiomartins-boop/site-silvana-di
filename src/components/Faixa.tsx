import { clinic } from "../data/clinic";
import { Icone } from "./Icons";

export default function Faixa() {
  return (
    <section className="faixa n3">
      <div className="wrap fgrid">
        {clinic.faixa.map((f, i) => (
          <div className="fi rv" data-d={i * 90} key={f.rotulo}>
            <span className="fic">
              <Icone nome={f.icone} size={24} />
            </span>
            <div>
              <span>{f.rotulo}</span>
              <b>{f.valor}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
