import React from "react";
import PersonnalProject from "./PersonnalProject";
import personnalProjects from "../data/personnalProjects";

const PersonnalProjects = () => {
  return (
    <div className="w-full pl-2">
      <h3 className="text-xl my-2 mb-4 text-center font-bold dark:text-white">
        PROJETS PERSONNELS
      </h3>
      {personnalProjects.map((project, index) => (
        <PersonnalProject key={index} {...project} />
      ))}
    </div>
  );
};

export default PersonnalProjects;
