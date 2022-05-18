import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    JoinUs,
    NavOption,
    RightNavIcon,
    NavContainer,
    LogoContainer,
    MainContainer,
    RightContainer,
    RightNavOptionsContainer,
} from "./Styles/NavBarStyle";
import { DISCORD, EVENT, NOTION } from "../Constant";
import useMobile from "../Hooks/useMobile";

interface NavOptionsParams {
    show: Boolean;
}

const RenderNavOptions: React.FC<NavOptionsParams> = ({ show }) => {
    const navigate = useNavigate();

    return (
        show && (
            <RightNavOptionsContainer>
                <RightContainer>
                    <NavOption onClick={() => navigate("/")}>Home</NavOption>
                    <NavOption onClick={() => navigate("/about-us")}>About Us</NavOption>
                    <NavOption href={EVENT}>Events</NavOption>
                    <NavOption href={NOTION}>Resources</NavOption>
                    <JoinUs href={DISCORD}>Join Us</JoinUs>
                </RightContainer>
            </RightNavOptionsContainer>
        )
    );
};

const NavBar = () => {
    const isMobile = useMobile();
    const navigate = useNavigate();
    const [show, setShow] = useState<Boolean>(false);

    useEffect(() => {
        setShow(!isMobile);
    }, [isMobile]);

    console.log(isMobile);
    return (
        <MainContainer>
            <NavContainer>
                <LogoContainer onClick={() => navigate("/")}>OpenHaus</LogoContainer>

                <RightContainer>
                    <RightNavIcon onClick={() => setShow(isMobile ? !show : true)}>
                        <img src="/src/Resources/menu.png" width={25} />
                    </RightNavIcon>
                    <RenderNavOptions show={show} />
                </RightContainer>
            </NavContainer>
        </MainContainer>
    );
};

export default NavBar;
