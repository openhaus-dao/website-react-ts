import React from "react";
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
import { CORE_TEAM } from "../Constant";
import { FaLinkedin } from "react-icons/fa";

const AboutBody = () => {
    const ContributorContainer = () => {
        return (
            <AboutBodyContainer>
                <AboutBodyHeader>Meet our leadership team</AboutBodyHeader>
                <AboutCardContainer>
                    {CORE_TEAM.map((user) => (
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
            <ContributorContainer />
        </AboutBodySection>
    );
};

export default AboutBody;
