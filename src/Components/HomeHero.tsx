import React from "react";
import {
  HeroButton,
  ButtonContainer,
  HeroContainer,
  HeroSection,
  HeroSubTitle,
  HeroTitle,
} from "./Styles/HomeStyle";

const HomeHero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Web3 Developers Community</HeroTitle>
        <HeroSubTitle>
          An inclusive community where all developers can level up
        </HeroSubTitle>
        <ButtonContainer>
          <HeroButton>Join Us on Discord</HeroButton>
          <HeroButton>Partnership Inquiries</HeroButton>
        </ButtonContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default HomeHero;
