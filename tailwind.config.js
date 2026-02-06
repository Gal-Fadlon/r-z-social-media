/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nats': ['NATS:Regular', 'sans-serif'],
      },
      screens: {
        'mobile': '0px',
        'tablet': '800px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}
