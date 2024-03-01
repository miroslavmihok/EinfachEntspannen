import React from "react";
import CardItem from "./cardItem";

const data = [
  {
    title: "Massage",
    bg: "bg-massage",
    icon: "fa-spa",
    description:
      "Entspannen Sie Körper und Geist mit unseren maßgeschneiderten Massageanwendungen, die eine harmonische Balance zwischen Wohlbefinden und Erholung schaffen.",
    dienstleister: [
      { name: "Emilia Schweiger", img: "bg-emilia" },
      { name: "Robert Schweiger", img: "bg-robert" },
    ],
    phone: "+43 XXX XXX XXXX",
  },
  {
    title: "Friseur",
    bg: "bg-friseur",
    icon: "fa-scissors",
    description:
      "Unsere erfahrene Friseurin kreiert individuelle Stylings, die Ihre Persönlichkeit unterstreichen. Vom neuesten Haartrend bis zur klassischen Eleganz bieten wir professionelle Schnitte, Farben und Beratung für Ihr perfektes Hairstyling.",
    dienstleister: [{ name: "Yvonne Kral", img: "bg-yvonne" }],
    phone: "+43 XXX XXX XXXX",
  },
  {
    title: "Pimp YOUR Style",
    bg: "bg-nagel",
    icon: "fa-eye",
    description:
      "Entdecken Sie unsere Vielfalt an Schönheits- und Pflegedienstleistungen: Wimpernverlängerung, Nageldesign und Permanent Make-up.",
    dienstleister: [
      { name: "Sevil Alimanovic", img: "bg-sevil" },
      { name: "Yasemin Alimanovic", img: "bg-yasemin" },
    ],
    phone: "+43 XXX XXX XXXX",
  },
  {
    title: "Fußpflege",
    bg: "bg-fußpflege",
    icon: "fa-feather-pointed",
    description:
      "Verwöhnen Sie Ihre Füße mit unserer ganzheitlichen Pflege. Unsere Experten revitalisieren nicht nur Ihre Füße, sondern schaffen auch Entspannung und Wohlbefinden für einen selbstbewussten Auftritt.",
    dienstleister: [{ name: "Diana Vartanian", img: "bg-diana" }],
    phone: "+43 XXX XXX XXXX",
  },
];

const Dienstleistungen = () => {
  return (
    <div
      className="flex h-fit w-screen max-w-full items-center justify-center bg-white"
      id="dienstleistungen"
    >
      <div className="3xl:w-[1580px] xl:px-0 2xl:w-[1200px]">
        <div className="flex h-full w-full flex-col items-center justify-center px-4 py-4 md:px-12 md:py-12 2xl:px-0">
          <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row">
            {/* MASSAGE bis FUßPFLEGE */}
            {data.map((item, index) => (
              <CardItem
                key={index}
                title={item.title}
                bg={item.bg}
                icon={item.icon}
                description={item.description}
                dienstleister={item.dienstleister}
                phone={item.phone}
              />
            ))}
          </div>
          {/* SOLARIUM */}
          <div className="font-cormorant-garamond w-full bg-solarium bg-cover bg-center text-white hover:text-black">
            <div className="hoverCardBg flex h-full w-full flex-col items-center justify-center bg-black/55 px-4 py-4 hover:bg-white/45">
              <i className="fa-solid fa-sun text-4xl md:text-6xl"></i>
              <h1 className="py-4 text-2xl font-bold md:text-4xl">Solarium</h1>
              <div className="flex w-full flex-col items-center justify-center gap-4 px-6 text-center font-semibold">
                <div className="hidden w-[50%] sm:flex">
                  <p className="">
                    HybridSun 8000, gemacht für höchste Ansprüchte!
                    <br />
                    Genießen Sie speziell entwickelte UV-Röhren, die Ihnen einen{" "}
                    <strong>makellosen Teint und viel Vitamin D </strong>
                    schenken. Die gedrehten smartSunlight Röhren wirken zudem
                    <strong> beruhigend und reinigend auf Ihre Haut.</strong>
                    <br />
                    70 beautyBooster{" "}
                    <strong>
                      stimulieren zusätzlich die Collagenbildung - Anti-Aging
                      pur.
                    </strong>
                  </p>
                </div>
                <p>+43 XXX XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dienstleistungen;
