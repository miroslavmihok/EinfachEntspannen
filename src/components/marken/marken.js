const marken = [
  {
    title: "JET SET Beauty",
    bg: "./assets/marken/jsb.webp",
    desc: "Jet Set Beauty steht für qualitativ hochwertige Produkte für professionelle Nageldesigner.",
  },
  {
    title: "DÖTERRA",
    bg: "./assets/marken/doterra2.webp",
    desc: "Die ätherische Ölmischung AromaTouch kombiniert eine einzigartige Gruppe von Ölen mit einer entspannenden und wohltuenden Wirkung",
  },
  {
    title: "PINO",
    bg: "./assets/marken/pino.webp",
    desc: "Bei unseren Massagen verwenden wir verschiedene Massagemittel von PINO, wie: PINOTAPES, Massageöle und Massagecremes.",
  },
  {
    title: "PEDIBAEHR",
    bg: "./assets/marken/pedibaehr.webp",
    desc: "Bei unserer Fußpflege verwenden wir Rosencreme von Pedibaehr der von Beginn an Feuchtigkeit zur Regeneration spendet und trockene und rissige Fußhaut wieder weich pflegt.",
  },
];

const Marken = () => {
  return (
    <div
      className="flex w-full items-start justify-center px-4 py-4 md:px-12 md:py-12 2xl:px-0"
      id="marken"
    >
      <div className="w-full 2xl:w-[1200px] 3xl:w-[1580px]">
        <h1 className="mb-4 text-center font-['Roboto'] text-2xl font-extralight md:text-3xl">
          WIR BENUTZEN...
        </h1>
        <div className="flex w-full flex-col items-center justify-start">
          <section className="flex w-full flex-col items-center justify-center gap-1 md:flex-row md:flex-wrap md:gap-4">
            {marken.map((marke, index) => (
              <div className="group relative" key={index}>
                <img
                  src={marke.bg}
                  alt={marke.title}
                  className={`aspect-square w-full max-w-[350px] object-cover`}
                />
                <div className="absolute top-0 hidden h-full w-full flex-col items-center justify-center gap-2 text-center group-hover:flex group-hover:bg-white/90">
                  <h1>{marke.title}</h1>
                  <p>{marke.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Marken;
