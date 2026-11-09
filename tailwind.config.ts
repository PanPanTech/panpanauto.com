import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16202a",
        paper: "#f6f4ef",
        sand: "#ebe6dc",
        line: "#d9d2c5",
        brass: {
          DEFAULT: "#9a7340",
          bright: "#c4a36a",
        },
        navy: {
          950: "#07131d",
          900: "#0c1c2b",
          800: "#143044",
          700: "#1d4660",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
