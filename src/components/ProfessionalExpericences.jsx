import React from "react";
import Title from "./Title";
import experiences from '../data/experiences.json'
import Experience from "./Experience";

const ProfessionalExpericences = () => {
  return <div>
    <Title title="EXPERIENCES PROFESSIONNELS" />
    <ol class="relative border-l border-gray-200 dark:border-gray-700 " >
      {
        experiences.map((experience, index) => {
          return (<Experience key={index} {...experience} />)
        })
      }
    </ol>
  </div>;
};

export default ProfessionalExpericences;
