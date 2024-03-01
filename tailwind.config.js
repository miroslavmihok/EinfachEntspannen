/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/home/home.jpeg')",
        geschäft: "url('./assets/kontakt/geschäft.png')",
        map: "url('./assets/kontakt/map.png')",
        emilia: "url('./assets/team/emilia.png')",
        robert: "url('./assets/team/robert.png')",
        yvonne: "url('./assets/team/yvonne.png')",
        yasemin: "url('./assets/team/yasemin.png')",
        sevil: "url('./assets/team/sevil.png')",
        diana: "url('./assets/team/diana.png')",
        massage: "url('./assets/dienstleistungen/massage.jpg')",
        friseur: "url('./assets/dienstleistungen/friseur.jpeg')",
        fußpflege: "url('./assets/dienstleistungen/fußpflege.jpg')",
        nagel: "url('./assets/dienstleistungen/nagel.jpg')",
        solarium: "url('./assets/dienstleistungen/solarium.jpg')",
        jsb: "url('./assets/marken/jsb.jpeg')",
        doterra: "url('./assets/marken/doterra2.jpg')",
        pedibaehr: "url('./assets/marken/pedibaehr.jpeg')",
        pino: "url('./assets/marken/pino.png')",
        footer: "url('./assets/bg1.png')",
      },
    },
    screens: {
      xs: "578px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
