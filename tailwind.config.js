/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E9F5DB',
          200: '#CFE1B9',
          300: '#B5C99A',
          400: '#97A97C',
          500: '#87986A',
          600: '#718355',
        },
      },
    },
  },
  plugins: [],
}