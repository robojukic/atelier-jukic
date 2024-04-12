import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#heroup span",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.7,
        stagger: 0.1, // stagger each word with a delay of 0.1s
      }
    );
  }, []);

  return (
    <section className="w-full nav-height bg-black relative px-6 sm:px-10 md:px-32">
      <div className="h-5/6 md:w-1/2 flex-center flex-col">
        <h1
          id="heroup"
          className="text-4xl font-bold leading-normal md:text-6xl lg:leading-[90px]"
        >
          {/** Splitting the sentence into individual words */}
          {Array.from(
            "Vaš partner za kreativna reklamna rješenja".split(" ")
          ).map((word, index) => (
            <span
              key={index}
              className={index === 1 || index === 4 ? "text-primary" : ""}
            >
              {word}{" "}
            </span> // Wrapping each word in a span
          ))}
        </h1>
        <p>
          Pouzdajte se u našu stručnost i iskustvo kako biste ostvarili vaše
          ideje i poboljšali vaše poslovanje.
        </p>
      </div>
    </section>
  );
};

export default Hero;
