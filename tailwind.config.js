/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
        Inter: ['Inter'],
        Fraunces: ['Fraunces'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        blob: 'blob 7s infinite',
        slideDown: 'slideDown 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        slideDown: {
          '0%': { transform: 'translate(0px, -80px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        }
      },
    },
  },
  plugins: [],
};
