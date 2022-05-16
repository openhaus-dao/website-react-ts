import React from "react";
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
        <div>Hawksight</div>
        <div>PsyOption</div>
        <div>Solana FM</div>
        <div>Web3Auth</div>
        <div>Pyth</div>
        <div>SolDance</div>
      </PartnersContainer>
    </PartnersSection>
  );
};

export default HomePartners;
