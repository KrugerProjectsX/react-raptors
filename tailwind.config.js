/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6bb2f3',
        primary2: '#53a7f5',
        secondary: '#112e5f',
        accent: '#48BB78',
        error: '#c53254',
        warning: '#F6E05E',
        success: '#68D391',
      },
    },
  },
  plugins: [],
}