const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow:{
        active: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
      },
      maxWidth: {
        '1/5': '20%',
        '1/4': '25%',
        '2/5': '40%',
        '2.25/5': '45%',
        '1/2': '50%',
        '3/4': '75%',
       },
      maxHeight: {
        '1/10': '10%',
        '1/4': '25%',
        '2/5': '40%',
        '2.25/5': '45%',
        '1/2': '50%',
        '3/4': '75%',
       },
       colors: {
        blue: {
          primary: '#4E4BDF'
        }
       },
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      boxShadow:['active'],
    }
  },
  plugins: [],
}
