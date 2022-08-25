/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      opacity: {
        42: ".42",
        16: ".16"
      },

      colors: {
        default: "#000021",
        defaultblue: "#4452FE",
        textgray: "#A5A5A5",
        white: "#fff",
        skeleton: "#fff",
      },
      plugins: [],
    },
  },
};
