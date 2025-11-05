/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f3',
          100: '#ffe6e0',
          200: '#ffd0c4',
          300: '#ffb09d',
          400: '#ff8a6b',
          500: '#ff6b47',
          600: '#f04e2a',
        },
        sage: {
          50: '#f5f8f5',
          100: '#e8f0e8',
          200: '#d4e4d4',
          300: '#b3d1b3',
          400: '#8bb88b',
          500: '#6b9d6b',
          600: '#538253',
        },
      },
    },
  },
  plugins: [],
};
