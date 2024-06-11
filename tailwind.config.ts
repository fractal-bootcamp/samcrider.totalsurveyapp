import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        chilling: {
          primary: "#dcdcdd",
          secondary: "#c5c3c6",
          accent: "#46494c",
          neutral: "#4c5c68",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
