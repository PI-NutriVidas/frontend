/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '500px',
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
      colors: {
        azul_escuro: '#01233F',
        verde_escuro: '#014040',
        verde_neutro: '#02735E',
        verde_claro1: '#03A678',
        verde_claro2: '#92D94D',
      },
    },
    
  },
  plugins: [],
}

