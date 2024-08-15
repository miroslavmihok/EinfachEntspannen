import React, { useState } from "react";

const quotes = [
  {
    name: "Hannes Potje",
    quote:
      "Ich bin seit Jahren wegen Verspannungen im Rücken/ Nackenbereich regelmäßig in Behandlung und es ist jedesmahl eine Wohltat. Meine starken Verspannungen lösen sich und der ganze Körper fühlt sich entspannt an. Emilia lässt sich sehr auf die Bedürfnisse ein und findet immer wieder neue Methoden, um die Schmerzen zu minimieren. Ich würde sie jederzeit weiterempfehlen!",
  },
  {
    name: "Verena Lippi",
    quote:
      "Dieses Mutter -Tochter Team ist einfach klasse.👌 Herzlich, Zuvorkommend immer zum Scherzen aufgelegt usw...🤭 Ihr Steckt soviel Herzblut ❤️ in Eure Arbeiten egal ob Nägel oder Wimpern. Einfach Top 💯😍❤️ Ihr verschönert nicht nur Ihr verzaubert mit Euren Wesen. Danke für die wieder absolut wunderschöne Arbeit    bis zum nächsten mal.",
  },
  {
    name: "Laura",
    quote:
      "Bestes Nagel- und Wimpernstudio weit und breit! 💅😃 Yasi und Sevil machen ihre Arbeit mit so viel Wissen und Liebe! Es werden jedes Mal alle meine Wünsche erfüllt und meine Erwartungen übertroffen! Bei euch kann man sich nur wohlfühlen - danke! Ihr seid richtige Herzensmenschen",
  },
  {
    name: "Conny Katze",
    quote:
      "Bin sehr zufrieden, sind sehr schön geworden 😊👍 werde wieder kommen 😁  die Ladys sind sehr sympathisch",
  },
];

const Referenzen = () => {
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(0);

  const endOfQuotes = Math.max(0, quotes.length - 1) * 100;

  const previousHandler = () => {
    setCount((prevCount) => (prevCount - 1 + quotes.length) % quotes.length);
    if (position === 0) {
      setPosition(-endOfQuotes);
    } else {
      setPosition((prevPosition) => prevPosition + 100);
    }
  };

  const nextHandler = () => {
    setCount((prevCount) => (prevCount + 1) % quotes.length);
    if (position === -endOfQuotes) {
      setPosition(0);
    } else {
      setPosition((prevPosition) => prevPosition - 100);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#F5EBE0] p-4 text-center md:p-12"
      id="referenzen"
    >
      <h1 className="font-['Roboto'] text-2xl font-extralight md:text-3xl">
        WAS DIE LEUTE SAGEN
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="#7C809B"
        className="h-[37px] w-[37px] md:h-[60px] md:w-[60px]"
      >
        <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
      </svg>
      <div className="flex min-h-[350px] w-full items-center justify-center md:w-[75%]">
        <button
          onClick={() => previousHandler()}
          title="slideshow previous btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="#7C809B"
            className="h-[37px] w-[37px]"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
        <div className="relative flex min-h-[420px] w-[894px] overflow-hidden md:min-h-[400px]">
          {quotes.map((item, index) => (
            <div
              className="absolute top-0 flex h-full w-full flex-col items-center justify-center"
              style={{
                left: `${100 * index}%`,
                transform: `translateX(${position}%)`,
                transition: `all 0.3s ease-in-out`,
              }}
              key={index}
            >
              <p className="font-cormorant-garamond max-w-full text-center transition-all duration-500 md:max-w-[75%]">
                {item.quote}
              </p>
              <p className="font-cormorant-garamond py-4 text-center transition-all duration-500">
                - {item.name}
              </p>
            </div>
          ))}
        </div>
        <button onClick={() => nextHandler()} title="slideshow next btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="#7C809B"
            className="h-[37px] w-[37px]"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center gap-1 text-sm text-[#7C809B]">
        {quotes.map((_, index) => (
          <div key={index}>
            {index === count ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#7C809B"
                className="h-[14px] w-[14px]"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
              </svg> // Active dot
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#7C809B"
                className="h-[14px] w-[14px]"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg> // Inactive dots
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referenzen;
