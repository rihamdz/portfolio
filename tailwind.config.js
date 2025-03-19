/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'main-green': '#4C585B', 
        'main-bel': '#7E99A3',
        'main-yellow': '#FAAD1B',
        'text-color':'#21243D',
      },
      fontFamily: {
        aleo: ['Aleo', 'serif'],
        heebo: ['Heebo', 'sans-serif'],
        hurricane: ['Hurricane', 'sans-serif'], 
        
      },
      keyframes: {
        scrollText: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'scroll': 'scrollText 50s linear infinite',
      }
    },
  },
  plugins: [],
}

