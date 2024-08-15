import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from "../../assets/logo.webp";

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
      <header className="sticky-header sticky top-0 z-40 flex w-full items-center justify-between bg-white p-2">
        <div className="w-[30px]"></div>
        <div>
          <img src={Logo} alt="logo" height="60px" width="60px" />
        </div>
        <div className="flex w-[30px] items-center justify-center">
          <button onClick={() => setIsOpen(!isOpen)} title="navbar menu btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-[37px] w-[37px]"
              fill="black"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </header>
      <nav
        className={`fixed top-0 z-50 flex h-screen w-full flex-col bg-white p-2 transition-all md:hidden ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="flex h-[68px] w-full items-center justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            title="navbar closing menu btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-[37px] w-[37px]"
              fill="black"
            >
              <g transform="translate(100, -50)">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </g>
            </svg>
          </button>
        </div>
        <ul
          className="flex flex-grow flex-col justify-center gap-4 text-center text-xl"
          style={{ flex: "1" }}
        >
          <li>
            <Link to="/" onClick={() => scrollToSection("#home")}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#dienstleistungen")}>
              DIENSTLEISTUNGEN
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#referenzen")}>
              REFERENZEN
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#marken")}>
              MARKEN
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#social")}>
              SOCIAL
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#kontakt")}>
              KONTAKT
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`fixed z-50 hidden w-full flex-col overflow-hidden bg-white px-2 transition-all md:flex ${
          isOpen ? "max-h-[360px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul
          className="text-md flex flex-grow flex-col justify-center gap-2 text-center"
          style={{ flex: "1" }}
        >
          <li>
            <Link to="/" onClick={() => scrollToSection("#home")}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#dienstleistungen")}>
              DIENSTLEISTUNGEN
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#referenzen")}>
              REFERENZEN
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#marken")}>
              MARKEN
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#social")}>
              SOCIAL
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("#kontakt")}>
              KONTAKT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
