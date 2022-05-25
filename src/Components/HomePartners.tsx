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
          <img src={project.link} alt={project.name} />
        ))}
      </PartnersContainer>
    </PartnersSection>
  );
};

export default HomePartners;
