/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '10px': '10px',
      },
      width: {
        '350px': '350px', 
      },
      height: {
        '52px': '52px', 
      },
      colors: {
        main01: '#EE4E34', 
        txtgray :'#333',
      },
    },
  },
  plugins: [],
}