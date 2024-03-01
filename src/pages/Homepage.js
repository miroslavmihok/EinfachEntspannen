import React from "react";
import Hero from "../components/hero/hero";
import Dienstleistungen from "../components/dienstleistungen/dienstleistungen";
import Referenzen from "../components/referenzen/referenzen";
import Marken from "../components/marken/marken";
import Kontakt from "../components/kontakt/kontakt";
import InstaFeed from "../components/social/instaFeed";

function Homepage() {
  return (
    <>
      <Hero />
      <Dienstleistungen />
      <Referenzen />
      <Marken />
      <InstaFeed />
      <Kontakt />
    </>
  );
}

export default Homepage;
