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
  // { label: "Bio", href: "#bio" },
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
      "Built & maintained cross-platform (iOS/Android) apps with React Native, simplifying vendor onboarding & chat. Implemented Firebase for login, skills & chat, boosting customer satisfaction by 15% through feedback. Crafted user-friendly interfaces with React Navigation (stack & tab).",
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

  // {
  //   icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
  //   name: "React",
  //   experience: "2+ years",
  // },

  // {
  //   icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
  //   name: "Next.js",
  //   experience: "1+ year",
  // },
  // {
  //   icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
  //   name: "MongoDB",
  //   experience: "1.5+ years",
  // },

  // {
  //   icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
  //   name: "Redis",
  //   experience: "1+ year",
  // },
  // {
  //   icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
  //   name: "Node.js",
  //   experience: "2+ years",
  // },
  // {
  //   icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
  //   name: "PostgreSQL",
  //   experience: "1+ year",
  // },
];

export const EXPERIENCES = [
  {
    title: "React Native Developer intern",
    company: "Codek Technologies",
    duration: "April 2024 - June 2024",
    description:
      "Gained hands-on experience with React Native projects using TypeScript. Oversaw and enhanced a continuous React Native project, focusing on stability and optimizing performance.Conducted testing and debugging to ensure high-quality application performance. Assisted in the design and development of RESTful APIs to connect applications to back-end services. Engaged in code reviews, offering valuable feedback to enhance code quality. Collaborated in an Agile setting, participating in daily stand-ups, sprint planning sessions, and retrospectives",
    // description:
    //   "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "React Native Developer (remote)",
    company: "iParagons Technologies",
    duration: "February 2024 - March 2024",
    description:
      "Maintained and updated an ongoing React Native project, ensuring stability and performance. Implemented Google Mobile Ads into the project, enhancing monetization capabilities. Demonstrated strong problem-solving skills and adaptability in a remote working environment. Gained hands-on experience with React Native CLI projects and Android Studio during this two-month engagement.",
    // description:
    //   "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "React Native Developer intern",
    company: "ITS Gujrat ",
    duration: "August 2022 - December 2022",
    description:
      "Developed and maintained mobile applications ( iOS,  Android ) using React Native, streamlining vendor onboarding and customer communication. Leveraged Firebase for user authentication and skill management, enabling direct customer-vendor chat. Implemented a customer feedback system, resulting in 15% improvement in satisfaction scores. Utilized React Navigation (stack, tab) to craft user-friendly interfaces.",
    // description:
    //   "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  // {
  //   degree: "Master of Science in Computer Science",
  //   institution: "Stanford University",
  //   duration: "September 2012 - June 2014",
  //   description:
  //     "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  // },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Lahore",
    duration: "September 2019 - June 2023",
    description:
      "Focused on application development with a strong emphasis on JavaScript. Successfully completed a final year project on 'Autonomous Vehicle'. Demonstrated practical skills through hands-on experience in building web applications.",
    // description:
    //   "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Govt. Science College",
    duration: "September 2017 - June 2019",
    // description:
    //   "Focused on application development with a strong emphasis on JavaScript. Successfully completed a final year project on 'Autonomous Vehicle'. Demonstrated practical skills through hands-on experience in building web applications.",
    // description:
    //   "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/elegent.talha.143/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://www.instagram.com/talhatahir596/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/MuhammadTalhaTahir1",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/muhammad-talha-tahir12/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
