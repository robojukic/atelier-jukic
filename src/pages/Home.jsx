import React from "react";
import Hero from "../components/Hero";
import PortfolioSmall from "../components/PortfolioSmall";
import PartnersSmall from "../components/PartnersSmall";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <PortfolioSmall />
      <Features />
      <PartnersSmall />
    </div>
  );
};

export default Home;
