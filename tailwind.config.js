/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6bb2f3',
        primaryHover: '#53a7f5',
        secondaryHover: '#00114d',
        secondary: '#122375',
        errorHover: '#c53254',
        error: '#c74563',
        warning: '#F6E05E',
        success: '#07EAADD0',
      },
    },
  },
  plugins: [],
}