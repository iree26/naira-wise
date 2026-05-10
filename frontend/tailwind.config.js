/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0E1A',
        surface: '#111827',
        'surface-light': '#1F2937',
        accent: '#00C896',
        'accent-dim': '#00A77E',
        gold: '#F5B800',
        text: '#E5E7EB',
        muted: '#6B7280',
        border: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}