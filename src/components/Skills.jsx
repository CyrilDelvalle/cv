import React from 'react'
import Title from './Title'
import { SiJavascript, SiTypescript, SiCsharp, SiReact, SiNodedotjs, SiCss3, SiTailwindcss, SiNextdotjs } from "react-icons/si"

const Skills = () => {
    return (
        <div>
            <Title title="COMPETENCES TECHNIQUES" />
            <table className="ml-2 mt-2 w-full">
                <tbody className='w-full'>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiJavascript size={20} color='#fff' />
                            JS
                        </td>
                        <td className='w-44'>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "80%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiTypescript size={20} color='#fff' />
                            TS
                        </td>
                        <td>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "60%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiReact size={20} color='#fff' />
                            React
                        </td>
                        <td>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "80%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiNextdotjs size={20} color='#fff' />
                            Next JS
                        </td>
                        <td>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "65%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiCss3 size={20} color='#fff' />
                            CSS
                        </td>
                        <td>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "60%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiTailwindcss size={20} color='#fff' />
                            Tailwind
                        </td>
                        <td>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "60%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiNodedotjs size={20} color='#fff' />
                            NodeJS
                        </td>
                        <td>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "50%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                    <tr>
                        <td class="pt-2 inline-flex gap-2 text-sm font-medium text-blue-600 dark:text-white">
                            <SiCsharp size={20} color='#fff' />
                            C#
                        </td>
                        <td>
                            <div class="my-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
                                <div class="h-5 bg-yellow-400 rounded" style={{ width: "50%" }}></div>
                            </div>
                        </td>
                        {/* <span class="text-sm font-medium text-blue-600 dark:text-white">70%</span> */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Skills