module.exports = {
  animation: {
    'gradient-txt': 'gradient-txt 5s linear infinite',
    'arrow-pulse': 'arrow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  keyframes: {
    'gradient-txt': {
      from: {
        '-webkit-filter': 'hue-rotate(0deg)',
      },
      to: {
        '-webkit-filter': 'hue-rotate(-360deg)',
      },
    },
    'arrow-pulse': {
      '0%': {
        opacity: 0,
      },
      '40%': {
        opacity: 0.9,
      },
      '80%': {
        opacity: 0,
      },
      '100%': {
        opacity: 0,
      },
    },
  },
};
