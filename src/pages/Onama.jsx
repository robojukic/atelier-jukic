import React from "react";
import Counter from "../components/Counter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Onama = () => {
  useGSAP(() => {
    gsap.to(".aboutTitle", {
      opacity: 1,
      y: -50,
      ease: "power2.out",
      delay: 0.4,
    });
  }, []);

  return (
    <div className="w-full flex flex-col pb-16 px-6 sm:px-10 md:px-32 lg:px-44">
      <div className="w-full flex flex-col items-center justify-center pt-28 pb-20">
        <h1 className="aboutTitle text-4xl font-bold leading-normal md:text-6xl lg:leading-[90px] opacity-0">
          O nama
        </h1>
        <h2 className=" text-gray-200 aboutTitle text-lg opacity-0 pt-10">
          "Atelier Jukić" d.o.o. je tvrtka s petnaestogodišnjim iskustvom,
          posvećena pružanju korektnog pristupa svakom kupcu-partneru. Naša
          posvećenost kvaliteti, brzini i pristupačnim cijenama čine nas
          liderima u reklamnoj industriji. Slijedimo najnovija kretanja na
          tržištu i kontinuirano se usavršavamo te investiramo u nove
          tehnologije kako bismo upotpunili naš proizvodni asortiman.
        </h2>
      </div>
      <Counter />
    </div>
  );
};

export default Onama;
