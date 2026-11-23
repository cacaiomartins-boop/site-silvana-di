/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  // O visual vem do CSS do protótipo aprovado (src/index.css), que já tem o próprio reset.
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
};
