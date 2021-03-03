
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '3': 'auto minmax(1020px, 1fr) auto',
      },
      colors: {
        'myred': "#b00002"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
