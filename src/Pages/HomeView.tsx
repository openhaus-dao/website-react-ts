import React from "react";
import HomeBody from "../Components/HomeBody";
import HomeHero from "../Components/HomeHero";
import HomePartners from "../Components/HomePartners";
import { HomeContainer } from "../Components/Styles/HomeStyle";

const HomeView = () => {
  return (
    <HomeContainer>
      <HomeHero />
      <HomeBody />
      <HomePartners />
    </HomeContainer>
  );
};

export default HomeView;
