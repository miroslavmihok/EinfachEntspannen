import React from "react";

function cardItem({
  title,
  bg,
  index,
  icon,
  description,
  dienstleister,
  phone,
  hoveredIndex,
  setHoveredIndex,
}) {
  return (
    <div
      className={`font-cormorant-garamond ${bg} h-full w-full bg-cover text-white hover:text-black xl:min-h-[600px]`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="hoverCardBg flex h-full w-full flex-col items-center justify-center bg-black/55 p-4 hover:bg-white/45 xl:min-h-[620px] xl:justify-start">
        {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="h-[37px] w-[37px] md:h-[60px] md:w-[60px]"
          fill={hoveredIndex === index ? "black" : "white"}
        >
          <path d={icon} />
        </svg>
        <div className="flex items-center py-4 xl:h-[128px]">
          <h2 className="text-center">{title}</h2>
        </div>
        <div
          className="flex w-full flex-col items-center justify-between px-6 text-center font-semibold"
          style={{ flex: 1 }}
        >
          <div
            className="hidden w-[50%] sm:flex sm:items-start xl:w-full"
            style={{ flex: 1 }}
          >
            <p>{description}</p>
          </div>
          <div className="flex items-center justify-center gap-8 py-4 xl:h-[140px] xl:items-start xl:py-2">
            {dienstleister.map((item, index) => (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <div
                  className={`mb-4 aspect-square h-[60px] rounded-[50%] bg-cover ${item.img}`}
                ></div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default cardItem;
