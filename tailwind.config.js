/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#f9f5f0',
        'blush': '#f8edeb',
        'rose': '#e8cfc1',
        'champagne': '#d8b4a0',
        'cocoa': '#3e3232',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        cinzel: ['"Cormorant Garamond"', 'serif'], /* Fallbacks */
        ballet: ['"Cormorant Garamond"', 'serif'],
        windsong: ['"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
}
