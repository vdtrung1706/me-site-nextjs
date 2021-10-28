const myTheme = require('./config/my-theme');

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      ...myTheme,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
