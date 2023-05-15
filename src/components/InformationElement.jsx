import React from "react";

const Displayed = ({ element }) => {
  return typeof element === "object" ? (
    <div>
      {element.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </div>
  ) : (
    <div>{element}</div>
  );
};

const InformationElement = ({ element, icon }) => {
  return (
    <div className="inline-flex gap-4 relative items-center py-2 px-3 w-full text-sm font-medium rounded-t-lg border-b border-gray-800 dark:border-gray-600">
      {icon}
      <Displayed element={element} />
    </div>
  );
};

export default InformationElement;
