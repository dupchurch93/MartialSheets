
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth:{
        "about": "500px",
        "characterSheet": "650px"
      },
      gridTemplateRows: {
        'layout': 'auto minmax(1020px, 1fr) auto',
      },
      gridTemplateColumns: {
        "splash": "minmax(200px, 1fr) minmax(500px, 5fr)",
        "characterHeader": "repeat(5, minmax(120px,1fr))",
        "characterBody": "repeat(4, minmax(150px,1fr))"
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
