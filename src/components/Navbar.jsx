import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 sm:px-10 py-5 w-full">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="max-sm:hidden flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-gray hover:text-white text-sm transition-all cursor-pointer"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex max-sm:flex-1 max-sm:justify-end items-baseline gap-7">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
