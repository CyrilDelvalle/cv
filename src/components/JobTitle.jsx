import React from "react";

const JobTitle = ({ society, jobTitle }) => {
  return (
    <div>
      <div className="font-medium text-lg leading-4">{society}</div>
      <div>{jobTitle}</div>
    </div>
  );
};

export default JobTitle;
