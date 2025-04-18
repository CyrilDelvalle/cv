import React from "react";
import { MdSchool } from "react-icons/md";

const Diploma = ({ name, speciality, startDate, endDate, localisation }) => {
  return (
    <li className="mb-8 ml-6">
      <span className="flex absolute -left-4 justify-center items-center w-8 h-8 rounded-full bg-emerald-700">
        <MdSchool color="#fff" size="1.1em" />
      </span>
      <div className="flex">
        <div className="w-full">
          <div className="flex">
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <div className="w-2" />
            <h3 className="flex items-center italic mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300">
              {speciality}
            </h3>
            <div className="w-2" />
            <div className="my-1 text-base font-normal text-gray-700 dark:text-gray-400">
              {localisation}
            </div>
          </div>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
            {startDate + " - " + endDate}
          </time>
        </div>
      </div>
    </li>
  );
};

export default Diploma;
