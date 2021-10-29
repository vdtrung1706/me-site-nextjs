const colors = require('./colors');
const typography = require('./typography');
const sizes = require('./sizes');

const myTheme = {
  ...typography,
  ...colors,
  ...sizes,
};

module.exports = myTheme;
