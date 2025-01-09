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
        foreground: "var(--foreground)",
        primaryColor: "#C61618",
        secondaryColor: "#EDA72B",
      },
      backgroundSize: {
        "50": "80px",
        "16": "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
