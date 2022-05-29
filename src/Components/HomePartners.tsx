import { PRESENTER } from "../Constant";
import {
  PartnersContainer,
  PartnersSection,
  PartnersTitle,
} from "./Styles/HomeStyle";

const HomePartners = () => {
  return (
    <PartnersSection>
      <PartnersTitle>Showcase</PartnersTitle>
      <PartnersContainer>
        {PRESENTER.map((project) => (
          <img
            src={project.link}
            alt={project.name}
            height={100}
            style={{ background: project.darkBackground ? "#2E2136" : "white" }}
          />
        ))}
      </PartnersContainer>
    </PartnersSection>
  );
};

export default HomePartners;
