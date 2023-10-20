/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'dark-black' : '#14161b' ,
        'dark-gray' : '#1f242b',
      }
    },
  },
  plugins: [],
}

