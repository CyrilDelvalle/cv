import React, { useEffect } from "react";
import infos from "../data/Infos.json";
import { FaSun, FaMoon } from "react-icons/fa";

const { firstName, lastName, objectives, motivation } = infos;

const Header = () => {
  useEffect(() => {
    const lightSwitches = document.getElementsByName("light-switch");
    if (lightSwitches.length > 0) {
      lightSwitches.forEach((lightSwitch, i) => {
        if (localStorage.getItem("dark-mode") === "true") {
          lightSwitch.checked = true;
        }
        lightSwitch.addEventListener("change", () => {
          const { checked } = lightSwitch;
          lightSwitches.forEach((el, n) => {
            if (n !== i) {
              el.checked = checked;
            }
          });
          if (lightSwitch.checked) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark-mode", true);
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("dark-mode", false);
          }
        });
      });
    }
  }, []);
  return (
    <div className="flex flex-row gap-8 w-full h-fit">
      <div
        style={{
          clipPath:
            "polygon(100% 0px, 99% 54%, 38% 100%, -4px 75.00%, 0px 0px)",
        }}
        className="w-96 h-72 mx-4 mt-6"
      >
        <img
          className="w-full h-full"
          src={require("../assets/profil.jpg")}
          alt="profile"
        />
      </div>
      <div
        className="bg-emerald-700 absolute"
        style={{
          top: 254,
          left: 455,
          transform: "rotate(142deg)",
          height: 8,
          width: 200,
        }}
      />
      <div
        className="bg-emerald-700 absolute"
        style={{
          top: 84,
          left: 1278,
          transform: "rotate(40deg)",
          height: 8,
          width: 288,
        }}
      />
      <div className="w-full py-8 flex flex-col justify-between ">
        <h1 className="inline-flex text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {firstName}
          <div className="w-4"></div>
          <mark className="px-2 text-gray-900 dark:text-white bg-emerald-700 rounded">
            {lastName}
          </mark>
          <div className="group w-24 h-full self-baseline ml-auto">
            <label class="items-center gap-1 cursor-pointer light-switch hidden group-hover:inline-flex">
              <FaSun size="0.3em" />
              <input
                type="checkbox"
                name="light-switch"
                className="sr-only peer"
              />
              <div class="light-switch hidden group-hover:block relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <FaMoon size="0.3em" />
            </label>
          </div>
        </h1>
        <p className="mb-4 text-lg italic font-normal lg:text-2xl text-gray-800  dark:text-gray-100">
          {objectives}
        </p>
        <p className="text-lg font-normal text-gray-800 lg:text-xl dark:text-gray-200">
          {motivation}
        </p>
      </div>
    </div>
  );
};

export default Header;
