
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': "2050px",
      },
      minWidth:{
        "about": "500px",
        "characterSheet": "650px",
      },
      maxWidth:{
        "stat": "9rem",
        "characterSheet": "1000px",
        "modal": "28rem"
      },
      gridTemplateRows: {
        'layout': 'auto minmax(1020px, 1fr) auto',
      },
      gridTemplateColumns: {
        "splash": "minmax(200px, 1fr) minmax(500px, 5fr)",
        "characterBody": "repeat(4, minmax(155px,250px))"
      },
      colors: {
        'myred': "#b00002"
      },
      maxHeight: {
        "desc": "250px",
        "traits": "16rem",
      },
      minHeight: {
        "traits": "8rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
