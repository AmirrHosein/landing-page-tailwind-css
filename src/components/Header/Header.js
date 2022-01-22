import logo from "./logo-bookmark.svg";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-start py-4 mt-4 sm:mt-12">
        <div className="py-1">
          <img src={logo} alt="BOOKMARK " />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer">Features </li>
          <li className="cursor-pointer">Pricing </li>
          <li className="cursor-pointer">Contact </li>
          <button
            type="button"
            className="bg-bookmark-red  text-white rounded-md px-7 py-3 uppercase"
          >
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fas fa-bars "></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
