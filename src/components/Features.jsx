import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_growFeatures",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="h-full relative overflow-hidden px-6 sm:px-10 md:px-32 lg:px-44">
      <div className="">
        <div className=" w-full flex flex-col">
          <h1
            id="features"
            className="my-12 pt-6 text-4xl font-bold leading-normal md:text-6xl lg:leading-[90px]"
          >
            Ponuda <span className="text-primary">usluga</span>
          </h1>
          <div className="w-1/2">
            <p className=" text-gray-200 text-xl pb-20">
              Specijalizirani smo za dizajniranje i kreiranje širokog spektra
              reklamnih materijala, uključujući{" "}
              <span className="text-primary font-semibold">3D reklame</span>,
              svijetleće reklame, letke, plakate i još mnogo toga.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center overflow-hidden">
          <div className="w-full flex-center flex-col">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src="/assets/images/portfolio10.jpg"
                    alt="titanium"
                    className="feature-video g_growFeatures"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src="/assets/images/portfolio3.jpg"
                    alt="titanium2"
                    className="feature-video g_growFeatures"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
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

export default Features;
