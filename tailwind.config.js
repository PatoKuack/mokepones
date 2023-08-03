/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // dos columnas con una medida del minimo de ancho
        '2min': 'min-content min-content',
      },
      colors: {
        'font': {
          light: '#011818',
          DEFAULT: '#011818',
          dark: '#E7F4F4',
        },
        'background': {
          light: '#bfdbfe',
          DEFAULT: '#bfdbfe',
          dark: '#1e40af',
        },
        'primary': {
          light: '#9EEDD6',
          DEFAULT: '#9EEDD6',
          dark: '#3AA6B9',
        },
        'secondary': {
          light: '#F7F2D6',
          DEFAULT: '#FFCBFA',
          dark: '#FF9EAA',
        },
        'tertiary': {
          light: '#EEEDE5',
          DEFAULT: '#EEEDE5',
          dark: '#FFD0D0',
        },
        'quaternary': {
          light: '#BBBBAD',
          DEFAULT: '#FFF858',
          dark: '#C1ECE4',
        },
        'link': {
          light: '#721aec',
          DEFAULT: '#721aec',
          dark: '#caa7fa',
        },
        'shadow': {
          light: '#1f212220',
          DEFAULT: '#1f2122b0',
          dark: '#1f212280',
        },
        'alternative-yellow': '#E5D371',
        'transparent-dark': '#00000026',
      },
      backgroundImage: {
        'principal-img': "url('/src/assets/front_img.png')",
      }
    },
  },
  plugins: [],
}