import React from "react";

const InformationElement = ({ element, icon }) => {
  return (
    <tr className="flex ml-8 gap-2 my-2">
      <td>
        <img
          className="w-8 h-8"
          src={require("../assets/" + icon + ".png")}
          alt="profile"
        />
      </td>
      <td>{element}</td>
    </tr>
  );
};

export default InformationElement;
