import { FC } from "react";
import {
  AboutBodyContainer,
  AboutBodyHeader,
  AboutBodySection,
  AboutCard,
  AboutCardContainer,
  AboutCardHeader,
  AboutCardHeaderContainer,
  AboutCardJob,
  AboutCardRole,
  SocialWrapper,
} from "./Styles/AboutStyle";
import { CONTRIBUTORS, CORE_TEAM, IProfile } from "../Constant";
import { FaLinkedin } from "react-icons/fa";
import useMobile from "../Hooks/useMobile";

interface IProps {
  header: string;
  profile: IProfile[];
}

const AboutBody = () => {
  const isMobile = useMobile();

  const ContributorContainer: FC<IProps> = ({ header, profile }) => {
    return (
      <AboutBodyContainer>
        <AboutBodyHeader>{header}</AboutBodyHeader>
        <AboutCardContainer
          style={{ flexDirection: isMobile ? "column" : "row" }}
        >
          {profile.map((user) => (
            <AboutCard>
              <img src={user.profile} alt="profile" height={"330px"} />
              <AboutCardHeaderContainer>
                <AboutCardHeader>{user.name}</AboutCardHeader>
                <SocialWrapper href={user.linkedin}>
                  <FaLinkedin style={{ fontSize: "30px", cursor: "pointer" }} />
                </SocialWrapper>
              </AboutCardHeaderContainer>
              <AboutCardRole>{user.role}</AboutCardRole>
              <AboutCardJob>{user.job}</AboutCardJob>
            </AboutCard>
          ))}
        </AboutCardContainer>
      </AboutBodyContainer>
    );
  };

  return (
    <AboutBodySection>
      <ContributorContainer
        header="Meet our leadership team"
        profile={CORE_TEAM}
      />
      <ContributorContainer
        header="Meet our contributors"
        profile={CONTRIBUTORS}
      />
    </AboutBodySection>
  );
};

export default AboutBody;
