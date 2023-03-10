/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans"],
      },
      colors: {
        "light-purple": "rgba(185, 147, 233, 1)",
        "button-color": "rgba(138, 1, 215, 1)",
        "dark-green": "rgba(21, 240, 150, 1)",
      },
      backgroundImage: { 
        background: "url('../assets/images/red')" },
    },
  },
  plugins: [],
};
