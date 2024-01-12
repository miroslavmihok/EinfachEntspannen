const Referenzen = () => {
  return (
    <div className="bg-[#F5EBE0] p-4 text-center">
      <h1 className="font-['Roboto'] text-2xl font-extralight">
        WAS DIE LEUTE SAGEN
      </h1>
      <i className="fa-solid fa-quote-right my-4 text-4xl text-[#7C809B]"></i>
      <div className="flex items-center justify-around">
        <i className="fa-solid fa-angle-left text-4xl text-[#7C809B]"></i>
        <p className="font-cormorant-garamond max-w-[75%] text-justify">
          Ich habe bisher nur die Fußpflege in Anspruch genommen und kann
          hierfür eine klare Empfehlung aussprechen. Moderne, helle und
          freundliche Räumlichkeiten, Top Sessel (ist nicht überall so), keine
          Wartezeit. Ich habe 2 Problemnägel, seit ich hier war keine Schmerzen
          mehr. Das hatte ich eigentlich noch nie, danke dafür! Top, bleibt so!
        </p>
        <i className="fa-solid fa-angle-right text-4xl text-[#7C809B]"></i>
      </div>
      <p className="font-cormorant-garamond py-4 text-center">
        - Manuel Gruber
      </p>
      <div className="flex items-center justify-center gap-1 text-sm text-[#7C809B]">
        <i className="fa-regular fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </div>
    </div>
  );
};

export default Referenzen;
