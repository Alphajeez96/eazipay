/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#11453B',
          black: '#292A29',
          gray: '#515251',
          red: '#EF4444'
        },

        secondary: {
          green: '#D9EBCD'
        }
      },
      fontFamily: {
        aeonik: 'Aeonik',
        mellow: 'Mellow'
      }
    }
  },
  plugins: []
}
