import React from "react";

const InformationElement = ({ element, icon }) => {
  return (
    <tr className="flex ml-8 gap-2 my-2">
      <td>
        {icon}
      </td>
      <td>{element}</td>
    </tr>
  );
};

export default InformationElement;
