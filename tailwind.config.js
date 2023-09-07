/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto'],
        'Inter': ['Inter']
      }
    },
  },
  plugins: [],
}

