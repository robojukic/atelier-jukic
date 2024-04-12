import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./common/Button";

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
        delay: 0.3,
        stagger: 0.15, // stagger each word with a delay of 0.1s
        ease: "power2.out",
      }
    );
    gsap.to("#heroup", {
      opacity: 1,
      y: -50,
      ease: "power2.out",
      delay: 0.4,
    });
    gsap.to(".heroTwo", {
      opacity: 1,
      y: -50,
      duration: 1,
      delay: 1.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative px-6 sm:px-10 md:px-32 lg:px-44">
      <div className="absolute inset-y-0 right-0 h-full xl:w-3/5">
        <img
          src="/assets/images/beautiful-brands.webp"
          className="h-full w-full object-cover"
          alt="hero-image"
          loading="eager"
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
        <p className="heroTwo opacity-0 pt-10 text-lg text-gray-200">
          Pouzdajte se u našu stručnost i iskustvo kako biste ostvarili vaše
          ideje i poboljšali vaše poslovanje.
        </p>
        <div className="w-full items-start flex heroTwo opacity-0 pt-10">
          <Button buttonText={"Pogledaj više"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
