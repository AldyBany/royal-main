/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':'Montserrat'
      },
      colors:{
        'blue':'#111D4A',
        "orange":'#F35B04',
        'white':'#E6E8E6',
        'black':'#231F20',
        'gray':'#7C7C7C'
      }
    },
  },
  plugins: [],
}
