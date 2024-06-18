/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-900': '#49170E',
        'brown-800': '#8b4513',
      },
      fontFamily: {
        calistoga: ['Calistoga', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
