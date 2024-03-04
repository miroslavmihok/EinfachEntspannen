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
    const offset = document.querySelector(".sticky-header").offsetHeight || 0;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: offset },
    });
    setIsOpen(false);
  };

  const windowWidth = window.innerWidth;

  if (isOpen && windowWidth < 768) {
    document.body.classList.add("no-scroll");
  } else if (document.body.classList.contains("no-scroll")) {
    document.body.classList.remove("no-scroll");
  }

  return (
    <>
      <div className="sticky-header sticky top-0 z-40 flex w-full items-center justify-between bg-white p-2">
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
        className={`fixed top-0 z-50 flex h-screen w-full flex-col bg-white p-2 transition-all md:hidden ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="w-full text-right">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>
        </div>
        <ul
          className="flex flex-grow flex-col justify-center gap-4 text-center text-xl"
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
      <div
        className={`fixed z-50 hidden w-full flex-col overflow-hidden bg-white px-2 transition-all md:flex ${
          isOpen ? "max-h-[360px] py-4" : "max-h-0 py-0"
        }`}
      >
        {/* <div className="w-full text-right">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>
        </div> */}
        <ul
          className="text-md flex flex-grow flex-col justify-center gap-2 text-center"
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
    </>
  );
};

export default Header;
