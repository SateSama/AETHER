/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aether: {
          void: "#040406",
          obsidian: "#0A0B10",
          spectral: "#00F5B8",
          crimson: "#FF2A55",
          gold: "#C5A869",
          tomb: "#141620"
        }
      },
      fontFamily: {
        gothic: ["Cinzel", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
}
