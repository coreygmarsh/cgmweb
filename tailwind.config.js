/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        golden: '#FFD700', // Example golden color
      },
      // You might want to add custom drop shadow styles here if needed
      boxShadow: {
        'sparkle': '0 0 8px 2px rgba(255, 215, 0, 0.5)', // Example shadow
      },

      // Define custom fonts
      fontFamily: {
        'custom': ['YourCustomFont', 'sans-serif'],
        'customtwo': ['YourCustomFont2', 'sans-serif'],
        'customthree': ['YourCustomFont3', 'sans-serif'],
        'customfour': ['YourCustomFont4', 'sans-serif'],
        'customfive': ['YourCustomFont5', 'sans-serif'],
        'customsix': ['YourCustomFont6', 'sans-serif'],

      },
      // Define all custom keyframes
      keyframes: {
        shimmer: {
          '0%, 100%': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073',
          },
          '50%': {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073, 0 0 25px #e60073, 0 0 30px #e60073, 0 0 35px #e60073',
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
      // Define all custom animations
      animation: {
        shimmer: 'shimmer 2s infinite alternate',
        slideIn: 'slideIn 10s infinite linear',
        glow: 'glow 5s infinite', // Adjusted to your requirement for glow effect
      },
    },
  },
  plugins: [],
}
