import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#89043d',
          light: '#a3054a',
          dark: '#6c0331',
          lightest: '#f8e6ed',
        },
        gold: '#d4af37',
        cream: '#fff8e6',
        dark: '#1e1e1e',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
