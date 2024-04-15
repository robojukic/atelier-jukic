import React from "react";
import Hero from "../components/Hero";
import PortfolioSmall from "../components/PortfolioSmall";
import PartnersSmall from "../components/PartnersSmall";
import Features from "../components/Features";
import KontaktSmall from "../components/KontaktSmall";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <PortfolioSmall />
      <Features />
      <PartnersSmall />
      <KontaktSmall />
    </div>
  );
};

export default Home;
