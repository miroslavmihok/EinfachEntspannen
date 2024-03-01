import React, { useState, useEffect } from "react";

const quotes = [
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

  const previousHandler = () => {
    setCount((prevCount) => (prevCount - 1 + quotes.length) % quotes.length);
    if (position === 0) {
      setPosition(-200);
    } else {
      setPosition((prevPosition) => prevPosition + 100);
    }
  };

  const nextHandler = () => {
    setCount((prevCount) => (prevCount + 1) % quotes.length);
    if (position === -200) {
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
      <i className="fa-solid fa-quote-right my-4 text-4xl text-[#7C809B]"></i>
      <div className="flex min-h-[350px] w-full items-center justify-center md:w-[75%]">
        <button onClick={() => previousHandler()}>
          <i className="fa-solid fa-angle-left text-4xl text-[#7C809B]"></i>
        </button>
        <div className="relative flex min-h-[350px] w-[894px] overflow-hidden">
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
              <p className="font-cormorant-garamond max-w-[75%] text-center transition-all duration-500">
                {item.quote}
              </p>
              <p className="font-cormorant-garamond py-4 text-center transition-all duration-500">
                - {item.name}
              </p>
            </div>
          ))}
        </div>
        <button onClick={() => nextHandler()}>
          <i className="fa-solid fa-angle-right text-4xl text-[#7C809B]"></i>
        </button>
      </div>
      <div className="flex items-center justify-center gap-1 text-sm text-[#7C809B]">
        {quotes.map((_, index) => (
          <div key={index}>
            {index === count ? (
              <i className="fa-regular fa-circle duration-250 transition-all"></i> // Active dot
            ) : (
              <i className="fa-solid fa-circle duration-250 transition-all"></i> // Inactive dots
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referenzen;
