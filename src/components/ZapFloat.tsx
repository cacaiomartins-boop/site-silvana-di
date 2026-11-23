import { linkWhatsapp } from "../data/clinic";
import { WhatsappGlyph } from "./Icons";

export default function ZapFloat() {
  return (
    <a className="zap" href={linkWhatsapp()} aria-label="Agendar conversa">
      <span className="zrot">Agendar conversa</span>
      <WhatsappGlyph />
    </a>
  );
}
