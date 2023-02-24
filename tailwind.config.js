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
      'Gray/Dark': '#777777',
      'Gray/Light': '#EEEEEE',
      'Gray/Lightest': '#f9f9f9',
      'Secondary/VeryVeryLight': '#E4E9EC',
      'Annotations/Success': '#66CB9F',
      'Annotations/Error': '#F16063',
      neutral: colors.neutral,
    },
    extend: {
      boxShadow: {
        header: '0 3px 50px -1px rgba(50, 50, 71, 0.05)',
        card: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px rgba(12, 26, 75, 0.24)',
      },
      height: {
        main: 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [require('tailwindcss/colors')],
};
