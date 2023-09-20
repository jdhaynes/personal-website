import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "material-green": "#cce590",
        "material-cyan": "#9dd8fa",
        "material-magenta": "#C839C5",
        "material-yellow": "#FFFA72",
        "material-red": "#FF5252",
        "material-blue": "#40C4FF",
        "material-gray": "#283237",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        cursor: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
