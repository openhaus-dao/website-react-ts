import { PRESENTER } from "../Constant";
import {
  PartnersContainer,
  PartnersSection,
  PartnersTitle,
} from "./Styles/HomeStyle";
import useMobile from "../Hooks/useMobile";

const HomePartners = () => {
  const isMobile = useMobile();

  return (
    <PartnersSection>
      <PartnersTitle>Showcase</PartnersTitle>
      <PartnersContainer>
        {PRESENTER.map((project) => (
          <img
            src={project.link}
            alt={project.name}
            style={{ margin: "0 20px", height: isMobile ? "60px" : "100px" }}
          />
        ))}
      </PartnersContainer>
    </PartnersSection>
  );
};

export default HomePartners;
