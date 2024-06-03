import React from "react";
import Tags from "./Tags";

import {
  FaKey,
  FaStoreAlt,
  FaFingerprint,
  FaMagic,
  FaTv,
} from "react-icons/fa";
import { BsFillTrashFill, BsFillLightningChargeFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

const Experience = ({
  id,
  startDate,
  endDate,
  society,
  jobTitle,
  tasks,
  skills,
  duration,
}) => {
  const logoSociety = [
    {
      id: "francetv",
      logo: <FaTv size="1.1em" />,
    },
    {
      id: "acensi",
      logo: <FaKey size="1.1em" />,
    },
    {
      id: "disneyland",
      logo: <FaMagic size="1.1em" />,
    },
    {
      id: "hyperspread",
      logo: <FaStoreAlt size="1.1em" />,
    },
    {
      id: "actronika",
      logo: <FaFingerprint size="1.1em" />,
    },
    {
      id: "csn",
      logo: <BsFillLightningChargeFill size="1.1em" />,
    },
    {
      id: "phenix",
      logo: <BsFillTrashFill size="1.1em" />,
    },
    {
      id: "veepee",
      logo: <HiShoppingCart size="1.1em" />,
    },
  ];

  const durationDisplayed =
    duration !== ""
      ? startDate + " - " + endDate + " (" + duration + ")"
      : startDate;

  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-4 justify-center items-center w-8 h-8 text-white bg-blue-800 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-amber-600">
        {logoSociety.find((logoSociety) => logoSociety.id === id).logo}
      </span>
      <div className="flex">
        <div className="w-3/6">
          <div className="flex">
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {society}
            </h3>
            <div className="w-2" />
            <h3 className="flex items-center italic mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300">
              {jobTitle}
            </h3>
          </div>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
            {durationDisplayed}
          </time>
        </div>
        <Tags skills={skills} />
      </div>
      {tasks.map((task, index) => (
        <p
          key={"task-" + index}
          className="mb-1 text-base font-normal text-gray-500 dark:text-gray-300"
        >
          {task}
        </p>
      ))}
    </li>
  );
};

export default Experience;
