import React from "react";
import {
  PartnersContainer,
  PartnersSection,
  PartnersTitle,
} from "./Styles/HomeStyle";

const HomePartners = () => {
  return (
    <PartnersSection>
      <PartnersTitle>Partners</PartnersTitle>
      <PartnersContainer>
        <div>Draper Startup House</div>
        <div>Brand 1</div>
        <div>Brand 2</div>
        <div>Brand 3</div>
        <div>Brand 4</div>
      </PartnersContainer>
    </PartnersSection>
  );
};

export default HomePartners;
