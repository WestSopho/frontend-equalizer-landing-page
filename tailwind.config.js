/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "#66E2DC": "#66E2DC",
        "#FA7453": "#FA7453",
        "#FFB964": "#FFB964", 
        "#FCFAF9": "#FCFAF9", 
        "#191826": "#191826" 
      }, 
      fontFamily: {
        "sans": ["IBM Plex Sans"]
      },
      backgroundImage:{
        "mobile": "url('../assets/bg-main-mobile.png')", 
        "tablet": "url('../assets/bg-main-tablet.png')",
        "desktop": "url('../assets/bg-main-desktop.png')"
      }
    },
  },
  plugins: [],
}

