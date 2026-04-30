import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import quiz from "./assets/quiz.png";
import mixMaster from "./assets/cocktail.png";
import content from "./assets/contentfull.png";
import comfy from "./assets/comfi-store.png";
import nextStore from "./assets/next-store.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Next.js",
    icon: <SiNextdotjs className="h-16 w-16 text-fuchsia-500" />,
    text: "Proficient in building performant, SEO-friendly full-stack applications using Next.js.",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-fuchsia-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-fuchsia-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-fuchsia-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: nextStore,
    url: "https://next-store-project-blond.vercel.app/",
    github: "https://github.com/Alina0303/next-store-project",
    title: "NextStore - Modern E-Commerce Platform",
    text: "A full-stack e-commerce application built with Next.js 14, featuring a robust product catalog, user authentication, and a professional admin dashboard.",
  },
  {
    id: nanoid(),
    img: comfy,
    url: "https://comfy-store-project.netlify.app/",
    github: "https://github.com/Alina0303/comfy-store",
    title: "Comfy store",
    text: "A fully functional e-commerce web application built with React, featuring product filtering, shopping cart management, and a complete checkout flow.",
  },
  {
    id: nanoid(),
    img: mixMaster,
    url: "https://mix-master-personal-project.netlify.app/",
    github: "https://github.com/Alina0303/mix-master",
    title: "Mix Master",
    text: "A modern React application for searching and exploring cocktails using data from the TheCocktailDB API. The app allows users to search for cocktails, view detailed information, and navigate smoothly between pages with a clean and responsive UI.",
  },
  {
    id: nanoid(),
    img: content,
    url: "https://projects-app0.netlify.app/",
    github: "https://github.com/Alina0303/contentful-cms",
    title: "Contentful CMS",
    text: "This project was built using Contentful CMS as the main content management system. It demonstrates my ability to structure, manage, and deliver dynamic content through a modern headless CMS architecture. ",
  },
  {
    id: nanoid(),
    img: quiz,
    url: "https://cs50-quiz.onrender.com/",
    github: "https://github.com/Alina0303/cs50-quiz",
    title: "Quiz Game — CS50 Final Project",
    text: "This project is a quiz game focused on JavaScript syntax. The questions are inspired by examples and ideas from the book Eloquent JavaScript, but the game itself is fully original and was designed and implemented by me.",
  },
];
