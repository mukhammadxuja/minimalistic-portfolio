module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--light-bg)',
        dark: 'var(--dark-bg)',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
