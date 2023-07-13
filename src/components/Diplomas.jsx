import React from "react";
import diplomas from "../data/diplomas.json";
import Diploma from "./Diploma";

const Diplomas = () => {
  return (
    <div>
      <div> </div>
      <h3 className="text-2xl text-center font-bold dark:text-white mb-6">
        FORMATIONS
      </h3>
      <ol className="relative border-l border-gray-200 dark:border-gray-400">
        {diplomas.map((diploma, index) => {
          return <Diploma key={index} {...diploma} />;
        })}
      </ol>
    </div>
  );
};

export default Diplomas;
