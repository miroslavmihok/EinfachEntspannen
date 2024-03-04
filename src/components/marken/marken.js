const Marken = () => {
  return (
    <div
      className="flex w-full items-center justify-center px-4 py-4 md:px-12 md:py-12 2xl:px-0"
      id="marken"
    >
      <div className="w-full 2xl:w-[1200px] 3xl:w-[1580px]">
        <h1 className="mb-4 text-center font-['Roboto'] text-2xl font-extralight md:text-3xl">
          WIR BENUTZEN...
        </h1>
        <div className="flex flex-col items-center justify-center">
          <section className="grid-marken_container grid w-full gap-1 md:gap-4">
            <div className="flex h-full w-full items-center justify-center">
              <div className="hover:details-block group relative h-full w-full md:max-w-[350px]">
                <div className="aspect-video w-full bg-jsb bg-cover bg-center md:aspect-square"></div>
                <div className="details absolute top-0 hidden h-full w-full flex-col justify-center p-2 text-center group-hover:flex group-hover:bg-white/75">
                  <h1 className="font-bold">JET SET Beauty</h1>
                  <p>
                    Jet Set Beauty steht für qualitativ hochwertige Produkte für
                    professionelle Nageldesigner.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <div className="hover:details-block group relative h-full w-full md:max-w-[350px]">
                <div className="aspect-video w-full bg-doterra bg-cover bg-center md:aspect-square"></div>
                <div className="details absolute top-0 hidden h-full w-full flex-col justify-center p-2 text-center group-hover:flex group-hover:bg-white/75">
                  <h1 className="font-bold">DÖTERRA</h1>
                  <p>
                    Die ätherische Ölmischung AromaTouch kombiniert eine
                    einzigartige Gruppe von Ölen mit einer entspannenden und
                    wohltuenden Wirkung
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <div className="hover:details-block group relative h-full w-full md:max-w-[350px]">
                <div className="aspect-video w-full bg-pino bg-cover bg-center md:aspect-square"></div>
                <div className="details absolute top-0 hidden h-full w-full flex-col justify-center p-2 text-center group-hover:flex group-hover:bg-white/75">
                  <h1 className="font-bold">PINO</h1>
                  <p>
                    Bei unseren Massagen verwenden wir verschiedene
                    Massagemittel von PINO, wie: PINOTAPES, Massageöle und
                    Massagecremes.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <div className="hover:details-block group relative h-full w-full md:max-w-[350px]">
                <div className="aspect-video w-full bg-pedibaehr bg-cover bg-center md:aspect-square"></div>
                <div className="details absolute top-0 hidden h-full w-full flex-col justify-center p-2 text-center group-hover:flex group-hover:bg-white/75">
                  <h1 className="font-bold">PEDIBAEHR</h1>
                  <p>
                    Bei unserer Fußpflege verwenden wir Rosencreme von Pedibaehr
                    der von Beginn an Feuchtigkeit zur Regeneration spendet und
                    trockene und rissige Fußhaut wieder weich pflegt.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Marken;
