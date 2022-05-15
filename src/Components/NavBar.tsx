import React from "react";
import {
  LogoContainer,
  MainContainer,
  NavOption,
  RightContainer,
  NavContainer,
  JoinUs,
} from "./Styles/NavBarStyle";

const NavBar = () => {
  return (
    <MainContainer>
      <NavContainer>
        <LogoContainer>OpenHaus</LogoContainer>
        <RightContainer>
          <NavOption>Home</NavOption>
          <NavOption>About Us</NavOption>
          <NavOption>Events</NavOption>
          <NavOption>Resources</NavOption>
          <JoinUs>Join Us</JoinUs>
        </RightContainer>
      </NavContainer>
    </MainContainer>
  );
};

export default NavBar;
