import React from "react";
import infos from "../data/Infos.json";
import InformationElement from "./InformationElement";
import Title from "./Title";

const { birthDate, phone, address, mail, car, language } = infos;

const Informations = () => {
  return (
    <div>
      <Title title="INFORMATIONS" />
      <table className="mt-2">
        <tbody>
          <InformationElement icon="gateau" element={birthDate} />
          <InformationElement icon="address" element={address} />
          <InformationElement icon="phone" element={phone} />
          <InformationElement icon="mail" element={mail} />
          <InformationElement icon="car" element={car} />
          <InformationElement icon="language" element={language} />
        </tbody>
      </table>
    </div>
  );
};

export default Informations;
