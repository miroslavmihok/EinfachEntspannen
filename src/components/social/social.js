import React, { useState } from "react";

const Social = ({ data }) => {
  const [displayedImages, setDisplayedImages] = useState(4);

  const loadMoreImages = () => {
    setDisplayedImages(displayedImages + 4);
  };

  const loadInitial = () => {
    setDisplayedImages(4);
  };

  console.log(data);

  return (
    <div
      className="flex items-center justify-center bg-[#F5EBE0] px-4 py-4 md:px-12 md:py-12 2xl:px-0"
      id="social"
    >
      <div className="3xl:w-[1580px] w-full xl:px-0 2xl:w-[1200px]">
        <div className="flex justify-center">
          <h1 className="mb-4 text-center font-['Roboto'] text-2xl font-extralight md:text-3xl">
            FINDE UNS AUF INSTAGRAM
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <section className="grid grid-cols-2 gap-1 xl:grid-cols-4">
            {data &&
              data.slice(0, displayedImages).map((item) => (
                <a
                  href={item.media_url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.id}
                >
                  <img
                    src={item.media_url}
                    alt={item.caption}
                    className="aspect-square w-full object-cover md:max-w-[350px]"
                  />
                </a>
              ))}
          </section>
          {displayedImages < data.length && (
            <button
              onClick={loadMoreImages}
              className="text-md mt-4 rounded-md border-2 border-white px-3 py-2 font-['Roboto'] font-medium text-black hover:bg-white"
            >
              Mehr anzeigen
            </button>
          )}
          {(displayedImages === data.length ||
            displayedImages > data.length) && (
            <button
              onClick={loadInitial}
              className="text-md mt-4 rounded-md border-2 border-white bg-white p-2 font-['Roboto'] font-medium text-black hover:bg-white"
            >
              Weniger anzeigen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Social;
