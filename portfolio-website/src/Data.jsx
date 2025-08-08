import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { RiBriefcase4Fill, RiGraduationCapFill } from "react-icons/ri";

import skillsImg1 from "./assets/html-logo.svg";
import skillsImg2 from "./assets/css-logo.svg";
import skillsImg3 from "./assets/javascript-logo.svg";
import skillsImg4 from "./assets/react-logo.svg";
import skillsImg5 from "./assets/download-Kittl (1).svg";
import skillsImg11 from "./assets/images (1)-Kittl.svg";

import skillsImg12 from "./assets/images-Kittl.svg";

import tshirtImage from "./assets/T-shirt (2).jpg";
import logoImage from "./assets/image.png";


import skillsImg6 from "./assets/adobe-photoshop-logo.svg";

import skillsImg9 from "./assets/file.svg";
import skillsImg7 from "./assets/download (1)-Kittl.svg";
import skillsImg8 from "./assets/download (2)-Kittl.svg";

import skillsImg10 from "./assets/download-Kittl.svg";

import projectImg1 from "./assets/download (2).jpg";
import projectImg2 from "./assets/T-shirt (2).jpg";
import projectImg3 from "./assets/8afd9a41-e707-4266-9f4d-7dced527bb89.jpg";
import projectImg4 from "./assets/download.jpg";
import projectImg5 from "./assets/download (1).jpg";
import projectImg6 from "./assets/image.png";


import Theme1 from "./assets/red.png";
import Theme2 from "./assets/blueviolet.png";
import Theme3 from "./assets/blue.png";
import Theme4 from "./assets/magenta.png";
import Theme5 from "./assets/yellowgreen.png";
import Theme6 from "./assets/orange.png";
import Theme7 from "./assets/yellow.png";

export const links = [
  {
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    title: "First Name : ",
    description: "Mekdelawit",
  },

  {
    title: "Last Name : ",
    description: "Hailu",
  },

  {
    title: "Degree:",
    description: "BSc in Computer Science ",
  },

  

  {
    title: "Freelance : ",
    description: "Available",
  },

  {
    title: "Address : ",
    description: "Addis Ababa, Ethiopia",
  },

  {
    title: "Phone : ",
    description: "+2519-29-73-88-53",
  },

  {
    title: "Email : ",
    description: "mekdih.2116@gmail.com",
  },

  {
    title: "Github : ",
    description: "https://github.com/Mekdelawit-21",
  },

  
];

export const stats = [
  {
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    no: "5+",
    title: "Completed <br /> Projects",
  },

  {
    no: "16+",
    title: "Happy <br /> Customers",
  },

  {
    no: "3+",
    title: " Team  <br /> Members",
  },
];


export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: "HTML",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 2,
    img: skillsImg2,
    title: "CSS",
    level: "Advanced",
    category: "developer",
  },

  {
    id: 3,
    img: skillsImg3,
    title: "JavaScript",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 4,
    img: skillsImg4,
    title: "React",
    level: "Basic",
    category: "developer",
  },

  {
    id: 5,
    img: skillsImg5,
    title: "Node Js",
    level: "Basic",
    category: "developer",
  },

  {
    id: 11,
    img: skillsImg11,
    title: "MySql",
    level: "Advanced",
    category: "developer",
  },

  {
    id: 12,
    img: skillsImg12,
    title: "Express Js",
    level: "Advanced",
    category: "developer",
  },

  {
    id: 6,
    img: skillsImg6,
    title: "Photoshop",
    level: "Advanced",
    category: "designer",
  },

  {
    id: 7,
    img: skillsImg7,
    title: "Adobe Ai",
    level: "Basic",
    category: "designer",
  },

  {
    id: 8,
    img: skillsImg8,
    title: "Adobe ID",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 9,
    img: skillsImg9,
    title: "cap cut",
    level: "Advanced",
    category: "designer",
  },

  {
    id: 10,
    img: skillsImg10,
    title: "canva",
    level: "Basic",
    category: "designer",
  },
];


export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2024 - Present",
    title: "Web Developer",
    desc: "As a Full-Stack Developer, I build performant web applications using the MERN stack (MongoDB, Express, React, Node.js), with a focus on clean architecture and security. I specialize in creating functional digital experiences with technical precision.",
  },

  {
    id: 2,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2023 - present",
    title: "Graphics Design",
    desc: "As a Designer, I craft visually compelling user experiences with Adobe Creative Suite, ensuring interfaces are as intuitive as they are beautiful. I bridge the gap between technical precision and creative vision.",
  },

  

  {
    id: 4,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2022 - 2026",
    title: "BSc: Computer Science <span> Arba Minch University </span>",
    desc: "Relevant Coursework: Core CS: Data Structures & Algorithms, Database Systems, Object-Oriented Programming. Systems & Theory: Real-Time Embedded Systems, Automata & Complexity Theory. Applied Development: Web Development. Academic Projects: Built a student management system, designed a responsive e-commerce website (HTML/CSS/JS). This education forms the technical foundation for my work as a Full-Stack Developer.",
  },

  {
    id: 6,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2009",
    title: "Early Education",
    desc: "Early academic experiences that helped shape my creative and technical abilities, leading to my current dual focus on development and design.",
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: "Amazon-Clone",
    description:
      "A full-stack Amazon clone with React frontend, Firebase authentication, and Stripe payment integration. Features product browsing, cart functionality, and order history.",
    skills: [
      skillsImg1,
      skillsImg2,
      skillsImg3,
      skillsImg4,
      skillsImg5,
      skillsImg11,
    ],
    link: "https://github.com/Mekdelawit-21/Amazon-Clone",
  },

  {
    id: 2,
    img: projectImg2,
    title: "T-shirt Design",
    description:
      "Creative t-shirt design for Computer Science department celebration, featuring custom typography and tech-inspired graphics using Adobe Illustrator.",
    skills: [skillsImg6, skillsImg7],
    link: tshirtImage,
  },

  {
    id: 3,
    img: projectImg3,
    title: "Snake Game",
    description:
      "Classic Snake game built with vanilla JavaScript, featuring score tracking, difficulty levels, and responsive design for all screen sizes.",
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: "https://github.com/Mekdelawit-21/Mekdelawit-21-SnakeGame-In-Javascript",
  },

  {
    id: 4,
    img: projectImg4,
    title: "Netflix Clone",
    description:
      "Streaming platform clone with React, Firebase backend, and movie API integration. Includes user profiles, content categories, and video playback.",
    skills: [skillsImg1, skillsImg2, skillsImg3, skillsImg4, skillsImg5],
    link: "https://github.com/Mekdelawit-21/Netflix-clone-2025",
  },

  {
    id: 5,
    img: projectImg5,
    title: "Hotel Booking System",
    description:
      "Full-featured reservation system with React frontend and Node.js backend. Includes room selection, date picker, payment processing, and admin dashboard.",
    skills: [
      skillsImg1,
      skillsImg2,
      skillsImg3,
      skillsImg4,
      skillsImg5,
      skillsImg11,
    ],
    link: "https://github.com/Mekdelawit-21/hotel-booking",
  },

  {
    id: 6,
    img: projectImg6,
    title: "Aday Software Logo",
    description:
      "Professional logo design for tech startup, combining modern aesthetics with technical symbolism. Created using vector graphics for versatile application.",
    skills: [skillsImg6, skillsImg7],
    link: logoImage,
  },
];

export const themes = [
  {
    img: Theme1,
    hue: "4",
  },

  {
    img: Theme2,
    hue: "271",
  },

  {
    img: Theme3,
    hue: "225",
  },

  {
    img: Theme4,
    hue: "339",
  },

  {
    img: Theme5,
    hue: "80",
  },

  {
    img: Theme6,
    hue: "19",
  },

  {
    img: Theme7,
    hue: "42",
  },
];




