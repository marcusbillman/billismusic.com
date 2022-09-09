/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      orange: 'rgba(255, 119, 0, 1.0)',
      'orange/50': 'rgba(255, 119, 0, 0.5)',
      'orange/30': 'rgba(255, 119, 0, 0.3)',
      white: 'rgba(255, 255, 255, 1.0)',
      'white/50': 'rgba(255, 255, 255, 0.5)',
      'white/30': 'rgba(255, 255, 255, 0.3)',
      'white/1': 'rgba(255, 255, 255, 0.01)',
      black: 'rgba(0, 0, 0, 1.0)',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Syne', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
