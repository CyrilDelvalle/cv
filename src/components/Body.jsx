import React from "react";
import ProfessionalExpericences from "./ProfessionalExpericences";
import Informations from "./Informations";
import Skills from "./Skills";
import Diplomas from "./Diplomas";
import Books from "./Books";
import PersonnalProjects from "./PersonnalProjects";
import Separator from "./Separator";

const Body = () => {
  return (
    <div className="flex gap-8 ">
      <div className="w-1/4 pt-8 flex flex-col items-center px-2">
        <Informations />
        <Separator />
        <Skills />
        <Separator />
        <Books />
        <Separator />
        <PersonnalProjects />
      </div>

      <div className="w-3/4">
        <ProfessionalExpericences />
        <Diplomas />

      </div>
    </div>
  );
};

export default Body;
