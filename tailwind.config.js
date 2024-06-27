/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // src klasörü içindeki tüm html ve js dosyaları
    "./*.{html,js}", // kök dizindeki tüm html ve js dosyaları
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "rose-white": "#faf6f9",
        eggshell: "#f3e6d8",
        "light-grey": "#d5d0cd",
        "wenge-brown": "#382e2c",
        "dark-charcoal": "#231d1a",
      },
    },
  },
  plugins: [],
};
