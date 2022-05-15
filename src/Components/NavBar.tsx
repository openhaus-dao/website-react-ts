import { useNavigate } from "react-router-dom";
import {
  LogoContainer,
  MainContainer,
  NavOption,
  RightContainer,
  NavContainer,
  JoinUs,
} from "./Styles/NavBarStyle";
import { DISCORD, EVENT, NOTION } from "../Constant";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <NavContainer>
        <LogoContainer onClick={() => navigate("/")}>OpenHaus</LogoContainer>
        <RightContainer>
          <NavOption onClick={() => navigate("/")}>Home</NavOption>
          <NavOption onClick={() => navigate("/about-us")}>About Us</NavOption>
          <NavOption href={EVENT}>Events</NavOption>
          <NavOption href={NOTION}>Resources</NavOption>
          <JoinUs href={DISCORD}>Join Us</JoinUs>
        </RightContainer>
      </NavContainer>
    </MainContainer>
  );
};

export default NavBar;
