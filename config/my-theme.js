const colors = require('./colors');
const typography = require('./typography');
const sizes = require('./sizes');
const animation = require('./animation');

const myTheme = {
  ...typography,
  ...colors,
  ...sizes,
  ...animation,
};

module.exports = myTheme;
