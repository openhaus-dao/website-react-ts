import { Link } from "react-router-dom";
import {
  HeroButton,
  ButtonContainer,
  HeroContainer,
  HeroSection,
  HeroSubTitle,
  HeroTitle,
} from "./Styles/HomeStyle";
import { LINKTREE, GOOGLE_PARTNERSHIP_FORM } from "../Constant";

const HomeHero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Web3 Developers Community</HeroTitle>
        <HeroSubTitle>
          An inclusive community where all developers can level up
        </HeroSubTitle>
        <ButtonContainer>
          <HeroButton href={LINKTREE} target="_blank">
            View All Social Link
          </HeroButton>
          <HeroButton
            onClick={(e) => {
              window.location.href = "mailto:team@openhaus.community";
              e.preventDefault();
            }}
          >
            Partnership Inquiries
          </HeroButton>
        </ButtonContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default HomeHero;
