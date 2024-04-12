import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#heroup span",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        delay: 0.6,
        stagger: 0.15, // stagger each word with a delay of 0.1s
        ease: "power2.out",
      }
    );
    gsap.to("#heroup", {
      opacity: 1,
      y: -50,
      ease: "power2.out",
      delay: 0.6,
    });
    gsap.to("#heroTwo", {
      opacity: 0.8,
      y: -50,
      duration: 1,
      delay: 1.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative px-6 sm:px-10 md:px-32">
      <div className="absolute inset-y-0 right-0 h-full xl:w-3/5">
        <img
          src="/assets/images/beautiful-brands.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
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
        <p id="heroTwo" className="opacity-0 pt-10 text-lg">
          Pouzdajte se u našu stručnost i iskustvo kako biste ostvarili vaše
          ideje i poboljšali vaše poslovanje.
        </p>
      </div>
    </section>
  );
};

export default Hero;
