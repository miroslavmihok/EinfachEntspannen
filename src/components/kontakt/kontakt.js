const Kontakt = () => {
  return (
    <div
      className="flex flex-col  items-center justify-center px-4 py-4 text-center md:px-12 md:py-12 2xl:px-0"
      id="kontakt"
    >
      <div className="3xl:w-[1580px] w-full xl:px-0 2xl:w-[1200px]">
        <h1 className="mb-4 font-['Roboto'] text-2xl font-extralight md:text-3xl">
          BESUCHE UNS
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 flex md:flex-col">
            <div className="aspect-square w-[50%] bg-geschäft bg-cover bg-center xl:min-w-[340px]"></div>
            <div className="flex items-center p-1">
              <p className="font-cormorant-garamond text-left">
                <b>KÖRPER, GEIST & SEELE R&E OG</b>
                <br />
                Wienerstraße 17,
                <br />
                2405 Bad Deutsch-Altenburg
                <br />
                Tel: +43 660 3807873
              </p>
            </div>
          </div>
          <div className="aspect-video w-full">
            <iframe
              title="niederlassungsmap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.7310098594003!2d16.903562515430515!3d48.13228656651108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cf5a21e4486f1%3A0xebdefa78e46cb979!2sWienerstra%C3%9Fe%2017%2C%202405%20Bad%20Deutsch-Altenburg!5e0!3m2!1sen!2sat!4v1706120470174!5m2!1sen!2sat"
              className="aspect-video w-full border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
