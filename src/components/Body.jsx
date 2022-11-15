import React from "react";
import ProfessionalExpericences from "./ProfessionalExpericences";
import Informations from "./Informations";

const Body = () => {
  return (
    <div className="flex">
      <div className="bg-blue-400 w-3/4">
        <ProfessionalExpericences />
      </div>
      <div className="bg-emerald-500  w-1/4 h-80">
        <Informations />
      </div>
    </div>
  );
};

export default Body;
