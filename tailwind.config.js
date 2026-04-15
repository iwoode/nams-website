/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E5A27',
          50: '#f0f7ee',
          100: '#d8edcf',
          200: '#b1db9f',
          300: '#7fc46a',
          400: '#55a83e',
          500: '#3d7534',
          600: '#2E5A27',
          700: '#254a1e',
          800: '#1c3917',
          900: '#132810',
        },
        accent: {
          DEFAULT: '#FFC857',
          light: '#ffd47a',
          dark: '#e6a520',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
