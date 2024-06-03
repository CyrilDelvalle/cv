import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiCss3,
  SiStyledcomponents,
  SiFastify,
} from "react-icons/si";
import { GiAtomicSlashes } from "react-icons/gi";

const variants = [
  {
    id: 1,
    name: "react",
    display: "React",
    logo: <SiReact />,
    className:
      "h-6 dark:bg-sky-600 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 2,
    name: "nodejs",
    display: "NodeJS",
    logo: <SiNodedotjs />,
    className:
      "h-6 dark:bg-lime-700 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 3,
    name: "javascript",
    display: "JS",
    logo: <SiJavascript />,
    className:
      "h-6 dark:bg-yellow-600 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 4,
    name: "typescript",
    display: "TS",
    logo: <SiTypescript />,
    className:
      "h-6 dark:bg-sky-700 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 5,
    name: "nextjs",
    display: "NextJS",
    logo: <SiNextdotjs />,
    className:
      "h-6 dark:bg-slate-800 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 6,
    name: "csharp",
    display: "C#",
    logo: <SiCsharp />,
    className:
      "h-6 dark:bg-purple-900 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 7,
    name: "css",
    display: "CSS",
    logo: <SiCss3 />,
    className:
      "h-6 dark:bg-sky-500 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 8,
    name: "styledComponent",
    display: "Styled component",
    logo: <SiStyledcomponents />,
    className:
      "h-6 dark:bg-pink-500 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 9,
    name: "atomicDesign",
    display: "Atomic design",
    textColor: "text-orange-500",
    logo: <GiAtomicSlashes />,
    className:
      "h-6 dark:bg-orange-500 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 10,
    name: "fastify",
    display: "Fastify",
    logo: <SiFastify />,
    className:
      "h-6 dark:bg-slate-800 dark:text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
];

const Tags = ({ skills }) => {
  const tags = skills.map((skill) =>
    variants.find(({ name }) => name === skill)
  );

  return (
    <div className="flex flex-wrap justify-end h-auto gap-1 ml-auto w-3/6">
      {tags.map(({ display, logo, className }, index) => {
        return (
          <span key={"Tags-" + index} className={className}>
            {logo}
            <h1 className="text-sm font-bold">{display}</h1>
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
