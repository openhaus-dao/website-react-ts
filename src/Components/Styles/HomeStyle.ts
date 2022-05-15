import styled from "styled-components";

// MAIN
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

// HERO
export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  min-height: 30%;
  padding: 4% 0;
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.2);
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const HeroTitle = styled.h1`
  color: var(--primary-text-color);
  font-size: 4.8rem;
  margin: 20px 0 0 0;
`;

export const HeroSubTitle = styled.h2`
  color: var(--primary-text-color);
  line-height: 130%;
  font-size: 2.4rem;
  margin: 0;
  margin: 20px 0 0 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const HeroButton = styled.a`
  display: flex;
  background: var(--btn-color);
  color: white;
  border-radius: 30px;
  border: 2px solid transparent;
  text-decoration: none;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 1.2rem 2rem;
  font-size: 1.8rem;
  margin: 20px 10px;
  @media screen and (max-width: 576px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// BODY
export const BodySection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2% 0;
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.2);
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BodyTitle = styled.h1`
  color: var(--primary-text-color);
  font-size: 3.6rem;
`;

export const BodyFeatureContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 20px 0;
`;

export const BodyFeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 16px;
  background: #eff3f9;
`;

export const BodyFeatureCardTitle = styled.div`
  font-size: 2.4rem;
  margin: 12px 0;
`;

export const BodyFeatureCardDescription = styled.div`
  font-size: 1.8rem;
`;

// PARTNERS
export const PartnersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2% 0;
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.2);
`;

export const PartnersTitle = styled.h1`
  color: var(--extra-text-color);
  font-size: 3.2rem;
`;

export const PartnersContainer = styled.h1`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  color: var(--extra-text-color);
  margin: 20px 0;
`;

// CONTACT US
export const ContactMainContainer = styled.div`
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2% 0;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-apart;
  align-items: flex-start;
  width: 20%;
`;

export const ContactInfoLogo = styled.div`
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0;
`;

export const ContactInfoTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  margin: 10px 0;
`;

export const ContactInfoEmail = styled.div`
  color: var(--extra-text-color-overdark);
  font-size: 1.6rem;
  margin: 10px 0;
`;

export const ContactSocialContainer = styled.div`
  display: flex;
  justify-content: space-apart;
  margin: 10px 0;
`;

export const SiteMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-apart;
`;

export const SiteMapTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  margin: 10px 0;
`;

export const SiteMapLink = styled.p`
  color: var(--extra-text-color-overdark);
  font-size: 1.6rem;
  margin: 10px 0;
  cursor: pointer;
`;
