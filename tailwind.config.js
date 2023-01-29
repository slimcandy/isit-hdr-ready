/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "color(display-p3 0.3786 0 0.4337)",
        "light-purple": "color(display-p3 0.4928 0 0.4137)",
        "light-pink": "color(display-p3 0.514 0 0.4262)",
        "light-amber": "color(display-p3 1 0.8861 0.7734)",
        "toxic-pink": "color(display-p3 0.8877 0 0.585)",
        "dark-blue": "color(display-p3 0.0843 0 0.254)",
      },
    },
  },
  plugins: [],
};
