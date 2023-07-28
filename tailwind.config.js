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
        error: {
          50: "#FEF3F2",
          300: "#FDA29B",
          500: "#F04438",
          600: "#D63D32",
          700: "#B32318",
          900: "#7A271A",
        },
        shades: {
          'white': '#FFFFFF'
        }
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'code': ['Fira Code', 'monospace']
    }
  },
  plugins: [],
}

