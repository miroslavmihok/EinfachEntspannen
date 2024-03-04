import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";
const Kontakt = () => {
  const position = { lat: 48.13242, lng: 16.904 };

  return (
    <div
      className="flex flex-col  items-center justify-center px-4 py-4 text-center md:px-12 md:py-12 2xl:px-0"
      id="kontakt"
    >
      <div className="w-full xl:px-0 2xl:w-[1200px] 3xl:w-[1580px]">
        <h1 className="mb-4 font-['Roboto'] text-2xl font-extralight md:text-3xl">
          BESUCHE UNS
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 flex md:flex-col">
            <div className="aspect-square w-[50%] bg-geschäft bg-cover bg-center md:w-full xl:min-w-[340px]"></div>
            <div className="flex items-center p-1">
              <p className="font-cormorant-garamond text-left">
                <b>KÖRPER, GEIST & SEELE R&E OG</b>
                <br />
                Wienerstraße 17,
                <br />
                2405 Bad Deutsch-Altenburg
                <br />
                Tel: +43 660 3807873
              </p>
            </div>
          </div>
          <div className="aspect-video w-full">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
              <Map
                center={position}
                zoom={18}
                mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
                style={{ border: 0 }}
              >
                <AdvancedMarker position={position} />
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
