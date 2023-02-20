/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Prompt"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
};
