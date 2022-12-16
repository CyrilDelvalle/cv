import React from "react";
import hobbies from "../data/hobbies.json";
import Hobbie from "./Hobbie";

const Hobbies = () => {
  return (
    <div className="w-full pl-2">
      <h3 className="text-xl mb-4 text-center font-bold dark:text-white">
        LOISIRS
      </h3>
      {hobbies.map((hobbie, index) => (
        <Hobbie key={index} {...hobbie} />
      ))}
    </div>
  );
};

export default Hobbies;
