import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter Tight"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "#FAFAFA",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F0F1F5",
          300: "#E1E3EA",
        },
        ink: {
          DEFAULT: "#0F0817",
          900: "#050309",
          800: "#0F0817",
          700: "#1F1530",
          500: "#4D425C",
          400: "#6E6080",
        },
        // "jade" keeps its token name for minimal churn — now electric violet
        jade: {
          50: "#F3EDFF",
          100: "#E0D0FF",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          900: "#3B1378",
        },
        // "ember" keeps its token name — now hot magenta
        ember: {
          50: "#FFE4EC",
          200: "#FFA8BC",
          400: "#FF5C7E",
          500: "#FF1744",
          600: "#E50034",
          700: "#B30028",
        },
        // new accent for "live/online" dots and electric highlights
        neon: {
          50: "#E6FFF4",
          100: "#C2FFE0",
          400: "#5CFF9E",
          500: "#00E676",
          600: "#00C261",
          700: "#009947",
        },
        brand: {
          // legacy aliases now mirror the electric violet scale
          50: "#F3EDFF",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
      },
      letterSpacing: {
        tighter2: "-0.045em",
      },
      boxShadow: {
        paper: "0 1px 0 rgba(15,8,23,0.06), 0 8px 24px -12px rgba(15,8,23,0.18)",
        card: "0 1px 0 rgba(15,8,23,0.08), 0 24px 48px -24px rgba(15,8,23,0.25)",
        ink: "0 12px 32px -12px rgba(124,58,237,0.50)",
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.059 0 0 0 0 0.031 0 0 0 0 0.090 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        ticker: "ticker 38s linear infinite",
        blink: "blink 1s steps(1) infinite",
        floatY: "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
