import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiReact,
  SiNodedotjs,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <h3 className="text-xl mb-4 text-center font-bold text-gray-900 dark:text-white whitespace-nowrap">
        COMPETENCES TECHNIQUES
      </h3>
      <table className="ml-2 mt-2 w-full">
        <tbody className="w-full">
          <tr>
            <td className="pt-2 inline-flex gap-2 text-gray-900 text-sm font-medium dark:text-white">
              <SiJavascript size={20} color="#fbbf24" />
              JS
            </td>
            <td className="w-40">
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pt-2 inline-flex gap-2 text-sm font-medium text-black dark:text-white">
              <SiTypescript size={20} color="#3b82f6" />
              TS
            </td>
            <td>
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pt-2 inline-flex gap-2 text-sm font-medium text-black dark:text-white">
              <SiReact size={20} color="#0ea5e9" />
              React
            </td>
            <td>
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pt-2 inline-flex gap-2 text-sm font-medium text-black dark:text-white">
              <SiNextdotjs size={20} color="#e2e8f0" />
              Next JS
            </td>
            <td>
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pt-2 inline-flex gap-2 text-sm font-medium text-black dark:text-white">
              <SiCss3 size={20} color="#3b82f6" />
              CSS
            </td>
            <td>
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pt-2 inline-flex gap-2 text-sm font-medium text-black dark:text-white">
              <SiTailwindcss size={20} color="#0ea5e9" />
              Tailwind
            </td>
            <td>
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pt-2 inline-flex gap-2 text-sm font-medium text-black dark:text-white">
              <SiNodedotjs size={20} color="#16a34a" />
              NodeJS
            </td>
            <td>
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pt-2 inline-flex gap-2 text-sm font-medium text-black dark:text-white">
              <SiCsharp size={20} color="#a855f7" />
              C#
            </td>
            <td>
              <div className="my-2 h-4 bg-gray-300 rounded dark:bg-gray-700 mr-2">
                <div
                  className="h-4 bg-emerald-700 rounded"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
