import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 flex w-full items-center justify-between bg-white p-2">
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
        className={`absolute flex h-screen w-full flex-col bg-white p-4 transition-all ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="w-full text-right">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>
        </div>
        <ul
          className="flex flex-grow flex-col justify-center gap-6"
          style={{ flex: "1" }}
        >
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">DIENSTLEISTUNGEN</a>
          </li>
          <li>
            <a href="#">REFERENZEN</a>
          </li>
          <li>
            <a href="#">MARKEN</a>
          </li>
          <li>
            <a href="#">SOCIAL</a>
          </li>
          <li>
            <a href="#">KONTAKT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
