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

const InformationElement = ({ element, icon, isLast }) => {
  const className =
    "inline-flex gap-4 relative items-center py-2 px-3 w-full text-sm font-medium rounded-t-lg border-gray-800 dark:border-gray-600";
  const classNameBordered =
    "inline-flex gap-4 relative items-center py-2 px-3 w-full text-sm font-medium rounded-t-lg border-b border-gray-800 dark:border-gray-600";

  return (
    <div className={isLast ? className : classNameBordered}>
      {icon}
      <Displayed element={element} />
    </div>
  );
};

export default InformationElement;
