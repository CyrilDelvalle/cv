import React from 'react'
import Tags from './Tags'
import { GiCastle } from 'react-icons/gi'
import { FaStoreAlt, FaFingerprint } from 'react-icons/fa'
import { SlEnergy } from 'react-icons/sl'
import { BiInfinite } from "react-icons/bi"
import { HiShoppingCart } from "react-icons/hi"


const Experience = ({ id, startDate, endDate, society, jobTitle, tasks, skills, duration }) => {
    const logoSociety = [{
        id: "disneyland",
        logo: <GiCastle />
    },
    {
        id: "hyperspread",
        logo: <FaStoreAlt />
    },
    {
        id: "actronika",
        logo: <FaFingerprint />
    },
    {
        id: "csn",
        logo: <SlEnergy />
    },
    {
        id: "phenix",
        logo: <BiInfinite />
    },
    {
        id: "veepee",
        logo: <HiShoppingCart />
    }];

    const durationDisplayed = duration !== "" ? startDate + " - " + endDate + ' (' + duration + ')' : startDate

    return (
        <li className="mb-10 ml-6">
            <span className="flex absolute -left-4 justify-center items-center w-8 h-8 text-white bg-blue-800 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-500">
                {logoSociety.find((logoSociety) => logoSociety.id === id).logo}
            </span>
            <div className='flex'>
                <div className='w-3/6'>
                    <div className='flex'>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{society}</h3>
                        <div className='w-2' />
                        <h3 className="flex items-center italic mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300">{jobTitle}</h3>
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                        {durationDisplayed}
                    </time>
                </div>
                <Tags skills={skills} />
            </div>
            {
                tasks.map((task, index) => <p key={'task-' + index} className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">{task}</p>)
            }
        </li >
    )
}

export default Experience