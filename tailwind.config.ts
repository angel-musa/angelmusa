import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#0a1f18",
          800: "#0f2f23",
          700: "#144033",
          600: "#18523f",
          500: "#1d634b",
          400: "#227658",
          300: "#2a8a66",
          200: "#63b89a",
          100: "#a6d7c6",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}
export default config
