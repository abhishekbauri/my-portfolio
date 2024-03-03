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
  eShop,
  expenseTracker,
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
    imageUrl: eShop,
    title: "E-Shop",
    techStack: ["React.js", "Express.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/abhishekbauri/E-Shop",
    liveUrl: "https://e-shop-by-akb.vercel.app/",
    id: 10,
  },
  {
    imageUrl: teeRexStore,
    title: "TeeRex Store",
    techStack: ["React.js", "Redux-Toolkit", "CSS", "Redux-Thunk"],
    githubUrl: "https://github.com/abhishekbauri/Tee_Rex_Store",
    liveUrl: "https://akb-teerex-store.netlify.app/",
    id: 9,
  },

  {
    imageUrl: cookingBlog,
    title: "Cooking Blog",
    techStack: ["Node.js", "Express.js", "Mongo DB", "Bootstrap"],
    githubUrl: "https://github.com/abhishekbauri/Cooking_Blog",
    liveUrl: "https://cooking-blog-akb.vercel.app/",
    id: 8,
  },
  {
    imageUrl: movieReview,
    title: "Movie Insights",
    techStack: [
      "React.js",
      "Redux-Toolkit",
      "OMDB API",
      "Redux-Thunk",
      "Material UI",
    ],
    githubUrl: "https://github.com/abhishekbauri/movie-review",
    liveUrl: "https://movie-reviews-by-akb.netlify.app/",
    id: 7,
  },
  {
    imageUrl: countryFlag,
    title: "Know Your Country",
    techStack: ["React.js", "JavaScript", "CSS"],
    githubUrl: "https://github.com/abhishekbauri/Country-Flag",
    liveUrl: "https://know-about-your-country.netlify.app/",
    id: 6,
  },
  {
    imageUrl: taskManagementSystem,
    title: "Task Management System",
    techStack: ["React.js", "JavaScript", "Local Storage", "CSS"],
    githubUrl: "https://github.com/abhishekbauri/Task-Management-System",
    liveUrl: "https://abhishekbauri.github.io/Task-Management-System/",
    id: 5,
  },
  {
    imageUrl: expenseTracker,
    title: "Expense Tracker",
    techStack: ["React.js", "JavaScript", "CSS"],
    githubUrl: "https://github.com/abhishekbauri/Expense-tracker",
    liveUrl: "https://expense-tracker-by-akb.netlify.app/",
    id: 4,
  },
  {
    imageUrl: weatherStationDashboard,
    title: "Weather Station Dashboard",
    techStack: ["React.js", "JavaScript", "CSS"],
    githubUrl: "https://github.com/abhishekbauri/Weather-Station-Dashboard",
    liveUrl: "https://weather-station-dashboard.netlify.app/",
    id: 3,
  },
  {
    imageUrl: userManagementSystem,
    title: "User Management System",
    techStack: ["Node.js", "Express.js", "Mongo DB", "CSS"],
    githubUrl: "https://github.com/abhishekbauri/UserManagementSystem",
    liveUrl: "https://youtu.be/adQsAzgKb-o?si=kEbe2mAP2Z6l57nb",
    id: 2,
  },

  {
    imageUrl: nikePage,
    title: "Nike Static Page",
    techStack: ["React.js", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/abhishekbauri/static-landing-page-nike",
    liveUrl: "https://nike-static-landing-page.netlify.app/",
    id: 1,
  },
];
