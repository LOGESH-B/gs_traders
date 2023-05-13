/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/home/brand.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

module.exports={
  content:[
    "./src/**/*.{js,jsx,ts,tsx}"
  ]
}