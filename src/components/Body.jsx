import React from "react";
import ProfessionalExpericences from "./ProfessionalExpericences";
import Informations from "./Informations";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="flex gap-8">
      <div className="w-1/4 flex flex-col gap-2">
        <Informations />
        <Skills />
      </div>
      <div className="w-3/4">
        <ProfessionalExpericences />
      </div>
    </div>
  );
};

export default Body;
