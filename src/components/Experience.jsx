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
        logo: <GiCastle color='#fff' />
    },
    {
        id: "hyperspread",
        logo: <FaStoreAlt color='#fff' />
    },
    {
        id: "actronika",
        logo: <FaFingerprint color='#fff' />
    },
    {
        id: "csn",
        logo: <SlEnergy color='#fff' />
    },
    {
        id: "phenix",
        logo: <BiInfinite color='#fff' />
    },
    {
        id: "veepee",
        logo: <HiShoppingCart color='#fff' />
    }];

    return (
        <li className="mb-10 ml-6">
            <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-emerald-500">
                {logoSociety.find((logoSociety) => logoSociety.id === id).logo}
            </span>
            <div className='flex'>
                <div className='w-4/6'>
                    <div className='flex'>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{society}</h3>
                        <div className='w-2' />
                        <h3 className="flex items-center italic mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300">{jobTitle}</h3>
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                        {startDate + " - " + endDate + ' (' + duration + ')'}
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