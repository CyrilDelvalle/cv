import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from 'react-icons/tb'
import { SiCsharp } from 'react-icons/si'

const variants = [{
    id: 1,
    name: 'react',
    display: "React",
    textColor: "text-sky-500",
    logo: <FaReact color='#0ea5e9' />
}, {
    id: 2,
    name: 'nodejs',
    display: "Node JS",
    textColor: "text-green-600",
    logo: <FaNodeJs color='#16a34a' />
}, {
    id: 3,
    name: 'javascript',
    display: "Javascript",
    textColor: "text-amber-400",
    logo: <IoLogoJavascript color='#fbbf24' />
}, {
    id: 4,
    name: 'typescript',
    display: "Typecript",
    textColor: "text-blue-800",
    logo: <SiTypescript color='#1e40af' />
}, {
    id: 5,
    name: 'nextjs',
    display: "Next JS",
    textColor: "text-slate-200",
    logo: <TbBrandNextjs color='#e2e8f0' />
}, {
    id: 6,
    name: 'csharp',
    display: "C#",
    textColor: "text-purple-700",
    logo: <SiCsharp color='#7e22ce' />
}]

const Tags = ({ skills }) => {
    const tags = skills.map((skill) => variants.find((variant) => variant.name === skill))

    return (
        <div className='bg-purple-600 flex items-center gap-1 ml-auto'>
            {
                tags.map(({ display, logo, textColor }) => {
                    return (
                        <div className={'bg-zinc-900 py-1 px-2 rounded flex gap-2 items-center border-2 border-slate-400 mr-2'}>
                            {logo}
                            <div className={textColor + ' '}>{display}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tags