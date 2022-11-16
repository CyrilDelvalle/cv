import React from "react";
import infos from "../data/Infos.json";
import { FaBirthdayCake } from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { AiFillCar } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import InformationElement from "./InformationElement";
import Title from "./Title";

const { birthDate, phone, address, mail, car, language } = infos;

const Informations = () => {
  return (
    <div>
      <Title title="INFORMATIONS" />
      <table className="mt-2">
        <tbody>
          <InformationElement icon={<FaBirthdayCake />} element={birthDate} />
          <InformationElement icon={<RiMapPin2Fill />} element={address} />
          <InformationElement icon={<BsFillTelephoneFill />} element={phone} />
          <InformationElement icon={<SiMaildotru />} element={mail} />
          <InformationElement icon={<AiFillCar />} element={car} />
          <InformationElement icon={<FaLanguage />} element={language} />
        </tbody>
      </table>
    </div>
  );
};

export default Informations;
