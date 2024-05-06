/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //a nice little charcuterie board of colours
      colors: {
        brown: {
          mandarin: '#DD7230',
          coffee: '#854D27',
        },
        black: {
          raisin: '#2E1F27',
        },
        yellow: {
          cheddar: '#F4C95D',
          camembert: '#FFFDDC',
        },
        white: {
          champaigne: '#FFFEE9',
        }
      }
    },
  },
  plugins: [],
}