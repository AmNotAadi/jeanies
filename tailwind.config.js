/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#fff9f4',
        blush: '#fbe8eb',
        gold: '#d4b483',
        charcoal: '#2b2b2b',
        'gold-light': '#f4e4bc',
        'gold-deep': '#b8941f'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
        'sparkle': 'sparkle 0.6s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out'
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'gentle-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        },
        sparkle: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      letterSpacing: {
        'wide': '0.05em',
        'narrow': '0.02em'
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
}
