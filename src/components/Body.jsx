import React from "react";
import ProfessionalExpericences from "./ProfessionalExpericences";
import Informations from "./Informations";
import Skills from "./Skills";
import Diplomas from "./Diplomas";
import Books from "./Books";
import PersonnalProjects from "./PersonnalProjects";
import Separator from "./Separator";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import Certifications from './Certifications';

const Body = () => {
  return (
    <div className="flex gap-8 ">
      <div className="w-1/4 pt-8 flex flex-col items-center px-2">
        <Informations />
        <Separator />
        <Contact />
        <Separator />
        <Skills />
        <Separator />
        <Certifications />
        <Separator />
        <Books />
        <Separator />
        <PersonnalProjects />
        <Separator />
        <Hobbies />
      </div>

      <div className="w-3/4">
        <ProfessionalExpericences />
        <Diplomas />
      </div>
    </div>
  );
};

export default Body;
