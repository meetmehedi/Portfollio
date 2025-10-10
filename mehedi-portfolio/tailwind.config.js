module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
      },
      spacing: {
        '128': '32rem', // Custom spacing
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}