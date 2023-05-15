import React from 'react'

const PersonnalProject = ({ name, description }) => {
    return (
        <div className="flex-row mb-2 text-base text-gray-900 dark:text-white">
            <p><label className='font-bold'>{name}</label> : <label className='italic'> {description}</label></p>
        </div >

    )
}

export default PersonnalProject