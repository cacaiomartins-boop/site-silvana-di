// Motor de animação do protótipo aprovado (mesmos tempos e curvas).
// - elementos .rv entram com fade + subida quando aparecem na tela (data-d = atraso em ms)
// - cabeçalho e botão do WhatsApp mudam de cor sobre seções escuras (.dk)
// - botão flutuante do WhatsApp aparece depois do topo
// - selo giratório do topo (.gira)

type Rv = HTMLElement & { _s?: number; _ok?: number };

const DIST = 38;
const DUR = 1100;

export function startMotion(): () => void {
  const els = Array.from(document.querySelectorAll<HTMLElement>(".rv")) as Rv[];
  const top = document.getElementById("top");
  const zap = document.querySelector<HTMLElement>(".zap");
  const giras = Array.from(document.querySelectorAll<SVGElement>(".gira"));
  const pulsos = Array.from(document.querySelectorAll<HTMLElement>(".pulso"));

  const t0 = performance.now();
  let zv = 0;
  let ultN = 0;
  let raf = 0;

  function step() {
    const n = performance.now() - t0;
    const vh = window.innerHeight;

    for (const el of els) {
      if (el._ok) continue;
      if (el._s == null) {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > 0) el._s = n + (Number(el.getAttribute("data-d")) || 0);
      }
      if (el._s != null) {
        const p = Math.min(1, Math.max(0, (n - el._s) / DUR));
        const e = 1 - Math.pow(1 - p, 4);
        el.style.opacity = String(e);
        el.style.transform = `translateY(${(1 - e) * DIST}px)`;
        if (p >= 1) {
          el._ok = 1;
          el.style.transform = "none";
        }
      }
    }

    if (top) {
      if (window.scrollY > 40) top.classList.add("rola");
      else top.classList.remove("rola");
      const abaixo = document.elementFromPoint(window.innerWidth / 2, 150);
      if (abaixo && abaixo.closest(".dk")) top.classList.add("escuro");
      else top.classList.remove("escuro");
    }

    const dtn = Math.max(0, n - ultN);
    ultN = n;

    if (zap) {
      const alvo = window.scrollY > vh * 0.55 ? 1 : 0;
      zv += (alvo - zv) * Math.min(1, dtn * 0.012);
      zap.style.opacity = String(zv);
      zap.style.transform = `translateY(${(1 - zv) * 14}px) scale(${0.9 + 0.1 * zv})`;
      zap.style.pointerEvents = zv > 0.6 ? "auto" : "none";
      const sob = document.elementFromPoint(window.innerWidth - 200, window.innerHeight - 60);
      if (sob && sob.closest(".dk")) zap.classList.add("claro");
      else zap.classList.remove("claro");
    }

    for (const g of giras) g.style.transform = `rotate(${n * 0.012}deg)`;
    for (const p of pulsos) {
      const pp = (n % 2600) / 2600;
      p.style.transform = `scale(${0.6 + 1.8 * pp})`;
      p.style.opacity = String(0.55 * (1 - pp));
    }
  }

  function loop() {
    step();
    raf = requestAnimationFrame(loop);
  }
  loop();

  return () => cancelAnimationFrame(raf);
}
