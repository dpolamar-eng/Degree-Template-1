/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumora: {
          dark: '#101014',
          purple: '#7C3AED',
          pink: '#F43F7A',
          yellow: '#D7F36B',
          blue: '#9FD8FF',
          bg: '#F7F7F5',
          text: '#18181B',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
