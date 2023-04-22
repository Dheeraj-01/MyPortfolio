import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  groww,
  relevel,
  df,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  githubproject,
  likeme,
  rtucoders
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Problem Setter/Tester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "Groww",
    icon: groww,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Worked in Payments UPI APP of Groww and in developing and debugging the backend APIs.",
      "Made a Service which Auto Generates all the models and TestNg test-cases by using Swagger.",
      "Exposure: Java, Spring Boot, Microservices,Hibernate, Jenkins, REST Assured and NodeJs."
    ],
  },
  {
    title: "Problem Setter/Tester",
    company_name: "Relevel By Unacademy",
    icon: relevel,
    iconBg: "#E6DEDD",
    date: "August 2021 - April 2022",
    points: [
      "I Authored and prepared +200 problems of difficulty equivalent to LeetCode Easy/Medium/Hard.",
      "The problems were about Dynamic programming, mixed with other topics like data structures and graphs."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Daffodil Health",
    icon: df,
    iconBg: "#383E56",
    date: "December 2022 - March 2022",
    points: [
      "Implementing new functionalities on Daffodil Health Pro App like pagination, server-side searching, Notes/Todos, adding server-side and frontend side validators, UI Optimization, etc....",
      "Planning and implementation of Roles on DH Pro App.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Setting up infrastructure and environment on AWS and Heroku.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Like Me",
    description:
      "Like-Me-App is a place where users can create profiles and start creating posts and make friends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: likeme,
    source_code_link: "https://github.com/Dheeraj-01/LikeMe-App",
  },
  {
    name: "Whatsapp Chat Analyzer",
    description:
      "Developed a system that tracks our conversation and predict the particular messages are positive, negative, or neutral in nature using Sentiment Analysis",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Plotly",
        color: "pink-text-gradient",
      },
    ],
    image: githubproject,
    source_code_link: "https://github.com/Dheeraj-01/Whatsapp-Chat-Analyzer",
  },
  {
    name: "The RTU Coders - Club Website",
    description:
      "Goal of this project to provide quality content of competitive programming at one place to every student.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "graphQL",
        color: "pink-text-gradient",
      },
    ],
    image: rtucoders,
    source_code_link: "https://github.com/Dheeraj-01/The-RTU-Coders",
  },
];

export { services, technologies, experiences, testimonials, projects };
