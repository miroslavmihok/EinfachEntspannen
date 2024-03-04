import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const offset = document.querySelector(".sticky-header").offsetHeight || 0;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: offset },
    });
  };

  return (
    <div
      className="bg-fit min-h-[360px] w-full max-w-full bg-home bg-cover bg-center sm:min-h-[620px] md:min-h-[620px] xl:min-h-[900px]"
      id="home"
    >
      <div className="flex h-full min-h-[360px] w-full flex-col items-center justify-center bg-black/55 sm:min-h-[620px] xl:min-h-[900px]">
        <div className="flex h-full min-h-[360px] flex-col justify-center gap-6 p-6 text-white sm:min-h-[620px] lg:w-[50%] lg:gap-8 xl:min-h-[900px] xl:gap-10">
          <h1 className="text-center font-['Cabin'] font-semibold">
            Verwöhnen Sie Körper und Seele
          </h1>
          <p className="px-6 py-6 text-center">
            <i>
              Tauchen Sie ein in die Welt der Entspannung und Pflege mit unseren
              exklusiven Massagen, modernen Friseurdienstleistungen, wohltuender
              Fußpflege und kreativem Nageldesign.
            </i>
          </p>
          <div className="flex justify-center gap-8">
            <button
              className="rounded-md border border-white p-2 hover:bg-white hover:text-black"
              onClick={() => scrollToSection("#dienstleistungen")}
            >
              Dienstleistungen
            </button>
            <button
              className="rounded-md border border-white p-2 hover:bg-white hover:text-black"
              onClick={() => scrollToSection("#kontakt")}
            >
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
