import { FC } from "react";
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
  SpotifyPodcast,
  SpotifyPodcastLink,
} from "./Styles/HomeStyle";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { SocialWrapper } from "./Styles/AboutStyle";
import { IconType } from "react-icons";
import {
  DISCORD,
  TELEGRAM,
  TWITTER,
  SPOTIFY_IMG,
  SPOTIFY,
  NOTION,
  EVENT,
} from "../Constant";
import { useNavigate } from "react-router-dom";

interface Icon {
  Icon: IconType;
  link: string;
}
const Contact = () => {
  const navigate = useNavigate();

  const ContactInfo = () => {
    const SocialLink: FC<Icon> = ({ Icon, link }) => {
      return (
        <SocialWrapper href={link} target="_blank">
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
        <ContactInfoLogo>OpenHaus</ContactInfoLogo>
        <ContactInfoTitle>Get In Touch</ContactInfoTitle>
        <ContactInfoEmail>team@openhaus.community</ContactInfoEmail>
        <ContactSocialContainer>
          <SocialLink Icon={FaDiscord} link={DISCORD} />
          <SocialLink Icon={FaTelegramPlane} link={TELEGRAM} />
          <SocialLink Icon={FaTwitter} link={TWITTER} />
        </ContactSocialContainer>
        <SpotifyPodcastLink href={SPOTIFY} target="_blank">
          <SpotifyPodcast src={SPOTIFY_IMG} alt="Spotify Podcast Icon" />
        </SpotifyPodcastLink>
      </ContactInfoContainer>
    );
  };

  const SiteMap = () => {
    return (
      <SiteMapContainer>
        <SiteMapTitle>OpenHaus</SiteMapTitle>
        <SiteMapLink onClick={() => navigate("/about-us")}>
          About Us
        </SiteMapLink>
        <SiteMapLink href={EVENT} target="_blank">
          Events
        </SiteMapLink>
        <SiteMapLink href={NOTION} target="_blank">
          Resources
        </SiteMapLink>
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
