import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        card: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sbackground: "var(--sbackground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        card: {
          title: "var(--card-title)",
          subtitle: "var(--card-subtitle)"
        },
        input: {
          placeholder: "var(--input-placeholder)"
        }
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
