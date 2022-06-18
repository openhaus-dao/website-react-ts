import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  JoinUs,
  NavOption,
  RightNavIcon,
  NavContainer,
  LogoContainer,
  MainContainer,
  RightContainer,
  RightNavOptionsContainerMobile,
} from "./Styles/NavBarStyle";
import { LINKTREE, EVENT, NOTION, OPENHAUS } from "../Constant";
import { GiHamburgerMenu } from "react-icons/gi";
import useMobile from "../Hooks/useMobile";

const RenderNavOptions = () => {
  const navigate = useNavigate();

  return (
    <RightContainer>
      <NavOption onClick={() => navigate("/")}>Home</NavOption>
      <NavOption onClick={() => navigate("/about-us")}>About Us</NavOption>
      <NavOption href={EVENT}>Events</NavOption>
      <NavOption href={NOTION}>Resources</NavOption>
      {/* <JoinUs href={LINKTREE}>All Social Link</JoinUs> */}
    </RightContainer>
  );
};

const RenderNavOptionsMobile = () => {
  const [show, setShow] = useState<Boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <RightContainer>
      <RightNavIcon onClick={() => setShow(!show)}>
        <GiHamburgerMenu style={{ fontSize: 25 }} />
      </RightNavIcon>
      {show && (
        <RightNavOptionsContainerMobile>
          <NavOption onClick={() => navigate("/")}>Home</NavOption>
          <NavOption onClick={() => navigate("/about-us")}>About Us</NavOption>
          <NavOption href={EVENT} target="_blank">
            Events
          </NavOption>
          <NavOption href={NOTION} target="_blank">
            Resources
          </NavOption>
          {/* <JoinUs href={LINKTREE} target="_blank">
            All Social Link
          </JoinUs> */}
        </RightNavOptionsContainerMobile>
      )}
    </RightContainer>
  );
};

const NavBar = () => {
  const isMobile = useMobile();
  const navigate = useNavigate();

  return (
    <MainContainer>
      <NavContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <img src={OPENHAUS} alt="logo" height={50} />
        </LogoContainer>
        {isMobile ? <RenderNavOptionsMobile /> : <RenderNavOptions />}
      </NavContainer>
    </MainContainer>
  );
};

export default NavBar;
