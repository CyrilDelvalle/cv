import React from "react";

const InformationElement = ({ element, icon }) => {
  return (
    <div className="flex gap-2 my-2">
      <img
        className="w-8 h-8"
        src={require("../assets/" + icon + ".png")}
        alt="profile"
      />
      {element}
    </div>
  );
};

export default InformationElement;
