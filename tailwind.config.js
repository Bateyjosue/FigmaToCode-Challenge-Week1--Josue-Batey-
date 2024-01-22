/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#3A8EF6',
      'primary-light': '#1678F2',
      'primary-dark': '031432',
      'iris':'#A5A6F6',
      'secondary': '#5FD3BD',
      'gray': '#C4C4C4',
      'white': '#fff',
      'dark-gray': '#F2F7FF'
    }
  },
  plugins: [],
}

