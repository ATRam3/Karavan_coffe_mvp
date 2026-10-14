/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        roast: {
          DEFAULT: '#2C1A1D',
          deep: '#1A1817',
          brown: '#3D2314',
        },
        crema: {
          DEFAULT: '#D4A373',
          dark: '#C68B59',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          warm: '#FAEDCD',
        },
        ink: {
          DEFAULT: '#1E1E1E',
          taupe: '#2B2D42',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(44, 26, 29, 0.25)',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '30%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-14px) scaleX(1.4)', opacity: '0' },
        },
        toastIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        steam: 'steam 2.4s ease-in-out infinite',
        toast: 'toastIn 0.3s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
