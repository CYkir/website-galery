/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto Condensed', 'sans-serif'],
        Kreon: ['Kreon', 'serif'],
        saurce: ['Source Sans 3', 'sans-serif'],
        Gasoek : ['Gasoek One', 'sans-serif']
      },
      width: {
        'profil': '26.8125rem',
      },

      screens: {
        'hp' : '320px',
      },

      colors : {
        ungu :  '#B973FF', // a green color
        akir : '#D59FFF',
      }
      

    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],



}