/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        satoshi: ['Syne', 'sans-serif'],
        inter: ['Syne', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#b9ff3b',
        accent: '#b9ff3b',
      },
    },
  },
  plugins: [],
}
