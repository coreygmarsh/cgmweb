/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        golden: '#FFD700', // Example golden color
      },
      boxShadow: {
        'sparkle': '0 0 8px 2px rgba(2, 232, 171, 1)', // Example shadow
      },
      fontFamily: {
        'custom': ['YourCustomFont', 'sans-serif'],
        'customtwo': ['YourCustomFont2', 'sans-serif'],
        'customthree': ['YourCustomFont3', 'sans-serif'],
        'customfour': ['YourCustomFont4', 'sans-serif'],
        'customfive': ['YourCustomFont5', 'sans-serif'],
        'customsix': ['YourCustomFont6', 'sans-serif'],
        'customseven': ['YourCustomFont7', 'sans-serif'],
        'customeight': ['YourCustomFont8', 'sans-serif'],
        'customnine': ['YourCustomFont9', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%, 100%': {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #28827e, 0 0 30px #28827e, 0 0 40px #28827e, 0 0 50px #28827e, 0 0 60px #28827e',
          },
          '50%': {
            textShadow: '0 0 2px #fff, 0 0 3px #fff, 0 0 5px #28827e, 0 0 5px #28827e, 0 0 5px #28827e, 0 0 10px #28827e, 0 0 15px #28827e',
          },
        },
        slideIn: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: 'none' },
          '50%': { textShadow: '0 0 8px rgba(255, 255, 255, 0.7)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite alternate',
        slideIn: 'slideIn 10s infinite linear',
        glow: 'glow 5s infinite',
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};
