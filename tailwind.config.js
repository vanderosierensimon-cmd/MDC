/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canal: {
          navy: '#3D556F',
          blue: '#3D556F',
          gold: '#C6A15B',
          'gold-dark': '#A78445',
          cream: '#F5F2EB',
          sand: '#E8E2D5',
          slate: '#5A6A7A',
          charcoal: '#2E2E2E',
          mist: '#F8F7F4',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
