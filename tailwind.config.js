/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      opacity: {
        '42': '.42',
      },
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
