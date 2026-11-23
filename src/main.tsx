import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { clinic } from "./data/clinic";

// Enquanto for prévia, pede aos buscadores para não indexar.
if (clinic.emPrevia) {
  const m = document.createElement("meta");
  m.name = "robots";
  m.content = "noindex";
  document.head.appendChild(m);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
