import type { ReactNode } from "react";

type P = { size?: number; sw?: number; className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Símbolo da marca (hexágono com círculo) */
export function Hex({ size = 24, sw = 1.3, className = "" }: P) {
  return (
    <svg className={`sim ${className}`} viewBox="0 0 48 48" width={size} height={size} strokeWidth={sw} {...base}>
      <path d="M24 6l15 9v18l-15 9-15-9V15z" />
      <circle cx="24" cy="24" r="5" />
    </svg>
  );
}

function Ico({ size, children, className }: { size: number; children: ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={size} height={size} strokeWidth={1.5} {...base}>
      {children}
    </svg>
  );
}

export function Tela({ size = 18 }: P) {
  return (
    <Ico size={size}>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16.5V20" />
    </Ico>
  );
}
export function Chat({ size = 18 }: P) {
  return (
    <Ico size={size}>
      <path d="M4 5h16v10H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </Ico>
  );
}
export function Escudo({ size = 24 }: P) {
  return (
    <Ico size={size}>
      <path d="M12 3l7 3v5.5c0 4.4-3 7.7-7 9.5-4-1.8-7-5.1-7-9.5V6z" />
      <path d="M8.8 12.2l2.2 2.2 4.2-4.4" />
    </Ico>
  );
}
export function Pin({ size = 24 }: P) {
  return (
    <Ico size={size}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Ico>
  );
}
export function Calendario({ size = 26 }: P) {
  return (
    <Ico size={size}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </Ico>
  );
}
export function Coracao({ size = 26 }: P) {
  return (
    <Ico size={size}>
      <path d="M12 20s-7-4.4-7-9.6A4 4 0 0 1 12 8a4 4 0 0 1 7 2.4C19 15.6 12 20 12 20z" />
    </Ico>
  );
}

export type NomeIcone = "hex" | "tela" | "chat" | "escudo" | "pin" | "calendario" | "coracao";

export function Icone({ nome, size }: { nome: string; size: number }) {
  switch (nome) {
    case "hex":
      return <Hex size={size} sw={1.4} />;
    case "tela":
      return <Tela size={size} />;
    case "chat":
      return <Chat size={size} />;
    case "escudo":
      return <Escudo size={size} />;
    case "pin":
      return <Pin size={size} />;
    case "calendario":
      return <Calendario size={size} />;
    case "coracao":
      return <Coracao size={size} />;
    default:
      return null;
  }
}

/* ---------- desenhos de fundo ---------- */

export function Ramo({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 200 360" width={w} height={h} strokeWidth={1.4} {...base}>
      <path d="M100 352C98 270 104 170 100 40" />
      <path d="M100 300Q92 260 46 251Q54 294 100 300Z" />
      <path d="M100 300L57 260" opacity=".6" />
      <path d="M100 258Q107 221 149 214Q142 252 100 258Z" />
      <path d="M100 258L139 222" opacity=".6" />
      <path d="M100 216Q93 183 56 176Q63 211 100 216Z" />
      <path d="M100 216L65 183" opacity=".6" />
      <path d="M100 174Q106 145 139 139Q133 169 100 174Z" />
      <path d="M100 174L131 145" opacity=".6" />
      <path d="M100 132Q95 106 66 101Q71 128 100 132Z" />
      <path d="M100 132L73 107" opacity=".6" />
      <path d="M100 92Q104 70 129 66Q125 89 100 92Z" />
      <path d="M100 92L123 71" opacity=".6" />
      <path d="M100 40Q92 22 100 8Q108 22 100 40Z" />
    </svg>
  );
}

export function Aneis({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 240 240" width={size} height={size} strokeWidth={1.1} {...base}>
      {[20, 40, 60, 80, 100, 120].map((r) => (
        <circle key={r} cx="120" cy="120" r={r} />
      ))}
    </svg>
  );
}

export function Ondas({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 240 110" width={w} height={h} strokeWidth={1.4} {...base}>
      <path d="M0 20 C 40 6, 80 6, 120 20 S 200 34, 240 20" />
      <path d="M0 37 C 40 23, 80 23, 120 37 S 200 51, 240 37" />
      <path d="M0 54 C 40 40, 80 40, 120 54 S 200 68, 240 54" />
      <path d="M0 71 C 40 57, 80 57, 120 71 S 200 85, 240 71" />
      <path d="M0 88 C 40 74, 80 74, 120 88 S 200 102, 240 88" />
    </svg>
  );
}

export function WhatsappGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.47-8.41zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.9 9.9 0 0 1-1.52-5.24c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.01c0 5.48-4.45 9.93-9.94 9.93zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  );
}
