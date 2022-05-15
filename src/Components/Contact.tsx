import React from "react";
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

const Contact = () => {
  const ContactInfo = () => {
    return (
      <ContactInfoContainer>
        <ContactInfoLogo>LOGO</ContactInfoLogo>
        <ContactInfoTitle>Get In Touch</ContactInfoTitle>
        <ContactInfoEmail>hello@openhaus.community</ContactInfoEmail>
        <ContactSocialContainer>
          <FaDiscord
            style={{ color: "white", fontSize: "30px", marginRight: "20px" }}
          />
          <FaTelegramPlane
            style={{ color: "white", fontSize: "30px", marginRight: "20px" }}
          />
          <FaTwitter
            style={{ color: "white", fontSize: "30px", marginRight: "20px" }}
          />
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
