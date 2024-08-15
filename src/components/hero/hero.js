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

  let imgSrc = "";

  if (window.innerWidth <= 480) {
    imgSrc = "/assets/home/home-phone.webp";
  } else if (window.innerWidth <= 1024) {
    imgSrc = "/assets/home/home-tablet.webp";
  } else {
    imgSrc = "/assets/home/home.webp";
  }

  return (
    <section
      className={`relative flex min-h-[460px] w-full max-w-full items-center justify-center overflow-hidden bg-cover sm:min-h-[620px] xl:min-h-[900px]`}
      id="home"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: "50% 25%",
      }}
    >
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/55">
        <div className="flex h-full flex-col justify-center gap-6 p-6 text-white lg:w-[50%] lg:gap-8 xl:gap-10">
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
              title="scroll btn to dienstleistungen"
              onClick={() => scrollToSection("#dienstleistungen")}
            >
              Dienstleistungen
            </button>
            <button
              className="rounded-md border border-white p-2 hover:bg-white hover:text-black"
              title="scroll btn to kontakt"
              onClick={() => scrollToSection("#kontakt")}
            >
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
