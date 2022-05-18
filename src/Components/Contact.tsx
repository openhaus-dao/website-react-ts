import React, { FC } from "react";
import {
    ContactMainContainer,
    ContactInfoContainer,
    ContactInfoLogo,
    ContactInfoTitle,
    ContactInfoEmail,
    ContactSocialContainer,
    SiteMapContainer,
    SiteMapTitle,
    SiteMapLink,
} from "./Styles/HomeStyle";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { SocialWrapper } from "./Styles/AboutStyle";
import { IconType } from "react-icons";
import { DISCORD, TELEGRAM, TWITTER } from "../Constant";

interface Icon {
    Icon: IconType;
    link: string;
}
const Contact = () => {
    const ContactInfo = () => {
        const SocialLink: FC<Icon> = ({ Icon, link }) => {
            return (
                <SocialWrapper href={link}>
                    <Icon
                        style={{
                            color: "white",
                            fontSize: "30px",
                            marginRight: "20px",
                            cursor: "pointer",
                        }}
                    />
                </SocialWrapper>
            );
        };

        return (
            <ContactInfoContainer>
                <ContactInfoLogo>LOGO</ContactInfoLogo>
                <ContactInfoTitle>Get In Touch</ContactInfoTitle>
                <ContactInfoEmail>team@openhaus.community</ContactInfoEmail>
                <ContactSocialContainer>
                    <SocialLink Icon={FaDiscord} link={DISCORD} />
                    <SocialLink Icon={FaTelegramPlane} link={TELEGRAM} />
                    <SocialLink Icon={FaTwitter} link={TWITTER} />
                </ContactSocialContainer>
            </ContactInfoContainer>
        );
    };

    const SiteMap = () => {
        return (
            <SiteMapContainer>
                <SiteMapTitle>OpenHaus</SiteMapTitle>
                <SiteMapLink>About Us</SiteMapLink>
                <SiteMapLink>Events</SiteMapLink>
                <SiteMapLink>Resources</SiteMapLink>
            </SiteMapContainer>
        );
    };

    return (
        <ContactMainContainer>
            <ContactInfo />
            <SiteMap />
        </ContactMainContainer>
    );
};

export default Contact;
