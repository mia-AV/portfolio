import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8', 100: '#d9e2ec', 200: '#bcccdc', 300: '#9fb3c8',
          400: '#829ab1', 500: '#627d98', 600: '#486581', 700: '#334e68',
          800: '#243b53', 900: '#102a43', 950: '#0a1929',
        },
        accent: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      boxShadow: {
        // Ombres tamisées calibrées sur la teinte navy pour un rendu premium
        'soft': '0 1px 3px rgba(16,42,67,0.04), 0 8px 24px -12px rgba(16,42,67,0.10)',
        'soft-md': '0 4px 12px rgba(16,42,67,0.06), 0 16px 40px -16px rgba(16,42,67,0.18)',
        'soft-lg': '0 8px 30px -10px rgba(16,42,67,0.22)',
        'soft-xl': '0 24px 60px -20px rgba(16,42,67,0.30)',
        'inset-hairline': 'inset 0 0 0 1px rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'grid-navy':
          'radial-gradient(circle at 1px 1px, rgba(16,42,67,0.10) 1px, transparent 0)',
        'grid-light':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '75%, 100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'ping-slow': 'ping-slow 2.5s cubic-bezier(0,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
