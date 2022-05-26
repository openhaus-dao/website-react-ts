export const DISCORD = "https://discord.gg/QPvGy7NgZb";
export const TELEGRAM = "https://t.me/+_5YU1nqQEnQ0YmY1";
export const TWITTER = "https://twitter.com/OpenHausSG";
export const EVENT =
  "https://www.meetup.com/singapore-solana-developer-meetup/";
export const NOTION =
  "https://open-haus.notion.site/open-haus/OpenHaus-Resources-d9f74ca41719485e99dd5156d4a0f5c0";
export const GOOGLE_PARTNERSHIP_FORM = "LINK TO GOOGLE";

export interface IProfile {
  profile: string;
  name: string;
  role: string;
  job: string;
  linkedin: string;
}

export interface IPresenter {
  name: string;
  link: string;
}

const PRESENTER_ROOT = "https://openhaus-test.netlify.app/resources/";
const URL_ROOT = "https://openhaus-test.netlify.app/resources/ProfilePicture/";

export const PRESENTER: IPresenter[] = [
  {
    name: "Pyth",
    link: `${PRESENTER_ROOT}/pyth_logo.svg`,
  },
  {
    name: "Web3Auth",
    link: `${PRESENTER_ROOT}/web3auth-logo-light.png`,
  },
  {
    name: "MetaCamp",
    link: `${PRESENTER_ROOT}/metacamp_logo.png`,
  },
  {
    name: "SolanaFM",
    link: `${PRESENTER_ROOT}/solanafm_logo.png`,
  },
  {
    name: "Hawksight",
    link: `${PRESENTER_ROOT}/hawksight_logo.png`,
  },
  {
    name: "Somove",
    link: `${PRESENTER_ROOT}/somove_logo.png`,
  },
];

export const CORE_TEAM: IProfile[] = [
  {
    profile: `${URL_ROOT}/Justin_dp.jpeg`,
    name: "Justin Lee",
    role: "Events & Community",
    job: "Blockchain Developer",
    linkedin: "https://www.linkedin.com/in/justinlee-yl/",
  },
  {
    profile: `${URL_ROOT}/vincent_dp.jpg`,
    name: "Vincent Leow",
    role: "Education",
    job: "Software Engineer",
    linkedin: "https://linkedin.com/in/vincentlss",
  },
  {
    profile: `${URL_ROOT}/Kevin_dp.jpg`,
    name: "Kevin Wong",
    role: "General Management",
    job: "General Manager",
    linkedin: "https://www.linkedin.com/in/kevin-wong-3857ab3/",
  },
  {
    profile: `${URL_ROOT}/Jonas_dp.jpg`,
    name: "Jonas Chen",
    role: "Strategy & Growth",
    job: "Program Manager",
    linkedin: "https://www.linkedin.com/in/jonas-chen/ ",
  },
];

export const CONTRIBUTORS: IProfile[] = [
  {
    profile: `${URL_ROOT}/dylan_dp.jpg`,
    name: "Dylan Oh",
    role: "Engineering & Content",
    job: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/dylan-oh-dick-loon/",
  },
  {
    profile: `${URL_ROOT}/yongKang.jpg`,
    name: "Yong Kang Chia",
    role: "Engineering",
    job: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/yong-kang-chia-66b225154/",
  },
  {
    profile: `${URL_ROOT}/sean_dp.jpg`,
    name: "Sean Leng",
    role: "Engineering & Community",
    job: "iOS Engineer",
    linkedin: "https://www.linkedin.com/in/jonas-chen/ ",
  },
  {
    profile: `${URL_ROOT}/sharvin_dp.jpg`,
    name: "Sharvin Baindur",
    role: "Content",
    job: "Director",
    linkedin: "https://www.linkedin.com/in/sharvin-baindur-03a661177",
  },
];
