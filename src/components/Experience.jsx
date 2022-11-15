import React from 'react'

const Experience = ({ startDate, endDate, society, jobTitle, tasks, logo, isSquare }) => {
    return (
        <div className='w-full h-full my-4 bg-purple-500'>
            <div className='bg-red-500 flex flex-row justify-between mb-2'>
                <div >
                    <div>{society}</div>
                    <div>{jobTitle}</div>
                </div>
                <div className='bg-yellow-400 text-end'>
                    <div>{startDate}</div>
                    <div>{' - ' + endDate}</div>
                </div>
            </div>
            <div className='bg-pink-600 flex'>
                <div className='w-10/12'>
                    <ul>
                        {tasks.map((task, index) => <ul key={index}>{task}</ul>)}

                    </ul>
                </div>
                <div className='w-2/12 bg-green-800 flex justify-end items-center'>
                    <img className={isSquare ? 'w-24 h-24' : 'w-full h-12'} src={require("../assets/compagny/" + logo + ".png")} alt='compagny' />
                </div>
            </div>
        </div>
    )
}

export default Experience