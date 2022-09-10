/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      orange: '#ff7700',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
    },
    opacity: {
      90: '0.9',
      70: '0.7',
      50: '0.5',
      30: '0.3',
    },
    backgroundImage: {
      hero: 'url("/assets/bg-hero.jpg")',
      texture: 'url("/assets/bg-texture-tiling.jpg")',
      logo: 'url("/assets/billis-logo-64.png")',
    },
    fontFamily: {
      sans: ['Syne', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
