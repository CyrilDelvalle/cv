import React from "react";
import Title from "./Title";
import experiences from '../data/experiences.json'
import Experience from "./Experience";

const ProfessionalExpericences = () => {
  return <div><Title title="EXPERIENCES PROFESSIONNELS" />
    <div className="flex flex-col">
      {
        experiences.map((experience, index) => {
          return (<Experience key={index} {...experience} />)
        })
      }
    </div>
  </div>;
};

export default ProfessionalExpericences;
