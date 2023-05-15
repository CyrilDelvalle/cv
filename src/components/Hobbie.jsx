import React from 'react'

const Hobbie = ({ name, elements }) => {
    return (
        <div className="mb-2 flex text-base text-gray-900 dark:text-white">
            <p><label className='font-bold'>{name}</label> : <label className='italic'>{elements}</label></p>
        </div>

    )
}

export default Hobbie