import React from "react";

const Book = ({ name, writter }) => {
  return (
    <div className="flex justify-between">
      <h3 className="flex items-center mb-1 text-base font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <h3 className="flex items-center italic mb-1 text-base text-right font-semibold text-gray-900 dark:text-slate-300">
        {writter}
      </h3>
    </div>
  );
};

export default Book;
