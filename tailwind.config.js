/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        },
        primary: {
          500: '#FBAF3F',
        },
        shades: {
          'white': '#FFFFFF'
        }
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'code': ['Fira Code', 'monospace']
    }
  },
  plugins: [],
}

