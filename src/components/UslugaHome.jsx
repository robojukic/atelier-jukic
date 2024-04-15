import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import gsap from "gsap";

const UslugaHome = () => {
  const sectionTextRef = useRef(null);
  const sectionImageRef = useRef(null);

  useGSAP(() => {
    animateWithGsap(
      sectionImageRef.current,
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 2 }
    );
    animateWithGsap(
      sectionTextRef.current,
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
  }, []);
  return (
    <section className="w-full h-full relative overflow-hidden ">
      <div className="">
        <div className="flex flex-col w-full justify-center items-center overflow-hidden">
          <div className="w-full flex-center flex-col">
            <div className="flex flex-row w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src="/assets/images/projects/zrinjski.jpg"
                    alt="titanium"
                    className="feature-video"
                    ref={sectionImageRef}
                  />
                </div>
              </div>
              <div className="feature-text-container" ref={sectionTextRef}>
                <div className="flex-1 flex-center">
                  <p className="feature-text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.{" "}
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UslugaHome;
