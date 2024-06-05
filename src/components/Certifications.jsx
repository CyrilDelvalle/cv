import React from "react";

function Certifications() {
  return (
    <div className="w-full pl-2">
      <h3 className="text-xl mb-4 text-center font-bold dark:text-white">
        CERTIFICATIONS
      </h3>
      <div className="flex flex-col gap-2 items-center justify-center">
        <img
          className="w-16 h-16"
          src={require("../assets/certif-scrum.png")}
          alt="profile"
        />
        <p className="flex items-center mb-1 text-base font-semibold text-gray-900 dark:text-white">
          SCRUM
        </p>
      </div>
    </div>
  );
}

export default Certifications;
