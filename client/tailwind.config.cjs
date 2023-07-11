/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'print'],
      backgroundImage: ['responsive', 'hover', 'focus', 'print'],
    },
  },
  plugins: [],
}