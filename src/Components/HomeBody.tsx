import { FC } from "react";
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
                    <Card Icon={GrWorkshop} title={"Workshops"} description={"Dive into the codebase and start learning by CODING!"} />
                    <Card
                        Icon={GiTeamIdea}
                        title={"Pitching Sessions"}
                        description={"Pitch and recruit a team of engineers to make things happen!"}
                    />
                    <Card
                        Icon={MdConnectWithoutContact}
                        title={"Networking"}
                        description={"Meet like-minded people in the industry that will help you achieve your goals"}
                    />
                    <Card
                        Icon={FaHandsHelping}
                        title={"Mentorship"}
                        description={"Learn from experience developers whenever you encounter an issue"}
                    />
                </BodyFeatureContainer>
            </BodyContainer>
        </BodySection>
    );
};

export default HomeBody;
