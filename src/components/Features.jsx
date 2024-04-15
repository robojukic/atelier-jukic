import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";
import UslugaHome from "./UslugaHome";

const Features = () => {
  useGSAP(() => {}, []);
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
          <div className="w-full md:w-1/2">
            <p className=" text-gray-200 text-xl pb-20">
              Specijalizirani smo za dizajniranje i kreiranje širokog spektra
              reklamnih materijala, uključujući{" "}
              <span className="text-primary font-semibold">3D reklame</span>,
              svijetleće reklame, letke, plakate i još mnogo toga.
            </p>
          </div>
          <UslugaHome />
          <UslugaHome />
          <UslugaHome />
        </div>
      </div>
    </section>
  );
};

export default Features;
