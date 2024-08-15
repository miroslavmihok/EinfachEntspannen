/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/home/home.webp')",
        geschäft: "url('./assets/kontakt/geschäft.webp')",
        emilia: "url('./assets/team/emilia.webp')",
        robert: "url('./assets/team/robert.webp')",
        yvonne: "url('./assets/team/yvonne.webp')",
        yasemin: "url('./assets/team/yasemin.webp')",
        sevil: "url('./assets/team/sevil.webp')",
        diana: "url('./assets/team/diana.webp')",
        massage: "url('./assets/dienstleistungen/massage.webp')",
        friseur: "url('./assets/dienstleistungen/friseur.webp')",
        fußpflege: "url('./assets/dienstleistungen/fußpflege.webp')",
        nagel: "url('./assets/dienstleistungen/nagel.webp')",
        solarium: "url('./assets/dienstleistungen/solarium.webp')",
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
