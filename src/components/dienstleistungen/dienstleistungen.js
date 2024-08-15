import React, { useState } from "react";
import CardItem from "./cardItem";

const data = [
  {
    title: "Massage",
    bg: "bg-massage",
    icon: "M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z",
    description:
      "Entspannen Sie Körper und Geist mit unseren maßgeschneiderten Massageanwendungen, die eine harmonische Balance zwischen Wohlbefinden und Erholung schaffen.",
    dienstleister: [{ name: "Emilia Schweiger", img: "bg-emilia" }],
    phone: "+43 660 380 7873",
  },
  {
    title: "Friseur",
    bg: "bg-friseur",
    icon: "M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z",
    description:
      "Unsere erfahrene Friseurin kreiert individuelle Stylings, die Ihre Persönlichkeit unterstreichen. Vom neuesten Haartrend bis zur klassischen Eleganz bieten wir professionelle Schnitte, Farben und Beratung für Ihr perfektes Hairstyling.",
    dienstleister: [{ name: "Yvonne Kral", img: "bg-yvonne" }],
    phone: "+43 677 615 29905",
  },
  {
    title: "Pimp YOUR Style",
    bg: "bg-nagel",
    icon: "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",
    description:
      "Entdecken Sie unsere Vielfalt an Schönheits- und Pflegedienstleistungen: Wimpernverlängerung, Nageldesign und Permanent Make-up.",
    dienstleister: [
      { name: "Sevil Alimanovic", img: "bg-sevil" },
      { name: "Yasemin Alimanovic", img: "bg-yasemin" },
    ],
    phone: "+43 680 200 8258",
  },
  {
    title: "Fußpflege",
    bg: "bg-fußpflege",
    icon: "M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z",
    description:
      "Verwöhnen Sie Ihre Füße mit unserer ganzheitlichen Pflege. Unsere Experten revitalisieren nicht nur Ihre Füße, sondern schaffen auch Entspannung und Wohlbefinden für einen selbstbewussten Auftritt.",
    dienstleister: [{ name: "Diana Vartanian", img: "bg-diana" }],
    phone: "+43 676 750 2672",
  },
];

const Dienstleistungen = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="flex h-fit w-screen max-w-full items-center justify-center bg-white"
      id="dienstleistungen"
    >
      <div className="xl:px-0 2xl:w-[1200px] 3xl:w-[1580px]">
        <section className="flex h-full w-full flex-col items-center justify-center px-4 py-4 md:px-12 md:py-12 2xl:px-0">
          <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row">
            {/* MASSAGE bis FUßPFLEGE */}
            {data.map((item, index) => (
              <CardItem
                key={index}
                index={index}
                title={item.title}
                bg={item.bg}
                icon={item.icon}
                description={item.description}
                dienstleister={item.dienstleister}
                phone={item.phone}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
          {/* SOLARIUM */}
          <div
            className="font-cormorant-garamond w-full bg-solarium bg-cover bg-center text-white hover:text-black"
            onMouseEnter={() => setHoveredIndex(data.length)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="hoverCardBg flex h-full w-full flex-col items-center justify-center bg-black/55 px-4 py-4 hover:bg-white/45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-[37px] w-[37px] md:h-[60px] md:w-[60px]"
                fill={hoveredIndex === data.length ? "black" : "white"}
              >
                <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
              </svg>
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
                <p>+43 660 380 7873</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dienstleistungen;
