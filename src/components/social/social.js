import React, { useState } from "react";
import InstagramSkeleton from "./InstagramSkeleton";

const Social = ({ data, isLoading, error }) => {
  const [displayedImages, setDisplayedImages] = useState(4);

  const loadMoreImages = () => {
    setDisplayedImages(displayedImages + 4);
  };

  const loadLessImages = () => {
    setDisplayedImages(displayedImages - 4);
  };

  const loadInitial = () => {
    setDisplayedImages(4);
  };

  return (
    <div
      className="flex items-center justify-center bg-[#F5EBE0] px-4 py-4 md:px-12 md:py-12 2xl:px-0"
      id="social"
    >
      <div className="w-full xl:px-0 2xl:w-[1200px] 3xl:w-[1580px]">
        <div className="flex justify-center">
          <h1 className="mb-4 text-center font-['Roboto'] text-2xl font-extralight md:text-3xl">
            FINDE UNS AUF INSTAGRAM
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <section className="grid grid-cols-2 gap-1 md:gap-4 xl:grid-cols-4">
            {isLoading && <InstagramSkeleton cards={4} />}
            {error && (
              <div>No instagram posts found, try refreshing the website.</div>
            )}
            {!isLoading &&
              data &&
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
          {!isLoading && displayedImages < data.length && (
            <div className="flex gap-1 md:gap-4">
              {displayedImages < data.length && displayedImages > 4 && (
                <button
                  onClick={loadLessImages}
                  className="md:text-md mt-4 min-w-[140px] rounded-md border-2 border-white px-3 py-2 font-['Roboto'] text-sm font-medium text-black hover:bg-white md:min-w-[155px]"
                >
                  Weniger anzeigen
                </button>
              )}
              <button
                onClick={loadMoreImages}
                className="md:text-md mt-4 min-w-[140px] rounded-md border-2 border-white px-3 py-2 font-['Roboto'] text-sm font-medium text-black hover:bg-white md:min-w-[155px]"
              >
                Mehr anzeigen
              </button>
            </div>
          )}
          {!isLoading &&
            (displayedImages === data.length ||
              displayedImages > data.length) && (
              <button
                onClick={loadInitial}
                className="md:text-md mt-4 min-w-[140px] rounded-md border-2 border-white bg-white p-2 font-['Roboto'] text-sm font-medium text-black hover:bg-white md:min-w-[155px]"
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
