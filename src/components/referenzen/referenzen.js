import React, { useState, useEffect } from "react";

const quotes = [
  {
    name: "name1",
    quote: "lorem ipsum 1",
  },
  {
    name: "name2",
    quote: "lorem ipsum 2",
  },
  {
    name: "name3",
    quote: "lorem ipsum 3",
  },
  {
    name: "name4",
    quote: "lorem ipsum 4",
  },
  {
    name: "name5",
    quote: "lorem ipsum 5",
  },
];

const Referenzen = () => {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [name, setName] = useState(quotes[0].name);
  const [count, setCount] = useState(0);

  const previousHandler = () => {
    setCount((prevCount) => (prevCount - 1 + quotes.length) % quotes.length);
  };

  const nextHandler = () => {
    setCount((prevCount) => (prevCount + 1) % quotes.length);
  };

  useEffect(() => {
    setQuote(quotes[count].quote);
    setName(quotes[count].name);
  }, [count]);

  return (
    <div className="bg-[#F5EBE0] p-4 text-center">
      <h1 className="font-['Roboto'] text-2xl font-extralight">
        WAS DIE LEUTE SAGEN
      </h1>
      <i className="fa-solid fa-quote-right my-4 text-4xl text-[#7C809B]"></i>
      <div className="flex items-center justify-around">
        <button onClick={() => previousHandler()}>
          <i className="fa-solid fa-angle-left text-4xl text-[#7C809B]"></i>
        </button>
        <p className="font-cormorant-garamond max-w-[75%] text-center transition-all duration-500">
          {quote}
        </p>
        <button onClick={() => nextHandler()}>
          <i className="fa-solid fa-angle-right text-4xl text-[#7C809B]"></i>
        </button>
      </div>
      <p className="font-cormorant-garamond py-4 text-center transition-all duration-500">
        - {name}
      </p>
      <div className="flex items-center justify-center gap-1 text-sm text-[#7C809B]">
        {/* <i className="fa-regular fa-circle"></i> */}
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
