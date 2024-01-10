const Dienstleistungen = () => {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="flex h-full w-full flex-col items-center justify-center px-6">
        <div className="flex w-full items-center justify-between bg-[url('./assets/dienstleistungen/massage.jpg')] px-4 text-white">
          <i className="fa-solid fa-spa text-2xl"></i>
          <h2>
            <b>Massage</b>
          </h2>
          <div className="text-center">
            <p>Emilia & Robert Schweiger</p>
            <p>+43 XXX XXX XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dienstleistungen;
