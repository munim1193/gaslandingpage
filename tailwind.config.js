module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'zen-dots': ['"Zen Dots"', 'cursive'],
        'normal': ['"Arial"', 'sans-serif'], // Replace "Arial" with the desired normal font
      },
    },
  },
  plugins: [],
};
