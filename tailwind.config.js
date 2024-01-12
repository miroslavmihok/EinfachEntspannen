/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/home/home.jpeg')",
        geschäft: "url('./assets/kontakt/geschäft.png')",
        map: "url('./assets/kontakt/map.png')",
        emilia: "url('./assets/team/emilia.jpg')",
        robert: "url('./assets/team/robert.JPG')",
        yvonne: "url('./assets/team/yvonne.jpeg')",
      },
    },
  },
  plugins: [],
};
