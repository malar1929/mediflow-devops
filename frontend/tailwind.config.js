/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f1ff',
          500: '#0ea5e9',
          700: '#0369a1',
        },
        accent: {
          500: '#10b981',
          600: '#059669',
        },
        danger: '#ef4444',
        warning: '#f59e0b',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
