import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 flex w-full items-center justify-between bg-white p-2">
      <div className="w-[30px]"></div>
      <div>
        <img src={Logo} alt="logo" height="60px" width="60px" />
      </div>
      <div className="flex w-[30px] items-center justify-center">
        <i className="fa-solid fa-bars text-3xl"></i>
      </div>
    </div>
  );
};

export default Header;
