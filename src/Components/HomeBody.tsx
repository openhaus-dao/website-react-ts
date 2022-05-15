import React, { FC } from "react";
import {
  BodyContainer,
  BodyFeatureCard,
  BodyFeatureCardDescription,
  BodyFeatureCardTitle,
  BodyFeatureContainer,
  BodySection,
  BodyTitle,
} from "./Styles/HomeStyle";
import { IconType } from "react-icons";
import { MdConnectWithoutContact } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { GiTeamIdea } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

interface ICard {
  Icon: IconType;
  title: string;
  description: string;
}

const HomeBody = () => {
  const Card: FC<ICard> = ({ Icon, title, description }) => {
    return (
      <BodyFeatureCard>
        <Icon style={{ fontSize: "50px" }} />
        <BodyFeatureCardTitle>{title}</BodyFeatureCardTitle>
        <BodyFeatureCardDescription>{description}</BodyFeatureCardDescription>
      </BodyFeatureCard>
    );
  };
  return (
    <BodySection>
      <BodyContainer>
        <BodyTitle>What we offer</BodyTitle>
        <BodyFeatureContainer>
          <Card
            Icon={GrWorkshop}
            title={"Workshops"}
            description={"This is a description"}
          />
          <Card
            Icon={GiTeamIdea}
            title={"Pitching Sessions"}
            description={"This is a description"}
          />
          <Card
            Icon={MdConnectWithoutContact}
            title={"Networking"}
            description={"This is a description"}
          />
          <Card
            Icon={FaHandsHelping}
            title={"Mentorship"}
            description={"This is a description"}
          />
        </BodyFeatureContainer>
      </BodyContainer>
    </BodySection>
  );
};

export default HomeBody;
