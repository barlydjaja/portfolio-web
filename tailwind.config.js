module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#166d3b',
        },
        dark: {
          DEFAULT: '#17181b',
          400: '#0e1013'
        }
      }
    },
    fontFamily: {
      'Oswald': ['Oswald', 'sans-serif'],
    },
  },
  plugins: [],
}
