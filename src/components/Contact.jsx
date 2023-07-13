import React from "react";
import InformationElement from "./InformationElement";
import contact from "../data/contact";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";

const Contact = () => {
  const { phone, mail, linkedin } = contact;
  return (
    <div>
      <h3 className="text-xl mb-4 text-center font-bold dark:text-white">
        CONTACTS
      </h3>
      <div className="mx-2 text-gray-900 rounded-lg border border-gray-800 dark:border-gray-600 dark:text-white">
        <InformationElement
          icon={<BsFillTelephoneFill size="1.3em" />}
          element={phone}
        />
        <InformationElement
          icon={<SiMaildotru size="1.3em" />}
          element={mail}
        />
        <InformationElement
          icon={<BsLinkedin size="1.3em" />}
          element={linkedin}
        />
      </div>
    </div>
  );
};

export default Contact;
