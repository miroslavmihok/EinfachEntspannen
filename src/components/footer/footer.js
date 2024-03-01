import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const offset = document.querySelector(".fixed-header").offsetHeight || 0;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: offset },
    });
  };

  return (
    <div className="flex flex-col  items-center justify-center bg-[#F5EBE0] p-4">
      <div className="z-40 w-[75%]">
        <ul className="mb-3 flex flex-col flex-wrap items-center justify-center gap-2">
          <li>
            <Link to="/" onClick={() => scrollToSection("#home")}>
              Home
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection("#dienstleistungen")}>
              Dienstleistungen
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#referenzen")}>
              Referenzen
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#marken")}>Marken</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#social")}>Social</button>
          </li>
        </ul>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: "1px",
            opacity: 0.25,
            borderColor: "#000000",
          }}
        />
        <div className="grid grid-rows-3 items-center justify-center text-center">
          <p>Copyright © 2023 KÖRPER, GEIST & SEELE All Rights Reserved.</p>
          <ul>
            <li>
              <Link to="/imprint">Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutz">Datenschutzerklärung</Link>
            </li>
          </ul>
          <p>Site Design by Miroslav Mihok</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
