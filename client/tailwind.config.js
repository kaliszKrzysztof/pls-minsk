// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
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
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'odd'],
    },
  },
  plugins: [],
};
