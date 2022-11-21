import React from 'react'

function PersonnalProject({ name, description }) {
    return (
        <div className=''>
            <p className="mb-1 text-base text-gray-900 dark:text-white">
                {name + ' : '}
                {description}
            </p>
        </div>
    )
}

export default PersonnalProject