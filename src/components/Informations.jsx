import React from "react";
import infos from "../data/Infos.json";
import { FaBirthdayCake } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import InformationElement from "./InformationElement";

const { birthDate, address, car, languages } = infos;

const Informations = () => {
  return (
    <div>
      <h3 className="text-xl mb-4 text-center font-bold dark:text-white">
        INFORMATIONS
      </h3>
      <div className="mx-2 text-gray-900 rounded-lg border border-gray-900 dark:border-gray-600 dark:text-white">
        <InformationElement
          icon={<FaBirthdayCake size="1.3em" />}
          element={birthDate}
        />
        <InformationElement
          icon={<RiMapPin2Fill size="1.3em" />}
          element={address}
        />
        <InformationElement icon={<AiFillCar size="1.3em" />} element={car} />
        <InformationElement
          icon={<FaLanguage size="1.3em" />}
          element={languages}
          isLast
        />
      </div>
    </div>
  );
};

export default Informations;
