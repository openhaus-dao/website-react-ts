import React from "react";
import {
  AboutHeroContainer,
  AboutHeroSubTitle,
  AboutHeroTitle,
} from "../Components/Styles/AboutStyle";

const AboutHero = () => {
  return (
    <AboutHeroContainer>
      <AboutHeroTitle>About Us</AboutHeroTitle>
      <AboutHeroSubTitle>
        OpenHaus is an inclusive developer community where all developers can
        level up founded in Feb 2022. We have resources, events, design
        activities, mentorship, and more.
      </AboutHeroSubTitle>
    </AboutHeroContainer>
  );
};

export default AboutHero;
