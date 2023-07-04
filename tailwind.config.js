/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    lineHeight: {
      p120: '120%',
      p130: '130%',
      p140: '140%',
      p150: '150%',
      p160: '160%',
      p275: '275%',
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
        'card-dark-gradiant':
          'linear-gradient(180deg, #040506 0%, rgba(4, 5, 6, 0) 100%)',
        'card-img':
          'radial-gradient(105.5% 105.5% at 50% 115.84%, #5C57AE 0%, rgba(92, 87, 174, 0) 100%)',
        'user-avatar': "url('/images/user-avatar.png')",
        'hero-gradient': "url('/images/hero-gradient.webp')",
        'hero-ecosystem-gradient':
          "url('/images/hero-ecosystem-gradient.webp')",
        'hero-standout-gradient': "url('/images/hero-standout-gradient.webp')",
        'white-gradient':
          'linear-gradient(180deg,#ffffff 0%,rgba(255, 255, 255, 0) 100%)',
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
        background: {
          dark: '#0B0C0F',
          purple: '#5355cc',
        },
        primary: {
          main: '#4452FE',
        },
        grey: {
          1: '#26272A',
          2: '#151619',
          3: '#242424',
        },
        black: {
          1: '#1E1E1E',
          2: '#040506',
        },
      },
      minWidth: {
        50: '50px',
        320: '20rem',
      },
      scale: {
        120: '1.2',
      },
      maxWidth: {
        1000: '62.5rem',
        1400: '87.5rem',
      },
      maxHeight: {
        200: '12.5rem',
      },

      borderRadius: {
        20: '20px',
      },
      fontFamily: {
        'dm-mono': ['DM Mono', 'ui-sans-serif', 'system-ui'],
        primary: ["'Sharp Grotesk'", 'sans-serif'],
        main: ['Inter', 'sans-serif'],
      },

      width: {
        15: '3.75rem',
        250: '62.5rem',
        '4-grid': 'calc(25% - 8px)',
      },
      height: {
        15: '60px',
      },
    },
  },
  plugins: [],
};
