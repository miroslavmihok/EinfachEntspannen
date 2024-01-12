import Header from "../header/header";

const Home = () => {
  return (
    <div className="bg-fit h-screen w-full max-w-full bg-home bg-cover bg-center">
      <div className="flex h-full w-full flex-col justify-center bg-black/55">
        <div className="flex flex-col justify-center px-6 text-white">
          <h1 className="text-center font-['Cabin'] text-2xl">
            Verwöhnen Sie Körper und Seele
          </h1>
          <p className="px-6 py-6 text-center">
            <i>
              Tauchen Sie ein in die Welt der Entspannung und Pflege mit unseren
              exklusiven Massagen, modernen Friseurdienstleistungen, wohltuender
              Fußpflege und kreativem Nageldesign. Gönnen Sie sich das Beste für
              Körper und Seele in unserem einladenden Studio.
            </i>
          </p>
          <div className="flex justify-around">
            <button className="rounded-md border border-white p-2 ">
              Zu Dienstleistungen
            </button>
            <button className="rounded-md border border-white p-2">
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
