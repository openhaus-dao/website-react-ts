import React from "react";
import AboutBody from "../Components/AboutBody";
import AboutHero from "../Components/AboutHero";
import { AboutSection } from "../Components/Styles/AboutStyle";

const AboutUs = () => {
  return (
    <AboutSection>
      <AboutHero />
      <AboutBody />
    </AboutSection>
  );
};

export default AboutUs;
