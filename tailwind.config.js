/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6bb2f3',
        primaryHover: '#53a7f5',
        secondaryHover: '#0d234b',
        secondary: '#102d5e',
        errorHover: '#c53254',
        error: '#c74563',
        warning: '#F6E05E',
        success: '#07EAADD0',
      },
    },
  },
  plugins: [],
}