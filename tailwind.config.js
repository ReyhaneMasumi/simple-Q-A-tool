/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#27AE60',
      white: '#FFFFFF',
      backgroundColor: '#F7F8F9',
      'Naturals/Black': '#222222',
      'Gray/Darker': '#454545',
      neutral: colors.neutral,
    },
    extend: {
      boxShadow: {
        header: '0 3px 50px -1px rgba(50, 50, 71, 0.05)',
      },
    },
  },
  plugins: [require('tailwindcss/colors')],
};
