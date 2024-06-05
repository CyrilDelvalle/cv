import React from "react";
import { TbLetterP } from "react-icons/tb";
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
      "h-6 bg-sky-600 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 2,
    name: "nodejs",
    display: "NodeJS",
    logo: <SiNodedotjs />,
    className:
      "h-6 bg-lime-700 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 3,
    name: "javascript",
    display: "JS",
    logo: <SiJavascript />,
    className:
      "h-6 bg-yellow-600 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 4,
    name: "typescript",
    display: "TS",
    logo: <SiTypescript />,
    className:
      "h-6 bg-sky-700 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 5,
    name: "nextjs",
    display: "NextJS",
    logo: <SiNextdotjs />,
    className:
      "h-6 bg-slate-800 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 6,
    name: "csharp",
    display: "C#",
    logo: <SiCsharp />,
    className:
      "h-6 bg-purple-900 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 7,
    name: "css",
    display: "CSS",
    logo: <SiCss3 />,
    className:
      "h-6 bg-sky-500 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 8,
    name: "styledComponent",
    display: "Styled component",
    logo: <SiStyledcomponents />,
    className:
      "h-6 bg-pink-500 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 9,
    name: "atomicDesign",
    display: "Atomic design",
    textColor: "text-orange-500",
    logo: <GiAtomicSlashes />,
    className:
      "h-6 bg-orange-500 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 10,
    name: "fastify",
    display: "Fastify",
    logo: <SiFastify />,
    className:
      "h-6 bg-slate-800 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
  },
  {
    id: 11,
    name: "pandacss",
    display: "Pandacss",
    logo: <TbLetterP />,
    className:
      "h-6 bg-yellow-700 text-gray-200 gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2",
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
            <h1 className="text-base font-bold">{display}</h1>
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
