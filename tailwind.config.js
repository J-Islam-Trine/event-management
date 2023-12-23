/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary' : '#ffc85a',
        'light-black': '#0a2640'

      },
      backgroundImage: {
        'hero-image': "url('./src/assets/hero-image.webp')"
      }
    },
  },
  plugins: [require("daisyui")],
}

