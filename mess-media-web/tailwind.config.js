/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: { 

      fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      },

      colors: {
        'dark': '#181A20',
        'primary' : '#F5484A'
      },
    }
  },
  
  plugins: [
    require('flowbite/plugin')
]
}

