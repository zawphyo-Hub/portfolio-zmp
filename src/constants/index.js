import {
  c,
  php,
  python,
  java,
  cpp,
  mysql,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  sae,
  menx,
  smc,
  rcc,
  xamp,
  bootstrap
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Java Script", icon: javascript},
  { title: "PHP", icon: php },
  { title: "Python", icon: python },
  { title: "React.js", icon: reactjs },
  
  { title: "Node.js", icon: nodejs },
  { title: "MySQL", icon: mysql },
  { title: "Git", icon: git },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "Sky Asia Express",
    description:
      "Flight tickets booking website with advanced search function, allowing users to search and book their flight easily.",
    // tags: [
    //   { name: "Php", color: "blue-text-gradient" },
    //   { name: "MySQL", color: "pink-text-gradient" },
    //   { name: "Java Script", color: "pink-text-gradient" },

    // ],
    
    techImages: [php, javascript, mysql, xamp],
    // techImages: [
    //   { name: "React.js", src: reactjs },
    //   { name: "Node.js", src: nodejs },
    //   { name: "MySQL", src: mysql },
    // ],
    image: sae,
    project_live_link: "none",
    source_code_link: "https://github.com/zawphyo-Hub/Flight-Ticket-Booking-System",
  },
  {
    name: "Men-X Fashion",
    description:
      "E-commerce website for men’s fashion which allows users to browse and purchase clothing items.",
    // tags: [
    //   { name: "React.js", color: "blue-text-gradient" },
    //   { name: "Node.js", color: "green-text-gradient" },
    //   { name: "MySQL", color: "pink-text-gradient" },
      
    // ],
    techImages: [reactjs, nodejs, mysql, bootstrap],
    // techImages: [
    //   { name: "React.js", src: reactjs },
    //   { name: "Node.js", src: nodejs },
    //   { name: "MySQL", src: mysql },
    // ],
    
    
    image: menx,
    project_live_link: "https://zawphyo-hub.github.io/Men-X/",
    source_code_link: "https://github.com/zawphyo-Hub/Men-X",
  },
  {
    name: "Social Media Campaign",
    description:
      "Educational website for children and guidelines for parents to use socail media safely.",
    // tags: [
    //   { name: "Php", color: "blue-text-gradient" },
    //   { name: "PhpMyAdmin", color: "pink-text-gradient" },
    //   { name: "Java Script", color: "pink-text-gradient" },
    // ],
    techImages: [php, javascript, mysql, xamp],
    // techImages: [
    //   { name: "React.js", src: reactjs },
    //   { name: "Node.js", src: nodejs },
    //   { name: "MySQL", src: mysql },
    // ],
    image: smc,
    project_live_link: "none",
    source_code_link:"https://github.com/zawphyo-Hub/Social-Media-Campaign",
           
  },
  {
    name: "Retail Camping Equipment",
    description:
      "A retail website with a wide range of camping equipments, designed to enhance camping experience.",
    // tags: [
    //   { name: "Html", color: "blue-text-gradient" },
    //   { name: "CSS", color: "blue-text-gradient" },
    //   { name: "Java Script", color: "blue-text-gradient" },
    // ],
    techImages: [html, css, javascript],
    // techImages: [
    //   { name: "React.js", src: reactjs },
    //   { name: "Node.js", src: nodejs },
    //   { name: "MySQL", src: mysql },
    // ],
    image: rcc,
    project_live_link: "none",
    source_code_link: "https://github.com/zawphyo-Hub/Retail-Camping-Equipment",
  },
  
];
