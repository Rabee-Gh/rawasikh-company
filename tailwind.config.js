/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        brand: {
          teal:    '#00BFA5',
          tealDark:'#00897B',
          tealLight:'#E0F7F4',
          orange:  '#E8621A',
          orangeLight: '#FFF3EC',
          dark:    '#1A2332',
          gray:    '#F7F9FC',
          text:    '#2D3748',
          muted:   '#718096',
          border:  '#E2E8F0',
          white:   '#FFFFFF',
        }
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      boxShadow: {
        'teal-sm': '0 4px 20px rgba(0,191,165,0.15)',
        'teal-md': '0 8px 40px rgba(0,191,165,0.25)',
        'teal-lg': '0 16px 60px rgba(0,191,165,0.35)',
        'card':    '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-right':'slideRight 0.6s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'float':      'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'spin-slow':  'spin 12s linear infinite',
        'pulse-teal': 'pulseTeal 2.5s ease-in-out infinite',
        'draw':       'draw 1.5s ease forwards',
        'shimmer':    'shimmer 2s infinite',
        'bounce-soft':'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity:'0', transform:'translateY(30px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        fadeIn:    { '0%': { opacity:'0' }, '100%': { opacity:'1' } },
        slideRight:{ '0%': { opacity:'0', transform:'translateX(-30px)' }, '100%': { opacity:'1', transform:'translateX(0)' } },
        slideLeft: { '0%': { opacity:'0', transform:'translateX(30px)' }, '100%': { opacity:'1', transform:'translateX(0)' } },
        float:     { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-12px)' } },
        pulseTeal: { '0%,100%': { boxShadow:'0 0 0 0 rgba(0,191,165,0.4)' }, '50%': { boxShadow:'0 0 0 12px rgba(0,191,165,0)' } },
        draw:      { '0%': { strokeDashoffset:'1000' }, '100%': { strokeDashoffset:'0' } },
        shimmer:   { '0%': { backgroundPosition:'-200% 0' }, '100%': { backgroundPosition:'200% 0' } },
        bounceSoft:{ '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-6px)' } },
      },
    },
  },
  plugins: [],
}
