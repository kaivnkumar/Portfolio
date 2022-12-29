/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      
      sm: { min: "320px", max: "479px" },

    },
    extend: {
      fontFamily: {
        marker: ['Permanent Marker'],
      },
      backgroundImage: {
        background: "url('./component/Image/message.svg')",
        homeBg: "url('./component/Image/web-developer.gif')",
      },
    },
  },
  plugins: [],
}
