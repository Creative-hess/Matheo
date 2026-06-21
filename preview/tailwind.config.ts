import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-orbitron)", "monospace"],
      },
      colors: {
        "col-map":      "#a3ff00",
        "col-home":     "#00d4ff",
        "col-exit":     "#ff3d3d",
        "col-justice":  "#3d8eff",
        "col-settings": "#ffb400",
        "col-purple":   "#b44dff",
        "bg-base":      "#090b10",
      },
    },
  },
};

export default config;
