import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        purple: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand':  'linear-gradient(135deg, #9333ea 0%, #c084fc 55%, #7c3aed 100%)',
        'gradient-brand-dark': 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #c084fc 100%)',
      },
      boxShadow: {
        'purple-sm':  '0 0 18px rgba(147,51,234,0.25)',
        'purple-md':  '0 0 36px rgba(147,51,234,0.35)',
        'purple-lg':  '0 0 72px rgba(147,51,234,0.40)',
        'card':       '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 32px rgba(147,51,234,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'inset-purple': 'inset 0 0 40px rgba(147,51,234,0.08)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%':      { transform: 'translateY(-9px) rotate(1.2deg)' },
          '66%':      { transform: 'translateY(-4px) rotate(-1deg)' },
        },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 18px rgba(147,51,234,0.28)' },
          '50%':      { boxShadow: '0 0 42px rgba(147,51,234,0.6), 0 0 80px rgba(147,51,234,0.18)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'float':       'float 6s ease-in-out infinite',
        'pulse-glow':  'pulse-glow 3s ease-in-out infinite',
        'spin-slow':   'spin-slow 22s linear infinite',
        'shimmer':     'shimmer 4s linear infinite',
      },
      borderRadius: {
        lg:   '0.5rem',
        xl:   '0.75rem',
        '2xl':'1rem',
        '3xl':'1.5rem',
        '4xl':'2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
