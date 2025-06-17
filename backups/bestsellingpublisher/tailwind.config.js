/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-primary)', 'sans-serif'],
        'secondary': ['var(--font-sfprodisplay)', 'sans-serif'],
      },
      screens: {
        "xs": { "max": "575px" },
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "0.5rem",
      },
    },
  },
  plugins: [],
}