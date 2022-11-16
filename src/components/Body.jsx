import React from "react";
import ProfessionalExpericences from "./ProfessionalExpericences";
import Informations from "./Informations";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="flex">
      <div className="bg-blue-400 w-3/4">
        <ProfessionalExpericences />
      </div>
      <div className="bg-emerald-500 w-1/4 flex flex-col gap-2">
        <Informations />
        <Skills />
      </div>
    </div>
  );
};

export default Body;
