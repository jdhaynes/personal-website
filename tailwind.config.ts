import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            "code::before": {
              content: "jj",
            },
            "code::after": {
              content: "",
            },
          },
        },
      }),
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        ubuntu: ["Ubuntu Mono", "monospace"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        "material-green": "#cce590",
        "material-cyan": "#9dd8fa",
        "material-magenta": "#C839C5",
        "material-yellow": "#FFFA72",
        "material-red": "#FF5252",
        "material-blue": "#40C4FF",
        "material-gray": "#283237",
        stone: "#f7f5f3",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        cursor: "blink 1s 3",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
