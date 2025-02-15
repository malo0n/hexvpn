import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontSize: {
        titleH1: [
          "64px",
          {
            lineHeight: "120%",
            fontWeight: "700",
            letterSpacing: "0.02em",
          },
        ],
        titleH2: [
          "44px",
          {
            lineHeight: "100%",
            fontWeight: "700",
            letterSpacing: "0.02em",
          },
        ],
        subtitle1: [
          "32px",
          {
            lineHeight: "100%",
            fontWeight: "700",
            letterSpacing: "0.02em",
          },
        ],
        subtitle2: [
          "24px",
          {
            lineHeight: "100%",
            fontWeight: "500",
            letterSpacing: "0.02em",
          },
        ],
        mainText: [
          "16px",
          {
            lineHeight: "100%",
            fontWeight: "500",
            letterSpacing: "0.02em",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
