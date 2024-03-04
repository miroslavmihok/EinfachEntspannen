import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const offset = document.querySelector(".sticky-header").offsetHeight || 0;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: offset },
    });
  };

  return (
    <div className="flex flex-col  items-center justify-center bg-[#F5EBE0] p-4">
      <div className="z-40 w-[75%]">
        <div className="grid grid-cols-1 items-start justify-center md:grid-cols-2">
          <ul className="mb-4 flex flex-col flex-wrap items-center justify-center gap-2">
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
          <ul className="mb-4 flex flex-col flex-wrap items-center justify-center gap-2">
            <li>
              <Link to="/imprint">Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutz">Datenschutzerklärung</Link>
            </li>
          </ul>
        </div>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: "1px",
            opacity: 0.25,
            borderColor: "#000000",
          }}
        />
        <div className="mt-4 grid grid-rows-2 items-center justify-center gap-2 text-center font-normal">
          <p>Copyright © 2023 KÖRPER, GEIST & SEELE All Rights Reserved.</p>
          <p>
            Site Design by{" "}
            <a href="https://miroslavmihok.com/">Miroslav Mihok</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
