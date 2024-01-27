/** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui';

const config = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      xl2: '1360px',
    },
    extend: {},
  },
  fontFamily: {
    custom: ['Noto Sans KR', 'sans-serif'],
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['dark', 'light'],
    darkTheme: 'dark',
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};

export default config;
