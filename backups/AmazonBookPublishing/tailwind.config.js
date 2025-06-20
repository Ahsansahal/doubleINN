/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    // screens: {
    //   '2xl': { 'min': '1921px' },
    //   'xl': { 'min': '1440px', 'max': '1920px' },
    //   'lg': { 'min': '1024px', 'max': '1449px' },
    //   'md': { 'min': '768px', 'max': '1023px' },
    //   'sm': { 'min': '640px', 'max': '767px' },
    //   'xs': { 'min': '300px', 'max': '639.5px' },

    // },
    // container: {
    //   center: true,
    //   xs: '320px',
    //   padding: "0.5rem",
    // },
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      fontFamily: {
        'sans': ['var(--font-primary)', 'sans-serif'],
        'secondary': ['var(--font-sfprodisplay)', 'sans-serif'],
      },
      screens: {
          '2xl': { 'min': '1921px' },
          'xl': { 'min': '1440px', 'max': '1920px' },
          'lg': { 'min': '1024px', 'max': '1449px' },
          'md': { 'min': '768px', 'max': '1023px' },
          'sm': { 'min': '640px', 'max': '767px' },
          'xs': { 'min': '300px', 'max': '639.5px' },
      },
      container: {
        center: true,
        padding: "0.5rem",
      },
      // flexBasis: {
      //   '1/7': '14.2857143%',
      //   '2/7': '28.5714286%',
      //   '3/7': '42.8571429%',
      //   '4/7': '57.1428571%',
      //   '5/7': '71.4285714%',
      //   '6/7': '85.7142857%',
      // },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
