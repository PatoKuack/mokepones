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
          light: '#011818', //cyan negro
          DEFAULT: '#011818',
          dark: '#E7F4F4', //cyan blanco
        },
        'background': {
          light: '#bfdbfe', //azul claro
          DEFAULT: '#bfdbfe',
          dark: '#1e40af', //azul oscuro
        },
        'primary': {
          light: '#9EEDD6', //verde pepita
          DEFAULT: '#9EEDD6',
          dark: '#3AA6B9', //azul aqua medio oscuro
        },
        'secondary': {
          light: '#F7F2D6', //naranja claro
          DEFAULT: '#FFCBFA', //rosa claro
          dark: '#FF9EAA', //rojo claro
        },
        'tertiary': {
          light: '#EEEDE5', //naranja-amarillo claro
          DEFAULT: '#EEEDE5',
          dark: '#FFD0D0', //rojo claro
        },
        'quaternary': {
          light: '#BBBBAD', //amarillo claro opaco
          DEFAULT: '#FFF858', //amarillo Simpson
          dark: '#C1ECE4', //azul aqua claro
        },
        'link': {
          light: '#721aec', //morado fuerte
          DEFAULT: '#721aec',
          dark: '#caa7fa', //morado claro
        },
        'shadow': {
          light: '#1f212220', //azul oscuro transparente
          DEFAULT: '#1f2122b0',
          dark: '#1f212280', //azul oscuro medio-transparente
        },
        'alternative-yellow': '#E5D371', //naranja-amarillo
        'transparent-dark': '#00000026', //rojo ocuro transparente
      },
      backgroundImage: {
        'principal-img': "url('/src/assets/front_img.png')",
      }
    },
  },
  plugins: [],
}