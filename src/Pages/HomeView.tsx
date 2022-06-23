import React from "react";
import HomeBody from "../Components/HomeBody";
import HomeGallery from "../Components/HomeGallery";
import HomeHero from "../Components/HomeHero";
import HomePartners from "../Components/HomePartners";
import { HomeContainer } from "../Components/Styles/HomeStyle";

const HomeView = () => {
  return (
    <HomeContainer>
      <HomeHero />
      <HomeBody />
      <HomePartners />
      <HomeGallery />
    </HomeContainer>
  );
};

export default HomeView;
