/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

