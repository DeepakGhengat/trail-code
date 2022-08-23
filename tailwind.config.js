/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "headerTexture": "url('/img/header02.svg')",
      },

      colors: {
        default: "#000021",
        defaultblue: "#4452FE",
        textgray: "#A5A5A5",
        white: "#fff",
      },
      plugins: [],
    },
  },
};
