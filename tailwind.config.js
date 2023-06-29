/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'card-img' : 'radial-gradient(105.5% 105.5% at 50% 115.84%, #5C57AE 0%, rgba(92, 87, 174, 0) 100%)',
      },
      opacity: {
        42: ".42",
        16: ".16",
      },
      colors: {
        default: "#000021",
        "default-blue": "#4452FE",
        "gray-mid": "#A5A5A5",
        white: "#fff",
        skeleton: "#fff",
      },
      plugins: [],
    },
  },
};
