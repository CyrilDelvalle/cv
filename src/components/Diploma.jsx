import React from 'react'
import { MdSchool } from 'react-icons/md'

const Diploma = ({ name, speciality, startDate, endDate }) => {
    return (
        <li className="mb-10 ml-6">
            <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-emerald-500">
                <MdSchool color='#fff' />
            </span>
            <div className='flex'>
                <div className='w-4/6'>
                    <div className='flex'>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
                        <div className='w-2' />
                        <h3 className="flex items-center italic mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300">{speciality}</h3>
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                        {startDate + " - " + endDate}
                    </time>
                </div>
                {/* <Tags skills={skills} /> */}
            </div>
        </li >
    )
}

export default Diploma