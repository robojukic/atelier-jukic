import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import { animateWithGsap } from "../utils/animations";

const PortfolioSmall = () => {
  useGSAP(() => {
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(
      ".g_shrink",
      { scale: 1.5, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="w-full flex flex-col">
        <div className="projects grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1.5 md:grid-cols-5">
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio1.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-20 cursor-pointer"
                  src="/assets/images/portfolio6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio2.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio3.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio8.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio4.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio9.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio5.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio10.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio11.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio16.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio12.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio17.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio13.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio18.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio14.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio19.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio15.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-full flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/portfolio20.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSmall;
