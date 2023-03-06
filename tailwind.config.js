const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'custom-bold': ['My custom font bold', ...fontFamily.sans],
        'custom-regular': ['My custom font regular', ...fontFamily.sans],
      },
      colors: {
        primary: 'var(--light-bg)',
        dark: 'var(--dark-bg)',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
