const Dienstleistungen = () => {
  return (
    <div className="h-fit w-screen max-w-full bg-white">
      <div className="flex h-full w-full flex-col items-center justify-center p-4">
        {/* MASSAGE */}
        <div className="font-cormorant-garamond w-full bg-[url('./assets/dienstleistungen/massage.jpg')] bg-cover text-white hover:text-black">
          <div className="flex h-full w-full flex-col items-center justify-center bg-black/55 px-4 py-4 hover:bg-white/45">
            <i className="fa-solid fa-spa text-4xl"></i>
            <h1 className="py-4 text-2xl font-bold">Massage</h1>
            <div className="w-full px-6 text-center font-semibold">
              <div className="hidden sm:flex">
                <p>
                  Entspannen Sie Körper und Geist mit unseren maßgeschneiderten
                  Massageanwendungen, die eine harmonische Balance zwischen
                  Wohlbefinden und Erholung schaffen.
                </p>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="mb-4 aspect-square h-[60px] rounded-[50%] bg-emilia"
                    style={{
                      backgroundSize: "275%",
                      backgroundPosition: "42% 18%",
                    }}
                  ></div>
                  <p>Emilia Schweiger</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="mb-4 aspect-square h-[60px] rounded-[50%] bg-robert"
                    style={{
                      backgroundSize: "675%",
                      backgroundPosition: "47% 24%",
                    }}
                  ></div>
                  <p>Robert Schweiger</p>
                </div>
              </div>
              <p>+43 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
        {/* FRISEUR */}
        <div className="font-cormorant-garamond w-full bg-[url('./assets/dienstleistungen/friseur.jpeg')] bg-cover text-white hover:text-black">
          <div className="flex h-full w-full flex-col items-center justify-center bg-black/55 px-4 py-4 hover:bg-white/45">
            <i className="fa-solid fa-scissors text-4xl"></i>
            <h1 className="py-4 text-2xl font-bold">Friseur</h1>
            <div className="w-full px-6 text-center font-semibold">
              <div className="hidden sm:flex">
                <p>
                  Unsere erfahrene Friseurin kreiert individuelle Stylings, die
                  Ihre Persönlichkeit unterstreichen. Vom neuesten Haartrend bis
                  zur klassischen Eleganz bieten wir professionelle Schnitte,
                  Farben und Beratung für Ihr perfektes Hairstyling.
                </p>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="mb-4 aspect-square h-[60px] rounded-[50%] bg-yvonne"
                    style={{
                      backgroundSize: "140%",
                      backgroundPosition: "48% 38%",
                    }}
                  ></div>
                  <p>Yvonne Kral</p>
                </div>
              </div>
              <p>+43 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
        {/* NAGEL */}
        <div className="font-cormorant-garamond w-full bg-[url('./assets/dienstleistungen/nagel.jpg')] bg-cover text-white hover:text-black">
          <div className="flex h-full w-full flex-col items-center justify-center bg-black/55 px-4 py-4 hover:bg-white/45">
            <i className="fa-solid fa-eye text-4xl"></i>
            <h1 className="py-4 text-2xl font-bold">Perfekte Schönheit</h1>
            <div className="w-full px-6 text-center font-semibold">
              <div className="hidden sm:flex">
                <p>
                  Entdecken Sie unsere Vielfalt an Schönheits- und
                  Pflegedienstleistungen: Wimpernverlängerung, Nageldesign und
                  Permanent Make-up.
                </p>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="mb-4 aspect-square h-[60px] rounded-[50%] bg-emilia"
                    style={{
                      backgroundSize: "275%",
                      backgroundPosition: "42% 18%",
                    }}
                  ></div>
                  <p>Yasemin Alimanovic</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="mb-4 aspect-square h-[60px] rounded-[50%] bg-robert"
                    style={{
                      backgroundSize: "675%",
                      backgroundPosition: "47% 24%",
                    }}
                  ></div>
                  <p>Sevil Alimanovic</p>
                </div>
              </div>
              <p>+43 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
        {/* FUßPFLEGE */}
        <div className="font-cormorant-garamond w-full bg-[url('./assets/dienstleistungen/fußpflege.jpg')] bg-cover text-white hover:text-black">
          <div className="flex h-full w-full flex-col items-center justify-center bg-black/55 px-4 py-4 hover:bg-white/45">
            <i className="fa-solid fa-feather-pointed text-4xl"></i>
            <h1 className="py-4 text-2xl font-bold">Fußpflege</h1>
            <div className="w-full px-6 text-center font-semibold">
              <div className="hidden sm:flex">
                <p>
                  Verwöhnen Sie Ihre Füße mit unserer ganzheitlichen Pflege.
                  Unsere Experten revitalisieren nicht nur Ihre Füße, sondern
                  schaffen auch Entspannung und Wohlbefinden für einen
                  selbstbewussten Auftritt.
                </p>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="mb-4 aspect-square h-[60px] rounded-[50%] bg-emilia"
                    style={{
                      backgroundSize: "275%",
                      backgroundPosition: "42% 18%",
                    }}
                  ></div>
                  <p>Diana Vartanian</p>
                </div>
              </div>
              <p>+43 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
        {/* SOLARIUM */}
        <div className="font-cormorant-garamond w-full bg-[url('./assets/dienstleistungen/solarium.jpg')] bg-cover bg-center text-white hover:text-black">
          <div className="flex h-full w-full flex-col items-center justify-center bg-black/55 px-4 py-4 hover:bg-white/45">
            <i className="fa-solid fa-sun text-4xl"></i>
            <h1 className="py-4 text-2xl font-bold">Solarium</h1>
            <div className="w-full px-6 text-center font-semibold">
              <div className="hidden sm:flex">
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
              </div>
              <p>+43 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dienstleistungen;
