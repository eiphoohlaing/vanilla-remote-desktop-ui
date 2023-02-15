/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "sans":["Euclid-Circular-A"]
      },
      outlineWidth:{
        3:'3px',
      }
    },
  },
  plugins: [],
}
