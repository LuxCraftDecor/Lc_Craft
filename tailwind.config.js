/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'decor':{
          100: '#EB455F',
          200: '#FAFAFA',
          300: '#DBCC95',
          400: '#CD8D7A'
        }
      }
    },
  },
  plugins: [],
}

