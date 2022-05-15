export const DISCORD = "https://discord.gg/NXaZ4GAh";
export const TELEGRAM = "https://t.me/+_5YU1nqQEnQ0YmY1";
export const TWITTER = "https://twitter.com/OpenHausSG";
export const EVENT =
  "https://www.meetup.com/singapore-solana-developer-meetup/";
export const NOTION =
  "https://open-haus.notion.site/open-haus/OpenHaus-Resources-d9f74ca41719485e99dd5156d4a0f5c0";
export const GOOGLE_PARTNERSHIP_FORM = "LINK TO GOOGLE";

interface ICore {
  profile: string;
  name: string;
  role: string;
  job: string;
  linkedin: string;
}

export const CORE_TEAM: ICore[] = [
  {
    profile: "src/Resources/ProfilePicture/Justin_dp.jpeg",
    name: "Justin Lee",
    role: "Events & Community",
    job: "Blockchain Developer",
    linkedin: "https://www.linkedin.com/in/justinlee-yl/",
  },
  {
    profile: "src/Resources/ProfilePicture/vincent_dp.jpg",
    name: "Vincent Leow",
    role: "Education",
    job: "Software Engineer",
    linkedin: "https://linkedin.com/in/vincentlss",
  },
  {
    profile: "src/Resources/ProfilePicture/Kevin_dp.jpg",
    name: "Kevin Wong",
    role: "General Management",
    job: "General Manager",
    linkedin: "https://www.linkedin.com/in/kevin-wong-3857ab3/",
  },
  {
    profile: "src/Resources/ProfilePicture/Jonas_dp.jpg",
    name: "Jonas Chen",
    role: "Strategy & Growth",
    job: "Program Manager",
    linkedin: "https://www.linkedin.com/in/jonas-chen/ ",
  },
];
