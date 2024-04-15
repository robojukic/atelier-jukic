import React from "react";
import Counter from "../components/Counter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Onama = () => {
  useGSAP(() => {
    gsap.to("#aboutTitle", {
      opacity: 1,
      y: -50,
      ease: "power2.out",
      delay: 0.4,
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col items-center justify-center py-36">
        <h1
          id="aboutTitle"
          className="text-4xl font-bold leading-normal md:text-6xl lg:leading-[90px] opacity-0"
        >
          O nama
        </h1>
      </div>
      <Counter />
    </div>
  );
};

export default Onama;
