const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', // Just In Time
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        teal: colors.teal,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
