/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2.5rem',
      },
    },
    fontSize: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      42: '2.625rem',
      48: '3rem',
      52: '3.25rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'card-img':
          'radial-gradient(105.5% 105.5% at 50% 115.84%, #5C57AE 0%, rgba(92, 87, 174, 0) 100%)',
        'card-dark-gradiant':
          'linear-gradient(180deg, #040506 0%, rgba(4, 5, 6, 0) 100%)',
        'user-avatar': "url('/images/user-avatar.png')",
        'hero-gradient': "url('/images/hero-gradient.webp')",
        'hero-ecosystem-gradient':
          "url('/images/hero-ecosystem-gradient.webp')",
        'hero-standout-gradient': "url('/images/hero-standout-gradient.webp')",
        'white-gradient':
          'linear-gradient(180deg,#ffffff 0%,rgba(255, 255, 255, 0) 100%)',
      },
      fontFamily: {
        'dm-mono': ['DM Mono', 'ui-sans-serif', 'system-ui'],
        primary: ["'Sharp Grotesk'", 'sans-serif'],
        main: ['Inter', 'sans-serif'],
      },
      opacity: {
        42: '.42',
        16: '.16',
      },
      colors: {
        default: '#000021',
        'default-blue': '#4452FE',
        'gray-mid': '#A5A5A5',
        white: '#fff',
        skeleton: '#fff',
        grey: {
          1: '#26272A',
          2: '#151619',
          3: '#242424',
        },
      },
    },
  },
  plugins: [],
};
