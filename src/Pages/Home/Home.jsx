import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Navbar from "../../Components/Navbar/Navbar";
import MainSection from "../../Components/MainSection/MainSection";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <>
      <Navbar />
      <MainSection />
    </>
  );
};

export default Home;
