import Navigation from "../components/navigation/";
import Sidebar from "../components/navigation/sidebar";
import InfoSection from "../components/InfoSection";
import Hero from "../components/HeroSection";
import React, { useState } from "react";
import { HomeObjOne } from "../components/InfoSection/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log("isOpen: ", isOpen);

  return (
    <>
      <Navigation toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <InfoSection {...HomeObjOne}/>
    </>
  );
};

export default Home;