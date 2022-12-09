import React from 'react'
import { SiJavascript, SiTypescript, SiCsharp, SiReact, SiNodedotjs, SiCss3, SiTailwindcss, SiNextdotjs } from "react-icons/si"

const Skills = () => {
    return (
        <div>
            <h3 className="text-xl mb-4 text-center font-bold dark:text-white">COMPETENCES TECHNIQUES</h3>
            <table className="ml-2 mt-2 w-full">
                <tbody className='w-full'>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiJavascript size={20} color='#fff' />
                            JS
                        </td>
                        <td className='w-40'>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "80%" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiTypescript size={20} color='#fff' />
                            TS
                        </td>
                        <td>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "60%" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiReact size={20} color='#fff' />
                            React
                        </td>
                        <td>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "80%" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiNextdotjs size={20} color='#fff' />
                            Next JS
                        </td>
                        <td>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "65%" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiCss3 size={20} color='#fff' />
                            CSS
                        </td>
                        <td>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "60%" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiTailwindcss size={20} color='#fff' />
                            Tailwind
                        </td>
                        <td>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "60%" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiNodedotjs size={20} color='#fff' />
                            NodeJS
                        </td>
                        <td>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "50%" }}></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiCsharp size={20} color='#fff' />
                            C#
                        </td>
                        <td>
                            <div className="my-2 h-4 bg-gray-200 rounded dark:bg-gray-700 mr-2">
                                <div className="h-4 bg-amber-500 rounded" style={{ width: "50%" }}></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Skills