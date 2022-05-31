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
        am282: '282px',
        am384: '384px',
        am1200: '1200px',
      },
      height: {
        am222: '222px',
        am70: '70px',
        am148: '148px',
        18: '300px',
      },
      fontSize: {
        am12: '12px',
        am16: '16px',
        am26: '26px',
      },
      padding: {
        am20: '20px',
      },
      margin: {
        am_5: '5%',
        am_7: '7%',
        am_19: '19%',
        am_33: '33%',
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
