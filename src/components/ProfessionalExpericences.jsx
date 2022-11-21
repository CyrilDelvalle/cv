import React from "react";
import experiences from '../data/experiences.json'
import Experience from "./Experience";

const ProfessionalExpericences = () => {
  return <div>
    <h3 className="mb-6 text-2xl text-center font-bold dark:text-white">EXPERIENCES PROFESSIONNELS</h3>
    <ol className="relative border-l border-gray-200 dark:border-gray-700 " >
      {
        experiences.map((experience, index) => {
          return (<Experience key={index} {...experience} />)
        })
      }
    </ol>
  </div>;
};

export default ProfessionalExpericences;
