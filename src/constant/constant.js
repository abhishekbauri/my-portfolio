import photo from "../assets/images/photo.png";
import aboutPhoto from "../assets/images/aboutPhoto.png";
import logo from "../assets/images/logo.png";
import contact from "../assets/images/contact.png";

import {
  html,
  css,
  js,
  reactImg,
  redux,
  bootstrap,
  git,
  materialUi,
  mongoDB,
  nodeJs,
  tailwind,
  typescript,
  cookingBlog,
  movieReview,
  countryFlag,
  taskManagementSystem,
  userManagementSystem,
  weatherStationDashboard,
  nikePage,
  teeRexStore,
} from "../assets/index.js";

export const photoUrl = photo;
export const aboutPhotoUrl = aboutPhoto;
export const portfolioLogo = logo;
export const contactImage = contact;

export const skillsImg = [
  { src: html, alt: "html-icon" },
  { src: css, alt: "css-icon" },
  { src: js, alt: "js-icon" },
  { src: bootstrap, alt: "bt-icon" },
  { src: reactImg, alt: "react-icon" },
  { src: redux, alt: "redux-icon" },
  { src: materialUi, alt: "mui-icon" },
  { src: typescript, alt: "ts-icon" },
  { src: tailwind, alt: "tailwind-icon" },
  { src: mongoDB, alt: "mongodb-icon" },
  { src: nodeJs, alt: "nodejs-icon" },
  { src: git, alt: "git-icon" },
];

export const projectDetails = [
  {
    imageUrl: movieReview,
    title: "Movie Insights",
    githubUrl: "https://github.com/abhishekbauri/movie-review",
    liveUrl: "https://movie-reviews-by-akb.netlify.app/",
    id: 1,
  },
  {
    imageUrl: teeRexStore,
    title: "TeeRex Store",
    githubUrl: "https://github.com/abhishekbauri/Tee_Rex_Store",
    liveUrl: "https://akb-teerex-store.netlify.app/",
    id: 1,
  },
  {
    imageUrl: countryFlag,
    title: "Know Your Country",
    githubUrl: "https://github.com/abhishekbauri/Country-Flag",
    liveUrl: "https://know-about-your-country.netlify.app/",
    id: 2,
  },
  {
    imageUrl: taskManagementSystem,
    title: "Task Management System",
    githubUrl: "https://github.com/abhishekbauri/Task-Management-System",
    liveUrl: "https://abhishekbauri.github.io/Task-Management-System/",
    id: 3,
  },
  {
    imageUrl: weatherStationDashboard,
    title: "Weather Station Dashboard",
    githubUrl: "https://github.com/abhishekbauri/Weather-Station-Dashboard",
    liveUrl: "https://weather-station-dashboard.netlify.app/",
    id: 4,
  },
  {
    imageUrl: userManagementSystem,
    title: "User Management System",
    githubUrl: "https://github.com/abhishekbauri/UserManagementSystem",
    liveUrl: "https://youtu.be/adQsAzgKb-o?si=kEbe2mAP2Z6l57nb",
    id: 5,
  },
  {
    imageUrl: cookingBlog,
    title: "Cooking Blog",
    githubUrl: "https://github.com/abhishekbauri/Cooking_Blog",
    liveUrl: "https://cooking-blog-akb.vercel.app/",
    id: 6,
  },
  {
    imageUrl: nikePage,
    title: "Nike Static Page",
    githubUrl: "https://github.com/abhishekbauri/static-landing-page-nike",
    liveUrl: "https://nike-static-landing-page.netlify.app/",
    id: 7,
  },
];

export const aboutDesc = `I am a passionate Software Developer with a strong foundation in Electronics and Communication Engineering graduating from the prestigious college of National Institute of Technology, Jamshedpur. Throughout my professional journey, I have honed my ability to work effectively in fast-paced environments, collaborate with cross-functional teams, and deliver high-quality results within deadlines. I am skilled at problem-solving, analytical thinking, and adapting to new technologies and frameworks.`;

export const kreditBeeExp = `During my internship at KreditBee, I had the opportunity to work as a Frontend Developer, where I honed my expertise in building and maintaining intuitive and user-friendly interfaces. Leveraging my proficiency in React.js, JavaScript and TypeScript, I contributed to the development and maintenance of robust software solutions. Collaborating closely with cross-functional teams, I ensured seamless integration and delivered high-quality products that exceeded client expectations.`;
