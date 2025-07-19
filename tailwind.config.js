/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // THIS IS CRITICAL
  ],
  theme: {
    extend: {
      colors:{
        skyblue: '#50D0F0',
        darkbg: '#020415'
      }
    },
  },
  plugins: [],
}
