/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10px'
    },
    extend: {
      colors:{
        'main': '#9E78CF'
      }
    },
  },
  plugins: [],
}

