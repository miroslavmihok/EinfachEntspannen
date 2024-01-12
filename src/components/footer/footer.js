const Footer = () => {
  return (
    <div className="flex flex-col  items-center justify-center bg-[#F5EBE0] p-4 font-semibold">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Dienstleistungen</a>
        </li>
        <li>
          <a href="#">Referenzen</a>
        </li>
        <li>
          <a href="#">Marken</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>
      <div className="grid grid-rows-3 items-center justify-center text-center">
        <p>Copyright © 2023 KÖRPER, GEIST & SEELE All Rights Reserved.</p>
        <ul>
          <li>
            <a href="#">Imprint</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p>Site Design by Miroslav Mihok</p>
      </div>
    </div>
  );
};

export default Footer;
