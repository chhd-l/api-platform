module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: '#6CA100',
      black: '#0B121C',
      white: '#FFFFFF',
      gray: {
        400: '#CCCCCC',
      },
    },

    extend: {
      width: {
        am275: '275px',
        am1200: '1200px',
      },
      height: {
        am70: '70px',
        18: '300px',
      },
      fontSize: {
        am12: '12px',
        am16: '16px',
        am26: '26px',
      },
      margin: {
        am_19: '19%',
      },
      textColor: {
        am_568300: '#568300',
        am_373737: '#373737',
        am_333333: '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
