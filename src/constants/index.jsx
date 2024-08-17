import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiRedux, SiFirebase, SiTypescript } from "react-icons/si";
import { DiRedis, DiJavascript1 } from "react-icons/di";
import { FaNodeJs, FaCogs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai"; // API icon

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Muhammad Talha Tahir",
  greet: "Hello there! 👋🏻",
  description:
    "Highly motivated and results-oriented Software Engineer with 1 year of experience building engaging mobile applications using react native. Proven ability to deliver high-quality features and integrate third-party APIs to enhance functionality.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Fit Fusion",
    description:
      "FitFusion is a mobile application designed to guide users through a comprehensive range of gym exercises, targeting various body parts. Built with React Native, this app offers a seamless and engaging user experience.",
    image: projectImage1,
    githubLink: "https://github.com/MuhammadTalhaTahir1/Fit_Fusion",
  },
  {
    id: 2,
    name: "Weather Wise",
    description:
      "This app offers weather forecasts for cities worldwide. Users can search for locations, view current conditions, and access daily forecasts for the upcoming week in a visually engaging interface.",
    image: projectImage6,
    githubLink: "https://github.com/MuhammadTalhaTahir1/Weather_Wise",
  },
  {
    id: 3,
    name: "Note Hub",
    description:
      "It offers seamless note management with real-time search, notifications, and customizable entries. Built-in AsyncStorage ensures reliable offline support, making NoteHub ideal for users across Android, iOS, and web platforms.",
    image: projectImage3,
    githubLink: "https://github.com/MuhammadTalhaTahir1/Note_Hub",
  },
  {
    id: 4,
    name: "Vender Application",
    description:
      "Built & maintained cross-platform apps with React Native, simplifying vendor onboarding & chat. Implemented Firebase for login, skills & chat, boosting customer satisfaction by 15% through feedback. Crafted user-friendly interfaces with React Navigation",
    image: projectImage2,
    githubLink: "https://github.com/MuhammadTalhaTahir1/Vender-Application",
  },
  {
    id: 5,
    name: "Coffee App UI",
    description:
      "Crafted with React Native, this coffee app UI delivers a seamless user experience for caffeine aficionados. Explore, order, and savor your favorite brews with ease.",
    image: projectImage4,
    githubLink: "https://github.com/MuhammadTalhaTahir1/Coffee-App-UI",
  },
  {
    id: 6,
    name: "Smart Cart",
    description:
      "This Redux Toolkit React Native project lets users add items to a cart, with live totals displayed on the home screen. In the cart, they can remove items or adjust quantities. It demonstrates Redux Toolkit's power in managing cart state effectively",
    image: projectImage5,
    githubLink:
      "https://github.com/MuhammadTalhaTahir1/Redux-Toolkit-SmartCart",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <DiJavascript1 className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1 year",
  },
  {
    icon: <TbBrandReactNative className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React Native",
    experience: "1 year",
  },
  {
    icon: <SiRedux className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Redux Toolkit",
    experience: "1 year",
  },
  {
    icon: <AiOutlineApi className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Third-Party API Integration",
    experience: "1 year",
  },
  {
    icon: <SiFirebase className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Firebase",
    experience: "1 year",
  },
  {
    icon: <FaCogs className="text-4xl text-purple-500 lg:text-5xl" />,
    name: "Formik & Yup",
    experience: "4 months",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "TypeScript",
    experience: "3 months",
  },
];

export const EXPERIENCES = [
  {
    title: "React Native Developer intern",
    company: "Codek Technologies",
    duration: "April 2024 - June 2024",
    description:
      "Gained hands-on experience with React Native projects using TypeScript. Oversaw and enhanced a continuous React Native project, focusing on stability and optimizing performance.Conducted testing and debugging to ensure high-quality application performance. Assisted in the design and development of RESTful APIs to connect applications to back-end services. Engaged in code reviews, offering valuable feedback to enhance code quality. Collaborated in an Agile setting, participating in daily stand-ups, sprint planning sessions, and retrospectives",
  },
  {
    title: "React Native Developer (remote)",
    company: "iParagons Technologies",
    duration: "February 2024 - March 2024",
    description:
      "Maintained and updated an ongoing React Native project, ensuring stability and performance. Implemented Google Mobile Ads into the project, enhancing monetization capabilities. Demonstrated strong problem-solving skills and adaptability in a remote working environment. Gained hands-on experience with React Native CLI projects and Android Studio during this two-month engagement.",
  },
  {
    title: "React Native Developer intern",
    company: "ITS Gujrat ",
    duration: "August 2022 - December 2022",
    description:
      "Developed and maintained mobile applications ( iOS,  Android ) using React Native, streamlining vendor onboarding and customer communication. Leveraged Firebase for user authentication and skill management, enabling direct customer-vendor chat. Implemented a customer feedback system, resulting in 15% improvement in satisfaction scores. Utilized React Navigation (stack, tab) to craft user-friendly interfaces.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Lahore",
    duration: "September 2019 - June 2023",
    description:
      "Focused on  development with a strong emphasis on JavaScript. Successfully completed a final year project on 'Autonomous Vehicle'. Demonstrated practical skills through hands-on experience in building web applications.",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Govt. Science College",
    duration: "September 2017 - June 2019",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/elegent.talha.143/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/talhatahir596/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/MuhammadTalhaTahir1",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/muhammad-talha-tahir12/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
