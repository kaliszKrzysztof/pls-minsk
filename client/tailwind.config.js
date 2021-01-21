// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false, // 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      green: colors.green,
      gray: colors.trueGray,
      blue: colors.lightBlue,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'odd'],
    },
  },
  plugins: [],
};
