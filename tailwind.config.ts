import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F5F0",
        surface: "#FFFFFF",
        "surface-warm": "#FAF8F5",
        "surface-muted": "#EFECE4",
        border: {
          light: "#E4DFD5",
          DEFAULT: "#D5CFBF",
          dark: "#1E3347",
        },
        navy: {
          900: "#071422",
          800: "#0B1F33",
          700: "#132E4A",
          600: "#1D4165",
          500: "#2B5A87",
        },
        charcoal: {
          900: "#111111",
          800: "#1F1F1F",
          700: "#333333",
          600: "#555555",
          500: "#777777",
          400: "#999999",
        },
        accent: {
          DEFAULT: "#C89B3C",
          hover: "#B5872A",
          light: "#F5ECD7",
          dark: "#9E7420",
          subtle: "rgba(200, 155, 60, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.02em",
        wider: "0.06em",
        widest: "0.12em",
      },
      lineHeight: {
        editorial: "1.15",
      },
    },
  },
  plugins: [],
};
export default config;
