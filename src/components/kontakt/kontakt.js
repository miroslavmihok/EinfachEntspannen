const Kontakt = () => {
  return (
    <div className="flex flex-col  p-4 text-center">
      <h1 className="mb-4 font-['Roboto'] text-2xl font-extralight">
        WO SIE UNS FINDEN
      </h1>
      <div className="flex flex-col">
        <div className="flex">
          <div className="aspect-square w-[50%] bg-geschäft bg-cover bg-center"></div>
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
        <div className="aspect-video w-full bg-map bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Kontakt;
