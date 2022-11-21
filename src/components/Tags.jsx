import React from 'react'
import { SiJavascript, SiTypescript, SiCsharp, SiReact, SiNodedotjs, SiNextdotjs, SiCss3, SiStyledcomponents } from "react-icons/si"

const variants = [{
    id: 1,
    name: 'react',
    display: "React",
    textColor: "text-sky-500",
    logo: <SiReact color='#0ea5e9' />
}, {
    id: 2,
    name: 'nodejs',
    display: "NodeJS",
    textColor: "text-green-600",
    logo: <SiNodedotjs color='#16a34a' />
}, {
    id: 3,
    name: 'javascript',
    display: "JS",
    textColor: "text-amber-400",
    logo: <SiJavascript color='#fbbf24' />
}, {
    id: 4,
    name: 'typescript',
    display: "TS",
    textColor: "text-white",
    logo: <SiTypescript color='#fff' />
}, {
    id: 5,
    name: 'nextjs',
    display: "NextJS",
    textColor: "text-slate-200",
    logo: <SiNextdotjs color='#e2e8f0' />
}, {
    id: 6,
    name: 'csharp',
    display: "C#",
    textColor: "text-purple-500",
    logo: <SiCsharp color='#a855f7' />
}, {
    id: 7,
    name: 'css',
    display: "CSS",
    textColor: "text-blue-500",
    logo: <SiCss3 color='#3b82f6' />
}, {
    id: 8,
    name: 'styledComponent',
    display: 'Styled component',
    textColor: 'text-pink-500',
    logo: <SiStyledcomponents color='#ec4899' />
}]

const Tags = ({ skills }) => {
    const tags = skills.map((skill) => variants.find((variant) => variant.name === skill))

    return (
        <div className='flex flex-wrap justify-end h-auto gap-1 ml-auto w-2/6'>
            {
                tags.map(({ display, logo, textColor }, index) => {
                    return (
                        <span key={'Tags-' + index} className="h-5 bg-gray-100 text-gray-800 gap-2 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                            {logo}
                            <div className={textColor}>{display}</div>
                        </span>
                    )
                })
            }
        </div >
    )
}

export default Tags