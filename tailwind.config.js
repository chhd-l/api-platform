module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: '#6CA100',
      black: '#0B121C',
    },
    extend: {
      height: {
        api70: '70px',
      },
      // color: {
      //   primaryGreen: '#6CA100',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
