import { SiNextui } from "react-icons/si";
import { MdWeb } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";

const data = [
  {
    id: 1,
    icon: <MdWeb />,
    title: "Single Page Application (SPA) Development",
    desc: "I build fast, dynamic, and scalable SPAs using React, providing seamless user experiences without full page reloads.",
  },
  {
    id: 2,
    icon: <SiNextui />,
    title: "Responsive UI Development",
    desc: "I create responsive layouts that adapt perfectly across desktops, tablets, and mobile devices using CSS frameworks like Tailwind CSS or custom media queries.",
  },
  {
    id: 3,
    icon: <FaFigma />,
    title: "Design to React Code",
    desc: "I convert Figma, Adobe XD, or Sketch designs into pixel-perfect, reusable React components with clean, modular code.",
  },
  {
    id: 4,
    icon: <MdArchitecture />,
    title: "Component-Based Architecture",
    desc: "I develop modular and reusable UI components using React’s component architecture for better code organization and scalability.",
  },
];

export default data;
