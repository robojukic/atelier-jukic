import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(false);
    }
  };
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              key={i}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline pr-6 md:pr-0 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
        </div>
        {/* Mobile menu bar */}
        <div className="flex lg:hidden flex-col">
          <div className="w-8" onClick={toggleMenu}>
            <div
              className="w-8 h-6 flex flex-col justify-between z-50"
              onClick={toggleMenu}
            >
              <span
                className={`w-8 h-1 rounded transition-all bg-white duration-500 ${
                  showMenu ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-8 h-1 rounded transition-all bg-white duration-500 ${
                  showMenu ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-8 h-1 rounded transition-all bg-white duration-500 ${
                  showMenu ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`h-screen w-screen flex flex-col fixed z-20 bg-white right-0 left-0 transition-all duration-500 ease-in-out pt-14
              ${
                showMenu
                  ? "bottom-0 top-0 opacity-100"
                  : "bottom-[100vh] -top-[100vh] opacity-0"
              }`}
          >
            <div className="w-full flex flex-row justify-between px-4 pb-10">
              <div
                className="w-10 h-8 flex flex-col justify-between z-50 ml-auto"
                onClick={toggleMenu}
              >
                <span
                  className={`w-10 h-1 rounded transition-all bg-black duration-500 bg-white-70 ${
                    showMenu ? "rotate-45 origin-left" : ""
                  }`}
                ></span>
                <span
                  className={`w-10 h-1 rounded transition-all bg-black duration-500 bg-white-70 ${
                    showMenu ? "-rotate-45 origin-left" : ""
                  }`}
                ></span>
              </div>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center gap-8 pb-10">
              {/* Render your menu items here */}
            </div>
          </div>
        </div>
        {/* End of mobile menu bar */}
      </nav>
    </header>
  );
};

export default Navbar;
