import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
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
      id="portfolioSmall"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="w-full flex flex-col">
        <div className="projects grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1.5 md:grid-cols-5">
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/zrinjski.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-20 cursor-pointer"
                  src="/assets/images/projects/globalsoft.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/markota.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/love.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/vrtnaterasa.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/sweets.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/oli2.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/otok.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/zrinjski1.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/svijet.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/oli.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/cvijetni.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/viktorija.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/globalsoft1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="project space-y-2">
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/letsgetsocial.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/emporio1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="project space-y-2">
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/mjenjacnica.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/pasike.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="project space-y-2">
              <div className="w-full h-72 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover g_grow scale-150 opacity-0 cursor-pointer"
                  src="/assets/images/projects/sinsay.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-48 flex overflow-hidden">
                <img
                  className="h-full w-full object-cover  g_shrink scale-100 opacity-0 cursor-pointer"
                  src="/assets/images/projects/markota1.jpg"
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
