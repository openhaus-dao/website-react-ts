import styled from "styled-components";

// MAIN
export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 30%;
`;

// HERO
export const AboutHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 100%;
  padding: 4% 0;
`;

export const AboutHeroTitle = styled.h1`
  color: var(--primary-text-color);
  font-size: 4.8rem;
  margin: 20px 0 0 0;
`;

export const AboutHeroSubTitle = styled.p`
  color: var(--primary-text-color);
  line-height: 130%;
  font-size: 2rem;
  margin: 0;
  margin: 20px 0 0 0;
`;

// BODY
export const AboutBodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2% 0;
  height: 100%;
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
`;

export const AboutBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1% 0;
  height: 100%;
`;

export const AboutBodyHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 4.2rem;
  width: 100%;
`;

export const AboutCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 20px 0;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 20px;
  height: 100%;
  width: content-fit;
`;

export const AboutCardImageContainer = styled.div`
  height: 60%;
`;

export const AboutCardHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: content-fit;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;

export const AboutCardHeader = styled.div`
  font-size: 2rem;
  color: var(--primary-text-color);
  font-weight: 600;
  letter-spacing: -1px;
  margin: 0;
`;

export const AboutCardRole = styled.div`
  font-size: 1.6rem;
  margin: 0;
  color: var(--primary-text-color);
  margin-bottom: 5px;
`;

export const AboutCardJob = styled.div`
  font-size: 1.6rem;
  margin: 10px 0;
  color: var(--job-text-color);
  margin-bottom: 5px;
`;

export const SocialWrapper = styled.a`
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
