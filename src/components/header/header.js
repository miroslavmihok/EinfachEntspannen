import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from "../../assets/logo.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        x: () => (isOpen ? "0%" : "-100%"),
      });
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const offset = document.querySelector(".fixed-header").offsetHeight || 0;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: offset },
    });
    setIsOpen(false);
  };

  return (
    <div>
      <div className="fixed-header sticky top-0 z-40 flex w-full items-center justify-between bg-white p-2">
        <div className="w-[30px]"></div>
        <div>
          <img src={Logo} alt="logo" height="60px" width="60px" />
        </div>
        <div className="flex w-[30px] items-center justify-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars text-3xl"></i>
          </button>
        </div>
      </div>
      <div
        className={`fixed z-50 flex h-screen w-full flex-col bg-white p-4 transition-all ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="w-full text-right">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>
        </div>
        <ul
          className="flex flex-grow flex-col justify-center gap-6 text-center text-2xl"
          style={{ flex: "1" }}
        >
          <li>
            <button onClick={() => scrollToSection("#home")}>HOME</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#dienstleistungen")}>
              DIENSTLEISTUNGEN
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#referenzen")}>
              REFERENZEN
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#marken")}>MARKEN</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#social")}>SOCIAL</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("#kontakt")}>KONTAKT</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
