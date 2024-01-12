import img from "../../assets/marken/jsb.jpeg";

const Marken = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 font-['Roboto'] text-2xl font-extralight">
        WIR BENUTZEN...
      </h1>
      <div className="flex flex-col items-center justify-center">
        <section className="grid grid-cols-2 gap-1 ">
          <img src={img} alt="jet set beauty" />
          <img src={img} alt="jet set beauty" />
          <img src={img} alt="jet set beauty" />
          <img src={img} alt="jet set beauty" />
        </section>
      </div>
    </div>
  );
};

export default Marken;
