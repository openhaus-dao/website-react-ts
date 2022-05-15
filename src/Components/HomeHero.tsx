import { Link } from "react-router-dom";
import {
  HeroButton,
  ButtonContainer,
  HeroContainer,
  HeroSection,
  HeroSubTitle,
  HeroTitle,
} from "./Styles/HomeStyle";
import { DISCORD, GOOGLE_PARTNERSHIP_FORM } from "../Constant";

const HomeHero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Web3 Developers Community</HeroTitle>
        <HeroSubTitle>
          An inclusive community where all developers can level up
        </HeroSubTitle>
        <ButtonContainer>
          <HeroButton href={DISCORD}>Join Us on Discord</HeroButton>
          <HeroButton href={GOOGLE_PARTNERSHIP_FORM}>
            Partnership Inquiries
          </HeroButton>
        </ButtonContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default HomeHero;
