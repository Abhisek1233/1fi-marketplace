/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fi: {
          50: '#FAF5FF',
          100: '#F5F0FF',
          200: '#ECE5FF',
          300: '#D8C5FD',
          400: '#AC7FF9',
          500: '#8C4BF5',
          600: '#712CDC', // 1Fi Official Primary Purple
          700: '#5B24B5',
          800: '#481D8E',
          900: '#341566',
          950: '#140E32',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'fi-nav': '0 8px 32px rgba(20, 14, 50, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.18) inset',
        'fi-card': '0 2px 8px rgba(20, 14, 50, 0.05)',
        'fi-card-hover': '0 8px 24px rgba(113, 44, 220, 0.12)',
        'fi-tab': '0 1px 3px rgba(20, 14, 50, 0.10), 0 0 0 1px rgba(113, 44, 220, 0.08)',
        'fi-glow': '0 0 20px rgba(113, 44, 220, 0.25)',
      },
      animation: {
        'shimmer': 'shimmer 1.8s infinite',
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
