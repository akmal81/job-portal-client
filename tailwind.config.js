/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3C65F5',
        secondary:'#05264E',
        dark: '#4F5E64'
      },
      fontFamily:{
        'body': ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

