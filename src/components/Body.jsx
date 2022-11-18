import React from "react";
import ProfessionalExpericences from "./ProfessionalExpericences";
import Informations from "./Informations";
import Skills from "./Skills";
import Diplomas from "./Diplomas";

const Body = () => {
  return (
    <div className="flex gap-8 ">
      <div className="w-1/4 flex flex-col gap-2 items-center px-2">
        <Informations />
        <div className="h-px w-3/4 bg-white " />
        <Skills />
      </div>

      <div className="w-3/4">
        <ProfessionalExpericences />
        <Diplomas />
      </div>
    </div>
  );
};

export default Body;
