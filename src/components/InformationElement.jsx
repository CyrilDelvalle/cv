import React from "react";

const InformationElement = ({ element, icon }) => {
  return (
    <div className="inline-flex gap-4 relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 dark:border-gray-600">
      {icon}
      {element}
    </div>
  );
};

export default InformationElement;
