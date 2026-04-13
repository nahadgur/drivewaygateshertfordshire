// tailwind.config.js - V5 Heritage Editorial
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#faf5ea',
          100: '#f5ede0',
          200: '#ede3d1',
          300: '#e0d5c0',
          400: '#b8914a',
          500: '#a88548',
          600: '#8f6d2c',
          700: '#6d5322',
          800: '#2d3344',
          900: '#1a1f2e',
          950: '#0f1420',
        },
        cream:        '#f5ede0',
        'cream-soft': '#faf5ea',
        'cream-deep': '#ede3d1',
        ink:          '#1a1f2e',
        'ink-soft':   '#2d3344',
        brass:        '#b8914a',
        'brass-deep': '#8f6d2c',
        line:         '#e0d5c0',
        'line-soft':  '#ebe0ca',
      },
      fontFamily: {
        sans:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        italic:  ['"Instrument Serif"', 'Georgia', 'serif'],
        prose:   ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'cta': '0.18em',
        'eyebrow': '0.22em',
      },
      keyframes: {
        'backdrop-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'backdrop-out': { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        'modal-in':  { '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
        'modal-out': { '0%': { opacity: '1', transform: 'scale(1) translateY(0)' }, '100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' } },
      },
      animation: {
        'backdrop-in':  'backdrop-in 0.3s ease-out',
        'backdrop-out': 'backdrop-out 0.3s ease-in',
        'modal-in':     'modal-in 0.3s ease-out',
        'modal-out':    'modal-out 0.3s ease-in',
      },
    },
  },
  plugins: [],
};
