import React from 'react'

const PersonnalProject = ({ name, description }) => {
    return (
        <div className=''>
            <div className="mb-1 text-base text-gray-900 dark:text-white">
                <p><label className='font-bold'>{name}</label> : {description}</p>
            </div>
        </div>
    )
}

export default PersonnalProject