import { searchImg } from "../utils";
import { navLists } from "../constants";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(false);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      ".nav-bar-anim",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <header className="w-full py-5 sm:px-10 md:px-32 lg:px-44 flex justify-between items-center">
      <nav className="flex w-full px-6 sm:px-0">
        <div className="w-20 h-10 flex flex-col font-extrabold text-sm justify-center nav-bar-anim">
          <span>Atelier</span>
          <span>Jukić</span>
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden nav-bar-anim">
          {navLists.map((nav, i) => (
            <div
              key={i}
              className="mx-10 group pb-1 cursor-pointer relative overflow-hidden"
            >
              <span className="text-lg text-gray group-hover:text-white transition-all duration-300">
                {nav}
              </span>
              <span className=" absolute bottom-0 -left-[100%] group-hover:left-0 w-full h-[2px] rounded-md bg-primary transition-all duration-300"></span>
            </div>
          ))}
        </div>
        <div className="flex items-baseline pr-6 md:pr-0 max-sm:justify-end max-sm:flex-1 nav-bar-anim">
          <img src={searchImg} alt="search" width={18} height={18} />
        </div>
        {/* Mobile menu bar */}
        <div className="flex lg:hidden flex-col">
          <div className="w-8" onClick={toggleMenu}>
            <div
              className="w-8 h-6 flex flex-col justify-between z-50 nav-bar-anim"
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
            className={`h-screen w-screen flex flex-col fixed z-50 bg-white right-0 left-0 transition-all duration-500 ease-in-out pt-14
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
