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
            height={isMobile ? 80 : 100}
          />
        ))}
      </PartnersContainer>
    </PartnersSection>
  );
};

export default HomePartners;
